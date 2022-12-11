//•	Using conditional statements and Take user input and display data in UI











//1..given number is multiple of 3 or not e.g.10900
function getName() {
  
  var num = document.getElementById("num").value;
  //   console.log(typeof num);
  var n = Number(num);

    if (n % 3 === 0) {
      document.write(n + " is multiple of 3");
    } else {
      document.write(n + " is NOT multiple of 3");
    }
    
  }















  //2.check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not
   var str= 'html java  js css python' ;
  document.write(str.includes('js')); // true
  document.write("<br>");
  document.write(str.includes('Snow')); // false
  document.write("<br>");














  //3.calculate complex interest ((p/r )* t) / 100 )
  var p=1000;
  var r=10;
  var t=2;
  var SI = (p * t * r)/100
  var CI=(p*[(1+(r/100))**t] -p);
  document.write("this is Simple Interest =  ", SI);
  document.write("<br>");
  document.write("this is Comlex Interest =  ", CI);
  document.write("<br>");















//4.given year leap year or not (29 in feb)
var year = 2022;
if(year % 4==0)
{
  document.write("LEEP YEAR = ",year);
  document.write("<br>");
}else{
  document.write("NOT  a LEEP YEAR = ",year);
  document.write("<br>");
}












//5.   0-6 display day week depending upon what user is entering (0-> sunday) :using switch.

function getAge() {
  
  var dayday = document.getElementById("numberDay").value;
  //   console.log(typeof num);
  var day = Number(dayday);
  switch (day) {
    case 0:
      document.write("It's Sunday!")
        break;
      case 1:
        document.write("It's Monday");
        break;
      case 2:
        document.write("It's Tuesday");
        break;
      case 3:
        document.write("It's Wednesday");
        break;
      case 4:
        document.write("It's Thursday");
        break;
      case 5:
        document.write("It's Friday");
        break;
      case 6:
        document.write("It's Saturday");
        break;
  }
    
  } 














//   //•	ATM Machine
// balance & query
// withdraw (amount)
// change pin
// mini statement
// saving & current acc.
// print receipt
// enter pin number













//1 multiplication table (ask number from user)
function multiTable(){
 var mul=document.getElementById("mulTable").value;
var k= Number(mul);
for(i=1; i<=10; i++){
  document.write(k,"*",i,"=",k*i);
  document.write("<br>");
}

}










//2.sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10) : hint - loops, divisor and modulus.
var num=1234, rem, sum=0;
  while(num)
  {
    rem = num%10;
    sum = sum+rem;
    num = Math.floor(num/10);
    document.write("<br>");
  }
  document.write("sum of digits = ",sum); //10
  document.write("<br><br>");













  //3.palindrome string (aca: aca(reverse) is a palindrome, abc: cba is not a palindrome): use loops.
      var a = "aca";
      var b = "";  
      for (i = a.length-1; i >= 0; i--)  
      {  
      b = b + a[i]  
      }  
      if (a == b)  {
      document.write(b," is a Palindrome String ");  }
      else {
      document.write(b," is not  a Palindrome String ");  
    } 













//4.display even numbers upto n number (ask user for number)
function evenNumber() {
  
  var even = document.getElementById("even").value;

i=1;
while(i<=even){
  if (i % 2 === 0) 
  {
    document.write(i + " is even number.");
  } else
  {
    document.write(i + " is odd number.");
    }
        i++;
  }
     

}




//5.ask user for the input, whether char is vowel or consonant
function getVowel() {
  var vowelChar = document.getElementById("vowel").value;
  if(vowelChar=='a' || vowelChar=='e' || vowelChar=='i' || vowelChar=='o' || vowelChar=='u')
  document.write("<b>"+vowelChar+"</b>" + " is a Vowel");
else if(vowelChar=='A' || vowelChar=='E' || vowelChar=='I' || vowelChar=='O' || vowelChar=='U')
  document.write("<b>"+vowelChar+"</b>" + " is a Vowel");
else
  document.write("<b>"+vowelChar+"</b>" + " is a Consonant");
}






//6.count of even and odd number from 1 to 999.
  var evenAdd = 999;
var even=0;
var odd=0;
var i=1;
while(i<=evenAdd){
  if (i % 2 == 0) 
  {
    even=even+i;
    
    
  }
 else {
    odd=odd+i;
    }
        i++;
  }
  document.write("<br><br>");
  document.write(even + " = Sum of even number from 1 to 999");
  document.write("<br><br>");
  document.write(odd + " = Sum of odd number from 1 to 999");
  document.write("<br><br>");




//7.count occurrence of a particular character in a string (hello: count of l is 2): loops





//8.sum and average of array elements [1, 9, 8];
var array = [1,2,3,4,5,6,7,8,9,10];
sum=0;
avg=0;
var i=0;
while(i<array.length){
  sum=sum+array[i]
  i++;
}
document.write("suum is = ",sum);
avg=sum/(array.length);
document.write("<br><br>");
document.write("avg is = ",avg);
document.write("<br><br>");






//9.largest number in an array (do with loops)
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write("largest number is = ",largest);
document.write("<br><br>");



// 10.From 1 to 100, print "foo" if multiple of 3, "bar" 
// if multiple of 5, if multiple of both display "hello" or else print the number.
// e.g.
// 1
// 2
//foo
// 4
// bar
// foo


//11.add only even numbers in an array (array elements to be input by user)

  var evenArra=  [3, 6, 2, 56, 32, 5, 89, 32];
  var even=0;
var odd=0;
var i=0;
while(i<=evenArra.length){
  if (evenArra[i] % 2 == 0) 
  {
    even=even+evenArra[i];
  }
        i++;
  }
  document.write(even," = Sum of even number in an array");

  document.write("<br><br>");
  document.write("<br><br>");
  //document.write(odd + " = Sum of odd number in an array");
  document.write("<br><br>");










//12.found an element in array [10, 78, 90] return 90 otherwise exit from an array// take user input.
const array1 = [10, 78, 90];
var i=0;
var found=0;
while( i<array1.length){
  if(array1[i]==90){
    var found = array1[i];
    document.write("90 is founded = ",found);
    document.write("<br><br>");
  }else{
    //document.write("not found");

  }
  i++;
}





//13.smallest number in an array
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (smallest > arr[i] ) {
      smallest = arr[i];
    }
}
document.write("smallest number is = ",smallest);
document.write("<br><br>");









//14.biggest of even number in an array ([10, 12, 90, 93, 707]): biggest even number is 90.
var bigevenArra= [10, 12, 90, 93, 707];
  var largesteven = arr[0];
  var largestodd = arr[0];

for (var i = 0; i < bigevenArra.length; i++) {
  if (bigevenArra[i] % 2 == 0) {
    if (largesteven < bigevenArra[i] ) 
    largesteven = bigevenArra[i];
    
  }
  
  else{ (largestodd < bigevenArra[i] ) 
    largestodd = bigevenArra[i];}
}
document.write(largesteven," = biggest even number is 90");
  document.write("<br><br>");
  document.write(largestodd," = biggest odd number is 707");
  document.write("<br><br>");
  document.write("<br><br>");







//15.add two array [10,20,30] + [1,2,3]: [11, 22, 33].
var arr1 = [10,20,30];
var arr2 = [1,2,3];
sum=[];

for(var i = 0; i < array1.length; i++){
  sum.push(arr1[i] + arr2[i]);
}
document.write("<br><br>");
document.write(sum); //11,22,33










//16.reverse an array(with loops) [10, 78, 0]: [0, 78, 10].















//17.reverse a string using loops




















