
let add = (process.argv[2]*1+process.argv[3]*1);

//console.log(add);

let result;

if (add < 10) { 

	result = "less then 10";

} else if (add >= 10 && add < 100) { 

	result = "greater then 10 but less then 100";

} else if (add >= 100 && add < 1000) {

	result = "greater then 100 but less then 1000";

};

console.log(result);