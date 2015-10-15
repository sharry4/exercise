// write your code in a .js file, stored in the js directory
// you should create one file for each exercise

var game = confirm('Do you want to play a game?');

if (game==true) {
    var secret = Math.floor(100 * Math.random()) + 1;
    var guess = prompt("What is the secret number(from 1-100)?");
    
    for(i=0; i<100; i++) {
        
        if (guess > secret) {
            document.write(guess + " ");
            var guess = prompt("Too big! Please try again");
            
        } else if (guess < secret) { 
            document.write(guess + " ");
            var guess = prompt("Too small! Please try again");
        
        } else {
            alert("Congratulation! You got the right number!");
            break;
        }
    
    }

    
} else {document.write("Thank you! Have a nice day!")}







 
    




