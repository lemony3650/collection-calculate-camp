function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  result=[];
  collection_a.forEach((element, index) => {           //index是遍历到的元素的下标
    const item = element.split("-");
    if (item.length > 1) {
      collection_a.splice(index,1);                 //如果item为['d',5],就变成d
      for (let i = 0; i < item[1]; i++) {
        collection_a.push(item[0]);
      }
    }
  });

  collection_a.forEach(item => {
    if (!result.find(element => element.key === item))
      result.push({key: item, count: collection_a.filter(element => element === item).length});
  });
  result.map(item=>{
    if(object_b.value.includes(item.key)){
      item.count=item.count-parseInt(item.count/3);
    }
  });
  return result;
}

module.exports = create_updated_collection;
