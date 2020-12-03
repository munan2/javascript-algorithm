/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x9wv2h/
 * @Description: 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，
    原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
    此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

    示例：
    输入：nums = [2,0,2,1,1,0]
    输出：[0,0,1,1,2,2]

    解题思路：https://leetcode-cn.com/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode-solution/
    参考快速排序：定义三个区间
    all in [0, p0]区间内的值都等于0
    all in (p0, p2)区间内的值都等于1
    all in [p2, length-1]区间内的值都等于2
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-23 09:57:06
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 00:03:12
 */
const base = [0, 1, 2]
var sortColors = function(nums) {
  let p0 = 0
  let i = 0
  let p2 = nums.length - 1
  while (i <= p2) {
    console.log('nums[i]', nums[i])
    if (nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]]
      p0++
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      [nums[p2], nums[i]] = [nums[i], nums[p2]]
      console.log('nums', nums)
      p2--
    }
  }
  return nums
};

const arr1 = [2, 1, 0, 0, 1, 2]
sortColors(arr1)
