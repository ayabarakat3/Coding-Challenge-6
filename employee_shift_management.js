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