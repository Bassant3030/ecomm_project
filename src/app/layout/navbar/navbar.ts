import { Component, Input,input,  OnInit } from '@angular/core';
import { FlowbiteService } from '../../../app/core/services/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
 constructor(private flowbiteService: FlowbiteService) {}


 //@Input isLoggedIn:boolean=true
isLoggedIn=input<boolean>(true)

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
      // flowbite.init();
    });
  }
}
