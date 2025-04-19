//your JS code here. If required.
function manipulateArray() {
  const initialArray = [1, 2, 3, 4];
  const outputDiv = document.getElementById('output');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialArray);
    }, 3000);
  })
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          outputDiv.textContent = evenNumbers.join(',');
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenArr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenArr.map((num) => num * 2);
          outputDiv.textContent = multipliedNumbers.join(',');
          resolve();
        }, 2000);
      });
    });
}

manipulateArray();