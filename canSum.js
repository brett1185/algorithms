const canSum = (total, numbers, memo = {}) => {
    if(total in memo) return memo[total]
    if(total === 0) return true;
    if(total < 0) return false

    for(let num of numbers){
        const remainder = total - num;
        if(canSum(remainder, numbers, memo) === true){
            memo[total]=true
            return true
        }
    }
    memo[total] = false
    return false
}

console.log(canSum(7, [2,3]))
console.log(canSum(7, [5,3,4,7]))
console.log(canSum(7, [2,4]))
console.log(canSum(8, [22,3,5]))
console.log(canSum(300, [7,14]))