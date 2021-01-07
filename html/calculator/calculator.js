
// Will hold values we want to store in memory
let valMemStored = "";
// Stores value we are building
let newVal = "";
//function that display value 
function dis(val) {
    document.getElementById("result").value += val
}

//function that evaluates the digit and return result 
function solve() {
    var x = document.getElementById("result").value
    var y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}
// Store the current value in the entry window
function copyButPress() {
    valMemStored = document.getElementById("result").value;
}

// If a value has been stored paste it in the entry
// window and assign it as the newVal
function pasteButPress() {
    if (valMemStored) {
        document.getElementById("result").value = valMemStored;
        newVal = valMemStored;
    }

}
function memClr() {
    valMemStored = "";
    document.getElementById("result").value = valMemStored;
}
function memAdd() {
   var val= document.getElementById("result").value;
    if (val = '') { return }
    valMemStored += '+' + document.getElementById("result").value;
    valMemStored = eval(valMemStored);
    // eqFlag = true;
    newVal = valMemStored;
    return 0;
}

function memSub() {
   var val= document.getElementById("result").value;
    if (val == '') { return }
    valMemStored += '-' + document.getElementById("result").value;
    valMemStored = eval(valMemStored);
    // eqFlag = true;
    newVal = valMemStored;

}
function memRead() {

    //  document.Calc.Numbers.value='';

    document.getElementById("result").value = valMemStored;
    // eqFlag = true;
}

function memory_c() {
    valMemStored = 0;
    newVal='0'
    // document.Calc.mem_win.value = '0';

}
