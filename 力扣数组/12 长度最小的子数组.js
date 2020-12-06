/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x9gogt/
 * @Description: 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，
 * 找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 * 示例：
 * 输入：s = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-12-04 23:38:33
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-06 21:27:18
 */
var minSubArrayLen = function(s, nums) {
  let minLength = Infinity
  let i = 0, j = 0, sum = 0
  while(j < nums.length) {
    sum += nums[j]
    while (sum >= s) {
      minLength = Math.min(minLength, j - i + 1)
      sum -= nums[i]
      i++
    }
    j++ 
  }
  return minLength === Infinity ? 0 : minLength
};

const s = 7
const nums = [2,3,1,2,4,3]
const res = minSubArrayLen(s, nums)
console.log('res', res)
/**
 * sum 0 
 * sum 2
 * sum 5
 * sum 6
 */