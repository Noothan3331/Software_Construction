function loadEmployees() {
    const table = document.querySelector("#employeeTable tbody");
    table.innerHTML = "";

    employees.forEach((emp, index) => {
        table.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
                <td>
                    <button onclick="deleteEmployee(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function searchEmployee() {
    const query = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#employeeTable tbody tr");

    rows.forEach(row => {
        const name = row.children[0].innerText.toLowerCase();
        row.style.display = name.includes(query) ? "" : "none";
    });
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}