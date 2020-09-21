/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-09-19 18:57:40
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-09-21 09:47:06
 */
// 链表构造函数
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// 链表添加 从结尾添加
const node = new ListNode(1)
const node2 = new ListNode(2)
node.next = node2

// 链表添加
// 从开头添加
const node3 = new ListNode(3)
node3.next = node.next
node.next = node3

// 链表删除
node.next = node3.next

// 不知道node后面的结点是哪一个的情况下，就想要删除node后面的结点
// 可以使用一个指针（引用），这个指针用来定位目标结点的前驱结点
let target = node.next
node.next = target.next