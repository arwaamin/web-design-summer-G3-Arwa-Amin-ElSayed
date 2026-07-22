let users = [];
let editIndex = -1;
let form = document.getElementById("loginForm");
let divsContainer = document.getElementById("divsContainer");
let submitBtn = document.getElementById("submitBtn");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    if(name == "" || email == ""){
        alert("All fields are required");
        return;
    }
    if(!email.includes("@")){
        alert("Invalid email");
        return;
    }
    let user = {
        name: name,
        email: email
    };
    if(editIndex == -1){
        users.push(user);
    }
    else{
        users[editIndex] = user;
        editIndex = -1;
        submitBtn.textContent = "Add User";
        submitBtn.classList.replace('btn-success', 'btn-primary');
    }
    showUser();
    form.reset();
});
function showUser(){
    divsContainer.innerHTML = "";
    users.forEach((user, index) => {
        divsContainer.innerHTML += `
            <div class="alert alert-primary mt-5">
                <h2>Name : ${user.name}</h2>
                <h3>Email : ${user.email}</h3>
                <button class="btn btn-danger" onclick="deleteUser(${index})">
                    Remove User
                </button>
                <button class="btn btn-warning" onclick="editUser(${index})">
                    Edit User
                </button>
            </div>
        `;
    });
}
function deleteUser(index){
    users.splice(index, 1);
    showUser();
}
function editUser(index){
    form.elements[0].value = users[index].name;
    form.elements[1].value = users[index].email;
    editIndex = index;
    submitBtn.textContent = "Save Changes";
    submitBtn.classList.replace('btn-primary', 'btn-success');
}