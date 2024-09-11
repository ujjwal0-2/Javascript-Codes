const arr=[5,1,3,2,6,11];
  // binary 
  //function binary(x){
 //   return x.toString(2);
 // }

  // double value 
  //function double(x){
 
 // return x*2;
 // }

 // const output=arr.map(x => x.toString(2)) ;

 // console.log(output);

//function isOdd(x){
//    return x%2;
//}


 // filter;
//  const output=arr.filter(isOdd);
//  console.log(output);


// reduce Function in javascript
// function findSum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length ;i++){
//         sum =sum +arr[i];
//     }
//     return sum;
// }
 
// console.log(findSum(arr));
// const output=arr.reduce(function(acc,curr){
//       acc=acc+curr;
//       return acc;
// },0);

// 
const user=[
    {firstname:"Ujjwal", lastName:"Sharma", age:23},
    {firstname:"Atul", lastName:"Sharma", age:21},
    {firstname:"shobit", lastName:"Sharma", age:50},
    {firstname:"Rp", lastName:"Sharma", age:66},
    
];
// ujjwal atul in output

// const output=user.filter((x)=> x.age<30).map((x)=>x.firstname);
// console.log(output);

const output=user.reduce(function(acc,curr){
  if(curr.age<30){
    acc.push(curr.firstname);

  }
  return acc;

},[]);
console.log(output);



