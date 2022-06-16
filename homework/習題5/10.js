function integral(f,a,b)
{
    var n=0, m=0.0001, i;
    for(i=a; i<b; i+=m)
    {
        n+=m*f(i);
    }
    return n;
}

console.log(integral((x)=>x*x, 0, 1)));
