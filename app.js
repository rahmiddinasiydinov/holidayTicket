let travelButton = document.querySelector(".travel__btn");
let modal = document.querySelector('.modal');
let btn = document.querySelector('.submit-btn');
let form = document.querySelector('.user-form');
let congrats = document.querySelector('.congrats');
let fail = document.querySelector('.fail')
let differ = document.querySelector('.differ');

//prices of travel
let hotelUSD = 350;
let planeTicketUSD= 300;
let othersUSD = 500;
let toConvert = 10750;
let hotelUZS = hotelUSD*toConvert;
let planeTicketUZS= hotelUSD*toConvert;
let othersUZS = hotelUSD*toConvert;
let totalSum = hotelUZS + planeTicketUZS + othersUZS;

travelButton.addEventListener('click', function() {
    modal.classList.toggle('active');

})

//switching off the default value of form;

form.addEventListener('submit', function (event) {
    event.preventDefault();
   
    let userName = document.querySelector('.user-name').value.trim();
    let userMoney = document.querySelector('.user-money').value.trim();
    let  newName = document.querySelector('.name');
    let  newNameFail = document.querySelector('.name-fail');
    newName.textContent = userName;
    newNameFail.textContent = userName;
    
    if(totalSum <= userMoney){
        congrats.classList.add('active-block');
    }else{
        differ.textContent = Math.round((totalSum - userMoney)/toConvert, 2);
        fail.classList.add('active-block');
    }
     modal.classList.toggle('active');
})
