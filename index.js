const userDate = document.querySelector(".calculator input")
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");


btn.addEventListener("click",displayDate);


function displayDate(){
    let birthday = userDate.value;
    if(birthday === ""){
        alert("enter the date of birth ")
    }
    let result = getAge(birthday);
    console.log(result)
    if(isNaN(result.age) && isNaN(result.month) && isNaN(result.days)){
        display.children[0].children[0].innerText = "-";
        display.children[1].children[0].innerText ="-";
        display.children[2].children[0].innerText = "-";
       
    }else{
        display.children[0].children[0].innerText = result.age;
        display.children[1].children[0].innerText = Math.abs(result.month);
        display.children[2].children[0].innerText = Math.abs(result.days);
    }


    // userDate.value ="";
}
function getAge(birthday){
    let todayDate = new Date();
    let birthDay = new Date(birthday);
    let age = todayDate.getFullYear() - birthDay.getFullYear(); 
    let month = todayDate.getMonth() - birthDay.getMonth();
    let days = todayDate.getDate() - birthDay.getDate();

    if(birthDay > todayDate){
        alert("please write valid DOB I am not Time machine")
        return;
    }

    if(age > 110){
        alert(`please write valid DOB You might be dead !!`)
        return;
    }
  
    if((month < 0) || (month === 0 && todayDate.getDate() < birthDay.getDate())){
        age--; 
    }
     
    return {age,month,days};
}