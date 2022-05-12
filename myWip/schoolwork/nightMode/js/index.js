console.log('Ready to Go!');

let bodyVar = document.querySelector('body');

let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');

let head1 = document.getElementById('heading-1');
let head2 = document.getElementById('heading-2');
let head3 = document.getElementById('heading-3');

let cont1 = document.getElementById('content-1');
let cont2 = document.getElementById('content-2');
let cont3 = document.getElementById('content-3');


//Event Handler Function
//This Function runs once WHEN the switcher is clicked
function nightModeHandler(){

  bodyVar.classList.toggle('body-day');
  bodyVar.classList.toggle('body-night');

  box1.classList.toggle('box-ay');
  box1.classList.toggle('box-night');

  box2.classList.toggle('box-day');
  box2.classList.toggle('box-night');

  box3.classList.toggle('box-day');
  box3.classList.toggle('box-night');

  head1.classList.toggle('content-day');
  head1.classList.toggle('content-night');

  head2.classList.toggle('content-day');
  head2.classList.toggle('content-night');

  head3.classList.toggle('content-day');
  head3.classList.toggle('content-night');

  cont1.classList.toggle('content-day');
  cont1.classList.toggle('content-night');

}

//Night Mode Event Handler
let switcher = document.getElementById('switcher');
//listen for when the switcher's input is changed
switcher.addEventListener('change', nightModeHandler);
