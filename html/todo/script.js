
function addItem() {
    var li = document.createElement("li"); 
    var ul = document.querySelector("ul");
    var new_item = document.getElementById("newItem").value
    // creates an element "li"
	li.appendChild(document.createTextNode(new_item));
    ul.appendChild(li); //adds li to ul
    document.getElementById("newItem").value=""; //Reset text input field
   	var del_button = document.createElement("button");
	del_button.appendChild(document.createTextNode("X"));
    li.appendChild(del_button);
    del_button.onclick = function (){ 
     var div = this.parentElement;
     div.parentNode.removeChild(div);
    }
}

