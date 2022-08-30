class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 1: return True
        resultado = int(n / 3)
        resto = n % 3
        if resto != 0:
            return False
        if resultado == 1:
            return True
        elif resultado >= 3:
            return self.isPowerOfThree(resultado)
        
