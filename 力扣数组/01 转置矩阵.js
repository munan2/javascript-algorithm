/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-18 22:43:46
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-11-19 11:16:51
 */
// 时间复杂度 O(n*n)
function moveZeros (nums) {
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === 0) {
      j = i + 1
    }
    while (j < nums.length) {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        break
      }
      j++
    }
  }
  return nums
}


// 时间复杂度为O(n)
function moveZeros1 (nums) {
  let index = 0
  for (let i=0, length=nums.length; i<length; i++) {
    if (nums[i] === 0) {
      index ++
    } else {
      if (index > 0) {
        nums[i-index] = nums[i]
        nums[i] = 0
      }
    }
  }
  return nums
}

const a = [0, 1, 2, 0, 4]
const b = [10, -1, 0, 9, 0, 0, 0, 8]
console.log(moveZeros(a))
console.log(moveZeros1(a))

console.log(moveZeros(b))
console.log(moveZeros1(b))


