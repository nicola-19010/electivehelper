export class Slot{
    period: string;
    day: string;
    startTime: string;
    endTime: string;

    constructor(period: string, day: string, startTime: string, endTime: string){
        this.period = period;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    equals(slot: Slot): boolean{
        return this.day === slot.day && this.period === slot.period;
    }
}