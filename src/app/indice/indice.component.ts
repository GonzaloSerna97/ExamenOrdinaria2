// indice.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent {

  constructor() { }

  reloadPage() {
    window.location.reload();
  }

}
