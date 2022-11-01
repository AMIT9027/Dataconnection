const buublesort = (a) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < (a.length - i - 1); j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp

            }
        }
    }

}
var a = [1, 33, 3, 5, 9, 13]
buublesort(a)
console.log(a)