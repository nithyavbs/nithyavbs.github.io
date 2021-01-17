
function addItem() {
    var new_item = document.getElementById("newItem").value;
    var count = document.getElementById("count").value;
    var description = document.getElementById("details").value;
    var clearButton = document.getElementById("clear");
    // var lists=document.getElementsByID("lists").value;
    var item = new Object();
    item.name = document.getElementById("newItem").value;
    item.count = document.getElementById("count").value;
    item.description = document.getElementById("details").value;
    var myItem = JSON.stringify(item);
    var itemObj = JSON.parse(myItem);
    console.log(itemObj);
    var li = document.createElement("li");
    var ul = document.querySelector("ul");
    var ultodo = document.getElementById("todos");
    var list2=document.getElementById("list2").value;
     if ((new_item=="")){
       
        alert("Item Should Not Be Empty!");
    
    } else {
        if (count == "") {
            alert("Item COunt Should Not Be Empty!");
            // // creates an element "li"
            return true;
        }
        if(description == ""){
            alert("Item Description Should Not Be Empty!");
            // // creates an element "li"
            return true;
        }

        var text = JSON.stringify(itemObj.name) + JSON.stringify(itemObj.count) + JSON.stringify(itemObj.description);
        //li.innerhtml=text;
        text1 = text.replace(/"/g, " ");
        // text1.style.setProperty('text-paddind:2px')

        li.appendChild(document.createTextNode(text1));
        ul.appendChild(li); //adds li to ul
        document.getElementById("newItem").value = "";
        document.getElementById("details").value = "";
        document.getElementById("count").value = "";
   
    var mark_button = document.createElement("button");
    mark_button.appendChild(document.createTextNode("\u2713"));
    li.appendChild(mark_button);
    mark_button.onclick = function () {
        var div=this.parentElement;
        //var div = document.querySelector("li");
       div.parentNode.removeChild(div);
        var cln=div.cloneNode(true);
       div.style.setProperty('text-decoration', 'line-through');
       div.style.setProperty('text-decoration-color','darkred');
       var cln=div.cloneNode(true);
       document.getElementById("list2").appendChild(cln);
       //var list=document.getElementsByID("lists").value;
           }
  
        
}
    // for (var i = -1; i < div.parentNode.length; i++) {
        //     div[i].onclick=function () { li.insertLast(this,li.lastElementChild) }
        // //li.appendChild();
        // li.innerHTML=div.value;
    

    var del_button = document.createElement("button");
    del_button.appendChild(document.createTextNode("X"));
    li.appendChild(del_button);
    del_button.onclick = function () {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
}
}
function removeTodo(){
    document.getElementById("list1").innerHTML = "";
    document.getElementById("list2").innerHTML = "";

}