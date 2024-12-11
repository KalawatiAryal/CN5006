//defination of  the function EmployeeInfo
function EmployeeInfo(name,Salary) 
{ 
console.log("Wellcome " + name+ "Your monthly Salary is "+ Salary) 
} 
console.log ("This is my first progame") 
var EmpName="Kalawati"  
var EmpSalary= 100000 
// calling of the function EmployeeInfo 
EmployeeInfo(EmpName,EmpSalary) 

//Exercise 1  Create Arrow Functions

const EmpSkills= (skills)=> { 
    console.log("Expert in "+ skills) 
  } 
  EmpSkills("java")

const student = require("./Studentinfo")
// because getName is the function so we use () 
console.log("Student Name:" +student.getName())  
console.log(student.Location())  
console.log(student.dob)  
// because dob is a variable so we do n0t use () 
console.log(student.Studentgrade()) 
console.log("grade is "+student.Studentgrade(55) ) 

const person = require('./Person')
// creating new Person 
person1= new person("Jim","USA","myemail@gmail.com") 
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended")