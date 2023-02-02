const car1 = prompt("Enter the name of the car 1: ")
const v1 = prompt("Enter tha speed: ")
const car2 = prompt("Enter the name of the car 2: ")
const v2 = prompt("Enter the speed: ")
const vel1 = parseInt(v1)
const vel2 = parseInt(v2)
if (vel1 > vel2) {
    alert(`Car ${car1} is too fast`)
} else if (vel1 < vel2) {
    alert(`Car ${car2} is too fast`)
} else {
    alert("Both are too fast.")
}