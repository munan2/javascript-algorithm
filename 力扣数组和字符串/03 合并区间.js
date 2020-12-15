/*
 * @Description:给出一个区间的集合，请合并所有重叠的区间。 
 * 示例 1:
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 提示: intervals[i][0] <= intervals[i][1]
 * @Version: 2.0
 * @Autor: zhangyan
 * @Date: 2020-12-10 22:00:48
 * @LastEditors: zhangyan
 * @LastEditTime: 2020-12-15 21:57:53
 */
// 首先根据数组的第一位进行排序
// 排序后，合并
var merge = function(intervals) {
  let length = intervals.length
  let lastMax
  let sortedIntervals = intervals.sort((a, b) => (a[0] - b[0]))
  let res = []
  for (let i=0; i<length;) {
    if (lastMax === undefined || lastMax < sortedIntervals[i][0]) {
      res.push(sortedIntervals[i])
      lastMax = sortedIntervals[i][1] 
    } else {
      let data = res.pop()
      lastMax = Math.max(sortedIntervals[i][1], lastMax)
      data = [data[0], lastMax]
      res.push(data)
    }
    i++
  }
  return res
};

let arr = [[1,3],[2,6],[8,10],[15,18]]
let arr1 = [[1,4],[2,3]]
let arr2 = [[0,0],[1,2],[5,5],[2,4],[3,3],[5,6],[5,6],[4,6],[0,0],[1,2],[0,2],[4,5]]
let res = merge(arr2)
console.log('==res', res)
