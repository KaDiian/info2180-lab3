window.onload = function() {
  
let squares = document.querySelectorAll('#board div');
var x = 0 //Counts the amount of clicks
var c = []
 for(let i = 0; i < squares.length; i++) {
   squares[i].classList.add('square');
   squares[i].addEventListener('click', function(){
      if(x%2==0) {
        if(squares[i].innerHTML =='') {          
          squares[i].innerHTML = 'X';
          squares[i].classList.add ("X");
          c.push(squares[i].innerHTML);                                    
          x++;
        }
      }else
      {
        if(squares[i].innerHTML =='') {
          squares[i].innerHTML = 'O';
          squares[i].classList.add ("O");
          c.push(squares[i].innerHTML);
          x++;
        }
      }
    });
  }
}