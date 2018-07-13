export class Task{
    private id:string;
    private name:string;
    private progress:string;
    private type:string;
    private counter:TaskCounter;
}

export class TaskCounter{
    private x:number;
    private y:number;
}