const str='Vipul is form India';
console.log(correctfn(str,'form','from'));

function correctfn(string,wrong,correct){
    const correctstring=string.replace(wrong,correct);
    return correctstring
}   