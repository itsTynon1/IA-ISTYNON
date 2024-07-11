import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent  {
  
}



/**
 * @title Basic select
 */
// @Component({
//   selector: 'select-overview-example',
//   templateUrl: 'select-overview-example.html',
//   standalone: true,
//   imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
// })



/**
 * @title Menu with icons
 */
