function rev( str){
    return str.split("").reverse().join("");
}
console.log(rev("abc"));



const arr=[1,2,5,6,2,58,5,4];
 const sum=arr.reduce((arr,n)=>arr+n,0);

console.log("Sum is ",sum);
console.log("filtered array is ");
console.log(arr.filter(a=>a%2==0));
console.log("Mapped array is ");
const mapp=arr.map(a=>a*a);
console.log("mapm "+mapp);


   const user={name:"abc",age:20};
   const{name,age}=user;
    console.log(`${name} is a ${age} year old boy`);
