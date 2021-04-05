interface ILift{
    max_capacity:number;  
    curr_passenger:number[];  
    visited_floor:number[];
    curr_floor:number;  
    direction:boolean;
    remove_passenger(answer:number[]):void;
    add_passenger(queues:number[][]):void;
    next_floor(max_floor:number):void;
}
export class Lift implements ILift
{
   max_capacity;  //max_capacity of lift to carry people
   curr_passenger;  // current passengers in lift right now
   visited_floor;
   curr_floor;  // current floor where lift is there
   direction; //true is up and down is false
   

   //Intial values
   constructor(capacity:number){
       this.max_capacity=capacity;
       this.curr_passenger=new Array();  
       this.visited_floor=new Array();  
       this.curr_floor=1;  
       this.direction=true; 
   }

  

   remove_passenger(answer:number[]){
       // get the list of people present in lift who have reacher their floor
        let arrived_passenger:boolean= this.curr_passenger.includes(this.curr_floor);
        // remove them from list of current passnger of lift aas they have reached
        this.curr_passenger.remove(this.curr_floor);
        if(arrived_passenger==true) answer.push(this.curr_floor);
   }

   add_passenger(queues:number[][]){
       //check in the queue which passengers are going in the same direction of lift
       //and add them if there is space in lift.

    for (let i = 0; i < queues[this.curr_floor].length && this.max_capacity > this.curr_passenger.length; i++) {
        let destination = queues[this.curr_floor][i];

        if(destination>this.curr_floor) this.curr_passenger.push(destination);
        
        
    }
}

next_floor(max_floor:number){
    if(this.direction==true){
      this.curr_floor++;
    if(this.curr_floor>max_floor){
        this.direction=false;
    }
    }
    else{
        this.curr_floor--;
        if(this.curr_floor<0) return;
    }
}
}