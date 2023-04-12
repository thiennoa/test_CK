function numberOneTriangle() {
    let num = document.getElementById("num").value;
    let result = document.getElementById("result");
    result.innerHTML = "";
    
    if (num < 1 || num > 10) {
      result.innerHTML = "Vui lòng nhập số trong khoảng từ 1 đến 10";
      return;
    }

    for (let i = 1; i <= num; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += "*";
      }
      result.innerHTML += row + "<br>";
    }
  }