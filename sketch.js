
let mycheckbox;

// get the height from the bitlen let H = 25; // 400 height divided by 8  400/8
let W = 6; // 1536 divided by 256
function setup() {
  createCanvas(1536, 400);
  background(64);  // dont need this
  noStroke()
  checkbox = createCheckbox(' Unchecked N ; Checked N^2', false);
  const box = checkbox.elt.getElementsByTagName('input')[0];  // get the dom stuff from dom lib
  // https://discourse.processing.org/t/p5js-change-checkbox-size/1567
  box.style.transform = 'scale(1.5)';
  checkbox.changed(myCheckedEvent);
  drawN();
  
}



function myCheckedEvent() {
  if (this.checked()) {
    background(64);
    drawNsqr();
  } else {
    background(64);
    drawN();
  }
}

function drawN(){
  
  let x =0;
  for (let i = 0; i < 256; i++) {          // lagrest 16 bit 65536
    binSlice(x,i, 8);
    x+=W; // move the x pos
  }
  
  
  
}


function drawNsqr(){
  
  let x =0;
  for (let i = 0; i < 256; i++) {          // lagrest 16 bit 65536
    binSlice(x,i**2, 16);
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
  let H = height/bitLen
  // takes in a x location on canvas and a decimal number
  // calls the convert function
  let binA = binConvert(Dnum, bitLen);
  // only need an x because y is determined by list lenght and size
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
