/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x9nivs/
 * @Description: 
  给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，
  使得每个元素最多出现两次，返回移除后数组的新长度。
  不要使用额外的数组空间，你必须在 原地 修改输入数组 
  并在使用 O(1) 额外空间的条件下完成。

  示例：
  输入：nums = [1,1,1,2,2,3]
  输出：5, nums = [1,1,2,2,3]
  解释：函数应返回新长度 length = 5, 
  并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。
  你不需要考虑数组中超出新长度后面的元素。

  解题思路：
  1、有序的数组，重复个数n
  2、记录nums[0] 初始值，k=1 表示当前这个值只有一个,j表示后面的元素
  3、如果后面的元素与nums[i]不相等，那么nums[i++] = nums[j]（i后面的值就可以确定），并且设置k=0，表示这个值暂时无重复
  4、如果后面的元素与nums[i]相等，且k小于规定个数，那么nums[i++] = nums[j]（i后面的值就可以确定），k++ 
  5、如果后面的元素与nums[i]相等，且k大于等于规定个数，那么不做任何处理

 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-21 13:08:06
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 00:02:59
 */

var removeDuplicates = function(nums) {
  let i = 0, j = 1, k = 1, length = nums.length;
  while (j < length) {
    if (nums[i] !== nums[j]) {
      k = 1
      nums[i++] = nums[j]
    } else if (nums[i] === nums[j] && k < 2) {
      k++
      nums[i++] = nums[j]
    }
    j++
  }
  return i + 1
};

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5]
const arr2 = [1, 2, 3, 3, 3, 4]
removeDuplicates(arr)
removeDuplicates(arr2)