class Driver{
  constructor(name, joinDateStr){
    this.name=name;
    this.joinDateStr=joinDateStr;
  }
  
  startDate(){
    date=new Date(joinDateStr);
    return date;
  }
  
  yearsExperienceFromBeginningOf(year){
    return year-this.startDate.getFullYear();
  }
  
  
}
