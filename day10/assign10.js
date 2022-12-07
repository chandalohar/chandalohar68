// Implicit  coercion
//practice questions on implicit coercion


// console.log('A' - 1);                        //NAN
// console.log('A' + 1);                       //A1

// console.log(2 + '2' + '2');                     //222

// console.log('hello' + 'world' + 89);                //helloworld89
                               
//  console.log('hello' - 'world' + 89);                //NAN
                          
// console.log('hello' + 78);                          //hello78
                     
// console.log('78' - 90 + '2');                   //(78-90=-12)+2 = -122

// console.log(2 - '2' + 90);                                       //90

// console.log(89 - '90' / 2);                                      //44

// console.log(2+ '2' + null);                                      //22null (2+2+nuull)

// console.log(true == false) > 2;                                             //false

// console.log(89  + 'hello' + 90 / 9);                            //89hello10

// Datatypes
//1.......extract first five letters from a string. 
var str = "extract first five letters from a string.";
//console.log(str.length);
console.log(str.slice(0, 5));                                       //extract first five letters from a string.         =extra

//2...get the length of a string and make it uppercase. 
var strUpper ="get the length of a string and make it uppercase.";
console.log(strUpper.toUpperCase());                                        //GET THE LENGTH OF A STRING AND MAKE IT UPPERCASE.

//3...	take a string, make it lowercase and trim it. 
var strLower ="    Take a String, Make it Lowercase and Trim It.        ";
strTrim =(strLower.toLowerCase());
console.log(strTrim.trim());                                           //take a string, make it lowercase and trim it.


//4....	replace specified word in a string.
var replace = "extract first five letters from a string.";
console.log(replace.replace("five", "TEN"));                                    //extract first TEN letters from a string.

//5...  random statements in implicit coercion e.g. (89  + 'hello' + 90 / 9)
console.log(89  + 'hello' + 90 / 9);             //89hello10
console.log("world" + "20" + "world"+900 / 9);     //world20world100
console.log("100" * "200" + "world"+900 / 9);       //20000world100
console.log(20 - "20" - "10"+1100 / 10);           //100
console.log("" + 10900);                               //10900

console.log(8989  + 'shelovescode' + 88000 / 88);             //8989shelovescode1000
console.log("world" + "20" + "shelovescode"+88000 / 88);     //world20shelovescode1000
console.log("100" * "200" + "shelovescode"+88000 / 88);       //20000shelovescode1000
console.log(100 - "60" - "10"+88000 / 88);           //1030

//•6	create an object for car.

//1. object literal
var car = {
    name: "Ford",
    model: "Mustang",
    year: 1969,
    color:"white"
   
  };


    console.log(car);          //{name: 'Ford', model: 'Mustang', year: 1969, color: 'black'}
    console.log(typeof car); //object
    console.log(car.name);   //Ford
    console.log(car.model);  //Mustang
    //
    delete car.year;
    console.log(car);       //{name: 'Ford', model: 'Mustang', color: 'black'}

  // 2.Object.create()
var carObj = Object.create(car);
console.log(carObj.name);    //Ford
console.log(carObj.model);   //Mustang










