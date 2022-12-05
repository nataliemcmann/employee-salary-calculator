//check js is sourced
console.log('Ready, set...');

//call jQuery 
$(document).ready(onReady);

//onReady function declared
function onReady(){
    //check jQuery is ready
    console.log('GO!');
    //click handler for submitting employee inputs
    $('#dataSubmit').on('click', handleDataSubmit);
    renderEmployeeData();
    $('table').on('click', '.removeEmp', deleteEmployee)
}

//function to handle dataSubit click
function handleDataSubmit(){
    processEmployeeInputData();
    renderEmployeeData();
}

//declare employees array
let employees = [];

//declare global variables
let totalMonthlySalary = 0;
let MaxTotalSalary = 20000;

//render employee data to DOM
function renderEmployeeData(){
    //console.log(employees);
     //reset total salary
    totalMonthlySalary = 0;
    $('#employeeData').empty();
    for (let i = 0; i < employees.length; i++){
    $('#employeeData').append(`
    <tr>
        <td >${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td><span id="employeeID">${employees[i].employeeID}</span></td>
        <td>${employees[i].jobTitle}</td>
        <td>$${employees[i].annualSalary}</td>
        <td><button class="removeEmp">Delete</button></td>
    </tr>
    `);
    incrementMonthlySalary(employees[i].monthlySalary);
    }
    renderTotalSalary();
    clearFields();
}

//clear input fields
function clearFields(){
$('#firstName').val('');
$('#lastName').val('');
$('#employeeID').val('');
$('#jobTitle').val('');
$('#annualSalary').val('');
}
//render total salary data to DOM
function renderTotalSalary(){
    //clear out span
    $('#calculatedMonthlySalary').empty();
    //append new salary total
    $("#calculatedMonthlySalary").append(`
    ${totalMonthlySalary.toFixed(2)}`);
    if (totalMonthlySalary >= MaxTotalSalary){
        $("#calculatedMonthlySalary").css('background-color', '#e63946');
    } else {
        $("#calculatedMonthlySalary").css('background-color', '#1e3557');
    }
}

//turn input field data into an object and put to array
function processEmployeeInputData(){
    let newEmployee = {};
    newEmployee.firstName = $('#firstName').val();
    newEmployee.lastName = $('#lastName').val();
    newEmployee.employeeID = $('#employeeID').val();
    newEmployee.jobTitle = $('#jobTitle').val();
    newEmployee.annualSalary = Number($('#annualSalary').val());
    newEmployee.monthlySalary = newEmployee.annualSalary/12;
    employees.push(newEmployee);
    //console.log(newEmployee.monthlySalary);
}

//function for adding to the monthly salary calculator
function incrementMonthlySalary(empMonthlySalary){
    //take employee monthly salary
    //add that to total monthly salary variable
    totalMonthlySalary += empMonthlySalary;
}

//function to hide employee on the DOM when clicked
function deleteEmployee(){
    //$(this).parent().parent().remove();
    //attempt to remove employee from state as a stretch goal
    //find parent of button
    //let buttonParent = $(this).parent();
    //was td, find siblings of td
    //let buttonSiblings = $(buttonParent).siblings();
    //was more td, couldn't find by td id, so wrapped my employee Id in a span
    //let childOfSiblings = $(buttonSiblings).children();
    //span is now a child, only td containing employee id has a child
    //let empToRemove = $(childOfSiblings).text();
    let empToRemove = $(this).parent().siblings().children().text();
    //now make empty array of employees to keep
    let empToKeep = [];
    //iterate through current array and keep all not matching empToRemove
    for (let employee of employees){
        if (employee.employeeID !== empToRemove){
            empToKeep.push(employee);
        }
    }
    employees = empToKeep;
    renderEmployeeData();
    //this automatically decrements the total
}