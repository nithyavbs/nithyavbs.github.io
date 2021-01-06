function genTable(){
    var num = document.getElementById("num").value;
    var rows = document.getElementById("rows").value;
    if (!num || !rows) {
        alert("please enter data");
        return;
    }
    var tab = document.getElementById("tab");
    var i;
    for (i = 1; i <= rows; i++) {
        var newRow = tab.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
            cell1.innerHTML = i;
            cell2.innerHTML = num;
            cell3.innerHTML = i * num;
    }
   
}

//     function genTable() {
//     var n = document.getElementById("num").value;
//     var row = document.getElementById("rows").value;
//     var table = document.getElementById("tab");
//     var tableclr;
//     for (var i = 1; i <= row; i++) {
//         console.log(i);
//         var tr = document.createElement("tr");
        
//         var td1 = document.createElement('td');
//         td1.innerHTML = i;
//         tr.appendChild(td1);
        
//         var td2 = document.createElement('td');
//         td2.innerHTML = n;
//         tr.appendChild(td2);

//         var td3 = document.createElement('td');
//         td3.innerHTML = i*n;
//         tr.appendChild(td3);
        
//         table.appendChild(tr);
//     }
// }