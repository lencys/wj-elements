import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";

export class CalendarO365 extends WJElement {
    constructor() {
        super();
    }

    async beforeDraw() {
        this.data = await this.service.get("/private/rest/calendar/microsoft/info", null, false);
    }

    draw() {
        let div = document.createElement("div");
        div.id = "accordion";
        div.classList.add("card-group", "horizontal");
        div.innerHTML = this.getHtml(this.data);

        return div;
    }

    getHtml(data = {}) {
        let { logged, status, email, exportPersonalEnabled, exportAbsenceEnabled, importEnabled } = data;
        return `<div class="card card-default">
            <div class="card-header" role="tab" id="headingO365">
                <div class="card-title">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#o365" aria-expanded="false" aria-controls="o365">
                        <svg width="18" viewBox="0 0 53.59 64.356"><path d="M.496 51.609V13.092L34.568.501l18.517 5.925v51.849l-18.517 5.582L.496 51.609l34.072 4.1V10.871l-22.221 5.185v30.369z" fill="#eb3c00"></path></svg> o365 Calendar
                    </a>
                </div>
            </div>
            <div id="o365" class="" role="tabcard" aria-labelledby="headingO365">
                <div class="card-body">
                    <div class="net-signin" ${logged ? "hidden" : ""}>
                        <a href="javascript:void(0);" onclick="window.open('/microsoft/login', 'microsoftSignin', 'width=520,height=750'); return false" id="ms-authorize_button" class="btn p-3 w-100">
                             Prihlásiť sa
                        </a>
                    </div>
                    <div class="net-signout" ${!logged ? "hidden" : ""}>
                        <p id="microsoft-status" class="small hint-text">Stav aplikácie <b>${status}</b></p>
                        <p id="microsoft-email" class="small hint-text">${email ? `<h5><b>${email}</b></h5>` : ""}</p>
                        <p class="d-flex align-items-center">
                            <span class="text-success"></span>
                            <button id="net-signout-btn-o365" class="btn ml-auto">Zakázať</button>
                        </p>
                        <p class="small hint-text">Po odhlasení odberu ak chcete odstránit aplikáciu z vášho účtu, je potrebné navštiviť stránku <a href="http://account.live.com/consent/Manage" target="_blank">http://account.live.com/consent/Manage</a></p>
                        <div class="mb-3">
                            <p>Ktoré udalosti máme pridať do vášho Office Calendar?</p>
                            <div class="form-check">
                                <input type="checkbox" id="calendar-microsoft-absences" name="calendarMicrosoftExportAbsences" value="MICROSOFT_EXPORT_ABSENCES" ${exportAbsenceEnabled ? "checked" : ""}>
                                <label for="calendar-microsoft-absences">
                                    <div class="hint-text small p-0">Všetky schválené absencie vytvorené vo WebJET NET vytvoriť v Office Calendar</div>
                                </label>
                            </div>
        
                            <div class="form-check">
                                <input type="radio" id="calendar-microsoft-export-all" name="calendarMicrosoftExport" value="MICROSOFT_EXPORT_PERSONAL" ${exportPersonalEnabled ? "checked" : ""}>
                                <label for="calendar-microsoft-export-all">
                                    <div class="hint-text small p-0">Všetky PERSONAL udalosti vytvorené vo WebJET NET Calendar vytvoriť v Office Calendar</div>
                                </label>
                            </div>
        
                            <div class="form-check">
                                <input type="radio" id="calendar-microsoft-export-none" name="calendarMicrosoftExport" value="MICROSOFT_EXPORT_NONE" ${!exportPersonalEnabled ? "checked" : ""}>
                                <label for="calendar-microsoft-export-none">
                                    <div class="hint-text small p-0">Nepridávať PERSONAL udalosti do Office Calendar</div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <p>Ktoré udalosti máme importovať z Office Calendar?</p>
                            <div class="form-check">
                                <input type="radio" id="calendar-microsoft-import-all" name="calendarMicrosoftImport" value="MICROSOFT_IMPORT" ${importEnabled ? "checked" : ""}>
                                <label for="calendar-microsoft-import-all">
                                    <div class="hint-text small p-0">Importovať všetky udalosti vytvorené v Office Calendar</div>
                                </label>
                            </div>
                            <div class="form-check">
                                <input type="radio" id="calendar-microsoft-import-none" name="calendarMicrosoftImport" value="MICROSOFT_IMPORT_NONE" ${!importEnabled ? "checked" : ""}>
                                <label for="calendar-microsoft-import-none">
                                    <div class="hint-text small p-0">Neimportovať žiadne udalosti</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    afterDraw() {
        this.querySelector("#net-signout-btn-o365").addEventListener("click", () => {
            this.microsoftLogout();
            this.refresh();
        });
    }

    microsoftLogout() {
        $.get({
            type: "GET",
            url: "/microsoft/logout/",
            async: false,
            error: function (ajaxContext) {
                this.pagescalendar("error", ajaxContext.status + ": Something horribly went wrong :(");
                $("body").removeClass('pending');
            }
        });
    }
}

customElements.define("wj-calendar-o365", CalendarO365);