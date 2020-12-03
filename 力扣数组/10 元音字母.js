/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x93lce/
 * @Description: 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 示例：
 * 输入："hello"
 * 输出："holle"
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-12-03 00:02:21
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 00:04:06
 */
var reverseVowels = function(s) {
  const ZIMU = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1,
  }
  let nums = s.split('')
  let length = nums.length
  for (let i=0, j=length-1; i<j; ) {
    if (ZIMU[nums[i]] && ZIMU[nums[j]]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
    if (!ZIMU[nums[i]]) {
      i++
    }
    if (!ZIMU[nums[j]]) {
      j--
    }
  }
  return nums.join('')
};

const a = "hello"
const res = reverseVowels(a)
console.log('res', res)