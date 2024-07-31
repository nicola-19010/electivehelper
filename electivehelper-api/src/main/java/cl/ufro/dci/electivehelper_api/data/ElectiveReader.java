package cl.ufro.dci.electivehelper_api.data;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import cl.ufro.dci.electivehelper_api.domain.Elective;
import cl.ufro.dci.electivehelper_api.domain.Slot;

public class ElectiveReader {

    private static final int N_DATA_ELECTIVE = 7;

    public static ArrayList<Elective> readElectivePDF() {
        ArrayList<Elective> electiveList = new ArrayList<>();
    
        try (BufferedReader br = new BufferedReader(new InputStreamReader(
            new FileInputStream("electivehelper-api/src/main/resources/static/Electives.csv"),
            "UTF-8"))) {
                
            String line;
            Elective elective = new Elective();
            String electivePlace = "";

            while ((line = br.readLine()) != null) {
                String[] electiveData = line.split(";");
                if(!electiveData[0].isEmpty()) {
                    electivePlace = electiveData[6];
                    elective = new Elective(electiveData[0], electiveData[1],electiveData[2], electiveData[3], createSlots(electiveData[4],electiveData[5], electiveData[6]));
                    electiveList.add(elective);
                }else if(electiveData.length == N_DATA_ELECTIVE){
                    elective.addSlots(createSlots(electiveData[4],electiveData[5], electiveData[6]));
                }else {
                    elective.addSlots(createSlots(electiveData[4],electiveData[5], electivePlace));
                }
            }
        }catch(Exception e) {
            System.out.println("Algo salió mal.");
            e.printStackTrace();
        }

        return electiveList;
    }

    private static ArrayList<Slot> createSlots(String day, String hours, String place) {
        List<String> startHours = Arrays.asList("8:30", "9:40", "10:50", "12:00", "14:30", "15:40", "16:50", "18:00", "19:10", "20:20");
        List<String> finishHours = Arrays.asList("9:30", "10:40", "11:50", "13:00", "15:30", "16:40", "17:50", "19:00", "20:10", "21:20");

        String[] electiveHours = hours.replaceAll(" ", "").split("-");

        String startHour = electiveHours[0];
        String finishHour = electiveHours[1];

        ArrayList<Slot> slots = new ArrayList<>();

        if(startHour.equals("13:10")) {
            slots.add(new Slot("Alm", day, startHour, "14:10", place));
            startHour = "14:30";
        }

        for(int i = startHours.indexOf(startHour); i <= finishHours.indexOf(finishHour); i++) {
            slots.add(new Slot(String.valueOf(i + 1), day, startHours.get(i), finishHours.get(i), place));

            if(finishHours.get(i).equals("13:00") && i + 1 <= finishHours.indexOf(finishHour)) {
                slots.add(new Slot("Alm", day, "13:10", "14:10", place));
            }
        }


        return slots;
    }

    // private static void printElectiveLine(String[] values) {
    //     for(int i = 0; i < values.length; i++) {
    //         System.out.print(i + " -> " + values[i] + ", ");
            
    //     }
    //     System.out.println("largo: " + values.length);
    //     System.out.println();
    // }       
}
