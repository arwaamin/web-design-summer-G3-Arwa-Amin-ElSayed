let courses = ["html", "css", "js"];
console.log(courses);
let searchItem = prompt("Enter the course name:");
if (searchItem == null) {
    console.log("Operation cancelled by user");
} else if (searchItem == "") {
    console.log("No search");
} else {
    let findElement = courses.find((item) => item == searchItem);
    if (findElement) {
        let index = courses.findIndex((item) => item == searchItem);
        console.log("Element found:", findElement);
        console.log("Index:", index);
    } else {

        console.log("Element not found!");
        console.log("Index:", -1);
        courses.push(searchItem);
        alert("added");
    }
}
console.log(courses)