import { Elective } from "../domain/elective";
import { Slot } from "../domain/slot";

export default class ElectiveManager {
    static getElectivesByNConflict(slotsSelected : Slot[], electives : Elective[], nConflict : number) {
        let coincidencesElectives : Array<Elective> = [];

        electives.forEach((elective) => {
            if(this.hasNConflict(slotsSelected, elective.eleSlots, nConflict)) {
                coincidencesElectives.push(elective);
            }
        });

        return coincidencesElectives;
    }

    static hasNConflict(slotsSelected : Slot[], eleSlots : Slot[], conflictLimit : number) {
        let nConflict = 0;

        slotsSelected.forEach(slotSelected => {
            eleSlots.forEach(slot => {
                if(slot.day === slotSelected.day && slot.period === slotSelected.period) {
                    nConflict = nConflict + 1;
                }
            });
        });

        return nConflict == conflictLimit;
    }
}