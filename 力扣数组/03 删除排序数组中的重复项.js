/*
 * @Description: 删除排序数组中的重复项
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，
 * 使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 
 * 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例：
 * 给定数组 nums = [1,1,2], 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 解题思路：
 * 1、看清题目是有序数组
 * 2、首先选出第1项作为参考，如果后面的元素与第1项相等，继续往后找
 * 3、如果后面的元素nums[j]与第1项不想等，那么可以确定第二项就是nums[j]
 * 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-21 11:35:56
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-11-21 13:03:59
 */
var removeDuplicates = function(nums) {
  let j = 0
  for (let i=1, length=nums.length; i<length; i++) {
    if (nums[j] !== nums[i]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j + 1
};

const arr = [1, 1, 2, 3, 4, 4, 5, 5]
removeDuplicates(arr)