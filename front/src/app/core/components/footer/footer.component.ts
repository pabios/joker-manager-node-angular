import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {

  agencyName!: string;

  constructor() {
  }
  ngOnInit(): void {
    this.agencyName = 'nimba'
  }


}
