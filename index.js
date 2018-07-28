class Driver{
  constructor(name, joinDateStr){
    this.name=name;
    this.joinDateStr=joinDateStr;
  }
  
  startDate(){
    return new Date(joinDateStr);
  }
  
  yearsExperienceFromBeginningOf(year){
    return year-this.startDate
  }
  
  
}
