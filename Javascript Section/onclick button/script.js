let changeImg = () => {
    let img = document.querySelector("img");
    if (img.getAttribute("src") === "images/app2.jpg") {
       console.log(img.src) 
       img.src= "images/app3.jpg";
    } else {
        console.log(img.src) 
       img.src= "images/app2.jpg";
    }
}