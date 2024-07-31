import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElectiveService } from '../service/elective.service';
import { Elective } from '../domain/elective';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Slot } from '../domain/slot';
import ElectiveManager from '../utils/ElectiveManager';

@Component({
  selector: 'app-elective-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './elective-list.component.html',
  styleUrl: './elective-list.component.css'
})
export class ElectiveListComponent {

  electiveList: Elective[] = [];
  filteredElectives: Elective[] = [];
  @Input() selectedSlots: Slot[] = [];
  @Output() selectedElective = new EventEmitter<Elective>();
  selectedElectiveDetails: Elective | null = null;

  

  filterForm: FormGroup = new FormGroup({
    periods: new FormControl(0),
    modality: new FormControl('all'),
  });


  constructor(private electiveService: ElectiveService,
              private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.loadElectives();
  }

  loadElectives() {
    this.electiveService.getAllElectives().subscribe({
      next: (electives: Elective[]) => {
        this.electiveList = electives; 
        this.filteredElectives = electives;
      },
      error: (error) => {console.error('Error loading electives: ', error);}
    });
  }

  aplyFilters() {
    const periods = this.filterForm.get('periods')?.value;
    const modality = this.filterForm.get('modality')?.value;
    console.log("periods: ", periods);
    console.log("modality: ", modality);

    let filteredByConflict = ElectiveManager.getElectivesByNConflict(this.selectedSlots, this.electiveList, periods);
    let filteredByModality = ElectiveManager.getElectivesByModality(filteredByConflict, modality);
    this.filteredElectives = filteredByModality;
    console.log(filteredByModality);
  }

  selectElective(elective: Elective) {
    this.selectedElective.emit(elective);
    this.selectedElectiveDetails = elective;
    console.log("electivo seleccionado: ",this.selectedElectiveDetails)
  }

}
