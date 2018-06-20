'use strict';

function grouping_count(collection) {

  var grouping={};  //对象 如何定义输出格式的
  collection.filter(item => grouping[item]!==undefined? grouping[item]++:grouping[item]=1);
  return grouping;

}

module.exports = grouping_count;
