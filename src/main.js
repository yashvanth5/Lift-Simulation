var simulate = document.querySelector(".simulate-btn");
simulate.addEventListener ('click' , hideFIrstPage);

function hideFIrstPage(){
    document.querySelector('.first-Page').style.display = 'none';
    document.querySelector('.second-Page').style.display = 'block';
  makingFloors();
}

var comeBack = document.querySelector('.goToFirstPage');
comeBack.addEventListener('click' , hideSecondPage);

function hideSecondPage(){
    document.querySelector('.second-Page').style.display = 'none';
    document.querySelector('.first-Page').style.display = 'block';
    deletingFloors();
}



