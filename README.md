# binaryPlot
A binary plot visualizer made in p5.js to plot number sequences, inspired by some plots plots in Wolfram's Mathworld.

It can be adjusted to plot 8 and 16 bit numbers (and others as well)
I am plotting in binary the natural numbers from 0 to 255. These are 8 bit numbers the leftmost slice is zero and right most is 255. I start counting from the bottom up.

I have plotted the first 255 squares, cubes and triangular numbers too.  

squares and triangular numbers are 16bit and cubes need to be 24 bit so the largest number 16581375 doesn't overflow

A need python hack is to use bit_length
``` python
>>> a = 16581375
>>> a.bit_length()
24

```

I was also inspired by a talk by Douglas Hofstadter on intertwined patterns of integers and patterns of thought.

#p5js #binary #creativecoding #numbersequences #math #python 

## added Collatz

I have added to plots of the Collatz conjecture, 3n+1

For all numbers 1 to 255  (starts at one for the collatz plots)

### I have plotted the path length:  

for example:
- from 1 to 1 takes 0 steps so a length of 0
-  from  2 to 1 one takes 1 steps so a length of 1
-  from 3 to 1 takes 7 steps [3, 10, 5, 16, 8, 4, 2, 1] so a length of 7
-  the largest number of steps to one for numbers up to 255 is 127 so I am using 8 bit numbers

### I have also plotted sum of the path (including 1)
  for example the sum for 3 will be 49 
  
  [3, 10, 5, 16, 8, 4, 2, 1] = 49

live at: https://greggelong.github.io/binaryPlot/





