// let login = prompt("Who's there?")
// if(login === null){
//     console.log('cancelled')
// } 
// else if (login != "Admin"){
//     console.log('I dont know you!');
// } 

// else{
//     let password = prompt('What is your Password?')
//     if (password === "The Master"){
//         console.log('Welcome Boss!')
//     } else if (password === null){
//     console.log('Cancelled')
//     } else {
//         console.log('Wrong Password')
//     }
// } 

// for (let i = 0; i < 10; i++)
// {
//     if (i %  2 == 0) {
//         console.log('number', i)
//     }
// }

// for (let i = 0; i < 10; i++)
// {
//     if (i % 2 == 1){
//         console.log('number', i)
//     }
// } 
let myDisplay = document.getElementsByTagName('input');
for( let i = 0; i < myDisplay.length; i++) {
    console.log(myDisplay[i].value)
}
function validateForm(){
    let x = document.forms["myForm"]["name"]. value
   if (x === ""){
    console.log("please fill out this field")
    return false
   }
    

}
