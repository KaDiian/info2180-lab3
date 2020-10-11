window.onload = function() {
  
let squares = document.querySelectorAll('#board div');
var x = 0 //Counts the amount of clicks
var c = []

for(let i = 0; i < squares.length; i++){
  squares[i].addEventListener('mouseover', function (){    
    if(squares[i].innerHTML ==''){ 
      squares[i].classList.add("hover")
    }
  });
  
  squares[i].addEventListener('mouseleave', function (){    
      squares[i].classList.remove("hover");
  });
}

for(let i = 0; i < squares.length; i++){
  squares[i].classList.add('square');
  squares[i].addEventListener('click', function(){
    squares[i].classList.remove("hover");
    if(x%2==0){
      if(squares[i].innerHTML==''){
        squares[i].classList.add ("square","X");
        squares[i].innerHTML = 'X';
        c.push(squares[i].innerHTML);                                    
        x++;
      }
    }else
    {
      if(squares[i].innerHTML==''){
        squares[i].classList.add ("square","O");
        squares[i].innerHTML = 'O';
        c.push(squares[i].innerHTML);
        x++;
      }
    }
  });
}}