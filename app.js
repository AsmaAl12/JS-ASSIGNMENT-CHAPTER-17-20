//==================Assignment Chapter(17-20)=================================//
//===================Arrays and Loops=====================================//



// Q1: Declare and initialize an empty multidimensional array.(Array of arrays):
// var cities = [
//     [],
//     [],
//     []
// ]
// document.write("<br><br><br>");



//Q2:Declare and initialize a multidimensional array representing the following matrix:
//0,1,2,3
//1,0,1,2
//2,1,0,1
//Ans:
// var numbers = [
//     [0,1,2,3 + "<br>"]+
//     [1,0,1,2 + "<br>"]+
//     [2,1,0,1]
// ]
// document.write(numbers);
// document.write("<br><br><br>");



// Q3:Write a program to print numeric counting from 1 to 10.
// Ans:
// document.write("<b>Counting from 1 to 10:</b><br>")
// for(var i = 0 ; i<= 10 ; i++){
//     document.write( + i + "<br>");
// }
// document.write("<br><br><br>");



// Q4: Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user. 
//Ans:
// var userInput = parseInt(prompt("Enter a number to show it's multiplication table!"));
// var lengthOFTable = parseInt(prompt("What should be the length of multiplication table of " + userInput));
// document.write("<b>Multiplication table of " + userInput + " length " + lengthOFTable + ":</b><br><br>");
// for(var i = 1 ; i <= lengthOFTable ; i++){
//     document.write(userInput + "x" + i + "=" + userInput*i + "<br>");
// }
// document.write("<br><br><br>");



// Q5:Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];
//Ans:
// var fruits = ["apple","banana","mango","orange","strawberry"];
// document.write("<b>Fruits Array:</b><br><br>");
// for(var i = 0 ; i <= fruits.length - 1 ; i++){
//     document.write(fruits[i]+"<br>");
// }

// Q6:Generate the following series in your browser.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//Ans:
// document.write("<b>Forward Counting from  1 to 15:</b><br><br>");
// for(var i = 0 ; i <= 15 ; i++){
//     document.write(i + "  ,   ");
// }
// document.write("<br><br><br>")
// document.write("<b>Reverse Counting from 10 to 1:</b><br><br>");
// for(var i = 10 ; i > 0 ; i--){
//     document.write(i + "  ,   ");
// }
// document.write("<br><br><br>");
// document.write("<b>Even numbers from 0 to 20</b><br><br>");
// for(var i = 0 ; i <= 20 ; i++){
//     if(i % 2 === 0){
//         document.write(i + "  ,   ");
//     }
// }
// document.write("<br><br><br>");
// document.write("<b>Odd numbers from 1 to 20:</b><br><br>");
// for(var i = 0 ; i <= 20 ; i++){
//     if(i % 2 === 1){
//         document.write(i + "  ,   ");
//     }
// }
// document.write("<br><br><br>");
// document.write("<b>Series:</b><br><br>");
// for(var i = 2 ; i <= 20 ; i++){
//     if(i % 2 === 0){
//         document.write(i + "k" + "  ,   ");
//     }
// }
// document.write("<br><br><br>");



// Q7: You have an array:
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.
// Ans:
// var A = ["cake","apple pie","cookie","chips","patties"];
// var userInput = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
// userInput = userInput.toLowerCase();
// var matchFound = false;
// for(var i = 0 ; i <= A.length ; i++){
//     if(userInput === A[i]){
//         matchFound = true;
//         alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery!");
//     }
// }
// if(matchFound === false){
//     alert("We are sorry " + userInput + " is not available in our Bakery!");
// }
// document.write("<br><br><br>");



// Q8:. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
// Ans:
// var A = [24,53,78,91,12];
// var largestNumber = A[0];
// for (var i = 0; i <= A.length; i++){
//     if(A[i] > largestNumber){
//         largestNumber = A[i];
//     }
// }
// document.write("Array Items: " + A + "," + "<br>")
// document.write("The largest number is: " + largestNumber);
// document.write("<br><br><br>");



// Q9: Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
// Ans:
// var A = [24,53,78,91,12];
// var smallestNumber = A[0];
// for(var i = 0 ; i <= A.length ; i++){
//     if(A[i] < smallestNumber){
//         smallestNumber = A[i];
//     }
// }
// document.write("Array Items: " + A + "," + "<br>")
// document.write("The smallest number is: " + smallestNumber);
// document.write("<br><br><br>");



// Q10:Write a program to print multiples of 5 ranging 1 to 100:
// Ans:
document.write("<b>Multiplication table of 5:</b><br><br>");
for(var i = 5 ; i <= 100 ; i = i+5){
    document.write(i + "  ,   ");
}



//===================Assignment completed========================//

