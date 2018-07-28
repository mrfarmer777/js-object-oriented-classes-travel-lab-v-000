class Driver{
  constructor(name, joinStr){
    this.name=name;
    this.startDate=new Date(joinStr);
  }
  
 
  
  yearsExperienceFromBeginningOf(year){
    return year-this.startDate.getFullYear()-1;
  }
  
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route{
  constructor(beginningLocation, endingLocation){
    this.begX=eastWest.index(beginningLocation.horizontal);
    this.begY=beginningLocation.vertical;
    this.endX=endingLocation.horizontal;
    this.endy=endingLocation.vertical;
  }
  
  blocksTravelled(){
    return (this.endX-this.begX)+(this.endY-this.begY);
  }
  
  
}

