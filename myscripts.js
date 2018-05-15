//looping a traingle 

var traingle = '';
for (var i = 0; i < 7; i++) {
  console.log(traingle += '#');
}


//FizzBuzz

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

//small code FizzBuzz

for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)



//Chess game


	function chessBoard(n,m){


	const hash    = "#";
	const space   = "";
	let printHash = "";

	
		for(let v=0; v<m; v++){
			for (let h=0; h<n; h++){
				if(v%2===0){
					h%2===0 ? printHash+=space : printHash+=hash;
				}else{
					h%2===0 ? printHash+=hash : printHash+= space
				}
				}
				printHash+="n";
			}
		}
	



//two while loops
int counter = 0
while (index1 < SIZE_PARAMETER)
	index2 = 0
	while( index2 < SIZE_PARAMETER) 
		if(counter%2 == 0)	// to print either space or #.   "%" operator returns the reminder
			print ('#')		
		else
			print(' ')
		index2++
	endwhile
	index1++
	//endwhile


// Recursion

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//Bean Counting

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


// The sum of a range

var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);


// Reversing an array

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// the list (JSON)

  arrayToList=(a)=> {
  var obj = null;
  for (let i=a.length; i>0; i--) {
    obj = {
      value:a[i],
      rest:obj
    }
  }
  return JSON.stringify(obj);
}

listToArray= (a) => {
  let obj =JSON.parase(a);
  let arr = [].push(a.value);
  return arr;
}


 // the list


let list = {};
let arr = [1, 2, 3, 4];

 function arrayToList(array){ 
     
    for (var i=array.length-1; i>=0; i--)  {
    	list.value= array[i];
    	if (i===array.length-1)
    		{list.rest=null;}
    	else list.rest=list;
    } 
    return list;
}

console.log(list);



// the list (splice)

	var arr1 = [10, 20, 30];

function arrayToList(arr) {
  var list = {};

 for (var i = 0; i < arr.length; i++) {
    list.value = arr.splice(0, 1)[0];
    list.rest = (arr.length > 0) ? arrayToList(arr) : null;
 }

 return list;
}

console.clear();
console.log(arrayToList)



// the list


function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Deep comparison

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true