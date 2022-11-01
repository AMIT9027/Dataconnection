const min = (arr) => {
    const arrsize = arr.length - 1
    var int_Count = 0
    var l, r, min_sum, sum, min_l, min_r;
    if (arrsize < 2) {
        console.log('====================================');
        console.log("invalid data");
        console.log('====================================');
        return
    }

    min_l = 0;
    min_r1;
    min_sum = arr[0] + arr[1]
    for (l = 0; l < arrsize - 1; l++) {
        for (r = i + 1; l < arrsize; r++) {
            sum = arr[l] + arr[r]
            if (Math.abs(min_sum) > Math.abs(sum)) {

                min_sum = sum
                min_l = l
                min_r = r
            }
        }

    }



}
console.log('====================================');
console.log(arr[min_r], arr[min_l]);
console.log('====================================');
var a = [-23, 12, -35, 45, 20, 36]
min(arr)