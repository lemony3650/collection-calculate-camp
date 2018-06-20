'use strict';

function compute_chain_median(collection) {
  let num=0;
  collection=collection.split("->");  //把链表变成数组->变成，
  //collection.sort(); 直接排序会变成1，10，19，2.。。。
  collection.sort(function (a,b) {
    return a-b>0? 1:-1;
  });
  if(collection.length%2===0){
    num=(parseInt(collection[collection.length/2-1])+parseInt(collection[collection.length/2]))/2;//不加parseInt会变成字符串相加，而要的是数字相加
  }
  else if(collection.length%2!==0){
    num=parseInt(collection[((collection.length-1)/2)]);
  }
  return num;

}

module.exports = compute_chain_median;
