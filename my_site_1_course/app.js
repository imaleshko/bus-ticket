function openForm() {
    const form = document.getElementById("messageForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
}

function sendMessage() {
    const message = document.getElementById("messageInput").value;

    if (message === "") {
        alert("Будь ласка, введіть повідомлення перед відправкою.");
        return;
    }
    else {
        alert("Ваше повідомлення відправлено: " + message);
        document.getElementById("messageInput").value = "";
        openForm();
    }
}