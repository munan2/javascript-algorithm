/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x90rpm/
 * @Description: 在未排序的数组中找到第 k 个最大的元素。
   请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

   示例：
   输入: [3,2,1,5,6,4] 和 k = 2
   输出: 5

   
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-23 22:54:48
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 00:03:25
 */

var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => (a - b))[nums.length - k]
};

var heapify = function (nums, n, i) {
  if (i >= n) return
  let min = i
  const c1 = 2 * i + 1
  const c2 = 2 * i + 2
  if (nums[c1] < nums[min]) {
    min = c1
  }
  if (nums[c2] < nums[min]) {
    min = c2
  }
  if (min !== i) {
    [nums[min], nums[i]] = [nums[i], nums[min]]
    heapify(nums, n, min)
  }
  return nums
}
var buildMinHeap = function (nums, n) {
  const lastNode = n - 1
  const lastNodeParent = Math.floor((lastNode - 1) / 2)
  for (let i = lastNodeParent; i>=0; i--) {
    heapify(nums, n, i)
  }
  return nums
}
var findKthLargest = function(nums, k) {
  // 需要k个元素，首先将nums转为一个最小堆
  // 取出前k个元素，排成一个最小堆
  let minHeap = nums.slice(0, k)
  buildMinHeap(minHeap, k)
  for (let i=k; i<nums.length; i++) {
    if (nums[i] > minHeap[0]) {
      minHeap[0] = nums[i]
      buildMinHeap(minHeap, k)
    }
  }
  return minHeap[0]
}

const a = [10, 2, 4, 5, 18, 13]

findKthLargestByHeap(a, 3)