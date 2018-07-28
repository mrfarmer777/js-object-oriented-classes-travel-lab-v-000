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
    begX=beginningLocation.horizontal;
    begY=beginningLocation.vertical;
    endX=endingLocation.horizontal;
    endy=endingLocation.vertical;
  }
  
  
}

