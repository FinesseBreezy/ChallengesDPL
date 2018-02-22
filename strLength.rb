def longest(source)
  arr = source.split(" ")
  arr.sort! { |a, b| b.length <=> a.length }
  puts arr[0]
end
longest("how much is that doggy in the window thisisahugestring")
