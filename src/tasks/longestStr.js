const findLongestStr= (arr) =>{
    let maxLen=0
    let maxIdx=0
    for(let i=0; i<arr.length; i++){
        if(maxLen<arr[i].length){
            maxLen=arr[i].length
            maxIdx=i;
        }
    }
    return arr[maxIdx]
}

module.exports=findLongestStr;