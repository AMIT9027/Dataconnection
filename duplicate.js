function findTriplets(nums, sum) {

    nums.sort(function(a, b) { return a - b; });

    let pair = [];

    let set = new Set();

    let triplets = [];


    for (let i = 0; i < nums.length - 2; i++) {

        let j = i + 1;

        let k = nums.length - 1;

        while (j < k) {

            if (nums[i] + nums[j] +
                nums[k] == sum) {


                let str = nums[i] + ":" + nums[j] +
                    ":" + nums[k];

                if (!set.has(str)) {

                    triplets.push(nums[i]);
                    triplets.push(nums[j]);
                    triplets.push(nums[k]);
                    pair.push(triplets);
                    triplets = [];
                    set.add(str);
                }

                j++;

                k--;
            } else if (nums[i] +
                nums[j] +
                nums[k] < sum)
                j++;

            else
                k--;
        }
    }
    return pair;


}

let nums = [12, 3, 6, 1, 6, 9];
let sum = 0;
let triplets = findTriplets(nums, sum);
if (triplets.length != 0) {
    console.log("[");
    for (let i = 0; i < triplets.length; i++) {
        let l = triplets[i];
        console.log("[");
        for (let j = 0; j < l.length; j++) {
            console.log(l[j]);
            if (l.length != j + 1)
                console.log(", ");
        }
        console.log("]");
        if (triplets.length != i + 1)
            console.log(",");
    }
    console.log("]");
} else {
    console.log("No triplets can be formed");
}