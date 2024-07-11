import { Component ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private renderer: Renderer2) {
    window.document.body.classList.add('register')
  }
}
