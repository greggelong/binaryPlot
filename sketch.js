
let sel;

// get the height from the bitlen let H = 25; // 400 height divided by 8  400/8
let W = 6; // 1536 divided by 256
function setup() {
  createCanvas(1536, 400);
  background(64);  // don't need this
  noStroke()
  sel = createSelect();
  sel.option('Natural Numbers: n');
  sel.option('Squares: n^2');
  sel.option('Triangular Numbers n*(n+1)/2');
  sel.option('Sum of Collatz path');
  sel.option('Collatz path length');
  
  sel.changed(myCheckedEvent);
  drawN();
  print(collatzpath(255));
  let a = collatzpath(255);
  let sum =0;
  for (let i =0; i<a.length;i++){
    sum+=a[i];

  }
  print(sum)

  
}



function myCheckedEvent() {
  if (sel.value() === 'Natural Numbers: n') {
    background(64);
    drawN();
  } else if( sel.value()=== 'Squares: n^2') {
    background(64);
    drawNsqr();
  } else if(sel.value()=== 'Sum of Collatz path'){
    background(64);
    drawCsum();
  } else if(sel.value()=== 'Collatz path length'){
    background(64);
    drawClen();
  }
  else{
    background(64);
    drawT();
  }
}

function drawN(){
  
  let x =0;
  for (let i = 0; i < 256; i++) {          // 
    binSlice(x,i, 8);
    x+=W; // move the x pos by width set global W
  }
  
  
  
}


function drawNsqr(){
  
  let x =0;
  for (let i = 0; i < 256; i++) {          //  
    binSlice(x,i**2, 16);
    x+=W; // move the x pos by width set global W
  }
  
  
  
}


function drawT(){
  
  let x =0;
  for (let i = 0; i < 256; i++) {          //  
    binSlice(x,i*(i+1)/2, 16);
    print(i,i*(i+1)/2)
    x+=W; // move the x pos
  }
  
  
  
}


function drawCsum(){
  
  let x =0;
  for (let i = 1; i < 256; i++) {          //  
    let a = collatzpath(i);
    let sum =0;
    for (let j =0; j<a.length;j++){
      sum+=a[j];

    }
    print(i,sum)
    binSlice(x,sum, 17); // all sums from 0 to 255 are < 2**17
    //print(i,i*(i+1)/2)
    x+=W; // move the x pos
  }
  
}


function drawClen(){
  
  let x =0;
  for (let i = 1; i < 256; i++) {          //  
    let a = collatzpath(i);

    binSlice(x,a.length-1, 8);
    print(i,a.length-1)
    x+=W; // move the x pos
  }
  
}


function binConvert(a, bitLen) {
  // takes in a decimal and a bit length and returns a list of ones and zeros binary for that number

  let b = a.toString(2); // converts it to binary but leading zeros, not 8 bits eg. 3 = "11"
  let mask = "0".repeat(bitLen); // a mask to get the extra zeros
  let c = mask.slice(0, bitLen - b.length); // slice to get the right number of zeros
  // eg. if b = "11" then c = "000000"
  let binstring = c + b; // binary string so 3 will give 00000011 8 bits

  let binArray = int(binstring.split("")); // is an aray of ints so [0,0,0,0,0,0,1,1]
  return binArray;
}

function binSlice(x, Dnum, bitLen) {
  // takes an x position, decimal number, and a bitLen of the largest number in the sequence
  let H = Math.floor(height/bitLen); // need to floor this for collatz path sum which has a bit length of 17
  // takes in a x location on canvas and a decimal number
  // calls the convert function
  let binA = binConvert(Dnum, bitLen);
  // only need an x because y is determined by list length and size
  let y = 0;
  for (const element of binA) {
    if (element == 0) {
      fill(0);
      rect(x, y, W,H);
    } else {
      fill(0, 255, 0);
      rect(x, y, W, H);
    }
    y += H;
  }
}


function collatzpath(num){
  //returns a list of the collatz path from the number
  //all the way to one.  in the game this is the map'''
  
  let path = [];
  path.push(num)
  while (num > 1){
      if (num%2 == 0){
          num = num/ 2
          path.push(num)
        }
      else{
          num = num*3+1
          path.push(num)
        }
        }
  return path
}
