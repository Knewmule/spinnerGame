// Seconds SPinner Spins
let maxi = 3;
let mini = 1;
let ansec = 1;
// Degrees spinner spins
let rot1 = 1;
let rot2 = 1;
let rot3 = 0;
let rot33 = 1;
let score = 100;
let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;
let theBets = 0;
let alignerSec = document.documentElement;
let elem = document.querySelector("#spinit span");
let elemThem = document.querySelector("div div #them");
let elemUs = document.querySelector("div div #us");
let elemIt = document.querySelector("div div #it");
let elemYou = document.querySelector("div div #you");
let elemScore = document.querySelector("#Spin p");

let obj = {};
let objUs = {};
let objThem = {};
let objIt = {};
let objYou = {};

let us = false;
let you = false;
let it =false;
let them = false;
let scoreChange = false;
let scoreStart = true;
// const alignerSec = null ; 
//Toggle aligner class to div id=spinit when spin button is pressed The wheel is spun 

// alignerSec.addEventListener("animationiteration", elapsedAnsec); 
alignerSec.addEventListener("onclick",e =>{
           // spinit();                
                  // alignerSec.classList.toggle("aligner"); 
});

// Bet on spots
function betit1(){
   b1 = b1+1;
 let b1Str = b1.toString();
   let scoreB1 = document.createTextNode(b1Str);
  if(you){
    elemYou.replaceChild(scoreB1, elemYou.childNodes[1]);
    // elemYou.appendChild(scoreB1);
  }
   else{
     elemYou.appendChild(scoreB1);
     you = true;
     scoreChange = true;
   }
}
function betit2(){
   b2 = b2+1;
 let b2Str = b2.toString();
   let scoreB2 = document.createTextNode(b2Str);
  if(it){
    elemIt.replaceChild(scoreB2, elemIt.childNodes[2]);
    // elemYou.appendChild(scoreB1);
  }
   else{
     elemIt.appendChild(scoreB2);
     it = true;
     scoreChange = true;
   }
}
function betit3(){
   b3 = b3+1;
 let b3Str = b3.toString();
   let scoreB3 = document.createTextNode(b3Str);
  if(them){
    elemThem.replaceChild(scoreB3, elemThem.childNodes[1]);
    // elemYou.appendChild(scoreB1);
  }
   else{
     elemThem.appendChild(scoreB3);
     them = true;
     scoreChange = true;
   }
}

function betit4(){
   b4 = b4+1;
 let b4Str = b4.toString();
   let scoreB4 = document.createTextNode(b4Str);
  if(us){
    elemUs.replaceChild(scoreB4, elemUs.childNodes[1]);
    // elemYou.appendChild(scoreB1);
  }
   else{
     elemUs.appendChild(scoreB4);
     us = true;
     scoreChange = true;
   } 
}

function spun(){
  
  
}

function spinit() {
  if(scoreStart){
    let scoreText = document.createTextNode(score);
   elemScore.appendChild(scoreText);
    scoreStart=false;
  }
  else{
    theBets = b1+b2+b3+b4;
    score = score - theBets;
    theBets = 0;
    let scoreText = document.createTextNode(score);
    elemScore.replaceChild(scoreText, elemScore.childNodes[0]);
  // elemScore.appendChild(scoreText);
    scoreChange = false;
    
  }
if(rot33 === rot3){
alignerSec.classList.toggle('aligner'); 
  
  if(us){
  us = false;
  elemUs.style.backgroundColor = '#00ff00';
}else if (them){
  them = false;
  elemThem.style.backgroundColor = '#00ff00';
}else if (it){
  it = false;
  elemIt.style.backgroundColor = '#00ff00';
}else if (you){
  you = false;
  elemYou.style.backgroundColor = '#00ff00';
}else{
  console.log('color error');
}
  
  // rot33=12;
// alignerSec = document.getElementById('spinit');
//   alignerSec.classList.add('aligner');
  ansec =getRandomArbitrary(mini,maxi);
rot1=getRandomArbitrary(10,179);
rot2=getRandomArbitrary(180,380);
rot3=getRandomArbitrary(381,720);
  alignerSec.style.setProperty('--ansec', ansec + "s");  
alignerSec.style.setProperty('--rot1', rot1 + "deg");  
  alignerSec.style.setProperty('--rot2', rot2 + "deg");  
  alignerSec.style.setProperty('--rot3', rot3 + "deg");  
  
  // Spin & square Rects
 spinRec = elem.getBoundingClientRect();
  themRec = elemThem.getBoundingClientRect();
  usRec = elemUs.getBoundingClientRect();
  itRec = elemIt.getBoundingClientRect();
  youRec = elemYou.getBoundingClientRect();  
  obj = spinRec.toJSON();
  objUs = usRec.toJSON();
  objThem = themRec.toJSON();
  objIt = itRec.toJSON();
  objYou = youRec.toJSON();
  CollisionTest(obj,objUs,objThem,objIt,objYou,'if');
  rot33=rot3;
  
}else{
rot1=getRandomArbitrary(10,179);
rot2=getRandomArbitrary(180,380);
rot3=getRandomArbitrary(381,720);  
  ansec =getRandomArbitrary(mini,maxi);

//Build the spinning animation
alignerSec = document.getElementById('spinit');
  // alignerSec.classList.add('aligner');
  alignerSec.style.setProperty('--ansec', ansec + "s");  
alignerSec.style.setProperty('--rot1', rot1 + "deg");  
  alignerSec.style.setProperty('--rot2', rot2 + "deg");  
  alignerSec.style.setProperty('--rot3', rot3 + "deg");  
  
  // Spin & square Rects
 spinRec = elem.getBoundingClientRect();
  themRec = elemThem.getBoundingClientRect();
  usRec = elemUs.getBoundingClientRect();
  itRec = elemIt.getBoundingClientRect();
  youRec = elemYou.getBoundingClientRect();  
  obj = spinRec.toJSON();
  objUs = usRec.toJSON();
  objThem = themRec.toJSON();
  objIt = itRec.toJSON();
  objYou = youRec.toJSON();
  CollisionTest(obj,objUs,objThem,objIt,objYou,'else');
  
rot33 = rot3;  
  }
}


// Add the spinner animation for N seconds
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// Tell where the blue dot has collided with the board
function CollisionTest(rect1,rect2,rect3,rect4,rect5,st){

  if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    us = true;
    elemUs.style.backgroundColor='red';
    console.log('Rect2 hit'+st);
}else if (rect1.x < rect3.x + rect3.width &&
   rect1.x + rect1.width > rect3.x &&
   rect1.y < rect3.y + rect3.height &&
   rect1.height + rect1.y > rect3.y) {
  them = true;
  elemThem.style.backgroundColor='red';
  console.log('Rect3 hit'+st);
}else if (rect1.x < rect4.x + rect4.width &&
   rect1.x + rect1.width > rect4.x &&
   rect1.y < rect4.y + rect4.height &&
   rect1.height + rect1.y > rect4.y) {
  it = true;
    elemIt.style.backgroundColor='red'; 
  console.log('Rect4 hit'+st);
}else if (rect1.x < rect5.x + rect5.width &&
   rect1.x + rect1.width > rect5.x &&
   rect1.y < rect5.y + rect5.height &&
   rect1.height + rect1.y > rect5.y) {
    console.log('Rect5 hit'+st);
  you = true;
    elemYou.style.backgroundColor='red';
}
  
//   if (distance < circle1.radius + circle2.radius) {
//     // Collision detected!
// }
//   const dx = circle1.x - circle2.x;
//   const dy = circle1.y - circle2.y;
//   const distance = Math.sqrt(dx * dx + dy * dy);

//   const colliding = distance < circle1.radius + circle2.radius;
}



let dynamicStyles = null;

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }
dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

function ani(){
  var style = document.createElement('style');
style.type = 'text/css';
var keyFrames = '\
@-webkit-keyframes spinIt {\
    100% {\
        -webkit-transform: rotate(A_DYNAMIC_VALUE);\
    }\
}\
@-moz-keyframes spinIt {\
    100% {\
        -webkit-transform: rotate(A_DYNAMIC_VALUE);\
    }\
}';
style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
document.getElementsByTagName('head')[0].appendChild(style);
}
