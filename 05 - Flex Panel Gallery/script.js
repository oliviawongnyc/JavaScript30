let allPanel = document.querySelectorAll(".panel");

function onClick() {
    //added line for improved CSS readability
    allPanel.forEach((panel) => panel.classList.remove("open"));
    this.classList.toggle('open')
}

function transition(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle('open-active');
    }
}

allPanel.forEach((panel) => panel.addEventListener("click", onClick));
allPanel.forEach((panel) => panel.addEventListener("transitionend", transition));


