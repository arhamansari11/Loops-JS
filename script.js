// document.write("<h1> This is the pratcice of Color changer <h1/>")


let color =  document.querySelectorAll("div")
color.addEventlistner("Click", (al)=> {
    console.log(al.innertext)
    color.style.background = "black"
})



 // myBtn.addEventListener("click", function(e) {
// //     // console.log(e.clientX)
// //     // if(e.clientX > 108){
// //     //     myBtn.style.background = "red"
// //     // } else if (e.clientX < 108){
// //     //     myBtn.style.background = "blue"
// //     // }
// //     console.log(e.target.innerText)
// // })