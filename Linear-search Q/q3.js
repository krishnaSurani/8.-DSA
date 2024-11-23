// Remove Duplicates from a Sorted Array
// Given a sorted array, remove the duplicates in-place using the two-pointer technique. You should return the new length of the array after removing duplicates.

// Example:
// Input: [1, 1, 2, 3, 3, 4]
// Output: 4 (The modified array will be [1, 2, 3, 4])

let nums = [1, 1, 2, 3, 3, 4];

let i = 0
for (let a = 0; a < nums.length; a++) {
        if (nums[a] != nums[i]) {

                i++;
                nums[i] = nums[a]

        }
}



console.log(i + 1);
