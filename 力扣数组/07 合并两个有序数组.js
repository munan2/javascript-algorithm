/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x9lhe7/
 * @Description: 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 说明：
  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
  你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
  
  示例：
  输入：
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  输出：[1,2,2,3,5,6]
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-30 23:18:28
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 00:03:36
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[i+j+1] = nums2[j]
      j--
    } else {
      nums1[i+j+1] = nums1[i]
      i--
    }
  }
  while (j >= 0) {
    nums1[j] = nums2[j]
    j--
  }
  return nums1
};

const a = [-1, 1, 3, 5]
const b = [0, 2, 4, 6, 8, 9]
const c = [0]
const d = [1]
const res = merge(a, 4, b, 6)
const res1 = merge(c, 0, d, 1)
console.log('res', res1)