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
    annualSalary: 40000
    },
    {
    firstName: 'Tracy',
    lastName: 'McMann',
    employeeID: 78910,
    jobTitle: 'Lead Mechanic',
    annualSalary: 820000
    }
];

//declare global variables
let totalMonthlySalary = 0;
let MaxTotalSalary = 20000;

//render data to DOM
function renderEmployeeData(){
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
    `)
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

//function to hide employee on the DOM when clicked
function deleteEmployee(){
    $(this).parent().parent().remove();
    //attempt to remove employee from state as a stretch goal
    //let empToRemove = $(this).siblings('#employeeID').val();
    //console.log(empToRemove);
}


//function for adding to the monthly salary calculator
function incrementMonthlySalary(annualSalary){
    
}