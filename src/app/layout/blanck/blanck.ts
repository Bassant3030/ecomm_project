import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
@Component({
  selector: 'app-blanck',
  imports: [RouterOutlet , Navbar , Footer],
  templateUrl: './blanck.html',
  styleUrl: './blanck.scss',
})
export class Blanck {

}
