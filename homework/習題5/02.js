function k(i){
    var a=1,b;
    
    for(b=1;b<=i;b++){
        a=b*a;
    }
    return a;
}
console.log("10!=",k(10));
