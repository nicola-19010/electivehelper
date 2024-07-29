import { Slot } from "./slot";

export class Elective{
 eleCode: string;
 eleName: string;
 eleModule: string;
 eleMode: string;
 eleSlots: Slot[];

 constructor(eleCode: string, eleName: string, eleModule: string, eleMode: string, eleSlots: Slot[]){
     this.eleCode = eleCode;
     this.eleName = eleName;
     this.eleModule = eleModule;
     this.eleMode = eleMode;
     this.eleSlots = eleSlots;
 }
}