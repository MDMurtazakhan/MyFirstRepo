export interface IProduct{
    Name:string;
    Price:number;
    Qty:number;
    Cities:string[];
    Rating:{Rate:number, Count: number};
    Total():number;
    Print():void;
}