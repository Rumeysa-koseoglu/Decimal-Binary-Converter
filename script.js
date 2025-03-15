let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in the decimal field
decInp.addEventListener("input", () => {
    //Get the decimal number entered by the user as an integer
    let decValue = parseInt(decInp.value);
    //Converts the decimal value to binary
    binInp.value = decValue.toString(2);
});

//Convert binary to decimal when user inputs in the binary field
binInp.addEventListener("input", () => {
    //Take the value entered by the user and assign it to the binValue variable
    let binValue = binInp.value;
    //If the binary number is valid, convert it to decimal
    if (binValidator(binValue)) {
        //convert binary number to decimal number
        decInp.value = parseInt(binValue, 2);
        //if there is an error message , clear it
        errorMsg.textContent = "";
    }
    //Else display an error message
    else {
        errorMsg.textContent = "Please enter a valid binary input"
    }

    //Function to check if the binary number is valid
    //  i.e it does not contain any number other than 0 and 1
    function binValidator(num) {
        //check binary string letter by letter
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "0" && num[i] != "1") {
                //if there is a number other than 0 and 1 -> return false, meaning is valid
                return false;
            }
        }
        //if it contains only 0 and 1 -> return true, i.e it is valid
        return true;
    }
});