let arr = [1, 2, 999, 56, "Mithun", 1234, "pw"];

for(let i=0; arr.length > i; i++){
    let valueType = typeof arr[i];

    if(valueType === "string"){
        console.log("Found The First String:" + arr[i]);
        break;
    }
}