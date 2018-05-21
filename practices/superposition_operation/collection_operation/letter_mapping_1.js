'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var collection_a=[];
  var  j = 0;

  for(var i=0;i<collection.length;i++)
    if(collection[i] % 2 == 0)
      collection_a[j++] = Math.ceil(String.fromCharCode(96 + (collection[i])));

  return collection_a;

}

module.exports = even_to_letter;
