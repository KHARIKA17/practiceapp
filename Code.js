function calculate() {
    let Temperature = parseFloat(document.getElementById("TempK").value);
    console.log(typeof totalIn);
        if (Temperature == "") {
        alert("Enter the Temperature");
    }
    document.getElementById("TempC").innerHTML = Temperature-273.15;
    
    return false;

    
}