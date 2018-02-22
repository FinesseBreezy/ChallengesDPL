def cap(str)
puts str.split.map(&:capitalize).join(' ')
end
cap("taco bell sucks balls")
cap("tHE qUICK bROWN fOX")
