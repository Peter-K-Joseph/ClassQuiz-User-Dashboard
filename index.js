//Pre Function
function timeFormat(hour, minute) {
    let meridiem;
    (hour >= 12) ? meridiem = "PM" : meridiem = "AM";
    hour %= 12;
    (hour == 0) ? hour = 12 : hour = hour;
    (minute == 0) ? minute = "00" : minute = minute;
    return hour + ":" + minute + " " + meridiem;
}
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
                    hour: 13,
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
            6: {
                name: "Social Science 101",
                active: true,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "8e95d4-f565shdd-kkd65s-hbdf546a",
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
            7: {
                name: "Social Science 101",
                active: true,
                participantCount: 10,
                domain: {
                    restricted: false,
                    domain: null
                },
                paramID: "8e95d4-f565shdd-kkd65s-hbdf546a",
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
            }
        },
        total: 8
    }
};
//Just to load the data in DOM.
//Object by {Element's ID: The data it should represent}
const innerHTMLContent = { emailInSettings: userData.Email, TFA_Mailer: userData.Email, Reset_Mailer: userData.Email, ShowFirstNameInSettingsModal: userData.Name.first, showLastNameInSettingsModal: userData.Name.last, userNameInSettings: "@" + userData.Avatar, userIdentifierInSettings: userData.ID, organisationDisplayInSettings: ((userData.Organisation == "") ? "none" : userData.Organisation) };
//Verification Services checks if the user is legit while performing critical operations. Sends a request to hostIP/api/user?identifier=${userData.ID}
function userVerificationServices() {
    return true;
}
//quizNum = specified quiz number and startTime tells wherter its a start time or end time
function timingFunction(quizNum, startTime) {
    if (startTime === true)
        return new Date(userData.Quizzes.QuizzesData[quizNum].Starttime.year, userData.Quizzes.QuizzesData[quizNum].Starttime.month - 1, userData.Quizzes.QuizzesData[quizNum].Starttime.day, userData.Quizzes.QuizzesData[quizNum].Starttime.hour, userData.Quizzes.QuizzesData[quizNum].Starttime.minute, 0);
    else
        return new Date(userData.Quizzes.QuizzesData[quizNum].Endtime.year, userData.Quizzes.QuizzesData[quizNum].Endtime.month - 1, userData.Quizzes.QuizzesData[quizNum].Endtime.day, userData.Quizzes.QuizzesData[quizNum].Endtime.hour, userData.Quizzes.QuizzesData[quizNum].Endtime.minute, 0);
}
//Updating Components in DOM
function updateSerices() {
    $("#account_overview_info").append('<div class="account container m-0 p-0"><div class="profileImage image" style="background-image: url(' + userData.Avatar_Image + ');"></div><div class="avatarName text-center h4 m-3 p-0 ">@' + userData.Avatar + '</div><div class="profileName text-center m-3 blockquote-footer">' + userData.Name.first + ' ' + userData.Name.last + '</div></div><button class="Logout">Logout</button>');
    document.getElementById("imgContainer").style.backgroundImage = `url(` + userData.Avatar_Image + `)`;
    for (const updateID in innerHTMLContent) {
        document.getElementById(`${updateID}`).innerHTML = `${innerHTMLContent[updateID]}`;
    }
    for (let i = 0; i < userData.Quizzes.total; i++) {
        let dateToDisplay;
        let quizData = userData.Quizzes.QuizzesData[i];
        if (quizData.active === true) {
        }
        if (quizData.Endtime.day == null && quizData.Endtime.month == null && quizData.Endtime.year == null) {
            dateToDisplay = "No time limit";
        }
        else if (quizData.Starttime.day === quizData.Endtime.day && quizData.Starttime.month === quizData.Endtime.month && quizData.Starttime.year === quizData.Endtime.year) {
            dateToDisplay = quizData.Starttime.day + "/" + quizData.Starttime.month + 1 + "/" + quizData.Starttime.year;
            if (quizData.Starttime.hour == quizData.Endtime.hour && quizData.Starttime.minute == quizData.Endtime.minute) {
                dateToDisplay = dateToDisplay + "<br>" + timeFormat(quizData.Starttime.hour, quizData.Starttime.minute) + " - " + timeFormat(quizData.Endtime.hour, quizData.Endtime.minute);
            }
        }
        else {
            dateToDisplay = quizData.Starttime.day + "/" + (parseFloat(quizData.Starttime.month) + 1) + "/" + quizData.Starttime.year + " " + timeFormat(quizData.Starttime.hour, quizData.Starttime.minute) + "<br>" + quizData.Endtime.day + "/" + (parseFloat(quizData.Endtime.month) + 1) + "/" + quizData.Endtime.year + " " + timeFormat(quizData.Endtime.hour, quizData.Endtime.minute);
        }
        let append = '<div class="col col-4 recents" paramID="' + quizData.paramID + '"><div class="recentQuizContainer w-100 h-100" parentModal="displayActiveQuizDetails"><h1 class="recents h1">' + quizData.name + '</h1><p class="recents p">' + dateToDisplay + '</p></div><button class="recents ' + (quizData.active ? "endQuiz" : "startQuiz") + ' quizOptions" paramID="' + quizData.paramID + '">' + (quizData.active ? "End Quiz" : "Start Quiz") + '</button></div>';
        $("#next_up_recents").append(append);
    }
}
updateSerices();
//End of system init
let paramID; //Parameter ID or quiz_identifier
let setModal; //Used to call modal or alert box to DOM. Classes contain "open-alertBox", "open-fullPage", "open-settings", "show-alert".
//Modal Controller Class Module
class ActiveModal {
    //Contrustor Init: Code Loads and saves necessary data about the modal itself
    constructor(modalType, modalID, modalParentClass, modalClose, method, alertBox_title, alertBox_context, alertBox_customYesClass, alertBox_customNoClass) {
        this.modalType = modalType;
        this.modalID = modalID;
        this.modalParentClass = modalParentClass;
        this.modalClose = modalClose;
        if (alertBox_customYesClass === null) {
            alertBox_customYesClass == this.modalID + "_btn-yes";
        }
        if (alertBox_customNoClass === null) {
            alertBox_customNoClass == this.modalID + "_btn-no";
        }
        this.alert_btnClass = { Yes: alertBox_customYesClass, No: alertBox_customNoClass };
        this.modalAction(method, alertBox_title, alertBox_context, this.alert_btnClass);
    }
    modalAction(method, alertBox_title, alertBox_context, alert_btnClass) {
        switch (method) {
            case "open-alertBox":
                if (alertBox_title != "" && alertBox_context != "") {
                    document.getElementById(this.modalID).style.zIndex = "3";
                    document.getElementById(this.modalID + "_alertHeading").innerHTML = alertBox_title;
                    document.getElementById(this.modalID + "_alertText").innerHTML = alertBox_context;
                    document.getElementById("activateQuiz").classList.remove("modal-deactive", "d-none");
                }
                else {
                    console.warn("[ALERTBOX-MODAL] Argument Expects atleast one parameter (title,content)");
                }
                document.getElementById("activateQuiz").classList.remove("modal-deactive", "d-none");
                break;
            case "open-fullPage":
                document.getElementById(this.modalParentClass + "ContainerContent").innerHTML = `<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>`;
                document.getElementById(this.modalParentClass).classList.remove("modal-deactive", "d-none");
                break;
            case "open-settings":
                document.getElementById(this.modalParentClass).classList.remove("modal-deactive", "d-none");
                document.getElementsByClassName("selectedNav")[0].classList.remove("selectedNav");
                document.getElementsByClassName("settingOption")[0].classList.add("selectedNav");
                break;
            case "show-alert":
                document.getElementById("text_smallAlert").innerHTML = alertBox_title;
                document.getElementById("smallAlert").classList.add("show");
                if (alert_btnClass.Yes != null) {
                    document.getElementById("smallAlert").classList.add(alert_btnClass.Yes);
                    setTimeout(() => {
                        document.getElementById("smallAlert").classList.remove(alert_btnClass.Yes);
                    }, 1500);
                }
                setTimeout(() => {
                    document.getElementById("smallAlert").classList.remove("show");
                }, 1500);
                break;
            default:
                console.warn("Unexpected Parameter: System Expects [close | open-alertBox | open-fullPage]");
                break;
        }
    }
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
                setModal = new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Settings Updated", null, "bg-green", null);
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
    setModal = new ActiveModal("Settings Modal", this.id, "account-information-highview", null, "open-settings", null, null, null, null);
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
//Event Lisetners for Modal closing
//Selected all 
function closeModal(i) {
    let selectedID;
    switch (i) {
        case 0:
            selectedID = document.getElementById("activateQuiz");
            break;
        default:
            selectedID = document.getElementById(document.getElementsByClassName("close")[i].getAttribute("parentModal"));
            break;
    }
    selectedID.classList.add("modal-deactive");
    setTimeout(() => {
        selectedID.classList.add("d-none");
    }, 250);
}
function openFunctionModal() {
    setModal = new ActiveModal("Alert Box", this.id, this.getAttribute("parentModal"), null, "open-fullPage", null, null, null, null);
    loadQuizData();
}
function alertMode() {
    let cache = ["Heading", "Context"];
    paramID = this.getAttribute("paramID");
    if (this.classList[1] == "startQuiz") {
        cache[0] = 'Start Quiz?';
        cache[1] = 'Would you like to start the quiz now? Press Yes if you\'d wish to start the quiz';
    }
    else {
        cache[0] = 'End Quiz?';
        cache[1] = 'Would you like to end the quiz now? Press Yes if you\'d wish to close quiz';
    }
    setModal = new ActiveModal("Full Screen Modal", "activateQuiz", "activateQuiz", null, "open-alertBox", cache[0], cache[1], null, null);
}
for (let i = 0; i < document.getElementsByClassName("close").length; i++) {
    document.getElementsByClassName("close")[i].addEventListener("click", () => { closeModal(i); });
}
for (let i = 0; i < document.getElementsByClassName("quizOptions").length; i++) {
    document.getElementsByClassName("quizOptions")[i].addEventListener("click", alertMode);
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
    }, 3000);
};
document.getElementById("del_acc").addEventListener("click", () => {
    setModal = new ActiveModal("Full Screen Modal", "activateQuiz", "activateQuiz", null, "open-alertBox", "Are you sure?", "This will delete all your data associated to you. You will not be able to access your account nor it's data after that.", null, null);
});
document.getElementById("reset_acc").addEventListener("click", () => {
    setModal = new ActiveModal("Full Screen Modal", "activateQuiz", "activateQuiz", null, "open-alertBox", "Are you sure?", "This will reset your account and all the quizes you have made. You will not be able to access those quizzes after that.", null, null);
});
function verify_pass() {
    if (1 == 1) {
        if (userVerificationServices() === true) {
            document.getElementById("verify_pass").style.display = "none";
            $("#newPassword_setActive").append('<div class="col"><input type="password" minlength="8" name="" class="password_entry"placeholder="Enter your new password here" value="" id=""></div><div class="col"><input type="password" name="" minlength="8" class="password_entry"placeholder="Repeat your new password here" value="" id=""></div>');
        }
        else
            setModal = new ActiveModal("Full Screen Modal", "smallAlert", "smallAlert", null, "show-alert", "Incorrect Password", null, "bg-red", null);
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
        setModal = new ActiveModal("Alert Box", this.id, "searchQuiz", null, "open-fullPage", null, null, null, null);
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
                (currentSelection.active === true) ? button = `<button class="endQuiz searchIndex">Start Quiz</button>` : button = `<button class="startQuiz searchIndex">End Quiz</button>`;
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
//End of timer
