let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in the decimal field
decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    //Converts the decimal value to binary
    binInp.value = decValue.toString(2);
});