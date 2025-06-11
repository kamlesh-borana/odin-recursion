function largestPalindromeProduct(
  min,
  max,
  num1 = max,
  num2 = max,
  largestPalindrome = 1
) {
  if (num2 <= min) {
    return largestPalindrome;
  }

  const product = num1 * num2;
  const productString = String(product);
  const reverseProductString = productString.split("").reverse().join("");

  if (productString === reverseProductString && product > largestPalindrome) {
    largestPalindrome = product;
    min = num1 < num2 ? num1 : num2;
  }

  if (num1 - 1 < min || product < largestPalindrome) {
    return largestPalindromeProduct(
      min,
      max,
      num2 - 1,
      num2 - 1,
      largestPalindrome
    );
  } else {
    return largestPalindromeProduct(
      min,
      max,
      num1 - 1,
      num2,
      largestPalindrome
    );
  }
}

console.log(largestPalindromeProduct(100, 997));
