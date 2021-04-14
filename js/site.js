// Separate business logic

// Take user input and print numbers to the page
function printNumbers() {
  let startNum = parseInt(document.getElementById('numOne').value);
  let endNum = parseInt(document.getElementById('numTwo').value);
  let numbers = getRange(startNum, endNum);

  displayData(numbers);
}

// Gets the range of numbers
function getRange(start, end) {
  let numberArray = [];

  for (let i = start; i <= end; i++) {
    // fizzbuzz code goes here (business logic)
    // mortgage calculations go here (business logic)
    numberArray.push(i);
  }

  return numberArray;
}

// Displays the numbers on the page
// Dynamic templating
function displayData(numbers) {
  const rowTemplate = document.getElementById('Data-Template');
  const resultsBody = document.getElementById('resultsBody');

  // Dynamic Templating
  // rowTemplate = string of HTML tags (tr and td)
  // content.cloneNode('true)
  //     (true) creates a separate html nodelist (with everything in the string)
  //     tip: you can also use importNode (different location vs. same document)
  // querySelectorAll will return all instances
  let colCount = rowTemplate.content.cloneNode('true').querySelectorAll('td')
    .length;

  // Clear the table
  resultsBody.innerHTML = '';

  // Loop over every element in the numbers array
  // get the value and write it to the page
  // colCount lets us know how many to skip
  for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
    // You need to clone it each time
    let dataRow = rowTemplate.content.cloneNode('true');

    // Return an array of columns
    let cols = dataRow.querySelectorAll('td');

    for (let colIndex = 0; colIndex < cols.length; colIndex++) {
      // Remember the rowIndex is skipping by the td length
      let value = numbers[rowIndex + colIndex];

      // Check if out of bounds
      if (typeof value === 'undefined') {
        value = '';
      } else if (value % 2 === 0) {
        // This is a fizzbuzz tip (styling the result)
        cols[colIndex].classList.add('boldIt');
      }

      // TD value is textContent (not like other HTML tags that use value or innerHTML)
      cols[colIndex].textContent = value;
    }

    // Inside the row loop (add row to the page)
    resultsBody.appendChild(dataRow);
  }
}
