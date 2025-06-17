# Write a function to calculate the average of an array of numbers.

numbers = [5, 8, 2, 9, 19]

def minimum_num(arr):
    min = arr[0]

    for num in arr[1:]:
        if num < min:
            min = num
    return min

print(minimum_num(numbers))