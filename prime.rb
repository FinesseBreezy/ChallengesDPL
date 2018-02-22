require 'pry'

def primeCheck(n)
  is_prime = true;
  for i in 2..n-1
    binding.pry
    if n % i == 0
      binding.pry
      is_prime = false
    end
  end
  if is_prime
    puts("Prime")
  else
    puts("Not Prime")
  end
end
primeCheck(4)
