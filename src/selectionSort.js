// import array from "prop-types";

function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  const sortedArray = []
  
  function sort(array){
    let min
    
    for(let i = 0; i < array.length; i++){
      if(i == 0){
        min = array[i]
      }
      if(array[i] < min){
        min = array[i]
      }
    }
    sortedArray.push(min)
    let index = array.indexOf(min)
    array.splice(index, 1);
    if(array.length > 0){
      sort(array)
    }
    
  }

  sort(arr)
  // console.log(sortedArray)
  return sortedArray
}