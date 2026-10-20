import { Component, Input,input,  OnInit } from '@angular/core';
import { FlowbiteService } from '../../../app/core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
 constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
      // flowbite.init();
    });
  }
}
