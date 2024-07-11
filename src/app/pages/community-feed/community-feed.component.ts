import { Component, Renderer2 } from '@angular/core';
import { communityfeeddata } from './data';
import { CommunityfeedModel } from './model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-community-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community-feed.component.html',
  styleUrl: './community-feed.component.scss'
})
export class CommunityFeedComponent {
  communityfeeddata!: CommunityfeedModel[];
  constructor(private renderer: Renderer2) {
    window.document.body.classList.add('community-feed');
    window.document.body.classList.remove('mat-typography');
    this.communityfeeddata = communityfeeddata;
    
    

    
  }
}
