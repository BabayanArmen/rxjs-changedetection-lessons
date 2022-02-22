import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() arr: any

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.refresh()
    // }, 3000)
  }

  refresh() {
    this.cd.detectChanges()
  }

}
