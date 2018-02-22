def countVowels(str)
  str.split
  str = str.gsub(/[^aeiouAEIOU]/, '')
  puts str
end
countVowels('tAcobEll')
