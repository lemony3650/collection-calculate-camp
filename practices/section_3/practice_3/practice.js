function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result=[];
  collection_a.forEach(item=>{              //.forEach()函数用于调用数组的每个元素，并将元素传递给回调函数
    if(!result.find(item2=>item2.key===item))          //.find()函数返回通过测试（函数内判断）的数组的第一个元素的值
      result.push({key:item, count:collection_a.filter(item3=>item3===item).length});
  });
  result.map(item=>{
    if(object_b.value.includes(item.key)){
      item.count=item.count-parseInt(item.count/3);
    }
  });
  return result;
}

module.exports = create_updated_collection;
