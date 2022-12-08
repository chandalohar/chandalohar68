//1.	find the duplicate in a string() (use array) -optional

//2.	reverse a string (use array method)
var color = ["pink", "blue", "red", "orange","black","yellow","purple"];

color.reverse();
console.log(color);// ['purple', 'yellow', 'black', 'orange', 'red', 'blue', 'pink']






//3.	find the highest and lowest value in array
var num = [10, 20, 30, 40,50,60,70,80,90,100];
console.log(Math.max(...num));//100
console.log(Math.min(...num));//10







//4.	sorting of an array - optional












//5.	(employee data structure): practice array of objects
var employee=[
            { 
                eid:111,
                ename:"one",
                esal:10000
            },
            { 
                eid:222,
                ename:"two",
                esal:20000
            },
            { 
                eid:333,
                ename:"three",
                esal:30000
            },
            { 
                eid:444,
                ename:"four",
                esal:40000
            }
            
]
console.log(employee[0]);     //{eid: 111, ename: 'one', esal: 10000}
console.log(employee[2]);          //{eid: 333, ename: 'three', esal: 30000}
console.log(employee[1]);           //{eid: 222, ename: 'two', esal: 20000}
console.log(employee[3]);                       //{eid: 444, ename: 'four', esal: 40000}
console.log(employee[0].eid);               //111
console.log(employee[0].ename);             //one
console.log(employee[0].esal);                  //10000






//6.	display first 3 elements in an array
var num = [10, 20, 30, 40,50,60,70,80,90,100];
console.log(num[0],num[1],num[2]);



//7.	remove 4th (index) element and add 2 element there.
var mix = [90, "hello", null, NaN, true,100,200,400,800,900,"yellow","pink","green"];
mix.splice(4, 1, "first", "second");
console.log(mix);   //(14) [90, 'hello', null, NaN, 'first', 'second', 100, 200, 400, 800, 900, 'yellow', 'pink', 'green']




//8.	Study events, onload, ondoubleclick, onsubmit, onchange, onkeyup, onkeydown





//9.	task on function and math object
//9.1    create parametrized method/function to multiply 3 numbers.
function multiply(a, b,c) {
    //parameters
    var mul = a*b*c;
    console.log(mul);
  }
  multiply(20,10,60);               //12000
   

  //9.2   create parametrized method to divide 2 numbers.
  function divisiovn(a,b) {
    //parameters
    var div = a/b;
    console.log(div);
  }
  divisiovn(10000,200);   //50




  //9.3  create a method to add background color to div element


  function getName() {
    document.getElementById("display").style.backgroundColor = "pink";
    document.getElementById("display").style.color = "teal";
  
  }
  

  // 9.4  write a js method, when user click on button, display random integer below it.
  function getNumber() {
    var n = document.getElementById("number").value;
    document.getElementById("num").innerHTML = n;
    

  }

  //9.5  write js function to format number up to specified decimal places.
    function decimalNmber(){
        var num = document.getElementById("decimal").value;
        //var n = num.toFixed(10);
        document.getElementById("demo").innerHTML = num;
        console.log(n);
   }                                       //could not Understood.


//9.6 write function to convert negative number to positive number
        var n = -30;
        var m = 15;
        a = Math.abs(n);
        b = Math.abs(m);
        console.log(a); //30
        console.log(b); //15



//9.7  write function to generate random background color of body.

//its done  by using bacground.html
  



//9.8 onload of your webpage, display modal (bootstrap 4/5)
//its done model.html













