import User from "./user";
import Passeneger from "./passenger";

export class Flight {
    ticketid: number=0;
    passengers:Passeneger=new Passeneger;
    userdetails:User=new User;
    totalseats:number=0;
    pnr:number=0;
    totalprice:number=0;

}