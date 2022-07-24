class movie
{
  constructor(title,studio,rating)
  {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}
retname()
{
  return this.title +" "+this.studio +" "+ this.rating;
}
}
var c=new movie("Casino Royale","Eon Productions","PG13");
console.log(c.retname());