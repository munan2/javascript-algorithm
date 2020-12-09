/*
 * https://leetcode-cn.com/leetbook/read/array-and-string/cxqdh/
 * @Description: 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-12-09 22:31:04
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-09 22:39:58
 */
var searchInsert = function(nums, target) {
  let index = 0
  for (let i = 0; i<nums.length; i++) {
    if (target > nums[i]) {
      index++
    } else if (target === nums[i]) {
      return i
    } else {
      return index
    }
  }
  return index
};

const arr = [1,3,5,6], target = 0
res = searchInsert(arr, target)
console.log('res', res)