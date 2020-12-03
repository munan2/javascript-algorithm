/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x96n4v/
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-12-04 00:04:32
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 01:11:59
 */

var maxArea = function(height) {
  let length = height.length
  let sum = 0, i = 0
  while (i < length) {
    let j = length - 1
    if (sum[i-1] && sum[i] < sum[i-1]) {
      i++
      break
    } 
    while (j>i) {
      const weight = Math.min(height[i], height[j]) * (j-i)
      if (weight > sum) sum = weight
      j--
    }
    i++
  }
  return sum
};
var maxArea1 = function (height) {
  let max = 0
  for (let i=0, j=height.length-1; i<j;) {
    let minHeight, res
    if (height[i] < height[j]) {
      minHeight = height[i]
      res = minHeight * (j - i)
      i++
    } else {
      minHeight = height[j]
      res = minHeight * (j - i)
      j--
    }
    max = Math.max(max, res)
  }
  return max
}
// const nums = [1,8,6,2,5,4,8,3,7]
const nums = [2,3,10,5,7,8,9]
const res = maxArea1(nums)