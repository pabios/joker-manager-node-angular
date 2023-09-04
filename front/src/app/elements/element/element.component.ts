import {Component, Input} from '@angular/core';
import {Element} from "../../core/models/element.model";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {

  @Input() element!: Element;

  constructor() {
  }
  ngOnInit() {
  }
}
