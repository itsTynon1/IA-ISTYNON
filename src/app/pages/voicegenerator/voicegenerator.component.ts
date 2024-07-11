// import { DOCUMENT } from '@angular/common';
import { Component ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-voicegenerator',
  standalone: true,
  imports: [],
  templateUrl: './voicegenerator.component.html',
  styleUrl: './voicegenerator.component.scss'
})
export class VoicegeneratorComponent {
  constructor(private renderer: Renderer2) {
    window.document.body.classList.add('chatbot')
  }
}
