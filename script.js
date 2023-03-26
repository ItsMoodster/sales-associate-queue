document.getElementById("addName").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        addToList(name, "waitingQueue");
    }
    document.getElementById("nameInput").value = "";
});

function addToList(name, listId) {
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");
    listItem.innerText = name;
    listItem.addEventListener("click", function() {
        if (listId === "waitingQueue") {
            addToList(name, "currentlyWith");
        } else {
            addToList(name, "waitingQueue");
        }
        list.removeChild(listItem);
    });
    list.appendChild(listItem);
}
