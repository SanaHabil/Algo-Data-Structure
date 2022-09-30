//Arrays To Do 1

//Push Front function-1 using Push
// function pushFront(arr,value){
//     var newArr = []
//     newArr.push(value)
//     for(let x in arr){
//         newArr.push(arr[x])
//     }
//     console.log(newArr)

// }
// //Push Front function-2 without Push
// function pushFront(arr,value){
//     var newArr = []
//     newArr[0]=value
//     for(var i=0; i<=arr.length-1; i++){
//         newArr[i+1] = arr[i]
//     }
//     console.log(newArr)
// }
// pushFront([5,7,2,3], 7)


// //Pop Front

// function popFront(arr){
//     var newArr = []
//     var value = 0
//     value = arr[0]
//     for (var i=1; i<=arr.length-1; i++){
//         newArr[i-1]=arr[i]
//     }
//     console.log("Poped value is:", value,"Returned Array is:",newArr)
// }

// popFront([7,5,10,15,5,6])

//Insert At

// function insertAt(arr,idx,value){
//     var newArr = []
//     for(i=0; i<idx ; i++){
//         newArr[i]=arr[i]
//     }
//     newArr.push(value)
//     for(i=idx; i<arr.length ; i++){
//         newArr.push(arr[i])
//     }
//     console.log(newArr)
// }

// insertAt([100,200,5,8,4], 3, 311)

//BONUS: Remove At
// function removeAt(arr,idx){
//     var newArr = []
//     for(i=0; i<idx ; i++){
//         newArr[i]=arr[i]
//     }
//     for(i=idx+1; i<arr.length ; i++){
//         newArr.push(arr[i])
//     }
//     console.log("removed Value is:",arr[idx],"Returned Array is:",newArr)
// }
// removeAt([1000,3,204,77], 1)

//BONUS: Swap Pairs
