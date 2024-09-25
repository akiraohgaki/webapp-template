import Counter from './Counter.ts';

const counter = new Counter();

const button = document.createElement('button');
button.textContent = 'Click me!';
button.addEventListener('click', () => {
  counter.increment();
  button.textContent = `${counter.value} Clicked`;
});

document.body.appendChild(button);
