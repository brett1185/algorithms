x=1
y=3
z=5
num_list=[]
def count(num):
    sum = 0
    while (sum <= (num - z)):
        sum += z
        num_list.append(z)
    while (sum <= (num-y)):
        sum += y
        num_list.append(y)
    while (sum < num):
        sum += x
        num_list.append(x)
    

count(32)
print(num_list)

