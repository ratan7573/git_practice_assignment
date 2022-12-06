//Problem 2 : Check whether a string is palindrome or not.
let str= "madam";
let str1="";
for(let i=str.length-1; i>=0; i--)
{
    str1= str1+str[i];
}
if(str==str1){
    console.log("Yes");
}
else{
    console.log("No");
}