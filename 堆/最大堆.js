/*
 * @Description: 
  堆是一个完全二叉树，且父节点的内容必须大于子节点的内容
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-25 00:05:37
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-01 00:44:48
 */
/**
 * @description: 
 * @param {*} nums
 * @param {*} n 表示数组的个数
 * @param {*} i 表示第几个数
 * @return {*}
 * @author: zhangyan
 */
function heapify (nums, n, i) {
  if (i >= n) return
  const c1 = i * 2 + 1
  const c2 = i * 2 + 2
  let max = i
  if (c1 < n && nums[c1] > nums[max]) {
    max = c1
  }
  if (c2 < n && nums[c2] > nums[max]) {
    max = c2
  }
  if (max !== i) {
    [nums[max], nums[i]] = [nums[i], nums[max]]
    heapify(nums, n, max)
  }
}
function buildHeap (nums, n) {
  const lastNode = n - 1
  const parent = (lastNode - 1) / 2
  for (let i=parent; i >=0; i--) {
    heapify(nums, n, i)
  }
  return nums
}

function heapSort (nums, n) {
  buildHeap(nums, n)
  for (let i=n-1; i>=0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]]
    heapify(nums, i, 0)
  }
  return nums
}


function main () {
  let nums = [4, 10, 3, 5, 1, 2]
  let n = 6
  heapify(nums, n, 0)
  console.log('nums', nums)
}
main()

const nums = [2, 5, 3, 1, 10, 4]

const res = heapSort(nums, 6)
console.log('res', res)
