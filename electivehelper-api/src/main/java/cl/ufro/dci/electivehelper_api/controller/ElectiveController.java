package cl.ufro.dci.electivehelper_api.controller;

import org.springframework.web.bind.annotation.RestController;

import cl.ufro.dci.electivehelper_api.service.ElectiveService;

@RestController
public class ElectiveController {
    private final ElectiveService electiveService;

    public ElectiveController(ElectiveService electiveService) {
        this.electiveService = electiveService;
    }
}
