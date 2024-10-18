function findPages(arr, n, m) {
    // Write your code here.
    
    const chunk1 = arr.slice(0, arr.length / 2)
    const chunk2 = arr.slice(arr.length / 2, arr.length)
    

    const addArray=(arr)=>{
      return arr.reduce((acc, cul)=>acc+cul)
    }  
    return Math.min(addArray(chunk1),addArray(chunk2))
}
[]
const findX = findPages([12, 34, 67, 90, 8, 2, 11,1], 4, 2);
console.log(findX)