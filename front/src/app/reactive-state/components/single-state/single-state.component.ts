import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-state',
  templateUrl: './single-state.component.html',
  styleUrls: ['./single-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleStateComponent implements OnInit{

  constructor() {
  }
  ngOnInit() {
  }

}
