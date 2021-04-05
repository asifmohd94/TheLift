
interface IBuilding{
    queue:number[][];
    max_floor:number;
}
export class Building implements IBuilding{
    queue;
    max_floor  // max floors in a building
    constructor(queue:number[][],max_floor:number){
        this.queue=queue;
        this.max_floor=max_floor;
    }
    
}
 