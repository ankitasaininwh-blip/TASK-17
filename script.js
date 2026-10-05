const output = document.getElementById("output");

// Promise-based division function
const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {

        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }

    });
};

// Function to test division
const testDivision = (num1, num2) => {

    const resultBox = document.createElement("div");
    resultBox.classList.add("result");

    resultBox.innerHTML = `<strong>Dividing ${num1} by ${num2}...</strong>`;

    output.appendChild(resultBox);

    divide(num1, num2)
        .then(result => {
            resultBox.classList.add("success");
            resultBox.innerHTML += `<br>Result: ${result}`;
        })
        .catch(error => {
            resultBox.classList.add("error");
            resultBox.innerHTML += `<br>Error: ${error}`;
        });
};

// Test Case 1
testDivision(10, 2);

// Test Case 2
testDivision(20, 4);

// Test Case 3
testDivision(15, 3);

// Test Case 4
testDivision(25, 5);

// Test Case 5 - Division by zero
testDivision(10, 0);