function toggleSettings() {
    var settingsContainer = document.getElementById("settingsContainer");
    if (settingsContainer.style.display === "none") {
        settingsContainer.style.display = "block";
        updateTimePlayed(); 
    } else {
        settingsContainer.style.display = "none";
    }
}

function changeBackgroundColor() {
    var bgColorPicker = document.getElementById("backgroundColorPicker");
    if (bgColorPicker.style.display === "none") {
        bgColorPicker.style.display = "block";
    } else {
        bgColorPicker.style.display = "none";
    }
}

function applyBackgroundColor() {
    var newColor = document.getElementById("bgColorPicker").value;
    document.body.style.backgroundColor = newColor;
    var bgColorPicker = document.getElementById("backgroundColorPicker");
    bgColorPicker.style.display = "none";
}

function showSidebarColorPicker() {
    var sidebarColorPicker = document.getElementById("sidebarColorPicker");
    if (sidebarColorPicker.style.display === "none") {
        sidebarColorPicker.style.display = "block";
    } else {
        sidebarColorPicker.style.display = "none";
    }
}

function applySidebarAndCodeContainerColor() {
    var newColor = document.getElementById("sidebarColorPickerInput").value;
    var sidebar = document.getElementById("sidebar");
    var codeContainer = document.getElementById("codeContainer");
    sidebar.style.backgroundColor = newColor;
    codeContainer.style.backgroundColor = newColor;
    var sidebarColorPicker = document.getElementById("sidebarColorPicker");
    sidebarColorPicker.style.display = "none";
}
