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
//Event Lisetners for Modal closing
//Selected all 
function closeModal(i) {
    let selectedID = document.getElementById(document.getElementsByClassName("close")[i].getAttribute("parentModal"));
    console.log(selectedID);
    $(selectedID).addClass("modal-deactive");
    setTimeout(() => {
        $(selectedID).addClass("d-none").removeClass("modal-deactive");
    }, 250);
}
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
