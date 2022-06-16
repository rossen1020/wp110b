var n=[4,3,5,1,2];
function k(n){
    var i,j=0,b,m=n.length;
    
    for(i=0;i<m;i++){
        j=j+n[i];
    }
    b=j/m;
    return b;
}

console.log(k(n));
