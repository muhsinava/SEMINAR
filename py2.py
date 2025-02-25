limit = int(input())
for num in range(1 , limit+1):
    if str(num)==str(num)[::-1]:
        print(num)
