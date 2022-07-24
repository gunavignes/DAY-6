class circle
{
  constructor(r)
  {
    this.r=r;
  }
  getarea()
  {
    return Math.PI*this.r*this.r;
  }
}
var a=new circle(3);
console.log(a.getarea());