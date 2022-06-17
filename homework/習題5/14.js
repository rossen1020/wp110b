class Ratio{
  constructor (a,b){
    this.a=a;
    this.b=b;
  }
  
  /*sub1(i){
  return new Ratio(this.a*i.b , this.b*i.b);
  }
  sub2(j){
  return new Ratio(this.b*j.a , 0);
  }
  
  add(p){
    return new Ratio(this.a+p.a , this.b);
  }
  mul(q){
    return new Ratio(this.a-q.a , this.b);
  }
  div(k) {
    return new Ratio(this.a/k.a , this.b);
  }*/
  
  reduce(){
        var f;
        if(this.a > this.b) f = this.b;
        else f = this.a;

        for(var g = 2 ; g <= f ; g++){
            if(this.a % g == 0 && this.b % g == 0){
                this.a /= g;
                this.b /=g;
                f /= g;
                g=2;
            }
        }
    }
  toString()
    {
        return this.a + "/" + this.b;
    }
}

var r1 = new Ratio(6,9); 
console.log(r1.toString());

/*var  r1 = new Ratio(1,3),
var  r2 = new Ratio(2,4); 
var  n= r1.sub1(r2);
var  m= r1.sub2(r2);
var  h= n.add(m);
var  s= h.mul(m);
var  r3= s.div(r2);
console.log(r3.toString());*/
