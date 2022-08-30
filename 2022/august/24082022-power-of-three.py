# Given an integer n, return true if it is a power of three. Otherwise, return false.
# An integer n is a power of three, if there exists an integer x such that n == 3x.

# Input: n = 27
# Output: true
# Explanation: 27 = 33

# Input: n = 0
# Output: false
# Explanation: There is no x where 3x = 0.

def isPowerOfThree(n: int) -> bool:
    if n == 1: return True
    resultado = int(n / 3)
    resto = n % 3
    if resto != 0:
        return False
    if resultado == 1:
        return True
    elif resultado >= 3:
        return isPowerOfThree(resultado)

print(isPowerOfThree(10))
print(isPowerOfThree(9))