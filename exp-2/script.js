let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };

    employees.push(emp);
    document.getElementById("result").innerHTML = "Employee Added Successfully";
}

function displayAll() {
    let output = "";
    for (let emp of employees) {
        output += `Name: ${emp.name} | ID: ${emp.id} | Salary: ${emp.salary} | Dept: ${emp.department}<br>`;
    }
    document.getElementById("result").innerHTML = output || "No employees found";
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "";
    for (let emp of filtered) {
        output += `Name: ${emp.name} | Salary: ${emp.salary}<br>`;
    }
    document.getElementById("result").innerHTML = output || "No employees with salary > 50000";
}

function totalSalary() {
    let total = 0;
    for (let emp of employees) {
        total += emp.salary;
    }
    document.getElementById("result").innerHTML = "Total Salary: " + total;
}

function averageSalary() {
    if (employees.length === 0) return;
    let total = 0;
    for (let emp of employees) {
        total += emp.salary;
    }
    let avg = total / employees.length;
    document.getElementById("result").innerHTML = "Average Salary: " + avg.toFixed(2);
}

function countDepartment() {
    let deptName = prompt("Enter Department name:");
    let count = 0;
    for (let emp of employees) {
        if (emp.department === deptName) {
            count++;
        }
    }
    document.getElementById("result").innerHTML = `Employees in ${deptName}: ${count}`;
}