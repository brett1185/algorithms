from ast import If


x=[1,5, 10, -2]
max=0
min=0
sum=0
for i in x:
    sum += i
    average=sum/len(x)
    if i>max:
        max=i
    if i<min:
        min=i
print(average)
print(max)
print(min)