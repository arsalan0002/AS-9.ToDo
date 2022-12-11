var main = document.getElementById('main');
var input = document.getElementById('inp');
// console.log(input)
function add() {
    // console.log(inp.value);
    if (input.value == "") {
        alert("Please Type Something!");
    } else {
        var li = document.createElement("li"); // creating list
        var liText = document.createTextNode(input.value); //creating list text
        li.appendChild(liText);
        //para.setAttribute("onclick" , "abc()");

        //creating edit Button
        var editBtn = document.createElement("BUTTON");
        var editBtnText = document.createTextNode("EDIT Todo");
        editBtn.appendChild(editBtnText);
        editBtn.setAttribute("onclick", "editTodo(this)");
        li.appendChild(editBtn);


        //Creating delete Button

        var deleteBtn = document.createElement("BUTTON");

        var deleteBtnText = document.createTextNode("Delete Button");

        deleteBtn.appendChild(deleteBtnText);

        deleteBtn.setAttribute("onclick", "deleteTodo(this)");

        li.appendChild(deleteBtn);

        main.appendChild(li);

        input.value = ""; //

    }
}
function editTodo(element) {
    var newValue = prompt('enter Value')
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newValue;
}

function deleteTodo(element) {
    element.parentNode.remove();
    console.log();

}

function eraseAll() {

    main.innerHTML = "";

}