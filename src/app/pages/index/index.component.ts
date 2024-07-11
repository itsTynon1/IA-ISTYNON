import { Component } from '@angular/core';
// import { ContactiNEXCT } from './index';
import { indexdata } from './data';
import { indexModel } from './model';
import { CommonModule } from '@angular/common';




@Component({  
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  indexdata!: indexModel[];

  constructor() {
    // indexdata
    this.indexdata = indexdata;
  }
}


