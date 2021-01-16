
function addItem() {
    var li = document.createElement("li");
    var ul = document.querySelector("ul");
    var new_item = document.getElementById("newItem").value
    if (new_item == "") {
        alert("Item Should Not Be Empty!");
    }
    else {
        // Duplicates check
        var elem = document.getElementsByTagName("li");
        for (var i = 0; i < elem.length; i++) {
            // var remDel = elem[i].innerHTML.substr(-18);
            var currentValue = elem[i].innerHTML;
            console.log(currentValue);
            if (currentValue.includes(new_item)) {
                // Found
                alert("Item Already In List!");
                return;
            }
        }
        // // creates an element "li"
        li.appendChild(document.createTextNode(new_item));
        ul.appendChild(li); //adds li to ul
        document.getElementById("newItem").value = "";
        //Reset text input field
        var mark_button = document.createElement("button")
        // mark_button.setAttribute("type","checkbox");
        // var li=document.getElementsByTagName("li")[0];
        mark_button.appendChild(document.createTextNode("\u2713"));
        li.appendChild(mark_button);
        mark_button.onclick = function () {
            var div = document.querySelector("li");
            div.style.setProperty('text-decoration', 'line-through');
            // div.classlist.toggle('checked');

        }
    }
    var del_button = document.createElement("button");
    del_button.appendChild(document.createTextNode("X"));
    li.appendChild(del_button);
    del_button.onclick = function () {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
    }
}







