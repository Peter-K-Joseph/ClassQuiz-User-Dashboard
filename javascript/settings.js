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
                            document.documentElement.setAttribute('data-theme', 'dark');
                        }
                        else {
                            userData.DarkTheme = false;
                            document.documentElement.setAttribute('data-theme', 'light');
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
    $(".settingsNav").css("display", "none");
    $("#accountInformation").css("display", "initial");
    setModal = new ActiveModal("Settings Modal", this.id, "account-information-highview", null, "open-settings", null, null, null);
});
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
//Offline and Online Detection
window.addEventListener('online', function () {
    new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Connecting...", null, "bg-green");
});
window.addEventListener('offline', function () {
    new ActiveModal("Alert Box", "smallAlert", "smallAlert", null, "show-alert", "Connection Lost", null, "bg-red");
});
//Reset Account
document.getElementById("del_acc").addEventListener("click", () => {
    new AlertBox("Delete Account", "Are you sure that you want to delete your account?<br><span style='color: red'>You will need to create a new account to use this service<br></span>", null, null, "radioactive", null, true, true, "Reset", "Abort");
});
document.getElementById("reset_acc").addEventListener("click", () => {
    new AlertBox("Reset Account", "Are you sure that you want to reset your account?<br><span style='color: red'>You will loose access to all your quiz data</span>", null, null, "danger", null, true, true, "Reset", "Abort");
});
