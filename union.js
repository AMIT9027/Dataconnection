let a = [1, 82, 2]
let b = [18, 9]
let temp
let c = [...a, ...b]


const sortdata = (c) => {
    c.sort((a, b) => {
        return a - b
    })
}
sortdata(c)

console.log('====================================');
console.log(c);
console.log('====================================');