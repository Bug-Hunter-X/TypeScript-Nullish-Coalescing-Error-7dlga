function printName(name: string | null): void {
  console.log((name ?? "").toUpperCase()); //Nullish Coalescing Operator
}

function printName2(name: string | null): void {
  console.log(name?.toUpperCase()); //Optional Chaining
}

printName(null); // This will now print an empty string 
printName2(null); // This will now print undefined