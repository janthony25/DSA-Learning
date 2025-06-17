# Write a function to calculate the average of an array of numbers.

numbers = [1, 2, 3, 4, 5]

def average_num(arr):
    total = 0
    for num in arr:
        total += num
    return total / len(arr)

print(average_num(numbers))