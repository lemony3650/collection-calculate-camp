function count_same_elements(collection) {
  //在这里写入代码
  let result=[];
  collection.forEach(item=>{  //.forEach()函数用于调用数组的每个元素，并将元素传递给回调函数
    if(!result.find(item2=>item2.key===item)) //.find()函数返回通过测试（函数内判断）的数组的第一个元素的值
      result.push({key:item, count:collection.filter(item3=>item3===item).length});
  });
  return result;

}

module.exports = count_same_elements;
