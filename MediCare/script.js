function openTab(tabName) {
    const tabContents = document.getElementsByClassName("tabcontent");
    for (let tabContent of tabContents) {
        tabContent.style.display = "none";
    }

    const tabLinks = document.getElementsByClassName("tablinks");
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

function nextTab(nextTabName) {
    openTab(nextTabName);
    showMessage("Step completed successfully!");
}

function usePreFilledAddress() {
    document.getElementById("address").value = "123 Main St";
    document.getElementById("city").value = "Cityville";
    document.getElementById("state").value = "Stateville";
    document.getElementById("zip").value = "12345";
    showMessage("Pre-filled address used.");
}

function placeOrder() {
    showMessage("Order placed successfully!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showMessage(message) {
    const feedbacks = document.getElementsByClassName("feedback");
    for (let feedback of feedbacks) {
        feedback.textContent = message;
    }
}
