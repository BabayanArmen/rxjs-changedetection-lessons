import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title: string = ''
  arr = ['default']

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.arr.push(this.title)
    this.title = ''
  }

}
