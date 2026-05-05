let employees = JSON.parse(localStorage.getItem("employees")) || [];

function addEmployee() {
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;

    employees.push({ name, salary });
    localStorage.setItem("employees", JSON.stringify(employees));

    closeModal();
    loadEmployees();
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    loadEmployees();
}