import { Component } from '@angular/core';
import { Period } from '../domain/period';
import { Slot } from '../domain/slot';
import { CommonModule } from '@angular/common';
import { Elective } from '../domain/elective';
import { ElectiveService } from '../service/elective.service';

@Component({
  selector: 'app-interactive-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-schedule.component.html',
  styleUrl: './interactive-schedule.component.css'
})
export class InteractiveScheduleComponent {

  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  periods: Period[] = Period.getPeriods();
  selectedSlots: Slot[] = [];
  electiveList: Elective[] = [];

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
      next: (electives: Elective[]) => {this.electiveList = electives;},
      error: (error) => {console.error('Error loading electives: ', error);}
    });
  }
}
