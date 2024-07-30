import { Component } from '@angular/core';
import { ElectiveService } from '../service/elective.service';
import { Elective } from '../domain/elective';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  selectedElective: Elective | null = null;

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

  aplyFilters() {}

  selectElective(elective: Elective) {
    this.selectedElective = elective;
    console.log('Selected elective: ', elective);
  }

}
