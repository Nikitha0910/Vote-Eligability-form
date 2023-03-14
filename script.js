
function voteValidation() {
    var name = document.querySelector("#fname").value
    var lname = document.querySelector("#lname").value
    var age = document.querySelector("#age").value
    if (age >= 18) {
        alert(name + " " + lname + " " + 'is eligable to vote in the year 2023')
    } else {
        alert(name + " " + lname + " " + 'is not eligable to vote this year')
    }
}