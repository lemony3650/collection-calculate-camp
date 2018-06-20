'use strict';
var even_asc_odd_desc = function(collection){

  var collection_a=[];
  var collection_b=[];
  var j=0;var k=0;
  for(var i=0;i<collection.length;i++)
    if(collection[i]%2==0)   collection_a[j++] = collection[i];
    else if(collection[i]%2!=0)   collection_b[k++] = collection[i];

  for(var i=0; i<collection_a.length;i++)
    for(var k =0; k<collection_a.length-i-1;k++)
      if(collection_a[k]>collection_a[k+1])
      {
        var temp =collection_a[k];
        collection_a[k] = collection_a[k+1];
        collection_a[k+1]=temp;
      }
  for(var i=0; i<collection_b.length;i++)
    for(var k =0; k<collection_b.length-i-1;k++)
      if(collection_b[k]<collection_b[k+1])
      {
        var temp =collection_b[k];
        collection_b[k] = collection_b[k+1];
        collection_b[k+1]=temp;
      }
  for(var i=0; i<collection_b.length;i++)
    collection_a[j++] = collection_b[i];

  return collection_a;
};
module.exports = even_asc_odd_desc;
