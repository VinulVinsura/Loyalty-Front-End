import { Component } from '@angular/core';
import { SideBarComponent } from "../../common/side-bar/side-bar.component";
import { HeaderComponent } from "../../common/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideBarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 


}
