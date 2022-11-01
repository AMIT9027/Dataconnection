var a = [1, 3, 6, 8]
var b = [55, 3, 6, 5]

for (let i = 0; i < b.length; i++) {
    if (!(a.includes(b[i]))) {
        a.push(b[i])
    }
}

const sortdata = (a) => {
    a.sort((a, b) => {
        return a - b
    })
}
sortdata(a)
console.log('====================================');
console.log(a);
console.log('====================================');