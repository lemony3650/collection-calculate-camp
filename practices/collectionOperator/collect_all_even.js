'use strict';

function collect_all_even(collection) {
  //filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
  //=> 箭头函数
  return collection.filter(item => item%2===0)

  // var collection_a=[];var j;
  // for(var i=0;i<collection.length;i++)
  //   if(collection[i]%2==0)   collection_a[j++] = collection[i];
  // return collection_a;
}

module.exports = collect_all_even;
