let numberOfApp = 10;
let count = 0;
console.log("Counting From 10 to 0")

while(numberOfApp >= count){
    console.log(count)
    count++
}


let arr = [1, 2, 999, 56, "Mithun", 1234, "pw"];
console.log(typeof arr);

for(let i=0; arr.length > i; i++){
    let valueType = typeof arr[i];
    /*console.log(typeof arr[i]);*/

    if(valueType === "string"){
        console.log("Found The First String:" + arr[i]);
        break;
    }
}