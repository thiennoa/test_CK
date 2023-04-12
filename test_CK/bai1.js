

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

function displayPrimes() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let sum = 0;
  let primes = [];
  if (a >= b) {
    alert("Số a phải nhỏ hơn số b!");
    return;
  }
  for (var i = parseInt(a); i <= parseInt(b); i++) {
    if (isPrime(i)) {
      sum += i;
      primes.push(i);
    }
  }
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h2>Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + sum + "</h2><h2>Danh sách các số nguyên tố:</h2><ul>" + primes.map(function(x){return "<li>" + x + "</li>";}).join("") + "</ul>";
}

let button = document.getElementById("calculate");
button.addEventListener("click", displayPrimes);
