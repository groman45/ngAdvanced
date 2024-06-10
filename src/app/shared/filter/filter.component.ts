import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface FilterComponentEventArgs {
  filterTxt: string;
  numberOfItems: number;
}

@Component({
  selector: 'app-filter',  
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{

  eventArgs: FilterComponentEventArgs = { filterTxt:"", numberOfItems:0 };
  searchControl: FormControl = new FormControl('');  // Filter Control
  @Output() FilterChanged = new EventEmitter<FilterComponentEventArgs>();

  ngOnInit(): void {   
     
    this.searchControl.valueChanges
            .subscribe(filterTxt => {    
              this.eventArgs.filterTxt = filterTxt;          
              this.FilterChanged.emit(this.eventArgs);
        });    
  }

  onNumItemsSelected(newValue: string) {
    this.eventArgs.numberOfItems = +newValue;  
    this.FilterChanged.emit(this.eventArgs);
 }
}
