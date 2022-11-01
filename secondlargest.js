let a = [1, 3, 4, 2, 8, 6]
let temp
for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {

        temp = a[i + 1]
        a[i + 1] = a[i]
        a[i] = temp
    }
}
console.log("secondlargest number", a[a.length - 2])