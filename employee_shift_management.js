// Task 1: Create an Employees Array of Employee Objects
const employees = [
{ name: 'Tatiana', shifts: [{ day: 'Tuesday', hours: 7 }, { day: 'Friday', hours: 8 }] },
{ name: 'Ayla', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesdy', hours: 5 }] },
{ name: 'Andy', shifts: [{ day: 'Wednesday', hours: 6 }] },
{ name: 'Liam', shifts: [{ day: 'Tuesday', hours: 8 }] }];
console.log(employees);
// Array has been created and contains the data set that will be used for this challenge. 
// Task 1 is now complete. 

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
console.log("Name: " + employee.name);
console.log("Employee shifts:");
employee.shifts.forEach(function(shift) {
console.log("Working day: " + shift.day + ", Working duration in hours: " + shift.hours);});}
// This function is meant to display the information regarding the employees and their shifts during the week. 
employees.forEach(function(employee) {
displayEmployeeShifts(employee);}); 
/* Function ensures that the function goes through every employee and displays the information regarding all employees. 
Output matches information in the data set.
Task 2 is now complete. */

// Task 3: Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours) {
let employee;
for (let staffMember of employees) {
if (staffMember.name === employeeName) {
employee = staffMember;}}
// Loop has been created to ensure function goes through every employee to find desired employee information.
if (!employee) {console.log("Error: " + employeeName + " is not an employee.");
// Function meant to display message if employee listed is not found. 
return;}
for (let shift of employee.shifts) {
if (shift.day === day) {
console.log("Error: " + employeeName + "'s shift is already scheduled on " + day + ".");
return;}}
// Function meant to display error message if employee shift is already scheduled.
employee.shifts.push({ day: day, hours: hours });
console.log("Operation successful! A new shift has been assigned for " + employeeName + " for " + hours + " hours" + " on " + day + '.');}
// Function meant to display message if a new shift has been assigned. 
// Testing function from all aspects.
assignShift("Ayla", "Monday", 7);
assignShift("Andy", "Monday", 5);
assignShift("William", "Wednesday", 8);
// Function displayed accurate output and messages. 
// Task 3 is now complete. 