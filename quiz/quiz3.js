class QuadraticEquation{
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.denta=Math.pow(this.b,2)-(4*this.a*this.c)
    }
    geta() { return this.a; }
    getb() { return this.b}
    getc(){return this.c}
    getDiscriminant(){
        return this.denta
    }
    gettter1(){
        
    }
}
