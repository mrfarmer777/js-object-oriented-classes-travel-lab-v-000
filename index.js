class Driver{
  constructor(name, joinStr){
    this.name=name;
    this.startDate=new Date(joinStr);
  }
  
 
  
  yearsExperienceFromBeginningOf(year){
    return year-this.startDate.getFullYear()-1;
  }
  
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.begX=beginningLocation.horizontal;
    this.begY=beginningLocation.vertical;
    this.endX=endingLocation.horizontal;
    this.endy=endingLocation.vertical;
  }
  
  
  
  
}

