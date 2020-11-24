/*
 * @Description: 在未排序的数组中找到第 k 个最大的元素。
   请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

   示例：
   输入: [3,2,1,5,6,4] 和 k = 2
   输出: 5

   
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-23 22:54:48
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-11-24 23:44:43
 */

var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => (a - b))[nums.length - k]
};
