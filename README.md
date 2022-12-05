# Project Name

Employee Salaray Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Problem: Create an application that records employee salaries and adds salaries up to report monthly costs. 

Step 1: I created a folder and the following files: index.html, client.js, styling.css. Copy a jquery.js file into this folder as well. 

Step 2: In the index.html file, I created the basic structure of the website. The header section holds the page header, the body is composed of an input fields section with a submit inputs button and a table to display the employee data, at the footer displays the total monthly cost.

Step 3: Description of client.js

    -jQuery is called using an onReady() function that contains two click handlers, one for the submit button and one for any delete button. The submit button click handlers calls the function handleDataSubmit()

    IN THE handleDataSubmit()
    -The client.js file declares an array for storing employee data (called employees) and a maxMonthlyCost variable set to 20000. 
    -A function processEmployeeData() is used to retrive data from the input fields, store the employee data as an object and push it into the empty array. Included in the processEmployeeData() function is a line that calculates an employee monthly salary based on their annual salary.
    -The employee data is rendered to the table in the DOM through the function renderEmployeeData(), which will loop through each employee in array, append their data to the table in a row alongside a delete button and calculate employee monthly salary through the function incrementMonthlyCost(). 
    -incrementMonthlyCost() declares totalMonthlyCost, initally sets it to zero, then takes an argument of employeeMonthlySalaray and adds that value to totalMonthly cost. 
    -Then renderTotalSalary() appends the current value of totalMonthlyCost, rounded to two decimal places, to the DOM and checks the value of totalMonthlyCost to maxMonthlyCost. IF totalMonthlyCost is greater than maxMonthlycost, then jQuery will apply css to turn the background of the text on the DOM to red. 
    -There is also a clearInputs() function that sets all the input fields back to the placeholder value

    IN THE deleteEmployee()
    -this function selects the employee id value next to the button clicked, creates an empty array called empToKeep, runs a loop that checks that employee against all the employee IDs in the employees array, pushes only the employee objects whose employee ID DOES NOT MATCH that id into empToKeep, and then sets employees to the values in the new array empToKeep. renderEmployeeData() is then run again to refresh the DOM

Step 4: styling.css makes the page look pretty.   



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
