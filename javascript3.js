class person
{
  constructor(name,contact,place)
  {
    this.name=name;
    this.contact=contact;
    this.place=place;
}
retname()
{
  return this.name +" "+this.contact +" "+ this.place;
}
}
var c=new person("gunavignesh","96779 46176","salem");
console.log(c.retname());