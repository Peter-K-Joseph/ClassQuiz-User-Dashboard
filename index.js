//System Initialisation
//Contains all the dara in an object form so it's easier to reload the DOM
let userData = {
    Avatar: "laura46",
    Avatar_Image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    Name: {
        first: "Laura",
        last: "Aurora"
    },
    Email: "laura.aurora@runway.com",
    Organisation: "Runway Inc",
    ID: "3e41-85df-8r96-ds25-f87r",
    DarkTheme: false,
    Quizzes: {
        QuizzesData: {
            0: {
                name: "Importance Of Life",
                active: true,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "8e95d4-f565sd0f-as565s-asdd546a",
                response: 15,
                Starttime: {
                    year: 2021,
                    month: 4,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: 2021,
                    month: 5,
                    day: 5,
                    hour: 14,
                    minute: 0
                }
            },
            1: {
                name: "Physics 101",
                active: false,
                participantCount: 10,
                domain: {
                    restricted: true,
                    domain: "christuniversity.in"
                },
                paramID: "asdf5d-asdf546-asdf65-aer66af",
                response: 15,
                Starttime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: 2021,
                    month: 6,
                    day: 5,
                    hour: 0,
                    minute: 0
                }
            },
            2: {
                name: "Startup 101",
                active: false,
                paramID: "asdf5d-asdf546-asdf65-aer66af",
                response: 15,
                domain: {
                    restricted: true,
                    domain: "christuniversity.in"
                },
                Starttime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: 2021,
                    month: 2,
                    day: 5,
                    hour: 14,
                    minute: 0
                }
            },
            3: {
                name: "Chemistry 101",
                active: false,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "asdf5d-asdhjd6-addf65-aer66dg",
                response: 15,
                Starttime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: null,
                    month: null,
                    day: null,
                    hour: null,
                    minute: null
                }
            },
            4: {
                name: "Social Science 101",
                active: true,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "8e95d4-f565shdd-kkd65s-hbdf546a",
                response: 15,
                Starttime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                }
            },
            5: {
                name: "Social Science 101",
                active: true,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "8e95d4-f565shdd-kkd65s-hbdf546a",
                response: 15,
                Starttime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 14,
                    minute: 0
                }
            },
            6: {
                name: "Social Science 101",
                active: true,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "8e95d4-f565shdd-kkd65s-hbdf546a",
                response: 15,
                Starttime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 14,
                    minute: 0
                }
            },
            7: {
                name: "Social Science 101",
                active: true,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "8e95d4-f565shdd-kkd65s-hbdf546a",
                response: 15,
                Starttime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 13,
                    minute: 0
                },
                Endtime: {
                    year: 2021,
                    month: 1,
                    day: 5,
                    hour: 14,
                    minute: 0
                }
            }
        },
        total: 8
    }
};
//Pre Function
function timeFormat(hour, minute) {
    let meridiem;
    (hour >= 12) ? meridiem = "PM" : meridiem = "AM";
    hour %= 12;
    (hour == 0) ? hour = 12 : hour = hour;
    (minute == 0) ? minute = "00" : minute = minute;
    return hour + ":" + minute + " " + meridiem;
}
//Just to load the data in DOM.
//Object by {Element's ID: The data it should represent}
const innerHTMLContent = { emailInSettings: userData.Email, TFA_Mailer: userData.Email, Reset_Mailer: userData.Email, ShowFirstNameInSettingsModal: userData.Name.first, showLastNameInSettingsModal: userData.Name.last, userNameInSettings: "@" + userData.Avatar, userIdentifierInSettings: userData.ID, organisationDisplayInSettings: ((userData.Organisation == "") ? "none" : userData.Organisation) };
//Verification Services checks if the user is legit while performing critical operations. Sends a request to hostIP/api/user?identifier=${userData.ID}
function userVerificationServices() {
    return false;
}
//Converts Server date and time to local date and time
//quizNum = specified quiz number and startTime tells wherter its a start time or end time
function timingFunction(quizNum, startTime) {
    let date;
    if (startTime === true)
        date = new Date(userData.Quizzes.QuizzesData[quizNum].Starttime.year, userData.Quizzes.QuizzesData[quizNum].Starttime.month - 1, userData.Quizzes.QuizzesData[quizNum].Starttime.day, userData.Quizzes.QuizzesData[quizNum].Starttime.hour, userData.Quizzes.QuizzesData[quizNum].Starttime.minute, 0);
    else
        date = new Date(userData.Quizzes.QuizzesData[quizNum].Endtime.year, userData.Quizzes.QuizzesData[quizNum].Endtime.month - 1, userData.Quizzes.QuizzesData[quizNum].Endtime.day, userData.Quizzes.QuizzesData[quizNum].Endtime.hour, userData.Quizzes.QuizzesData[quizNum].Endtime.minute, 0);
    date = date.toString().split(" ");
    return new Date(date[0] + " " + date[1] + " " + date[2] + " " + date[3] + " " + date[4] + " GMT");
}
//Updating Components in DOM
function updateSerices() {
    $("#account_overview_info, #next_up_recents").html("");
    $("#account_overview_info").append('<div class="account container m-0 p-0"><div class="profileImage image" style="background-image: url(' + userData.Avatar_Image + ');"></div><div class="avatarName text-center h4 m-3 p-0 ">@' + userData.Avatar + '</div><div class="profileName text-center m-3 blockquote-footer">' + userData.Name.first + ' ' + userData.Name.last + '</div></div><button class="Logout">Logout</button>');
    document.getElementById("imgContainer").style.backgroundImage = `url(` + userData.Avatar_Image + `)`;
    for (const updateID in innerHTMLContent) {
        document.getElementById(`${updateID}`).innerHTML = `${innerHTMLContent[updateID]}`;
    }
    for (let i = 0; i < userData.Quizzes.total; i++) {
        let dateToDisplay, quizStat, quizStattoDisplay;
        let quizData = userData.Quizzes.QuizzesData[i];
        if (quizData.active === true) {
            quizStattoDisplay = "End Quiz";
            quizStat = "endQuiz";
        }
        else {
            const date = new Date(), init_TimeStart = timingFunction(i, true), init_TimeEnd = timingFunction(i, false);
            if (date >= init_TimeStart && date <= init_TimeEnd) {
                quizStat = "endQuiz";
                quizStattoDisplay = "End Quiz";
                quizData.active = true;
            }
            else {
                quizStat = "startQuiz";
                quizStattoDisplay = "Start Quiz";
                quizData.active = false;
            }
        }
        if (quizData.Endtime.day == null && quizData.Endtime.month == null && quizData.Endtime.year == null) {
            dateToDisplay = "No time limit";
        }
        else if (quizData.Starttime.day === quizData.Endtime.day && quizData.Starttime.month === quizData.Endtime.month && quizData.Starttime.year === quizData.Endtime.year) {
            dateToDisplay = timingFunction(i, true).toDateString() + "<br>" + timeFormat(parseFloat(timingFunction(i, true).toTimeString().split(" ")[0].split(":")[0]), parseFloat(timingFunction(i, true).toTimeString().split(" ")[0].split(":")[1])) + " till " + timeFormat(parseFloat(timingFunction(i, false).toTimeString().split(" ")[0].split(":")[0]), parseFloat(timingFunction(i, false).toTimeString().split(" ")[0].split(":")[1]));
        }
        else {
            dateToDisplay = timingFunction(i, true).toDateString() + "   " + timingFunction(i, true).toString().split("GMT")[0] + " to " + timingFunction(i, false).toString().split("GMT")[0];
        }
        let append = '<div class="col col-4 recents" paramID="' + quizData.paramID + '"><div class="recentQuizContainer w-100 h-100" parentModal="displayActiveQuizDetails"><h1 class="recents h1">' + quizData.name + '</h1><p class="recents p">' + dateToDisplay + '</p></div><button class="recents ' + quizStat + ' quizOptions" JSONid="' + i + '" paramID="' + quizData.paramID + '">' + quizStattoDisplay + '</button></div>';
        $("#next_up_recents").append(append);
        for (let i = 0; i < document.getElementsByClassName("quizOptions").length; i++) {
            document.getElementsByClassName("quizOptions")[i].addEventListener("click", alertMode);
        }
    }
    // setTimeout(updateSerices, 60000);
}
updateSerices();
//End of system init
let paramID; //Parameter ID or quiz_identifier
let setModal; //Used to call modal or alert box to DOM. Classes contain "open-alertBox", "open-fullPage", "open-settings", "show-alert".
//Modal Controller Class Module
class AlertBox {
    constructor(title, content, Call_this_when_accept_pressed, Call_this_when_reject_pressed, Show_this_favicon_in_the_modal, customID, displayAcceptButton, displayRejectButton, value_to_display_in_accept_button, value_to_display_in_reject_button) {
        let icons = {
            alert: `<i class="fas fa-exclamation-triangle activateQuizAlert"></i>`,
            danger: `<i class="fas fa-exclamation-circle activateQuizAlert"></i>`,
            radioactive: `<i class="fas fa-radiation-alt activateQuizAlert"></i>`,
            info: `<i class="fas fa-info-circle activateQuizAlert"></i>`,
            question: `<i class="fas fa-question activateQuizAlert"></i>`
        };
        this.title = title;
        this.content = content;
        this.AcceptButtonFunctionCall = Call_this_when_accept_pressed;
        this.RejectButtonFunctionCall = Call_this_when_reject_pressed;
        switch (Show_this_favicon_in_the_modal) {
            case "alert":
                this.iconOnDisplay = icons.alert;
                break;
            case "danger":
                this.iconOnDisplay = icons.danger;
                break;
            case "radioactive":
                this.iconOnDisplay = icons.radioactive;
                break;
            case "info":
                this.iconOnDisplay = icons.info;
                break;
            case "question":
                this.iconOnDisplay = icons.radioactive;
                break;
            default:
                this.iconOnDisplay = Show_this_favicon_in_the_modal;
                break;
        }
        (customID === null || customID == "") ? this.customModalID = Math.random().toString(16).substr(2, 8) : this.customModalID = customID;
        (displayAcceptButton === null || displayAcceptButton == true) ? this.displayAcceptButton = true : this.displayAcceptButton = false;
        (displayRejectButton === null || displayRejectButton == true) ? this.displayRejectButton = true : this.displayRejectButton = false;
        (value_to_display_in_accept_button === null || value_to_display_in_accept_button == "") ? this.value_to_display_in_accept_button = "Yes" : this.value_to_display_in_accept_button = value_to_display_in_accept_button;
        (value_to_display_in_reject_button === null || value_to_display_in_reject_button == "") ? this.value_to_display_in_reject_button = "No" : this.value_to_display_in_reject_button = value_to_display_in_reject_button;
        this.create();
    }
    closeActiveAlert(IDoftheAlertBox) {
        document.getElementById(IDoftheAlertBox).classList.add("modal-deactive");
        setTimeout(() => {
            $("#" + IDoftheAlertBox).remove();
        }, 250);
    }
    create() {
        if (this.title != "" && this.content != "") {
            let State = { yes: "", no: "" };
            if (this.displayAcceptButton === true)
                State.yes = `<button class="btn btn-success w-4 m-2 me-3" onclick="${this.AcceptButtonFunctionCall}" id="${this.customModalID}_btn-yes">${this.value_to_display_in_accept_button}</button>`;
            if (this.displayRejectButton === true)
                State.no = `<button class="btn btn-danger w-4 m-2 me-3" onclick="${this.RejectButtonFunctionCall}" id="${this.customModalID}_btn-no">${this.value_to_display_in_reject_button}</button>`;
            let alert = `
            <div class="modal-background" id="${this.customModalID}">
                <div class="modal-Onscreen sq-3">
                    <div class="close" id="close${this.customModalID}" parentModal="${this.customModalID}"><i class="fas fa-times"></i></div>
                    <div class="container">
                        <div class="activateQuizAlert">${this.iconOnDisplay}</div>
                        <h3 class="text-center">${this.title}</h3>
                        <p class="text-center lead m-3">${this.content}</p>
                        ${State.no}
                        ${State.yes}
                    </div>
                </div>
            </div>`;
            $("body").append(alert);
            document.getElementById(this.customModalID).style.zIndex = "3";
            document.getElementById(`${this.customModalID}_btn-no`).addEventListener("click", () => {
                this.closeActiveAlert(`${this.customModalID}`);
            });
            document.getElementById(`close${this.customModalID}`).addEventListener("click", () => {
                this.closeActiveAlert(`${this.customModalID}`);
            });
            document.getElementById(`${this.customModalID}_btn-yes`).addEventListener("click", () => {
                this.closeActiveAlert(`${this.customModalID}`);
            });
            console.log(`Alert Box with ID ${this.customModalID} was created. Close Alert Box events will fire once a button is pressed`);
        }
        else {
            console.warn("[nuvie => ALERTBOX] Argument Expects atleast one parameter (title,content)");
        }
    }
    modalID(modalID) {
        throw new Error("Method not implemented.");
    }
}
class ActiveModal {
    //Contrustor Init: Code Loads and saves necessary data about the modal itself
    constructor(modalType, modalID, modalParentClass, modalClose, method, alertBox_title, alertBox_context, alertBox_class) {
        this.modalType = modalType;
        this.modalID = modalID;
        this.modalParentClass = modalParentClass;
        this.modalClose = modalClose;
        this.modalAction(method, alertBox_title, alertBox_context, alertBox_class);
    }
    modalAction(method, alertBox_title, alertBox_context, alertBox_class) {
        switch (method) {
            case "open-fullPage":
                $("#" + this.modalParentClass + "ContainerContent").html(`<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>`);
                $("#" + this.modalParentClass).removeClass("modal-deactive").removeClass("d-none");
                break;
            case "open-settings":
                $("#" + this.modalParentClass).removeClass("modal-deactive, d-none");
                document.getElementsByClassName("selectedNav")[0].classList.remove("selectedNav");
                document.getElementsByClassName("settingOption")[0].classList.add("selectedNav");
                break;
            case "show-alert":
                $("#text_smallAlert").html(alertBox_title);
                $("#smallAlert").addClass("show");
                if (alertBox_class != null) {
                    $("#smallAlert").addClass(alertBox_class);
                    setTimeout(() => {
                        $("#smallAlert").removeClass(alertBox_class);
                    }, 1500);
                }
                setTimeout(() => {
                    $("#smallAlert").removeClass("show");
                }, 1500);
                break;
            default:
                console.warn("Unexpected Parameter: System Expects [close | open-alertBox | open-fullPage]");
                break;
        }
    }
}
//Event Lisetners for Modal closing
//Selected all 
function closeModal(i) {
    let selectedID = document.getElementById(document.getElementsByClassName("close")[i].getAttribute("parentModal"));
    selectedID.classList.add("modal-deactive");
    setTimeout(() => {
        selectedID.classList.add("d-none");
    }, 250);
}
class SettingsUpdate {
    constructor(id, state, moduleAPI, moduleExecutionPoint) {
        this.id = id;
        this.status = state;
        this.moduleName = moduleAPI;
        this.targetExecution = moduleExecutionPoint;
        this.uploadDataToServer(this.id, this.status, this.moduleName, this.targetExecution);
    }
    uploadDataToServer(id, status, moduleName, targetExecution) {
        // Sends A Post Request to server with values = {id = {this.id}, state = {this.state}, API_Name = {this.moduleName}}. 
        // if failed, Show Notification with bg-red
        switch (targetExecution) {
            case "client":
                switch (moduleName) {
                    case "invertColors":
                        if (status == true) {
                            userData.DarkTheme = true;
                            $("button, .image, body, .selectedNav").css("filter", "invert(1)");
                        }
                        else {
                            userData.DarkTheme = false;
                            $(".image, button, .selectedNav, body").css("filter", null);
                        }
                        break;
                    default:
                        break;
                }
                break;
            case "server":
                const value = {
                    id: id,
                    state: status,
                    API_Name: moduleName
                };
                setModal = new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Settings Updated", null, "bg-green");
                break;
            default:
                console.warn("Invalid Execution Point");
                break;
        }
    }
}
//SideNav Setting
//Add eventlistener for settings modal to be opened
document.getElementById("sideNav_settings").addEventListener("click", () => {
    document.getElementById("accountInformation").style.display = "initial";
    setModal = new ActiveModal("Settings Modal", this.id, "account-information-highview", null, "open-settings", null, null, null);
});
//Offline and Online Detection
window.addEventListener('online', function () {
    new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Connecting...", null, "bg-green");
});
window.addEventListener('offline', function () {
    new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Connection Lost", null, "bg-red");
});
//Load Quiz Function.
//Used to load and show selected quiz data to DOM
function loadQuizData() {
    setTimeout(() => {
        document.getElementById("displayActiveQuizDetailsContainerContent").innerHTML = `<div class="text-center">
        <h1 class="display-5"><i style="font-size: 8rem" class="fas fa-ghost"></i><br><br>Aww Snaps! Looks like we just got ghosted</h1><br>
        <p class="lead">An error occurred while connecting to server. Please refresh the browser.<br>[ERR_RESOLUTION: 403]</p>
    </div>`;
    }, 5000);
}
//Navigational Property of SETTINGS 
// Init -> AddEventListener -> Triggers when clicked on a button using class selector -> grabs ID and attributes -> initiates a timed event using Timeout
let settingOption = document.getElementsByClassName("settingOption");
for (let i = 0; i < settingOption.length; i++) {
    settingOption[i].addEventListener("click", settings);
}
function settings() {
    let settingsNavigator = document.getElementsByClassName("settingsNav");
    for (let i = 0; i < settingsNavigator.length; i++) {
        setTimeout(() => {
            $(`#${settingsNavigator[i].id}`).css("display", "none");
        }, 500);
    }
    setTimeout(() => { $(`#${this.getAttribute("trigger")}`).css("display", "initial"); }, 510);
}
function openFunctionModal() {
    setModal = new ActiveModal("Alert Box", this.id, this.getAttribute("parentModal"), null, "open-fullPage", null, null, null);
    loadQuizData();
}
//DISPLAYING ALERTBOX FOR STARTQUIZ AND ENDQUIZ
function alertMode() {
    let cache = ["Heading", "Context", "Function"];
    paramID = this.getAttribute("paramID");
    if (this.classList[1] == "startQuiz") {
        cache[0] = 'Start Quiz?';
        cache[1] = 'Would you like to start the quiz now? Press Yes if you\'d wish to start the quiz';
        cache[2] = `swtichQuizState(true, ${this.getAttribute("jsonid")})`;
    }
    else {
        cache[0] = 'End Quiz?';
        cache[1] = 'Would you like to end the quiz now? Press Yes if you\'d wish to close quiz';
        cache[2] = `swtichQuizState(false, ${this.getAttribute("jsonid")})`;
    }
    new AlertBox(cache[0], cache[1], cache[2], null, "alert", null, true, true, null, null);
}
function swtichQuizState(input, jsonID) {
    console.log(jsonID);
    let currentSelection = userData.Quizzes.QuizzesData[jsonID];
    let currentTime = new Date();
    if (input === true) {
        new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Quiz Started", null, "bg-blue");
        currentSelection.active = true;
        currentSelection.Starttime.day = currentTime.getUTCDate();
        currentSelection.Starttime.month = currentTime.getUTCMonth();
        currentSelection.Starttime.year = currentTime.getUTCFullYear();
        currentSelection.Starttime.hour = currentTime.getUTCHours();
        currentSelection.Starttime.minute = currentTime.getUTCMinutes();
        currentSelection.Endtime.day = null;
        currentSelection.Endtime.month = null;
        currentSelection.Endtime.year = null;
        currentSelection.Endtime.hour = null;
        currentSelection.Endtime.minute = null;
    }
    else {
        new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Quiz Ended", null, "bg-blue");
        currentSelection.active = false;
        currentSelection.Endtime.day = currentTime.getUTCDate();
        currentSelection.Endtime.month = currentTime.getUTCMonth();
        currentSelection.Endtime.year = currentTime.getUTCFullYear();
        currentSelection.Endtime.hour = currentTime.getUTCHours();
        currentSelection.Endtime.minute = currentTime.getUTCMinutes();
    }
    updateSerices(); // Updates DOM data from server Userdata object
}
for (let i = 0; i < document.getElementsByClassName("close").length; i++) {
    document.getElementsByClassName("close")[i].addEventListener("click", () => { closeModal(i); });
}
for (let i = 0; i < document.getElementsByClassName("recentQuizContainer").length; i++) {
    document.getElementsByClassName("recentQuizContainer")[i].addEventListener("click", openFunctionModal);
}
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loadingStat").innerHTML = `Welcome Back, ${userData.Name.first}`;
    }, 100);
    setTimeout(() => {
        document.getElementsByClassName("loader")[0].parentNode.removeChild(document.getElementsByClassName("loader")[0]);
    }, 2000);
};
document.getElementById("del_acc").addEventListener("click", () => {
    new AlertBox("Are you sure?", "This will delete all your data associated to you. You will not be able to access your account nor it's data after that.", delete_acc(), null, "danger", null, true, true, "Confirm and Delete", "Cancel");
});
document.getElementById("reset_acc").addEventListener("click", () => {
    // setModal = new ActiveModal("Full Screen Modal", "activateQuiz", "activateQuiz", null, "open-alertBox", "Are you sure?", "This will reset your account and all the quizes you have made. You will not be able to access those quizzes after that.");
});
function verify_pass() {
    if (1 == 1) {
        if (userVerificationServices() === true) {
            document.getElementById("verify_pass").style.display = "none";
            $("#newPassword_setActive").append('<div class="col"><input type="password" minlength="8" name="" class="password_entry"placeholder="Enter your new password here" value="" id=""></div><div class="col"><input type="password" name="" minlength="8" class="password_entry"placeholder="Repeat your new password here" value="" id=""></div>');
        }
        else
            setModal = new ActiveModal("Full Screen Modal", "smallAlert", "smallAlert", null, "show-alert", "Incorrect Password", null, "bg-red");
    }
}
for (let i = 0; i < document.getElementsByClassName("settingOption").length; i++) {
    let classSelect = document.getElementsByClassName("settingOption");
    classSelect[i].addEventListener("click", () => {
        if (userData.DarkTheme === true)
            document.getElementsByClassName("selectedNav")[0].style.filter = null;
        document.getElementsByClassName("selectedNav")[0].classList.remove("selectedNav");
        classSelect[i].classList.add("selectedNav");
        (userData.DarkTheme === true) ? document.querySelector(".selectedNav").style.filter = "invert(1)" : document.querySelector(".selectedNav").style.filter = null;
    });
}
for (let i = 0; i < document.getElementsByClassName("switch").length; i++) {
    const element = document.getElementsByClassName("switch");
    element[i].addEventListener("change", () => {
        let updateInfo = new SettingsUpdate(element[i].id, element[i].checked, element[i].getAttribute("moduleName"), element[i].getAttribute("moduleExecutionPoint"));
    });
}
document.getElementById("search-index").addEventListener("input", () => {
    let result = [];
    const searchBar = document.getElementById("search-index");
    const searchWrapper = document.getElementsByClassName("search-wrapper")[0];
    if (searchBar.value !== "") {
        searchWrapper.style.display = "relative";
        searchWrapper.style.zIndex = "1";
        setModal = new ActiveModal("Alert Box", this.id, "searchQuiz", null, "open-fullPage", null, null, null);
        $("#searchQuizContainerContent").html('');
        let searchInput = new RegExp(searchBar.value, "i");
        for (let i in userData.Quizzes.QuizzesData) {
            let currentSelection = userData.Quizzes.QuizzesData[i];
            if (currentSelection.name.search(searchInput) != -1) {
                result.push(currentSelection.name);
                let button;
                let domainInfo;
                let timeSpecifier;
                if (currentSelection.Endtime.minute === null && currentSelection.Endtime.hour === null && currentSelection.Endtime.day === null && currentSelection.Endtime.day === null && currentSelection.Endtime.month === null && currentSelection.Endtime.year === null)
                    if (timingFunction(i, true) > new Date())
                        timeSpecifier = `This Quiz has't started yet`;
                    else
                        timeSpecifier = `This Quiz can be accessed by anyone until you decide to end it`;
                else {
                    if (timingFunction(i, true) > new Date())
                        timeSpecifier = `This Quiz has't started yet`;
                    else if (timingFunction(i, false) < new Date())
                        timeSpecifier = `Quiz was completed`;
                    else if (timingFunction(i, false) > new Date() && timingFunction(i, true) < new Date()) {
                        let remainingTime = timingFunction(i, false) - new Date();
                        timeSpecifier = `This quiz is in progress and will complete in <span class="countDownTimer" timeRemaining=${remainingTime}></span>`;
                    }
                }
                (currentSelection.active === true) ? button = `<button class="endQuiz searchIndex">End Quiz</button>` : button = `<button class="startQuiz searchIndex">Start Quiz</button>`;
                (currentSelection.domain.restricted === true) ? domainInfo = `This quiz is restricted to participants whose email ends with ${currentSelection.domain.domain}` : domainInfo = "Anyone with the link can attempt the quiz";
                $("#searchQuizContainerContent").append(`<div class="row nameOfMatch contentCenter"><div class="col-3 searchIndex" style="font-size: 1.5rem">${currentSelection.name}</div><div class="col searchIndex">${domainInfo}<br>${timeSpecifier}</div><div class="col-2 searchIndex">${button}</div></div>`);
            }
        }
        if (result.length == 0) {
            $("#searchQuizContainerContent").css("display", "flex");
            document.getElementById("searchQuizContainerContent").innerHTML = '<div style="text-align: center"><img src="./search-error.svg"><h1 class="display-5">Search couldn\'t find any quizzes</h1></div>';
        }
        else {
            $("#searchQuizContainerContent").css("display", "block");
        }
    }
    else {
        searchBar.style.display = "initial";
        searchWrapper.style.zIndex = "0";
        document.getElementById("closesearchQuiz").click();
    }
});
document.getElementById("goto_createQuiz").addEventListener("click", () => {
    $("#dashboard").fadeOut("fast");
    setTimeout(() => {
        document.getElementById("dashboard").classList.add("d-none");
        document.getElementById("window_for_new_quiz").classList.remove("d-none");
        document.getElementById("goto_createQuiz").classList.add("d-none");
        document.getElementById("goto_mainDash").classList.remove("d-none");
    }, 100);
    new QuizInit();
});
document.getElementById("goto_mainDash").addEventListener("click", () => {
    $("#window_for_new_quiz").addClass("d-none");
    $("#dashboard").removeClass("d-none");
    $("#goto_mainDash").addClass("d-none");
    $("#goto_createQuiz").removeClass("d-none");
    setTimeout(() => {
        $("#dashboard").fadeIn();
    });
});
//Update Timer in at places
function timerToString(value) {
    let givenNum = new Date(value);
    let currentDate = new Date(0);
    let timeSet = [5];
    timeSet[0] = (givenNum.getFullYear() - currentDate.getFullYear());
    timeSet[1] = (givenNum.getMonth() - currentDate.getMonth());
    timeSet[2] = (givenNum.getDate() - currentDate.getDate());
    timeSet[3] = (givenNum.getHours() - currentDate.getHours());
    timeSet[4] = (givenNum.getMinutes() - currentDate.getMinutes());
    timeSet[5] = (givenNum.getSeconds() - currentDate.getSeconds());
    if (timeSet[5] == 1)
        timeSet[5] = "and " + timeSet[5].toString() + " second ";
    else if (timeSet[5] > 1)
        timeSet[5] = "and " + timeSet[5].toString() + " seconds ";
    else {
        timeSet[5] = "";
    }
    if (timeSet[4] == 1)
        timeSet[4] = timeSet[4].toString() + " minute ";
    else if (timeSet[4] > 1)
        timeSet[4] = timeSet[4].toString() + " minutes ";
    else {
        timeSet[3] = timeSet[3] - 1;
        timeSet[4] = 60 + timeSet[4];
        timeSet[4] = timeSet[4].toString() + " minutes ";
    }
    if (timeSet[3] == 1)
        timeSet[3] = timeSet[3].toString() + " hour ";
    else if (timeSet[3] > 1)
        timeSet[3] = timeSet[3].toString() + " hours ";
    else {
        timeSet[2] = timeSet[2] - 1;
        timeSet[3] = 24 + timeSet[3];
        timeSet[3] = timeSet[3].toString() + " hours ";
    }
    if (timeSet[2] == 1)
        timeSet[2] = timeSet[2].toString() + " day ";
    else if (timeSet[2] > 1)
        timeSet[2] = timeSet[2].toString() + " days ";
    if (timeSet[1] == 1)
        timeSet[1] = timeSet[1].toString() + " month ";
    else if (timeSet[1] > 1)
        timeSet[1] = timeSet[1].toString() + " months ";
    else {
        timeSet[1] = "";
    }
    if (timeSet[0] == 1)
        timeSet[0] = timeSet[0] + " year ";
    else if (timeSet[0] > 1)
        timeSet[0] = timeSet[0] + " years ";
    else {
        timeSet[0] = "";
    }
    return timeSet[0] + timeSet[1] + timeSet[2] + timeSet[3] + timeSet[4] + timeSet[5];
}
function timerUpdate() {
    let timerElem = document.getElementsByClassName("countDownTimer");
    for (let i = 0; i < timerElem.length; i++) {
        timerElem[i].innerHTML = timerToString(parseFloat(timerElem[i].getAttribute("timeRemaining")));
        timerElem[i].setAttribute("timeRemaining", (parseFloat(timerElem[i].getAttribute("timeRemaining")) - 1000).toString());
    }
    setTimeout(timerUpdate, 1000);
}
timerUpdate();
function delete_acc() {
    throw new Error("Function not implemented.");
}
//End of timer
class QuizInit {
    constructor() {
        this.nameOfQuiz();
    }
    nameOfQuiz() {
        setTimeout(() => {
            $("#section_newQuizName").removeClass("d-none");
        }, 300);
        document.getElementById("newQuizName").addEventListener("input", () => {
            this.quizDetails["quizName"] = document.getElementById("newQuizName").value;
            if (this.quizDetails["quizName"] != "") {
                $("#name_the_quiz").html(`Name Quiz as ${this.quizDetails["quizName"]}`).prop("disabled", true);
                document.getElementById("name_the_quiz").addEventListener("click", () => {
                    $("#indicator_1").removeClass("selected");
                    $("#indicator_2").addClass("selected");
                    $("#section_newQuizName").addClass("end");
                    setTimeout(() => {
                        $("#section_newQuizName").removeClass("end").addClass("d-none");
                    }, 500);
                });
            }
            else {
                $("#name_the_quiz").html('Type a name').prop("disabled", true);
                $("#indicator_1").addClass("selected");
                $("#indicator_2").removeClass("selected");
            }
        });
    }
}
document.getElementById("start_over").addEventListener("click", () => {
    document.getElementById("newQuizName").value = "";
    $("#name_the_quiz").html("Type a name").prop("disabled", true);
    document.getElementById("indicator_1").classList.add("selected");
    $("#indicator_2, #indicator_3, #indicator_4, #indicator_5").removeClass("selected");
    document.getElementById("section_newQuizName").classList.remove("d-none");
});
