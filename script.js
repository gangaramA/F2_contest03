let employees = [];
let employeeId = 1;

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!name || !profession || !age) {
        showMessage('Error: Please make sure all the fields are filled before adding an employee!', 'error');
        return;
    }

    const employee = {
        id: employeeId++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };

    employees.push(employee);
    showMessage('Employee added successfully.', 'success');
    updateEmployeeList();
    this.reset();
});

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = 'message ' + type;
}

function updateEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    if (employees.length === 0) {
        employeeList.textContent = 'You have 0 Employees.';
        return;
    }

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <span>${employee.name}, ${employee.profession}, ${employee.age} years old</span>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    updateEmployeeList();
}
