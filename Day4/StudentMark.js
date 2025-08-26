
const arr=[78, 55, 89, 92, 67];
  
const sum=arr.reduce((arr,n)=>arr+n,0);
console.log("Sum is ",sum);

const avg=sum/arr.length;
console.log("Average is ",avg);

console.log("Students with more than 60 marks are ");
console.log(arr.filter(a=>a>60));

const highest=Math.max(...arr);
console.log("Highest marks is ",highest);

const lowest=Math.min(...arr);
console.log("Lowest marks is ",lowest);

const h=4;
