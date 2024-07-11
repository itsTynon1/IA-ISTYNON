import { Component,HostListener, Renderer2 } from '@angular/core';
import { ChatbotModel } from './model';
import { chatbotdata } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent  {
  hasClass = false;
  chatbotdata!: ChatbotModel[];
  
  // ngOnDestroy() {
    
  // }
  
  
  toggleClass() {
    this.hasClass =!this.hasClass;
    // if (this.hasClass) {
      //   window.document.body.classList.add('chatbot')
      // } else {
        //   window.document.body.classList.remove('chatbot')
        // }
      }
      
      constructor(private renderer: Renderer2) {
        window.document.body.classList.add('chatbot')
        this.chatbotdata = chatbotdata;
        
      }
      
      @HostListener('window:scroll', [])
      onWindowScroll() {
        // Calculate the distance between the bottom of the page and the bottom of the viewport
        const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
        
        // Define a threshold for when to add the 'active' class
        const threshold = 200; // Adjust this value according to your requirement
        
        const searchForm = document.querySelector('.chatbot .search-form');
        if (searchForm) {
          if (distanceFromBottom < threshold) {
            this.renderer.addClass(searchForm, 'active');
          } else {
            this.renderer.removeClass(searchForm, 'active');
          }
        }
      }
    }
    
    

