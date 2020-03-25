





var foods=[];
var renderrrr = document.createElement('ol');
document.body.appendChild(olel);

// var form=document.createElementbyid('write');




function Order (food,number){ 
  this.option=food;
  this.number=number;
  foods.push(this);
//   new Order ('burger',3);
//   console.log(Order);


}

document.getElementById("write").addEventListener("click", function(event){
    event.preventDefault();
    var option1= event.target.value;
    var number1= event.target.value;
     
    new Order(option1,number1);


  });
function render (){
    olel.innerHTML='';
    for (var r=0; r<foods.length; r++){
        var liEl =document.createElement('li');
        ol.appendChild.(liEl);
        liEl.textContent. = foods[r].food;

        var liEl2 =document.createElement('p');
        ol.appendChild.(liEl);
        liEl2.textContent. = foods[r].number;
        setthing ();
        


    }

render ();

}
  

// localstoreg
 
function setthing (){
localStorage.setItem('ol');
if(
var read = foods = JSON.stringify('food','number')
)}
function gitthings (){
localStorage.getItem.('ol');
foods.parse.(read);

}


