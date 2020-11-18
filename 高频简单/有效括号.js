/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-18 22:24:00
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-11-18 22:41:37
 */
/**
 * 有效的括号:
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 思想（栈）：进入一个压入栈底，遇到[或者(就压入栈底，一直遇到]或者)就清除括号内的所有元素
 */

function isValid (str) {
  let stack = []
  const mapper = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i in str) {
    const v = str[i]
    if (['{', '[', '('].indexOf(v) > -1) {
      stack.push(v)
    } else {
      const peak = stack.pop()
      if (v !== mapper[peak]) {
        return false
      }
    }
  }
  if (stack.length > 0) return false
  return true
}
const a = '['
const b = '[()]'
const c = '{{{{}}}}(([[]]))'
const d = '[{{{{}}}}(([[]]))]'

console.log(isValid(a))
console.log(isValid(b))
console.log(isValid(c))
console.log(isValid(d))


