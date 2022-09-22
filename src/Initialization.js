import {moveBars} from './Bars';

export var arr = [];

export function initializeArray() {
  arr = [];
  for (var i = 1; i <= 200; i++) {
    arr.push(i);
  }
}

export function resetBarPositions(arr) {
  for (var i = 0; i < arr.length; i++) {
    var x = document.getElementById(arr[i]);
    x.style.left = (i*0.5)+10+"rem";
  }
}

export function resetPos() {
  var y = 3.5;
  for(var i = 1; i <= 200; i++) {
    var x = document.getElementById(i);
    x.style.left = (i*0.5)+10+"rem";
    x.style.width = "5px";
    x.style.position ="absolute";
    x.style.backgroundColor = "white";
    x.style.borderRadius = "10px";
    x.style.boxShadow = "2px 2px 4px black"
    x.style.height = y+"px";
    x.style.top = "13rem";
    y+=3.5;
  }
  initializeArray();
}

export function descendingPos() {
  console.log(arr);
  arr = [];
  var pos = 2;
  for(var i = 200; i >= 1; i--) {
    var x = document.getElementById(i);
    x.style.left = (pos*0.5)+10+"rem";
    pos += 1;
    arr.push(i);
  }
  console.log(arr);
}

export function randomPos() {
  resetPos();
  arr = [];
  var tmp = true;
  var rnd = 0;
  for(var i = 1; i <= 200; i++) {
    while(tmp) {
      rnd = Math.floor((Math.random() * 200) + 1);
      if(!arr.includes(rnd)) {
        var x = document.getElementById(rnd);
        x.style.left = (i*0.5)+10+"rem";
        arr.push(rnd);
        tmp = false;
      }
    }
    tmp = true;
  }
}

export function swap(pos1,pos2) {
    console.log("Tausche: "+arr[pos1]+" mit "+arr[pos2]);
    moveBars(arr[pos1],arr[pos2],arr[pos2],arr[pos1]);
    var tmp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = tmp;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}