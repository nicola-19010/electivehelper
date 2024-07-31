package cl.ufro.dci.electivehelper_api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
public class Slot {
    private String sloPeriod;
    private String sloDay;
    private String sloInitialHour;
    private String sloFinishHour;
    private String sloPlace;
}
