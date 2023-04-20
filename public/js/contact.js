function submitContact(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let school = document.getElementById("school").value;
    let countyIndx = document.getElementById('county').options.selectedIndex;
    let county = document.getElementById('county').options[countyIndx];
    let message = document.getElementById("subject").value;

    console.log("hello")

}