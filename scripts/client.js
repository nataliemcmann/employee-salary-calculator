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
let employees = [
    {
    firstName: 'Kyle',
    lastName: 'Marmesh',
    employeeID: 1234556,
    jobTitle: 'Therapist',
    annualSalary: 40000,
    monthlySalary: 3333.33
    },
    {
    firstName: 'Tracy',
    lastName: 'McMann',
    employeeID: 78910,
    jobTitle: 'Lead Mechanic',
    annualSalary: 820000,
    monthlySalary: 6833.33
    }
];

//declare global variables
let totalMonthlySalary = 0;
let MaxTotalSalary = 20000;

//render employee data to DOM
function renderEmployeeData(){
     //reset total salary
    totalMonthlySalary = 0;
    $('#employeeData').empty();
    for (let i = 0; i < employees.length; i++){
    $('#employeeData').append(`
    <tr>
        <td >${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td id="employeeID">${employees[i].employeeID}</td>
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
    ${totalMonthlySalary}`);
    if (totalMonthlySalary > MaxTotalSalary){
        $("#calculatedMonthlySalary").css('background-color', 'red');
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
    console.log(newEmployee.monthlySalary);
}

//function for adding to the monthly salary calculator
function incrementMonthlySalary(empMonthlySalary){
    //take employee monthly salary
    //add that to total monthly salary variable
    totalMonthlySalary += empMonthlySalary;
}

//function to hide employee on the DOM when clicked
function deleteEmployee(){
    $(this).parent().parent().remove();
    //attempt to remove employee from state as a stretch goal
    //let empToRemove = $(this).siblings('#employeeID').val();
    //console.log(empToRemove);
    //stretch goal should removed their salary from the total
    //decrementMonthlySalary();
    renderTotalSalary();
}



//stretch goal: function for removing salary once employee is removed
//function decrementMonthlySalary(empMonthlySalary){
    //reset global variable
    //take employee monthly salary
    //add that to total monthly salary variable
//    totalMonthlySalary -= empMonthlySalary;
//}

