# get the largest number in array

array = [4, 6, 1, 2, 7, 18, 14, 15]


def largest_number(arr):
    largest = arr[0]

    for i in arr:
        if i > largest:
            largest = i

    return largest


print(largest_number(array))
