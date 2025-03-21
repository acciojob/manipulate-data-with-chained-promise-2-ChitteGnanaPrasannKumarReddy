//your JS code here. If required.

function filterOddNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            document.getElementById('output').textContent = evenNumbers.join(', '); 
            resolve(evenNumbers);
        }, 1000);
    });
}