'use strict';

function collect_all_even(collection) {
  var collection_a=[];
  var  j = 0;

  for(var i=0;i<collection.length;i++)
    if(collection[i]%2==0)
      collection_a[j++] = collection[i];

  return collection_a;

  //在这里写码
}

module.exports = collect_all_even;
