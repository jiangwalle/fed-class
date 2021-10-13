const btn2 = document.querySelector('#btn2');
btn2.onclick = function() {
  alert('btn2 clicked');
}


const btn3 = document.querySelector('#btn3');

function read() {
  console.log(`Read books`);
}

function play() {
  console.log(`Play`);
}

btn3.addEventListener('click', read, { once: true });
btn3.addEventListener('click', play);
