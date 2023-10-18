import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  visible = false;
  size: 'large' | 'default' = 'default';

  get title(): string {
    // return `${this.size} Drawer`;
    return 'Filtre'
  }

  showDefault(): void {
    this.size = 'default';
    this.open();
  }
  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
