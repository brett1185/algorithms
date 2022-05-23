x=[1,2,3,5,6,8,9,10]

a=4

b=3

const insert=(arr,num,index)=>{
    temp=x[arr.length-1]
    for (i=arr.length-1;i>index;i--){
        arr[i]=arr[i-1]       
    }
    arr[index]=num
    arr.push(temp)
    console.log(arr)
}

insert(x,a,b)