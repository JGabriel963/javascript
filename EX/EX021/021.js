const numbers = [2,8,6,3,1,9,5,4, 7]

numbers.sort()

console.log(numbers)

numbers.sort(function (a, b) {
    return b -a
})

console.log(numbers)