x=[1,2,3,4,5]
for(let i=0; i<x.length/2; i++){
    temp=x[i]
    x[i]=x[x.length-1-i]
    x[x.length-1-i]=temp
}
console.log(x)

