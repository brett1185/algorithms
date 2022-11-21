const coinChange =(amount, coins, memo={} )=>{
    if(amount in memo) return memo[amount]
    if(amount === 0) return []
    if(amount < 0) return null

    let shortest = null

    for(let coin of coins){
        const remainder = amount - coin
        const remainCombo = (coinChange(remainder, coins, memo))
        if(remainCombo !== null){
            combo = [...remainCombo, coin]
        }
        if(shortest === null || combo.length < shortest.length){
            shortest = combo
        }
    }
    memo[amount] = shortest
    return shortest

}

console.log(coinChange(604,[1,3,5, 20]))