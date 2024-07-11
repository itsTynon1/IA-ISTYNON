import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
}

@NgModule({
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    DropdownModule,
    // FormsModule,
  ],
  // declarations: [AppComponent],
  //   bootstrap: [AppComponent],
})
export class ImageGeneratorModule {
  cities: City[];

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
