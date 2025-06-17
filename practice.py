def second_largest(arr):
    if len(arr) < 2:
        raise ValueError("Array must contain at least two elements.")

    first = second = float('-inf')  # Start with lowest possible values

    for num in arr:
        if num > first:
            second = first
            first = num
        elif first > num > second:
            second = num

    if second == float('-inf'):
        raise ValueError("No second distinct largest number found.")
    
    return second


numbers = [10, 4, 8, 22, 15]
print(second_largest(numbers))  