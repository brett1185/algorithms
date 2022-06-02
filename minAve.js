x=[4,12,7,8,3,5]

const minAve =(arr)=>{
    minValue=arr[0]
    for(i=0;i<arr.length; i++){
        for(j=0;j<(arr.length);j++){
            if(arr[i]-arr[j]>0){
            nums=arr[i]-arr[j]
            if(nums<=minValue){
                minValue=nums
            }
            if(arr[i]-arr[j]==minValue){
                console.log(arr[j], arr[i])
            }
        }
        }
    }
    
}

minAve(x)