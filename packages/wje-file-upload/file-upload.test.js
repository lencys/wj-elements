import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-file-upload.js';

function oneEventWithTimeout(target, eventName, timeoutMs = 2000) {
  return Promise.race([
    oneEvent(target, eventName),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timed out waiting for event: ${eventName}`)), timeoutMs)
    ),
  ]);
}

describe('<wje-file-upload>', () => {
  it('renderuje základnú štruktúru (native wrapper, input, slot)', async () => {
    const el = await fixture(html`<wje-file-upload></wje-file-upload>`);

    expect(el.shadowRoot).to.exist;

    const native = el.shadowRoot.querySelector('.native-file-upload');
    expect(native).to.exist;

    const input = native.querySelector('input[type="file"]');
    expect(input).to.exist;
    expect(input.multiple).to.be.true;

    const slotItem = native.querySelector('slot[name="item"]');
    expect(slotItem).to.exist;

    const label = native.querySelector('.file-label');
    expect(label).to.exist;

    const button = native.querySelector('wje-button');
    expect(button).to.exist;
  });

  it('nerenderuje tlačidlo, ak je nastavený atribút no-upload-button', async () => {
    const el = await fixture(html`<wje-file-upload no-upload-button></wje-file-upload>`);

    const native = el.shadowRoot.querySelector('.native-file-upload');
    const button = native.querySelector('wje-button');

    expect(button).to.not.exist;
  });

  it('klik na tlačidlo vyvolá click na input[type=file]', async () => {
    const el = await fixture(html`<wje-file-upload></wje-file-upload>`);
    const native = el.shadowRoot.querySelector('.native-file-upload');

    const input = native.querySelector('input[type="file"]');
    const button = native.querySelector('wje-button');

    const clickSpy = sinon.spy(input, 'click');

    button.click();

    expect(clickSpy.calledOnce).to.be.true;
  });

  it('pri prekročení max-files vyhodí event file-upload:error a nespracuje súbory', async () => {
    const el = await fixture(
      html`<wje-file-upload max-files="1" auto-process-files="false"></wje-file-upload>`
    );

    const f1 = new File(['a'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['b'], 'b.txt', { type: 'text/plain' });

    const errorPromise = oneEventWithTimeout(el, 'wje-file-upload:error');

    el.addFilesToQueue([f1, f2]);

    const ev = await errorPromise;

    expect(ev.detail).to.include({
      code: 'MAX-FILES-EXCEEDED',
      maxFiles: el.maxFiles,
      attemptedToAdd: 2,
    });
    expect(ev.detail.allowedRemaining).to.equal(1);

    expect(el._queuedFiles).to.deep.equal([]);
  });

  it('pri počte súborov v limite vyhodí file-upload:files-added a naplní queue', async () => {
    const el = await fixture(
      html`<wje-file-upload max-files="3" auto-process-files="false"></wje-file-upload>`
    );

    const f1 = new File(['a'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['b'], 'b.txt', { type: 'text/plain' });

    const addedPromise = oneEventWithTimeout(el, 'wje-file-upload:files-added');

    el.addFilesToQueue([f1, f2]);

    const ev = await addedPromise;

    expect(ev.detail).to.have.length(2);
    expect(ev.detail[0].name).to.equal('a.txt');
    expect(ev.detail[1].name).to.equal('b.txt');

    expect(el._queuedFiles).to.have.length(2);
    expect(el._queuedFiles[0].name).to.equal('a.txt');
    expect(el._queuedFiles[1].name).to.equal('b.txt');
  });

  it('pri nepovolenom type vyhodí wje-file-upload:error (INVALID-FILE-TYPE) a nezavolá uploadFunction', async function () {
    this.timeout(6000);

    const el = await fixture(html`
      <wje-file-upload auto-process-files="true" accepted-types="image/png"></wje-file-upload>
    `);

    const f1 = new File(['a'], 'a.txt', { type: 'text/plain' });

    const uploadStub = sinon.stub().resolves({ data: { ok: true } });
    el.uploadFunction = uploadStub;

    const errorPromise = oneEventWithTimeout(el, 'wje-file-upload:error', 4000);

    el.addFilesToQueue([f1]);

    const ev = await errorPromise;

    // detail môže byť Error alebo plain object – testujeme len kód
    const code = ev.detail?.code ?? ev.detail?.detail?.code;
    expect(code).to.equal('INVALID-FILE-TYPE');

    expect(uploadStub.called).to.be.false;
  });

  it('pri prekroceni max-file-size vyhodí wje-file-upload:error (FILE-TOO-LARGE) a nezavolá uploadFunction', async function () {
    this.timeout(6000);

    // max-file-size v komponente porovnáva priamo s File.size (bytes), preto dáme veľmi malý limit
    const el = await fixture(html`
      <wje-file-upload auto-process-files="true" max-file-size="1" accepted-types="text/plain"></wje-file-upload>
    `);

    // komponent interpretuje max-file-size ako MB, takže vytvoríme súbor väčší než 1 MB
    const bigContent = 'a'.repeat(1024 * 1024 + 10);
    const f1 = new File([bigContent], 'big.txt', { type: 'text/plain' });

    const uploadStub = sinon.stub().resolves({ data: { ok: true } });
    el.uploadFunction = uploadStub;

    const errorPromise = oneEventWithTimeout(el, 'wje-file-upload:error', 4000);

    el.addFilesToQueue([f1]);

    const ev = await errorPromise;

    const code = ev.detail?.code ?? ev.detail?.detail?.code;
    expect(code).to.equal('FILE-TOO-LARGE');

    expect(uploadStub.called).to.be.false;
  });

  it('pri povolenom type (accepted-types) nevyhodí error a zavolá uploadFunction (happy path)', async function () {
    this.timeout(8000);

    const el = await fixture(html`
      <wje-file-upload auto-process-files="true" accepted-types="image/png"></wje-file-upload>
    `);

    const f1 = new File(['a'], 'a.png', { type: 'image/png' });

    const uploadStub = sinon.stub().resolves({ data: { name: f1.name, uploaded: true } });
    el.uploadFunction = uploadStub;

    const uploadedPromise = oneEventWithTimeout(el, 'wje-file-upload:files-uploaded', 6000);

    el.addFilesToQueue([f1]);

    const ev = await uploadedPromise;

    expect(uploadStub.calledOnce).to.be.true;
    const names = ev.detail.map((x) => x?.name ?? x?.data?.name ?? x?.file?.name);
    expect(names).to.include('a.png');
  });

  it('pri súbore v limite max-file-size nevyhodí error a upload prebehne', async function () {
    this.timeout(8000);

    // limit 1 MB, vytvoríme menší súbor
    const el = await fixture(html`
      <wje-file-upload auto-process-files="true" max-file-size="1" accepted-types="text/plain"></wje-file-upload>
    `);

    const smallContent = 'a'.repeat(1024 * 10); // ~10 KB
    const f1 = new File([smallContent], 'small.txt', { type: 'text/plain' });

    const uploadStub = sinon.stub().resolves({ data: { name: f1.name, uploaded: true } });
    el.uploadFunction = uploadStub;

    const uploadedPromise = oneEventWithTimeout(el, 'wje-file-upload:files-uploaded', 6000);

    el.addFilesToQueue([f1]);

    const ev = await uploadedPromise;

    expect(uploadStub.calledOnce).to.be.true;
    const names = ev.detail.map((x) => x?.name ?? x?.data?.name ?? x?.file?.name);
    expect(names).to.include('small.txt');
  });

  it('max-files zohľadní aj queued súbory (už niečo čaká v _queuedFiles)', async () => {
    const el = await fixture(
      html`<wje-file-upload max-files="2" auto-process-files="false"></wje-file-upload>`
    );

    const q1 = new File(['1'], 'q1.txt', { type: 'text/plain' });
    el._queuedFiles = [q1];

    const f2 = new File(['2'], 'f2.txt', { type: 'text/plain' });
    const f3 = new File(['3'], 'f3.txt', { type: 'text/plain' });

    // currentCount = 1 (queued) + 0 (uploaded) -> newTotal = 1 + 2 = 3 > 2
    const errorPromise = oneEventWithTimeout(el, 'wje-file-upload:error');

    el.addFilesToQueue([f2, f3]);

    const ev = await errorPromise;

    expect(ev.detail).to.include({
      code: 'MAX-FILES-EXCEEDED',
      maxFiles: el.maxFiles,
      attemptedToAdd: 2,
    });

    // queued sa nemá zmeniť, keďže pridané súbory boli odmietnuté
    expect(el._queuedFiles).to.deep.equal([q1]);
  });

  it('max-files zohľadní aj už nahrané súbory pri postupnom pridávaní po jednom', async () => {
    const el = await fixture(
      html`<wje-file-upload max-files="1" auto-process-files="false"></wje-file-upload>`
    );

    // simulujeme, že už je 1 súbor "nahraný" (stav komponentu)
    const already = new File(['x'], 'already.txt', { type: 'text/plain' });
    el.uploadedFiles = [{ file: already, data: { name: already.name }, item: null }];

    const f2 = new File(['y'], 'second.txt', { type: 'text/plain' });

    const errorPromise = oneEventWithTimeout(el, 'wje-file-upload:error');

    el.addFilesToQueue([f2]);

    const ev = await errorPromise;

    expect(ev.detail).to.include({
      code: 'MAX-FILES-EXCEEDED',
      maxFiles: el.maxFiles,
      attemptedToAdd: 1,
    });

    expect(el._queuedFiles).to.deep.equal([]);
  });

  it('pri zmazaní itemu (wje-file-upload-item:remove) sa zníži uploadedFiles a max-files následne pustí ďalší súbor', async () => {
    const el = await fixture(
      html`<wje-file-upload max-files="1" auto-process-files="false"></wje-file-upload>`
    );

    const f1 = new File(['a'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['b'], 'b.txt', { type: 'text/plain' });

    // simulujeme stav po úspešnom uploade 1 súboru
    el.uploadedFiles = [{ file: f1, data: { name: f1.name }, item: null }];
    expect(el.uploadedFiles).to.have.length(1);

    // remove event – detail je vždy File
    el.dispatchEvent(
      new CustomEvent('wje-file-upload-item:remove', { bubbles: true, composed: true, detail: f1 })
    );

    expect(el.uploadedFiles).to.have.length(0);

    // teraz by mal prejsť ďalší súbor (už nie je prekročený max-files)
    const addedPromise = oneEventWithTimeout(el, 'wje-file-upload:files-added');

    el.addFilesToQueue([f2]);

    const ev = await addedPromise;
    expect(ev.detail).to.have.length(1);
    expect(ev.detail[0].name).to.equal('b.txt');
  });

  it('pri autoProcessFiles=true zavolá uploadFunction pre každý súbor a vyhodí file-upload:files-uploaded', async function () {
    this.timeout(8000);
    const el = await fixture(html`
      <wje-file-upload
        max-files="3"
        auto-process-files="true"
        accepted-types="text/plain"
      ></wje-file-upload>
    `);
    // vypneme vnútornú validáciu typov, v tomto teste nás nezaujíma
    el.assertFilesValid = () => {};

    const f1 = new File(['a'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['b'], 'b.txt', { type: 'text/plain' });

    const uploadStub = sinon.stub().callsFake((file) => {
      return Promise.resolve({ data: { name: file.name, uploaded: true } });
    });

    el.uploadFunction = uploadStub;

    const allUploadedPromise = oneEventWithTimeout(el, 'wje-file-upload:files-uploaded', 6000);

    el.addFilesToQueue([f1, f2]);

    const ev = await allUploadedPromise;

    expect(uploadStub.callCount).to.equal(2);
    expect(uploadStub.getCall(0).args[0].name).to.equal('a.txt');
    expect(uploadStub.getCall(1).args[0].name).to.equal('b.txt');

    expect(ev.detail).to.have.length(2);
    // detail môže obsahovať buď čisté serverové dáta, alebo wrapper objekty – testujeme len, že sa tam objavia naše dáta
    const names = ev.detail.map((x) => x?.name ?? x?.data?.name ?? x?.file?.name);
    expect(names).to.include('a.txt');
    expect(names).to.include('b.txt');

    expect(el._queuedFiles).to.deep.equal([]);
  });

  it('resetFormState vyčistí fileList slot wrapper', async () => {
    const el = await fixture(html`<wje-file-upload></wje-file-upload>`);

    el.fileList.textContent = 'test';

    el.resetFormState();

    expect(el.fileList.textContent).to.equal('');
  });
});