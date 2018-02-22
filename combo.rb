def all_possible_permutations(str)
  i = 0;
  x = 0;
  arr = str.split("")
  while i < arr.length
    string = "#{string}#{arr[i]}"
    puts(string)
    i += 1
  end
  while x < str.length
    string = string[1..-1]
    puts(string)
    x += 1
  end
end
all_possible_permutations("dog")
