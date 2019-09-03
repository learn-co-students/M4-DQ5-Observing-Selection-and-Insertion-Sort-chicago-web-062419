function insertionSort(arr) {
  
  function sort(arr){
    for(let i = 1; i < arr.length; i++){
      //       if(arr[i] < arr[i-1]){

      //         arr.splice(i-1, 0, arr[i])
      //         arr.splice(i+1, 1)
      //       }
      // console.log(arr)
      for(let x = i; x > 0; x--){
          if(arr[x] < arr[x-1]){

          arr.splice(x-1, 0, arr[x])
          arr.splice(x+1, 1)
        }
      }
    }
    
  }

  sort(arr)
  return arr

}

