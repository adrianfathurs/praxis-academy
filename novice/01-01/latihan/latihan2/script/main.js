
let myImage = document.getElementById('gambar1');
let myImage2 = document.getElementById('gambar2');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/index2.png') {
    myImage.setAttribute ('src','images/index.png');
  } else {
    myImage.setAttribute ('src','images/index2.png');
  }
}
myImage2.onclick = function() {
  let mySrc2 = myImage2.getAttribute('src');
  if(mySrc2 === 'images/index2.png') {
    myImage2.setAttribute ('src','images/index.png');
  } else {
    myImage2.setAttribute ('src','images/index2.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('masukan nama :');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}