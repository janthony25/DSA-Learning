# Write a function to calculate the sum of all elements in an array.

numbers = [1, 2, 3]


def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total


print(sum_array(numbers))