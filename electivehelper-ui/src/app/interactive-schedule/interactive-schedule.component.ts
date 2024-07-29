import { Component } from '@angular/core';
import { Period } from '../domain/period';
import { Slot } from '../domain/slot';
import { CommonModule } from '@angular/common';

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
}
