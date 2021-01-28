exports.min = function min (array) {
  if (Math.min.apply(null, array) == Infinity){
    return 0;
  }
  else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (Math.max.apply(null, array) == -Infinity){
    return 0;
  }
  else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  let sum = 0;
  if (Math.max.apply(null, array) == -Infinity){
    return 0;
  }
  else {
    for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
  return sum/array.length;
  }
}
