/*
 * https://leetcode-cn.com/leetbook/read/array-and-string/yf47s/
 * @Description: 寻找数组的中心索引
 * 描述：
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
 * 我们是这样定义数组 中心索引 的：
 * 数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。
 * 如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 * 
 * 示例：
 * 输入：
    nums = [1, 7, 3, 6, 5, 6]
    输出：3
    解释：
    索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
    同时, 3 也是第一个符合要求的中心索引。

  思想：
  首先：求得数组和
  然后：从左往后遍历数组，每遍历一个i元素，计算Sum(0-i-1) 以及 Sum(i+1, length-1)的值，做比较
 * @Autor: zhangyan
 * @Date: 2020-12-08 22:04:24
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-08 23:47:02
 */
var pivotIndex = function(nums) {
  let length = nums.length
  let i = 0
  let sum = 0
  while (i < length) {
    sum += nums[i]
    i++
  }
  let leftSum = 0
  let rightSum = 0
  for (let i=0; i < length;) {
    if (i !== 0) {
      leftSum += nums[i-1]
    }
    rightSum = sum - leftSum - nums[i]
    if (leftSum === rightSum) return i
    i++
  }
  return - 1
};
// const arr = [1, 3, 6, 5, 5, 5, 0, 5]
// const arr = [-1,-1,-1,-1,-1,0]
// const arr = [-1,-1,0,-1,-1,0]
const arr = [-1,-1,0,1,1,0]
// const arr = [1,7,3,6,5,6]
const res = pivotIndex(arr)
console.log('res', res)