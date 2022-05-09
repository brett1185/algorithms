const x=[-1,4,2,18,30,5]
let max=x[0]

for(var i=0; i<=x.length; i++ ){
    if (x[i] > max){
        max=x[i]
    }
}

console.log(max)