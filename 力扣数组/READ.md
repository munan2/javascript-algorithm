<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-11-18 22:44:02
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-11-18 22:55:28
-->

## 数组

如果数组内每一个值都是普通类型，那么数组就是一段连续的序列

常见的数组的方法：

- push pop 从尾部添加或者删除
会改变原数组，相当于栈

- unshift shift 从头部添加或者删除
会改变原数组

- concat 连接两个数组
不会改变原数组

- slice 截断数组
不会改变原数组
保留头部不会取尾部

a = [1, 2, 3, 4]
a.slice(0, 2) => [1, 2]

- splice 截断、添加、替换数组

会改变原数组

- reverse 反转数组
改变原数组

- sort 排序
改变原数组

- join 数组连接变为字符串，默认使用,连接
不改变原数组


## 总结

### 改变原数组的方法

- shift, unshift
- push, pop
- sort
- reverse
- splice

### 不改变原数组的方法
- concat
- join
- slice
- indexOf
- includes
- find

### 迭代遍历

- forEach
- every
- some
- filter
- map
- reduce