'use strict';

function collect_last_element(collection) {
  //pop出栈最后一个元素
  return collection.pop();
  //  return collection[collection.length-1];
}

module.exports = collect_last_element;
