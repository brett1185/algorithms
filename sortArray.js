x=[5,7,1,3,8,4,6,10,9,2,70,-5,48,-100,40]

const sort=(arr)=>{
    for(i=0; i<arr.length; i++){
        for(j=0; j<(arr.length-i-1);j++){
            if(arr[j] > arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr)
}

sort(x)