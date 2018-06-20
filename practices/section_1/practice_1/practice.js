function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(item=>collection_b.includes(item));

  // var collection_c=[];
  // var k=0;
  // for(var i = 0 ; i < collection_a.length;i++)
  //   for(var j = 0; j < collection_b.length;j++)
  //   {
  //     //A中每个与B做比较
  //     if(collection_b[j] == collection_a[i])
  //       collection_c[k++] = collection_b[j];
  //   }
  // return collection_c;
}

module.exports = collect_same_elements;
