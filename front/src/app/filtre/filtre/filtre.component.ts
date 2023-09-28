import { Component } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.scss']
})
export class FiltreComponent {

  visible = false;
  selectedValue = null;
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
