import { Component ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {
  constructor(private renderer: Renderer2) {
    window.document.body.classList.add('register')
  }
}
