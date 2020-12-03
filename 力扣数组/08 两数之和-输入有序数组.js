/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x9i1x6/
 * @Description: 
  给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
  函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

  示例：
  输入: numbers = [2, 7, 11, 15], target = 9
  输出: [1,2]
  解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-12-02 00:30:59
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 00:03:47
 */
var twoSum = function(numbers, target) {
  let length = numbers.length
  for (let i=0, j=length-1; i <= j; ) {
    if (numbers[i] + numbers[j] === target) {
      return [i+1, j+1]
    } else if (numbers[i] + numbers[j] > target) {
      j--
    } else {
      i++
    }
  }
  return null
};
const arr = [2, 7, 11, 15]
const res = twoSum(arr, 9)
console.log('res', res)
