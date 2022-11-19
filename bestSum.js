const bestSum = (target, numbers, memo = {}) =>{
    if(target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null

    let shortCombo = null

    for(let num of numbers){
        const remainder = target - num
        const remainderCombo = bestSum(remainder, numbers, memo)
        if(remainderCombo !== null){
            const combo = [...remainderCombo, num]
            if(shortCombo === null || combo.length < shortCombo.length){
                shortCombo = combo
            }
        }
    }

    memo[target] = shortCombo
    return shortCombo
}

console.log(bestSum(7,[5,3,4,7]))
console.log(bestSum(8,[2,3,5]))
console.log(bestSum(8,[1,4,5]))
console.log(bestSum(100,[1,2,5,25]))