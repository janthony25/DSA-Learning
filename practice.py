# Write a function to calculate the average of an array of numbers.

numbers = [5, 8, 2, 9, 19, 15, 4]

def larges_number(arr):
    highest = arr[0]

    for num in arr[1:]:
        if num > highest:
            highest = num
    return highest

print(larges_number(numbers))