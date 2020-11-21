/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x9p1iv/
 * @Description: 移除数组
  给你一个数组 nums 和一个值 val，
  你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度
  不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

  示例：
  给定 nums = [0,1,2,2,3,0,4,2], val = 2,
  函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
  注意这五个元素可为任意顺序。
  你不需要考虑数组中超出新长度后面的元素。

  解题思路：
  1、首先设置index 记录当前有多少位等于val，res记录有多少位不等于val
  2、遍历数组，如果当前nums[i]==val，那么index+1
  3、如果当前nums[i] != val，那么说明这个元素可以往前移动，移动的位数就为i-index

 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-21 11:22:15
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-11-21 13:06:23
 */

let removeElement = (nums, val) => {
  let index = 0
  let res = 0
  for (let i = 0, length = nums.length; i < length; i++) {
    if (nums[i] === val) {
      index++
    } else {
      if (index > 0) {
        nums[i - index] = nums[i]
      }
      res++
    }
  }
  return res
}
const nums = [0, 1, 2, 0, 3, 4]
const val = 0
removeElement(nums, val)

