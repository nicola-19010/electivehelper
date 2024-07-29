package cl.ufro.dci.electivehelper_api.domain;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Elective {
    private String eleCode;
    private String eleName;
    private String eleModule;
    private String eleMode;
    private ArrayList<Slot> eleSlots;

    public void addSlots(ArrayList<Slot> slots) {
        for(Slot slot : slots) {
            this.eleSlots.add(slot);
        }
    }
}
