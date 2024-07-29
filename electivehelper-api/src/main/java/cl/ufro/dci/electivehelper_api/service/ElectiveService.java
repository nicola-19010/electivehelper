package cl.ufro.dci.electivehelper_api.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Service;

import cl.ufro.dci.electivehelper_api.data.ElectiveReader;
import cl.ufro.dci.electivehelper_api.domain.Elective;
import cl.ufro.dci.electivehelper_api.domain.Slot;

@Service
public class ElectiveService {
    private ArrayList<Elective> electiveList;


    public ElectiveService() {
        //this.electiveList = readElectivePDF();
        // readElectivePDF();
        this.electiveList = ElectiveReader.readElectivePDF();

        for(Elective elective : electiveList) {
            System.out.println(elective);
        }

        // System.out.println(electiveList.get(0).getEleCode());
    }


    // private void readElectivePDF() {
    //     try (BufferedReader br = new BufferedReader(new FileReader("electivehelper-api/src/main/resources/static/Electives.csv"))) {
    //         String line;
    //         while ((line = br.readLine()) != null) {
    //             String[] values = line.split(";");
    //             if(values[0].isEmpty()) {
    //                 System.out.println(values[4]);
    //                 System.out.println(values[5]);
    //             }
    //         }
    //     }catch(Exception e) {
    //         System.out.println("algo salió mal");
    //         e.printStackTrace();
    //     }
    // }

    // private ArrayList<Slot> createSlots(String day, String hours, String place) {
    //     List<Double> startHours = Arrays.asList(8.3, 9.4, 10.5, 12.0, 14.3, 15.4, 16.5, 18.0, 19.1, 20.2);
    //     List<Double> finishHours = Arrays.asList(9.3, 10.4, 11.5, 13.0, 15.3, 16.4, 17.5, 19.0, 20.1, 21.2);

    //     double[] electiveHours = getHours(hours);

    //     double startHour = electiveHours[0];
    //     double finishHour = electiveHours[1];

    //     ArrayList<Slot> slots = new ArrayList<>();

    //     for(int i = startHours.indexOf(startHour); i <= finishHours.indexOf(finishHour); i++) {
    //         slots.add(new Slot(String.valueOf(i + 1), day, startHours.get(i), finishHours.get(i), place));
    //     }

    //     return slots;
    // }

    // private Elective createElective(String[] electiveData) {
    //     if(!electiveData[0].isEmpty()) {
    //         Elective elective = new Elective(electiveData[0], electiveData[1],electiveData[2], electiveData[3], createSlots(electiveData[4],electiveData[5], electiveData[6]));
    //     }
    // }


    // public static double[] getHours (String input) {
    //     input.replaceAll(":",".");
    //     Pattern hourPattern = Pattern.compile("[0-9][0-9.]*[0-9]", Pattern.CASE_INSENSITIVE);
    //     Matcher hourMatcher = hourPattern.matcher(input);
            
    //     double[] hours = new double[2]; 
    //     int counter = 0;

    //     while (hourMatcher.find()) {
    //         hours[counter] = Double.parseDouble(hourMatcher.group());
    //         counter++;
    //     }

    //     return hours;
    // }


    
}
