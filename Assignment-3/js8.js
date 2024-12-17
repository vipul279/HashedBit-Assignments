const num=456;
console.log(sumofdigits(num));

function sumofdigits(num){
    let sum=0;
    while(num>0){
        rem=num%10;
        sum=sum+rem;
        num=Math.floor(num/10);
    }
    if(sum>10){
        return sumofdigits(sum);
    }
    
    return sum;
    
}
