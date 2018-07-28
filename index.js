class Driver{
  constructor(name, joinStr){
    this.name=name;
    this.startDate=new Date(joinStr);
  }
  
 
  
  yearsExperienceFromBeginningOf(year){
    return 1+year-this.startDate.getFullYear();
  }
  
  
}
