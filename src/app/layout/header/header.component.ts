import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title = 'sidebar-toggler';
  isSidebarVisible = false; // Initial state of the sidebar

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle the sidebar visibility
  }
   toggleMode() {
    console.log("light == drak");
    const htmlElement = document.getElementsByTagName('html')[0];
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
    }
  }
    toggleItem(el: any) {
    let isCurrentMenuId = el.target.closest('div.single_action__haeader');
    let isMenu = isCurrentMenuId.querySelector('.slide-down__click');
    console.log(isMenu);
    // return 
    if (isMenu.classList.contains("show")) {
      isMenu.classList.remove("show");
    } else {
      console.log('collapsing');
      
      isMenu.classList.remove("collapse");
      isMenu.classList.add("collapsing");
      setTimeout(() => {
        isMenu.classList.remove("collapsing");
        isMenu.classList.add("collapse");
        isMenu.classList.add("show");
      }, 10);
      // let dropDowns = Array.from(document.querySelectorAll('.geex-sidebar__menu .collapse'));
      // dropDowns.forEach((node: any) => {
      // });  
      // isMenu.classList.add('collapse');
      // this.activateParentDropdown(isCurrentMenuId);
    }
  }
  

  profileCollapse = false;
}
