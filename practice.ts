
import {Building} from './build'
import {Lift} from './lift'


let answer:number[]=new Array();

//assuming that user is giving me the inputs.
let build = new Building([[1,2,3],[5,3,2]],7);
//assuming that I get max_capacity of lift from user
let elevator = new Lift(10);

while(elevator.curr_floor!=0){
    elevator.remove_passenger(answer);
    elevator.add_passenger(build.queue);
    elevator.next_floor(build.max_floor);
}
console.log(answer);


































}