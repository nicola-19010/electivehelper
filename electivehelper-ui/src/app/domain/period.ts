export class Period{
    periodName: string;
    startTime: string;
    endTime: string;

    constructor(periodName: string, startTime: string, endTime: string){
        this.periodName = periodName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    static getPeriods(): Period[]{
        let periods: Period[] = [];
        periods.push(new Period('1°', '08:30', '09:30'));
        periods.push(new Period('2°', '09:40', '10:40'));
        periods.push(new Period('3°', '10:50', '11:50'));
        periods.push(new Period('4°', '12:00', '13:00'));
        periods.push(new Period('Alm', '13:10', '14:10'));
        periods.push(new Period('6°', '14:30', '15:30'));
        periods.push(new Period('7°', '15:40', '16:40'));
        periods.push(new Period('8°', '16:50', '17:50'));
        periods.push(new Period('9°', '18:00', '19:00'));
        periods.push(new Period('10°', '19:10', '20:10'));
        periods.push(new Period('11°', '20:20', '21:20'));
        return periods;
    }
}