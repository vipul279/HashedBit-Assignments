const str='vipulvaljipatelfromindia';
let vowelscount=0;
let consonantcount=0;
for (let i = 0; i < str.length; i++) {
    if('aeiou'.includes(str.charAt(i))){
        vowelscount++;
    }
    else{
        consonantcount++;
    }
}
console.log(`Vowels:${vowelscount}  Consonants:${consonantcount}`);