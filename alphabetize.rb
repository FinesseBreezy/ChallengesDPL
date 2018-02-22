str = gets.strip.downcase.to_s
@arr = str.split("");
def sorter
@arr.sort_by!{ |m| m.ord }
end
puts(sorter)
