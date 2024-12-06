const list = document.querySelector("#itemList");
const input = document.querySelector("#item");
const addbutton = document.querySelector("#addbutton");

const additem = () => {
    itemvalue = input.value;
    if (itemvalue.trim() === "") {
        alert("Please enter an item.");
        return;
    }

    input.value = "";

    const listitem = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.textContent = itemvalue;
    deleteButton.textContent = "Delete this item";

    listitem.appendChild(span);
    listitem.appendChild(deleteButton);

    list.appendChild(listitem);

    deleteButton.addEventListener("click", () =>{
        itemList.removeChild(listitem);
    });

    input.focus();
};

addbutton.addEventListener("click", additem);

