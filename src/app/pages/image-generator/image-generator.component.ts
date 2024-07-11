import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule} from '@angular/common';
// import { MenuItem } from 'primeng/api';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
import { ImageGeneratorModel } from './model';
import { imagegeneratordata } from './data';
// import {DropdownModule} from 'primeng/dropdown';



@Component({
  selector: 'app-image-generator',
  standalone: true,
  imports: [CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule  ,
    DropdownModule
  ],
  templateUrl: './image-generator.component.html',
  styleUrl: './image-generator.component.scss'
  
})

export class ImageGeneratorComponent {
imagegeneratordata!: ImageGeneratorModel[];
// implements OnInit 

  constructor() {
    this.imagegeneratordata = imagegeneratordata;
  
    window.document.body.classList.add('chatbot')

    // menu: any;
    // menuItems: MenuItem[] = [];
    // private window: Window;
    // cities: City[] | undefined;
    // selectedCity: City  | undefined;
    
    // constructor(@Inject(DOCUMENT) private document: Document) {
      // this.window = this.document.defaultView;
      // document.body.classList.add('chatbot')
      // this.menuItems = [
        //   { name: 'New York', code: 'NY' },
        //   { name: 'Rome', code: 'RM' },
        //   { name: 'London', code: 'LDN' },
        //   { name: 'Istanbul', code: 'IST' },
        //   { name: 'Paris', code: 'PRS' },
        // ];
        // this.menu = '';
        
        
      }
    }
  
  
  
  

    // indexdata
  

