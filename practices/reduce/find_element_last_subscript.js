'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  return collection.lastIndexOf(element);//indexOf()函数返回某个字符串值在字符串中首次出现的位置

  // for(var i = collection.length; i > 0;i--)
  //   if(element == collection[i])return i;
}

module.exports = calculate_elements_sum;
