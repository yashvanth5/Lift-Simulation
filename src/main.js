let simulate = document.querySelector(".simulate-btn");
simulate.addEventListener ('click' , hideFIrstPage);

function hideFIrstPage(){
    document.querySelector('.first-Page').style.display = 'none';
    document.querySelector('.second-Page').style.display = 'block';
  makingFloors();
}
let comeBack = document.querySelector('.goToFirstPage');
comeBack.addEventListener('click' , hideSecondPage);

function hideSecondPage(){
    document.querySelector('.second-Page').style.display = 'none';
    document.querySelector('.first-Page').style.display = 'block';
    deletingFloors();
}


function makingFloors (){

  let floorInput = document.querySelector("#floor-no").value ;
  let liftInput = document.querySelector('#lift-no').value ;

  for (let i = floorInput; i > 0 ; i--){

    let floorDiv = document.createElement('div');
    floorDiv.className = 'box';

   let buttonLift = document.createElement('div');
   buttonLift.className = 'buttonLift' ;

   let buttondiv1 = document.createElement('div');
   buttondiv1.className = 'button' ;

   let button1 

  }

}


