import { Component } from '@angular/core';
import { Period } from '../domain/period';
import { Slot } from '../domain/slot';
import { CommonModule } from '@angular/common';
import { Elective } from '../domain/elective';
import { ElectiveService } from '../service/elective.service';
<<<<<<< HEAD
import { ElectiveListComponent } from "../elective-list/elective-list.component";
=======
import ElectiveManager from '../utils/ElectiveManager';
>>>>>>> c50a7dea3447bfaa30c2f7484b129a9135a66b77

@Component({
  selector: 'app-interactive-schedule',
  standalone: true,
  imports: [CommonModule, ElectiveListComponent],
  templateUrl: './interactive-schedule.component.html',
  styleUrl: './interactive-schedule.component.css'
})
export class InteractiveScheduleComponent {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  periods: Period[] = Period.getPeriods();
  selectedSlots: Slot[] = [];
  electiveList: Elective[] = [];
<<<<<<< HEAD
  selectedElective: Elective | null = null;
=======
  mode:boolean = true;
>>>>>>> c50a7dea3447bfaa30c2f7484b129a9135a66b77

  constructor(private electiveService: ElectiveService){}

  ngOnInit() {
    this.loadElectives();
  }

  selectSlot(day: string, period: Period) {
    let slot = new Slot(period.periodName, day, period.startTime, period.endTime);
    if(this.removeSlot(slot)) {
      console.log('Slot removed: ',slot);
    }else {
      this.selectedSlots.push(slot);
      console.log(this.selectedSlots.length);
      console.log('Slot added: ',slot);
    }
  }

  removeSlot(slotToRemove: Slot): boolean {
    for (let slot of this.selectedSlots) {
      if (slot.equals(slotToRemove)) {
        this.selectedSlots.splice(this.selectedSlots.indexOf(slot), 1);
        return true;
      }
    }
    return false;
  }

  isSlotSelected(day: string, period: Period): boolean {
    let slot = new Slot(period.periodName, day, period.startTime, period.endTime);
    return this.selectedSlots.some(selectedSlot => selectedSlot.equals(slot));
  }

  loadElectives() {
    this.electiveService.getAllElectives().subscribe({
      next: (electives: Elective[]) => {
        this.electiveList = electives;
        console.log(electives);
      },
      error: (error) => {console.error('Error loading electives: ', error);}
    });
  }

<<<<<<< HEAD
  onElectiveSelected(elective: Elective) {
    this.selectedElective = elective;
    console.log('Selected elective: ', elective);
  }

  sameDayAndPeriod(elective: Elective, day: string, period: string) {
    let periodNumber = period.replace("°","").trim();
    for(let slot of elective.eleSlots){
      let elePeriodNumber = slot.sloPeriod.replace("°","").trim();
      if(elePeriodNumber == periodNumber && slot.sloDay == day){
        return true;
      }
    }
    return false;
  }

=======
  prueba() {
    // if(this.mode) {
    //   let aux = this.selectedSlots
    //   this.selectedSlots = this.getAllSlots();

    //   for (let slot of aux) {
    //     this.removeSlot(slot);
    //   }
      
    //   console.log(ElectiveManager.getElectivesByNConflict(this.selectedSlots, this.electiveList, 0));

    // }else{
    //   console.log(ElectiveManager.getElectivesByNConflict(this.selectedSlots, this.electiveList, 0));
    // }
    console.log(ElectiveManager.getElectivesByNConflict(this.selectedSlots, this.electiveList, 0));
  }

  cleanSlots() {
    this.selectedSlots = [];
  }

  fillSlots(){
    this.selectedSlots = this.getAllSlots();
  }

  getAllSlots() {
    let slots: Slot[] = [];

    this.days.forEach(day => {
      this.periods.forEach(period => {
        slots.push(new Slot(period.periodName, day, period.startTime, period.endTime));
      })
    })

    return slots;
  }

  changeMode() {
    this.mode = !this.mode;
    this.cleanSlots();
    console.log(this.mode);
  }
>>>>>>> c50a7dea3447bfaa30c2f7484b129a9135a66b77
}
