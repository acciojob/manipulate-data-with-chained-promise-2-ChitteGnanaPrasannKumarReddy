//your JS code here. If required.
function processArray() {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); 
        }, 3000);
    });
}

function filterOddNumbers(array) {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            
            document.getElementById('output').textContent = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyByTwo(array) {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const multiplied = array.map(num => num * 2);
            
            document.getElementById('output').textContent = multiplied.join(', ');
            resolve(multiplied);
        }, 2000);
    });
}


processArray()
    .then(filterOddNumbers)
    .then(multiplyByTwo)
    .catch(error => console.error('Error:', error));