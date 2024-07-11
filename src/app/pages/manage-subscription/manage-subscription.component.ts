import { Component } from '@angular/core';
import { ManagesubscriptionModel } from './model';
import { managesubscriptiondata } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-subscription.component.html',
  styleUrl: './manage-subscription.component.scss'
})
export class ManageSubscriptionComponent {
  managesubscriptiondata!: ManagesubscriptionModel[];

  constructor() {
    
    this.managesubscriptiondata = managesubscriptiondata;
  }
}
