/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-09 09:39:20
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-11-09 10:44:46
 */
/**
 * 有序数组，在该数组中找出a+b=target, 输出下标
 */


/**
 * 方法一：时间复杂度为O(n) 空间复杂度为O(1)
 * 思想：两个指针分别指向数组前后，如果两个值相加等于target则返回，如果小，则前指针往后指向一位。如果大，则后指针向前指向一位。
 * @param {*} arr 
 * @param {*} target 
 */
function Sum (arr, target) {
  let i = 0, j = arr.length - 1
  if (arr.length <= 1) return null
  while (i < j && j > i) {
    if (arr[i] + arr[j] === target) {
      return [i, j]
    } else if (arr[i] + arr[j] > target) {
      j--
    } else {
      i++
    }
  }
  return null
}
console.log('Sum', Sum([1, 3, 5, 6, 7], 13))

/**
 * 
 */
function Sum2 (arr, target) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    } else {
      map.set(arr[i], i)
    }
  }
}
console.log('Sum2', Sum2([1, 3, 5, 6, 7], 11))
