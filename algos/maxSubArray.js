const maxSubArray=(arr, subArr) =>{
    let currSum = 0
    let maxSeen = -Infinity

    for(let i = 0; i <arr.length; i++){
        currSum += arr[i]
        if(i >= subArr-1){
            maxSeen = Math.max(currSum, maxSeen)
            currSum -= arr[i - (subArr-1)]
        }
    }
    return maxSeen
}

const array = [1,2,3,5,4,8,6,2]
console.log(maxSubArray(array, 3))