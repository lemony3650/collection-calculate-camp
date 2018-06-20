'use strict';
var calculate_median = function(collection){
  let col1=collection.filter(item=>item%2===0);
  let col2=col1.reduce((prev,cur)=>{
    return prev+cur;
  });
  let average=col2/col1.length;
  return average;
};
module.exports = calculate_median;
