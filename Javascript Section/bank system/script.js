let users = [];

function addUser() {
  let id = prompt("Enter User ID:");
  let name = prompt("Enter User Name:");
  let balance = parseFloat(prompt("Enter Initial Balance:"));
  users.push({ id, name, balance });
  console.log(`User ${name} added successfully!`);
}

function editUserBalanceById() {
  let id = prompt("Enter User ID to edit balance:");
  let newBalance = parseFloat(prompt("Enter New Balance:"));
  let user = users.find(u => u.id == id);

  if (user) {
    user.balance = newBalance;
    console.log(`Updated balance for user ${user.name} (ID: ${id}) to ${newBalance}`);
  } else {
    alert("User not found!");
  }
}

function transferBalance() {
  let fromID = prompt("Enter Sender User ID (fromID):");
  let toID = prompt("Enter Receiver User ID (toID):");
  let amount = parseFloat(prompt("Enter Amount to Transfer:"));
  let sender = users.find(u => u.id == fromID);
  let receiver = users.find(u => u.id == toID);

  if (!sender) {
    alert("Sender not found!");
    return;
  }
  if (!receiver) {
    alert("Receiver not found!");
    return;
  }
  if (sender.balance < amount) {
    alert("Insufficient balance for transfer!");
    return;
  }

  sender.balance -= amount;
  receiver.balance += amount;
  console.log(`Successfully transferred ${amount} from ${sender.name} to ${receiver.name}`);
}

function deleteUserById() {
  let id = prompt("Enter User ID to delete:");
  let index = users.findIndex(u => u.id == id);

  if (index != -1) {
    let deletedUser = users.splice(index, 1);
    console.log(`User ${deletedUser[0].name} deleted successfully!`);
  } else {
    alert("User not found!");
  }
}


addUser();
addUser();
addUser();
console.log("Current Users:");
console.table(users);

editUserBalanceById();
console.log("Current Users:");
console.table(users);

transferBalance();
console.log("Current Users:");
console.table(users);

deleteUserById();
console.log("Current Users:");
console.table(users);