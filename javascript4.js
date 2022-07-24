class uber
{
  constructor(km)
  {
    this.km=km;
  }
  uberprice()
  {
    return 20*this.km;
  }
}
var a=new uber(3);
console.log(a.uberprice());