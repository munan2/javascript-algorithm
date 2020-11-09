/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-10-15 09:58:35
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-10-15 23:39:46
 */
class Node {
  constructor (value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

function preOrder (root) {
  if (!root) return
  console.log('当前遍历的结点值是：', root.val)
  preOrder(root.left)
  preOrder(root.right)
}
function inOrder (root) {
  if (!root) return
  inOrder(root.left)
  console.log('当前遍历的结点值是：', root.val)
  inOrder(root.right)
}
function postOrder (root) {
  if (!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log('当前遍历的结点值是：', root.val)
}
preOrder(root)
console.log('=======================')
inOrder(root)
console.log('=======================')
postOrder(root)
console.log('=======================')
