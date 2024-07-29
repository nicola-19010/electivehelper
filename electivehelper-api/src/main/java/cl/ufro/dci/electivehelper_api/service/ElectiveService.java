package cl.ufro.dci.electivehelper_api.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import cl.ufro.dci.electivehelper_api.data.ElectiveReader;
import cl.ufro.dci.electivehelper_api.domain.Elective;
@Service
public class ElectiveService {
    private ArrayList<Elective> electiveList;

    public ElectiveService() {
        this.electiveList = ElectiveReader.readElectivePDF();
        for(Elective e: electiveList) {
            System.out.println(e);
        }
    }
   
}
