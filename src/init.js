alert('init.js loaded!');
const dom = {
  counter: document.getElementById('counter'),
  increase: document.getElementById('increase'),
  reset: document.getElementById('reset'),
  decrease: document.getElementById('decrease'),
};
let data = 0;
const incrementNum = () => {
  data += 1;
  dom.counter.innerText = data;
};

const resetData = () => {
  let clickReset = 0;
  dom.counter.innerHTML = clickReset;
};

const decrementNum = () => {
  data -= 1;
  dom.counter.innerHTML = data;
};

dom.increase.addEventListener('click', incrementNum);
dom.decrease.addEventListener('click', decrementNum);
dom.reset.addEventListener('click', resetData);
