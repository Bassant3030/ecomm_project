import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
@Component({
  selector: 'app-auth',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {

}
