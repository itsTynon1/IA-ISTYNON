import { Component ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private renderer: Renderer2) {
    window.document.body.classList.add('register')
  }
}
