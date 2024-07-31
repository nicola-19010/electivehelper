package cl.ufro.dci.electivehelper_api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
public class Slot {
    private String period;
    private String day;
    private String startTime;
    private String endTime;
    private String place;
}
