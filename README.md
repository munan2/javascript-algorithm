<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-09-19 18:33:46
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-01 00:41:37
-->
# javascript-algorithm
关于基础算法的学习笔记

前端比较常遇见的数据结构：
- 数组
- 栈
- 队列
- 链表
- 树

## 关于数组
### 创建数组的方式

```
  const arr1 = []
  const arr2 = new Array(2)
  const arr3 = new Array(3).fill(1) // fill 填充数组的值
```
### 数组常见的方法

#### 添加
1. push 从末尾添加
2. unshift 从开头添加

#### 删除
1. pop 从末尾删除
2. shift 从开头删除

#### 既可删除也可添加
splice
接受三个参数：
第一个参数表示指定的位置，
第二个参数表示删除的个数
第三个删除表示添加的值
```
arr = [1, 2, 3, 4]
// 删除前面两个元素
arr.splice(0, 2) // arr = [3, 4]
// 从后面添加两个元素，5和6
arr.splice(2, 0, 5, 6) // arr = [3, 4, 5, 6]
// 将4替换为10
arr.splice(1, 1, 10) // arr = [3, 10, 5, 6]
```

## 关于栈
栈的特点就是：
- 后进先出
- 只允许从尾部添加元素
- 只允许从尾部移除元素

我们用数组来表示栈，其对应的方法就是push和pop

## 关于队列
队列的特点就是：
- 先进先出
- 只允许从尾部添加元素
- 只允许从头部移除元素

我们用数组来表示队列，其对应的方法就是push, shift

## 关于链表
链表有序但是其结点的分布，在内存中是离散的。  
在链表中，每一个结点的结构都包括两部分内容：
- 数据域
- 指针域

js中的链表，是以嵌套的对象的形式来实现的：
```
{
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}
```
要想访问一个链表中的任意一个元素时，我们必须从起点开始，逐个访问next，一直访问到目标结点为止。一般情况我们会先设置一个head指针来专门指向链表的开始位置。

### 链表的表示
创建构造函数
```
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
```

使用
```
const node = new ListNode(1)
node.next = new ListNode(2)
```

#### 添加元素的方法
##### 任意位置添加
假设需要在node后面添加node3

```
const node3 = new ListNode(3)
node3.next = node.next
node.next = node3
```

##### 任意位置删除
当不知道node后面的结点是哪一个的情况下，就想要删除node后面的结点
**可以使用一个指针（引用），这个指针用来定位目标结点的前驱结点**

```
let target = node.next
node.next = target.next
```
### 链表和数组之间的差异
在多数计算机语言中，数组对应着一段连续的内存。如果我们想要在任意位置插入或者删除一个元素时，那么该位置后面的元素都需要后移或者前进一位。
假设数组的长度为n，那么增加或者删除一个元素的复杂度为O(n)
但是，js比较特别，如果我们只定义了一种类型的元素，它是一个纯数字数组的话，那么它对应的确实是连续的内存。如果是不同类型类型的元素:
```
const arr = ['haha', 1, {a: 1}]
```
它对应的是一段非连续的内存。它的底层使用的是哈希映射分配内存空间，是使用对象链表来实现的。

### 总结
链表的插入/删除的效率较高，但是其访问效率较低
数组的访问效率较高，而插入效率较低

## 树


## 堆
堆的特征：
- 完全二叉树
- 所有的父节点的值都要大于其子节点的值

如果构建一个堆：随意的一个树，那么如果将其转换为一个堆。这个调整的过程就是heapify
      4
  10    3
5   1  2

先比较上面的4， 10和3，将4和10做一次交换，进行一次heapify，得到的结果就是
     10
  4     3
5   1  2
再比较左下角的4，5，和1。将4和5做一次交换（一次heapify），得到的结果就是
     10
  5     3
4   1  2
最后得到了一个堆。

如何把一棵树（完全无序）重新构建一个堆。如果保证呢，那么我们就从倒数第二层开始做heapify(从箭头处开始)，倒着做，首先对a3,然后是a2, a1, a0就可以构造一个堆
            a0
        a1      a2
=>  a3   a4  a5    a6
  a7  a8 

按照从上往下，从左往右开始。可以使用一个数组来表示：
假设这个数组为[10, 5, 8, 3, 4, 6, 7, 1, 2]
假设某一个节点是第i个节点：
那么其父节点为：parent = (i - 1) / 2
其孩子节点c1 = i * 2 + 1
         c2 = i * 2 + 2
如果完全二叉树的节点树木为n，那么其深度为 n / 2

如何获取箭头的那个节点呢，其实就是最后一个节点的父亲节点

如何做堆排序：
首先将一个树转换为堆，而且将arr[0]和arr[length-1]做交换，砍掉arr[length-1]，对砍后的树再做heapify


## 复杂度
### 时间复杂度