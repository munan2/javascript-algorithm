/*
 * https://leetcode-cn.com/leetbook/read/all-about-array/x9tqjc/
 * @Description: 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 说明：本题中，我们将空字符串定义为有效的回文串。

 示例：
  输入: "A man, a plan, a canal: Panama"
  输出: true

  输入: "race a car"
  输出: false
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-12-02 00:40:24
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-04 00:03:56
 */
var isPalindrome = function(s) {
  const sp = /[0-9a-zA-Z]+/g
  let length = s.length
  for (let i=0,j=length-1; i<=j;) {
    console.log(s[i].toLowerCase(), i, s[j].toLowerCase(), j)
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      if (!s[i].match(sp)) {
        i++
      } else if (!s[j].match(sp)) {
        console.log('s[j]', s[j])
        j--
      } else {
        return false
      }
    } else {
      i++
      j--
    }
  }
  return true
};

const s = 'hello lleh'
const t = "ab_a"
const res = isPalindrome(t)
console.log('res', res)
