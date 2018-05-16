'use strict';

function choose_multiples_of_three(collection) {
  var collection_a=[];
  var  j = 0;

  for(var i=0;i<collection.length;i++)
    if(collection[i]%3==0)
      collection_a[j++] = collection[i];

  return collection_a;
}

module.exports = choose_multiples_of_three;
