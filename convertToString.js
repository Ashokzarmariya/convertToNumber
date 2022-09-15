let a = {
 1: "one",
 2: "two",
 3: "three",
 4: "four",
 5: "five",
 6: "six",
 7: "seven",
 8: "eight",
 9: "nine",
 10:"ten",
 11:"eleven",
 12:"twelve",
 13:"thirteen",
 14:"fourteen",
 15:"fifteen",
 16:"sixteen",
 17:"seventeen",
 18:"eighteen",
 19:"nineteen"
}

let b={
 2:"twenty",
 3:"thirty",
 4:"fourty",
 5:"fifty",
 6:"sixty",
 7:"seventy",
 8:"eighty",
 9:"ninety"
}
// console.log(a)
//999,999,999

function convertToString(num) {
 //12345

 if(num==0)return "zero"
 return fiveDigit(num)
 
}

let ans=convertToString(00000)
console.log(ans)


function fiveDigit(num){

   
 if(num < 10000){
   return fourDigit(num)
 }
 
let ans="";
 let firstTwoNumber=num.toString().substr(0,2)
 
ans+=twoDigit(+firstTwoNumber);

ans+=' thousand'

let lastThreeNumber=num.toString().substr(2,4)
let lastTwoNumber=num.toString().substr(3,4)
if(lastThreeNumber!=="000") {
 if (lastThreeNumber[0] != "0") {
   ans+=" "+a[lastThreeNumber.toString()[0]]
  ans+=" hundred"
 }

  if (lastTwoNumber[0] == "0") {
   ans += " " + twoDigit(lastTwoNumber[1])
   
 }else
 ans += " " + twoDigit(lastTwoNumber)
 
  
  
 
 
}
return ans
}

function fourDigit(num){
 if(num<1000)return threeDigit(num)
let ans="";
ans+=a[num.toString()[0]];
ans+=' thousand'

let lastThreeNumber=num.toString().substr(1,2)
 let lastTwoNumber = num.toString().substr(2, 2)
  
if(lastThreeNumber!=="000") {
  ans+=" "+a[lastThreeNumber.toString()[0]]
 ans += " hundred"

 if (lastTwoNumber != '00') {
  
  if (lastTwoNumber[0] == "0") {
    ans += " " + twoDigit(lastTwoNumber[1])
    
  }else
  ans += " " + twoDigit(lastTwoNumber)
 }
   
 
 
 
}
return ans
}

function threeDigit(num){
 if(num<100)return twoDigit(num)
let ans="";
ans+=a[num.toString()[0]];
ans+=' hundred'

let lastTwoNumber=num.toString().substr(1)
if(lastTwoNumber!=="00") ans+=" "+twoDigit(lastTwoNumber)
return ans
}

function twoDigit(num){
 if(num<=19)return a[num]
 else {
   let ans=""
   let x=b[num.toString()[0]];
   ans+=x;
   if(num.toString()[1]!="0"){
    ans += "-" + a[num.toString()[1]]
   
   }
   return ans
 }
}

// console.log(twoDigit(59))
