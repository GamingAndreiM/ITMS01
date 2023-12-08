//Calculate Fibonacci Sequence
function calculateFibonacci() {
  const inputElement = document.getElementById("fibo");
  const resultElement = document.getElementById("result");

  const n = parseInt(inputElement.value);

  if (!isNaN(n) && n >= 0) {
    const sequence = fibonacci(n);
    resultElement.innerHTML = `<p>Fibonacci Sequence: ${sequence.join(
      ", "
    )}</p>`;
  } else {
    resultElement.innerHTML = "<p>Please enter a non-negative integer.</p>";
  }
}

function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

//Calculate Lucas Sequence
function calculateLucas() {
  const inputElement = document.getElementById("lucas");
  const resultElement = document.getElementById("result");

  const n = parseInt(inputElement.value);

  if (!isNaN(n) && n >= 0) {
    const sequence = lucas(n);
    resultElement.innerHTML = `<p>Lucas Sequence: ${sequence.join(", ")}</p>`;
  } else {
    resultElement.innerHTML = "<p>Please enter a non-negative integer.</p>";
  }
}

function lucas(n) {
  let sequence = [2, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

//Calculate Tribonacci Sequence

function calculateTribonacci() {
  const inputElement = document.getElementById("tribo");
  const resultElement = document.getElementById("result");

  const n = parseInt(inputElement.value);

  if (!isNaN(n) && n >= 0) {
    const sequence = tribonacci(n);
    resultElement.innerHTML = `<p>Tribonacci Sequence: ${sequence.join(
      ", "
    )}</p>`;
  } else {
    resultElement.innerHTML = "<p>Please enter a non-negative integer.</p>";
  }
}

function tribonacci(n) {
  let sequence = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
  }
  return sequence;
}
