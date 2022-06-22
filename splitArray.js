x=[1,2,3,4,5,6]
y=[]

let len=x.length/2

const splitArray=(arr, newArr)=>{
    for(i=0;i<len;i++){
        newArr.push(arr[i])
        arr[i]=arr[arr.length-1]
        arr.pop()
        
        
    }
    arr.sort()
    console.log(newArr)
    console.log(arr)
}

splitArray(x, y)