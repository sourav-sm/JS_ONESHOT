//data type
//number string boolean null undefined
//ALSO JS IS A DYNAMIC LANGYAGE IT WE THE CHANGE BOTH OF VALUE NAD VALUE TYPE WHICH IN NOT POSSIBLE IN C++

let x="sourav";
console.log(x);
console.log(typeof(x));

let y=5;
console.log(y);
console.log(typeof(y));

let p="true";
console.log(p);
console.log(typeof(p));

let q;
console.log(q);
console.log(typeof(q));

/****BY VALUES AND BY REFERENCE */
let t="sourav";
let s=t;
t="mohanta";
console.log(t);
console.log(s);

let a={name:"sourav"}
let b=a;
a.name="mohnata"
console.log(a.name);
console.log(a.name);


//****OBJECTS ARRAY AND FUNCTION **/
let course={
    name:"sourav",
    id:"44",
    paid:"true"
}
console.log(course);
console.log(typeof(course));
console.log(course.name);

let course1=['dsa','devlopnet','0-1','1-100','0-100','hld','lld'];
console.log(course1[0]);
console.log(course1[1]);
console.log(course1[2]);

function createcourse(coursename){
    console.log("creating",coursename)
}
createcourse('dsa')
createcourse('hld')

//****HOISTING */
///HOISTING :- IN JS WE CAN ACCESS VARIBALE,FUNCTION BEFOR 
//INITITILIIZING THEM.EXAMPLE---
console.log(k);//undefined
var k=10;//it should var not let ot const
console.log(k);//10

//******LET VAR CONST****/
//TEMPORAL DEAD ZONE
const a=10;//globally NOT define
let a=20;//globally NOT define
var c=30;///globally define
//let and const are block scope like if-else {}
//but var is functional scope

