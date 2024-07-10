import { default as WJElement, event } from "../wje-element/element.js";
    import styles from "./styles/styles.css?inline";
    import * as service from "./service/service.js";
    
    /**
     * @summary Orgchart is a custom web component that extends WJElement.
     * @documentation https://elements.webjet.sk/components/Orgchart
     * @status stable
     *  
     * @extends WJElement
     * 
     * @csspart - Styles the element.
     *  
     * @tag wje-orgchart
     * 
     * @example
     * <wje-orgchart></wje-orgchart>
     */
    export default class Orgchart extends WJElement {
        /**
         * Creates an instance of Orgchart.
         *
         * @constructor
         */
        constructor() {
            super();
        }

        className = "Orgchart";


        /**
         * Returns the CSS styles for the component.
         *
         * @static
         * @returns {CSSStyleSheet}
         */
        static get cssStyleSheet() {
            return styles;
        }

        /**
         * Sets up the attributes for the component.
         */
        setupAttributes() {
            this.isShadowRoot = "open";
        }

        /**
         * Draws the component.
         *
         * @param {Object} context - The context for drawing.
         * @param {Object} store - The store for drawing.
         * @param {Object} params - The parameters for drawing.
         * @returns {DocumentFragment}
         */
        draw(context, store, params) {
            let fragment = document.createDocumentFragment();

            let native = document.createElement("div");
            native.setAttribute("part", "native");
            native.classList.add("orgchart");
            native.innerHTML = `<div id="searchArea">
                <form name="SearchForm">
                    <label>
                      Search:
                      <input type="text" placeholder="Search" name="searchText" id="searchText"></label>
                    <label>For:
                    <select name="type">
                      <option value="name" selected="selected">Name</option>
                      <option value="team">Team</option>
                      <option value="title">Job Title</option>
                    </select>
                    </label>
                    <button >Search</button>
                    <div id="searchResults">
                      <div></div>
                    </div>
                </form>
            </div>
            <div id="orgChartView">
                <div class="orgChartViewContainer">
                    <div id="detailView"></div>
                </div>
                <ol class="organizational-chart">
                    <li>
                        <div id="UpToManager"></div>
                        <ol class="organizational-chart" id="root">
                            <li>
                                <div>
                                  <h1>Org Chart</h1>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>`;

            fragment.appendChild(native);

            this.native = native;

            // console.log("CONTEXT 1: ",this.native);

            return fragment;
        }

        /**
         * After Draws the component.
         *
         * @param {Object} context - The context for drawing.
         * @param {Object} store - The store for drawing.
         * @param {Object} params - The parameters for drawing.
         * @returns {DocumentFragment}
         */

        afterDraw(context, store, params) {
            this.orgchartInit();
            this.maxDepth = 3;
            this.lastUnsavedId = null;
            this.lastHash = document.location.hash;
            const LOG_ME = true;

            // setTimeout(() => {
            //
            //     const visitorId = this.getVisitorId();
            //
            //     fetch("https://ipapi.co/json/")
            //       .then(response => response.json())
            //       .then((vistorData0) => {
            //             vistorData.visitorId = visitorId;
            //             vistorData.location = document.location.href;
            //             vistorData.referrer = document.referrer;
            //             vistorData.cookies = document.cookie;
            //             vistorData.language = navigator.language;
            //             vistorData.platform = navigator.platform;
            //             vistorData.userAgent = navigator.userAgent;
            //             vistorData.connectionSpeed = navigator.connectionSpeed;
            //             vistorData.timestamp = new Date();
            //             this.submitForm(vistorData);
            //         }
            //       );
            //
            // }, 10005);
        }

    //     submitForm(logData) {
    //         const sLogData = this.encode(logData);
    //         const sRemoteUrl = "https://acklenx.com/orgchart.png?" + sLogData;
    //         document.getElementById("visitor").src = sRemoteUrl;
    //     }
    //
    //     encode(data) {
    //         return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    //     }

        orgchartInit() {
            // const oStyle = getComputedStyle(document.querySelector( "#UpToManager" ));
            // console.log(oStyle.width);
            // if( oStyle.width !== "400px" ) {
            //     this.maxDepth = 2;
            // }

            this.loadExternalDataset();

            this.loadPerson();
            this.native.querySelector("#searchText").focus();
        }

        loadExternalDataset() {
            let params = new URLSearchParams(window.location.search);
            let sExternalDataUrl = "/demo/assets/data/orgchart.json" || params.get('externalDataUrl'); // 'node'
            if (sExternalDataUrl) {
                var data = this.getData(sExternalDataUrl);
                this.ORGCHART_DATA = JSON.parse(data);
            }
        }

        getData(sUrl = "demo/assets/data/orgchart.json", fCallback) {
            let responseBody = "";
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    responseBody = xhttp.responseText;
                }
            };
            xhttp.open("GET", sUrl, false);
            xhttp.send();
            return responseBody;
        }

        getCookieValue = (name) => (
            document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
        );

        getVisitorId() {
            let visitorId = this.getCookieValue("visitor");
            if (!visitorId) {
                visitorId = "visitor_" + Math.floor(Math.random() * 10000000);
                document.cookie = "visitor=" + visitorId + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Strict; Secure";
            }
            return visitorId;
        }

        htmlTemplate(literals, ...vars) {
            let raw = literals.raw,
              result = '',
              i = 1,
              len = arguments.length,
              str,
              variable;

            while (i < len) {
                str = raw[i - 1];
                variable = vars[i - 1];
                result += str + variable;
                i++;
            }
            result += raw[raw.length - 1];
            return result;
        }

        orgchartRender(data, template) {
            if (!template) {
                return;
            }
            if (typeof data === 'string') {
                // Handle primitive type:
                return template(data);
            } else if (typeof data === 'object' && !Array.isArray(data)) {
                // Handle object:
                console.log("DATA:", data, template(data));
                return template(data);
            } else if (Array.isArray(data)) {
                // Handle array:
                return data.map(item => template(item)).join('');
            }
        }

        upTemplate = (person) => {
            console.log("PERSON:", person);
            return `<div class="manager">${person["Reports To Full Name"]}</div>`;
        }



        loadPerson(person_id, removeFromHistory) {
            // this.showSearch();
            this.native.querySelector("#orgChartView").style.display = "block";

            if (!person_id || !this.ORGCHART_DATA[person_id]) {
                person_id = this.getStartingPersonFromUrl();
                if (!person_id) {
                    person_id = Object.keys(this.ORGCHART_DATA)[0];
                }
            }

            if (!removeFromHistory) {
                document.location.hash = "person=" + person_id;
                this.lastUnsavedId = null;
            } else {
                this.lastUnsavedId = person_id;
            }

            document.title = "OrgChart:" + this.getFullName(person_id);
            this.native.querySelector("#root").innerHTML = this.personTemplate(this.ORGCHART_DATA[person_id]);
            this.native.querySelector("#UpToManager").innerHTML = this.orgchartRender(this.ORGCHART_DATA[person_id], this.upTemplate);
            this.setUpToManagerColor(this.ORGCHART_DATA[person_id]);
            this.lastHash = document.location.hash;

            this.context.querySelector(".manager").addEventListener("click", () => {
                this.makeRoot(person_id);
            });
        }

        setUpToManagerColor(person) {
            const bIsCurrentEmployee = this.isCurrentEmployee(person["Reports To ID"]);
            this.native.querySelector("#UpToManager").classList.remove("survived_true");
            this.native.querySelector("#UpToManager").classList.remove("survived_false");
            this.native.querySelector("#UpToManager").classList.add("survived_" + bIsCurrentEmployee);
        }

        getStartingPersonFromUrl() {
            let startingPerson = null;
            let sUrl = document.location.hash;
            let person_id = sUrl.match(/person=([^&]*)/gi);
            if (person_id && person_id [0]) {
                person_id = person_id[0].replace("person=", "");
                if (this.ORGCHART_DATA[person_id]) {
                    startingPerson = person_id;
                }
            }
            return startingPerson;
        }
    //
    //     hideImage(oImage) {
    //         oImage.style.display = 'none';
    //     }

        initializeLevels(person) {
            if (!person.level) {
                person.level = 1;
            }
            if (person.directs) {
                for (let i = 0; person.directs.length > i; i++) {
                    const directReport = this.ORGCHART_DATA [person.directs[i]];
                    directReport.level = person.level + 1;
                }
            }
            return "";
        }

        makeRoot(person_id, removeFromHistory) {
            if (person_id) {
                let root = this.ORGCHART_DATA[person_id];
                if (root.level === 1) {
                    root = this.ORGCHART_DATA[this.ORGCHART_DATA[person_id].id];
                    if (!root) {
                        root = this.ORGCHART_DATA[person_id];
                    }
                }
                root.level = null;
                this.loadPerson(person_id, removeFromHistory);
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }
        }

        getFullName(person_id) {
            const person = this.ORGCHART_DATA[person_id];
            return (person["Preferred first name"] || person["First name"] || person.name) + " " + person["Last name"];
        }

        getPhotoUrl(person_id, sSizePath) {
            sSizePath = "";  // like: "medium/" or "50x50/" or "thumbnail/"
            return "./photos/" + sSizePath + person_id + ".jpg";
        }

        isCurrentEmployee(person_id) {
            let isCurrentEmployee = true;
            const person = this.ORGCHART_DATA[person_id];
            if (person) {
                const endDate = person["End date"];

                if (endDate) {
                    isCurrentEmployee = false;
                }
            }
            return isCurrentEmployee;
        }

        isContractor(person_id) {
            let isCurrentEmployee = false;
            const person = this.ORGCHART_DATA[person_id];
            const type = person["Employee type"];

            if (type === "Contractor") {
                isCurrentEmployee = true;
            }
            return isCurrentEmployee;
        }

    //     getRole(person) {
    //         let sRole = "";
    //         let sTeam = person["Teams"];
    //         if (person.directs && person.directs.length > 0 && sTeam && sTeam !== "") {
    //             if (sTeam === "CTO Team") {
    //                 sRole = person["Job Title"].replace(/^VP,? /, "");
    //             } else {
    //                 sRole = sTeam;
    //             }
    //         } else {
    //             sRole += person["Job Title"];
    //         }
    //         return sRole;
    //     }

        getRelativeTime(date) {
            const startDate = new Date(date);
            const ago = (new Date() - startDate) / 2629800000; // 2629800000 ms in a month
            let yearsAgo = ago / 12;  // 2629800000 ms in a month
            let sYearsAgo = "";

            if (yearsAgo >= 1) {
                sYearsAgo = Math.floor(yearsAgo) + " Year";
                if (sYearsAgo !== "1 Year") {
                    sYearsAgo += "s";
                }

                let monthsAgo = Math.floor((ago % 12)) + " month";  // 2880000ms in a month

                if (monthsAgo !== "1 month") {
                    monthsAgo += "s";
                }

                sYearsAgo += " " + monthsAgo;
            } else {
                let monthsAgo = (ago % 12);  // 2880000ms in a month
                let sMonthsAgo = Math.floor(monthsAgo) + " month";  // 2880000ms in a month
                if (monthsAgo >= 1) {
                    if (sMonthsAgo !== "1 month") {
                        sMonthsAgo += "s";
                    }
                    sYearsAgo += sMonthsAgo;
                } else {
                    let daysAgo = (new Date() - startDate) / 86400000; // / 8640000ms/day = (1000ms * 60s * 60h * 24d)
                    let sDaysAgo = Math.ceil(daysAgo) + " day";
                    if (sDaysAgo !== "1 day") {
                        sDaysAgo += "s";
                    }
                    sYearsAgo += sDaysAgo;
                }
            }

            return sYearsAgo;
        }
    //
    //     hide() {
    //         document.getElementById('detailView').style.display = "none";
    //     }
    //
    //     showDetails(person_id) {
    //         let oldMaxDepth = this.maxDepth;
    //         this.maxDepth = 1;
    //         document.getElementById('detailView').style.display = "block";
    //         document.getElementById('detailView').innerHTML = this.render(this.ORGCHART_DATA[person_id], personTemplate);
    //         this.maxDepth = oldMaxDepth;
    //     }
    //
    //     search(sText, sType) {
    //         if (sText.length === 0) {
    //             return;
    //         }
    //         const people = this.ORGCHART_DATA;
    //         const searchString = new RegExp(sText, "i");
    //         const oMatches = {};
    //         switch (sType) {
    //             case "name" :
    //                 searchName(searchString);
    //                 break;
    //
    //             case "team" :
    //                 searchTeam(searchString);
    //                 break;
    //
    //             case "title" :
    //                 searchJobTitle(searchString);
    //                 break;
    //         }
    //         showResults();
    //
    //         function showResults() {
    //             document.getElementById("searchResults").innerHTML = "";
    //             for (let person in oMatches) {
    //                 document.getElementById("searchResults").innerHTML += this.render(oMatches [person], searchResultTemplate);
    //             }
    //         }
    //
    //         function searchTeam(searchString) {
    //             let iMatches = 0;
    //
    //             for (const person_id in people) {
    //                 const person = people[person_id];
    //                 if (searchString.test(person["Department"]) || searchString.test(person["Division"]) || searchString.test(person["Teams"])) {
    //                     if (iMatches < 20) {
    //                         iMatches++;
    //                         oMatches[person_id] = person;
    //                     } else {
    //                         break;
    //                     }
    //                 }
    //             }
    //             return iMatches;
    //         }
    //
    //         function searchJobTitle() {
    //             let iMatches = 0;
    //             for (const person_id in people) {
    //                 const person = people[person_id];
    //                 if (searchString.test(person["Job Title"])) {
    //                     if (iMatches < 20) {
    //                         iMatches++;
    //                         oMatches[person_id] = person;
    //                     } else {
    //                         break;
    //                     }
    //                 }
    //             }
    //             return iMatches;
    //         }
    //
    //         function isInList(aList) {
    //             let results = false;
    //             if (aList) {
    //                 for (let i = 0; aList.length > i; i++) {
    //
    //                     const sListItem = aList[i];
    //                     if (searchString.test(sListItem)) {
    //                         results = true;
    //                         break;
    //                     }
    //                 }
    //             }
    //             return results;
    //         }
    //
    //         function searchName() {
    //             let iMatches = 0;
    //             for (const person_id in people) {
    //                 const person = people[person_id];
    //                 if (searchString.test(person["First name"]) ||
    //                   searchString.test(person["Preferred first name"]) ||
    //                   searchString.test(person["Last name"]) ||
    //                   searchString.test(person["id"]) ||
    //                   searchString.test((person["First name"] + " " + person["Last name"])) ||
    //                   searchString.test((person["Preferred first name"] + " " + person["Last name"]))
    //                 ) {
    //                     if (iMatches < 20) {
    //                         iMatches++;
    //                         oMatches[person_id] = person;
    //                     } else {
    //                         break;
    //                     }
    //                 }
    //             }
    //             return iMatches;
    //         }
    //     }
    //
    //     showSearchResults() {
    //         const oSearchResults = document.getElementById('searchResults');
    //         oSearchResults.style.display = 'block';
    //         if (event.keyCode === 13) {
    //             oSearchResults.children[0].onmouseover(null);
    //             this.hideSearchResults();
    //         }
    //     }
    //
    //     previewPerson(person_id) {
    //         const person = this.ORGCHART_DATA[person_id];
    //         if (person) {
    //             this.initializeLevels(person);
    //             this.makeRoot(person.id, true);
    //             this.hide();
    //         }
    //     }
    //
    //     showSearch() {
    //         this.native.getElementById('searchArea').style.display = 'block';
    //     }
    //
    //     hideSearchResults() {
    //         document.getElementById('searchResults').style.display = 'none';
    //         const newHash = "person=" + this.lastUnsavedId;
    //         if (newHash && newHash !== "person=null" && ("#" + newHash) !== (document.location.hash)) {
    //             this.lastHash = "#" + newHash;
    //             document.location.hash = newHash;
    //         }
    //         setTimeout(function() {
    //             document.getElementById('searchResults').style.display = 'none';
    //         }, 10);  // does this need to be async?
    //     }
    //
        personTemplate = (person) => {
            this.htmlTemplate`
            <!--suppress ALL -->
            <li class="topPerson">
            <div id="${this.initializeLevels(person)}"
             class="topPersonDiv manager_${person.directs && person.directs.length > 0}
                 survived_${this.isCurrentEmployee(person.id)}
                 contractor_${this.isContractor(person.id)}
                 ">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th colspan="3" class="center">
                        ${this.getFullName(person.id)}
                    </th>
                </tr>
                <tr>
                    <td colspan="3" class="center" class="center">
                        ${person["Job Title"]}
                    </td>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td rowspan="3" width="1"><img src="${this.getPhotoUrl(person.id, 'medium')}"
                                                   class="largePhoto"
                                                   height="200"
                                                   width="200"
                                                   alt="a photograph of ${this.getFullName(person.id)}"  onerror="this.hideImage(this)"/>
                    </td>
                    <td rowspan="3" width="5%">&nbsp;</td>
                </tr>

                <tr>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td class="left">

                        <div title="${person["Start date"]}">
                            Higher Standards for
                        </div>
                        ${this.getRelativeTime(person["Start date"])}

                        <div>Department:
                            ${person["Department"]}
                        </div>

                        ${person["Division"] ? `
                        <div>Division:
                           ${person["Division"]}
                        </div>` : ``}



                        <div>Email:
                            <a href="mailto:${person.Email}" target="_blank" rel="noreferrer">${person.Email}</a>
                        </div>
                        ${person["Mobile phone"] ? `
                        <div>Phone:
                           ${person["Mobile phone"]}
                        </div>` : ``}
                        <div>Location:
                            ${person["Office Locations"]}
                        </div>



                        <div>&nbsp;</div>


                        <!--												<div>Email</div>-->
                        <!--												<div>Phone</div>-->
                        <!--												<div>Employment Status</div>-->
                        <!--												<div>End Date</div>-->
                        <!--												<div>GitHub</div>-->
                        <!--												<div>Jira</div>-->
                        <!--												<div>OpsGenie</div>-->
                        <!--												<div>Blameless</div>-->


                    </td>

                </tr>
                </tbody>


            </table>


        </div>
        ${person.directs && person.level < this.maxDepth ? `<ol class="level_${person.level}"> ${this.orgchartRender(person.directs.map(person_id => this.ORGCHART_DATA[person_id]), this.nestedPersonTemplate)} </ol>` : ""}
    </li>`;
    }

    // nestedPersonTemplate = ( person ) => {
    //     htmlTemplate`
    //     <!--suppress ALL -->
    //     <li class="nestedPerson">
    //         <div onclick="${this.initializeLevels( person ) };this.makeRoot( '${ person.id }' ); this.hide();"
    //              onmouseover="this.showDetails( '${ person.id }' ); this.hideSearchResults();"
    //              onmouseout="this.hide()"
    //              class="manager_${ person.directs && person.directs.length > 0 }
    //                  survived_${this.isCurrentEmployee( person.id ) }
    //                  contractor_${this.isContractor( person.id ) }
    //                  suppressPointerEvents nestedPersonDiv">
    //
    //             <img src="${this.getPhotoUrl( person.id, '50x50' ) }"
    //                  alt="Small photograph of ${this.getFullName( person.id ) }"
    //                  class="smallPhoto"
    //                  height="50" width="50"
    //                  onerror="this.hideImage(this)"/>
    //
    //             <strong>${this.getFullName( person.id ) }</strong>
    //             <br/>
    //             <span class="jobTitle" title="${ person[ 'Job Title' ] }">${this.getRole( person ) }</span>
    //
    //         </div>
    //         ${ person.directs && person.level < this.maxDepth ? `<ol class="level_${ person.level }"> ${this.render( person.directs.map( person_id => this.ORGCHART_DATA[ person_id ] ), this.nestedPersonTemplate ) } </ol>` : "" }
    //     </li>`;
    // }
    //
    // searchResultTemplate = ( person ) => {
    //     htmlTemplate`
    //     <!--suppress HtmlDeprecatedAttribute -->
    //     <div onmouseover="this.previewPerson( '${ person.id }' )"
    //          class="nestedSearchDiv manager_${ person.directs && person.directs.length > 0 } suppressPointerEvents"
    //          onclick="this.hideSearchResults();">
    //
    //         <img src="${this.getPhotoUrl( person.id, 'thumbnail' ) }"
    //              alt="Small photograph of ${this.getFullName( person.id ) }"
    //              class="smallPhoto"
    //              height="50" width="50" onerror="this.hideImage(this)" />
    //
    //         <strong>${this.getFullName( person.id ) }</strong>
    //         <br/>
    //         <span class="jobTitle" >${ person[ "Job Title" ] }</span>
    //     </div>
    //     `;
    // }
}
