let h1 = document.querySelector('.text-info')
let i = 0
let setInt = setInterval(() => {
  h1.innerText = i
  if (i == 100) clearInterval(setInt)
  i++
}, 30)
console.log(setInt)

let scrollDiv = document.getElementById('scroll-div')
scrollDiv.addEventListener('scroll', (e) => {
  console.log(e.target.scrollTop)
  if (e.target.scrollTop > 300) {
    console.log('greater than 300')
    scrollDiv.classList.remove('alert-success')
    scrollDiv.classList.add('alert-danger')
  }
})