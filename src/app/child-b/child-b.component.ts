import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

  constructor() { }
  @Output() updateDataEvent= new EventEmitter<string>();

  ngOnInit(): void {
  }

}
