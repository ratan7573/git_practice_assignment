//Problem 1 : Check whether a number is Prime or not
qty=0;
let num=13;
for(i=2; i<=num; i++)
{
    if(num%i==0){
      qty++
    }
}
if(qty===1){
    console.log("Yes");
}
else{
    console.log("No");
}