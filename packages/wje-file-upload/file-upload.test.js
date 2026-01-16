import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-file-upload.js';

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

    const errorPromise = oneEvent(el, 'file-upload:error');

    el.addFilesToQueue([f1, f2]);

    const ev = await errorPromise;

    expect(ev.detail).to.deep.equal({
      type: 'max-files-exceeded',
      max: el.maxFiles,
      received: 2,
    });

    expect(el._queuedFiles).to.deep.equal([]);
  });

  it('pri počte súborov v limite vyhodí file-upload:files-added a naplní queue', async () => {
    const el = await fixture(
      html`<wje-file-upload max-files="3" auto-process-files="false"></wje-file-upload>`
    );

    const f1 = new File(['a'], 'a.txt', { type: 'text/plain' });
    const f2 = new File(['b'], 'b.txt', { type: 'text/plain' });

    const addedPromise = oneEvent(el, 'file-upload:files-added');

    el.addFilesToQueue([f1, f2]);

    const ev = await addedPromise;

    expect(ev.detail).to.have.length(2);
    expect(ev.detail[0].name).to.equal('a.txt');
    expect(ev.detail[1].name).to.equal('b.txt');

    expect(el._queuedFiles).to.have.length(2);
    expect(el._queuedFiles[0].name).to.equal('a.txt');
    expect(el._queuedFiles[1].name).to.equal('b.txt');
  });

  it('pri autoProcessFiles=true zavolá uploadFunction pre každý súbor a vyhodí file-upload:all-files-uploaded', async () => {
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

    const allUploadedPromise = oneEvent(el, 'file-upload:all-files-uploaded');

    el.addFilesToQueue([f1, f2]);

    const ev = await allUploadedPromise;

    expect(uploadStub.callCount).to.equal(2);
    expect(uploadStub.getCall(0).args[0].name).to.equal('a.txt');
    expect(uploadStub.getCall(1).args[0].name).to.equal('b.txt');

    expect(ev.detail).to.have.length(2);
    expect(ev.detail[0]).to.deep.include({ name: 'a.txt', uploaded: true });
    expect(ev.detail[1]).to.deep.include({ name: 'b.txt', uploaded: true });

    expect(el._queuedFiles).to.deep.equal([]);
  });

  it('resetFormState vyčistí fileList slot wrapper', async () => {
    const el = await fixture(html`<wje-file-upload></wje-file-upload>`);

    el.fileList.textContent = 'test';

    el.resetFormState();

    expect(el.fileList.textContent).to.equal('');
  });
});