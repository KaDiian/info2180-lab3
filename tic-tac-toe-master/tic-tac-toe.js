window.onload = function() {
  
let squares = document.querySelectorAll('#board div');
var x = 0 //Counts the amount of clicks
var c = []
var j=9 //amount of clicks
var wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkResults() {
  for(let x = 0; x < 8; x++) {
      if(squares[wins[x][0]].innerHTML == 'X' && squares[wins[x][1]].innerHTML == 'X' && squares[wins[x][2]].innerHTML == 'X'){
        return 'X';
     } else if (squares[wins[x][0]].innerHTML == 'O' && squares[wins[x][1]].innerHTML == 'O' && squares[wins[x][2]].innerHTML == 'O'){
       return 'O';
      }
  }
  return 'none';
}

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
    if(checkResults()=='X'){
      console.log("X win this");  
      document.getElementById("status").className += "you-won";
      document.getElementById("status").innerHTML = ("Congratulation! X is the Winner");
    }  
    j--;         
    x++;
  }
}else
{
  if(squares[i].innerHTML==''){
    squares[i].classList.add ("square","O");
    squares[i].innerHTML = 'O';
    c.push(squares[i].innerHTML);
    if(checkResults()=='O'){
      console.log("O win this");
      document.getElementById("status").className += "you-won";
      document.getElementById("status").innerHTML = ("Congratulation! O is the Winner");
    } 
    j--;
    x++;
  }
}
//Check if the game is a 'Draw'
if(checkResults()=='none' && j==0){
  console.log("None win this");
  document.getElementById("status").className += "you-won";
  document.getElementById("status").innerHTML = ("DRAW!");
} 
});
}
}