package cl.ufro.dci.electivehelper_api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.ufro.dci.electivehelper_api.domain.Elective;
import cl.ufro.dci.electivehelper_api.service.ElectiveService;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/elective")
public class ElectiveController {
    private final ElectiveService electiveService;

    public ElectiveController(ElectiveService electiveService) {
        this.electiveService = electiveService;
    }

    @GetMapping("/")
    public ResponseEntity<ArrayList<Elective>> getAllElectives() {
        ArrayList<Elective> electives = this.electiveService.getAllElectives();
        for(Elective elective: electives){
            System.out.println(elective);
        }
        return ResponseEntity.ok(electives);
    }
    
    
}
