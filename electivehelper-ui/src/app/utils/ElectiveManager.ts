import { Elective } from "../domain/elective";
import { Slot } from "../domain/slot";

export default class ElectiveManager {
    static getElectivesByFreeSlotsWithNConflict(slotsSelected : Slot[], electives : Elective[]) {
        let coincidencesElectives = new Map<Elective, number>();

        electives.forEach((elective) => {
            let nConflict = this.getNConflict(slotsSelected, elective.eleSlots);
            coincidencesElectives.set(elective, nConflict);
            
        });

        return coincidencesElectives;
    }

    static getElectivesByNConflict(slotsSelected : Slot[], electives : Elective[], nConflict : number) {
        let coincidencesElectives : Array<Elective> = [];

        electives.forEach((elective) => {
            if(this.hasNConflict(slotsSelected, elective.eleSlots, nConflict)) {
                coincidencesElectives.push(elective);
            }
        });

        return coincidencesElectives;
    }

    static getElectivesByFreeSlots(slotsSelected : Slot[], electives : Elective[], nConflict : number) {
        let coincidencesElectives : Array<Elective> = [];

        electives.forEach((elective) => {
            if(this.hasNConflict(slotsSelected, elective.eleSlots, elective.eleSlots.length - nConflict)) {
                coincidencesElectives.push(elective);
            }
        });

        return coincidencesElectives;
    }


    static getNConflict(slotsSelected : Slot[], eleSlots : Slot[]){
        let nConflict = 0;
        console.log("Slots selected: ", slotsSelected);
        console.log("Slots: ", eleSlots);

        slotsSelected.forEach(slotSelected => {
            eleSlots.forEach(slot => {
                if(slotSelected.equals(slot)) {
                    nConflict = nConflict + 1;
                }
            });
        });

        return eleSlots.length - nConflict;

    }

    static hasNConflict(slotsSelected : Slot[], eleSlots : Slot[], conflictLimit : number) {
        let nConflict = 0;

        slotsSelected.forEach(slotSelected => {
            eleSlots.forEach(slot => {
                if(slotSelected.equals(slot)) {
                    nConflict = nConflict + 1;
                }
            });
        });

        return nConflict == conflictLimit;
    }

    static getElectivesByModality(electives: Elective[], modality: string) {
        let filteredElectives: Elective[] = [];

        if(modality !== 'Cualquiera') {
            electives.forEach((elective) => {
                if (elective.eleMode === modality) {
                    filteredElectives.push(elective);
                }
            });
            return filteredElectives;
        }
        return electives;
    }
    
}