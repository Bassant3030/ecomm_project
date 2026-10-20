import { Component ,inject,OnInit } from '@angular/core';
import { ProductsServices } from '../../core/services/product/products.services';
import { CategoriesService } from '../../core/services/categories.service';
import { IProduct } from '../../shared/interfaces/iproduct';
import { ICategort } from '../../shared/interfaces/icategort';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {  signal } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly productsServices=inject(ProductsServices)
  private readonly categoriesServices=inject(CategoriesService)

  myProducts:IProduct[]=[]
  myCategories:ICategort[]=[]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slidesStore = signal<any[]>([
    { id: 'slide-1', text: 'Slide 1 HM', dataMerge: 2, width: 300, dotContent: 'text1' },
    { id: 'slide-2', text: 'Slide 2 HM', dataMerge: 1, width: 500, dotContent: 'text2' },
    { id: 'slide-3', text: 'Slide 3 HM', dataMerge: 3, width: 500, dotContent: 'text3' },
    { id: 'slide-4', text: 'Slide 4 HM', width: 450, dotContent: 'text4' },
    { id: 'slide-5', text: 'Slide 5 HM', dataMerge: 2, width: 500, dotContent: 'text5' },
    { id: 'slide-6', text: 'Slide 6', width: 500, dotContent: 'text5' },
    { id: 'slide-7', text: 'Slide 7', width: 500, dotContent: 'text6' },
    { id: 'slide-8', text: 'Slide 8', width: 500, dotContent: 'text8' },
    // { id: 'slide-7', text: 'Slide 7', dotContent: 'text5'},
    // { id: 'slide-8', text: 'Slide 8', dotContent: 'text5'},
    // { id: 'slide-9', text: 'Slide 9', dotContent: 'text5'},
    // { id: 'slide-10', text: 'Slide 10', dotContent: 'text5'},
  ]);

  mainSliderOptions: OwlOptions = {
   loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }
  




  // callProduct(){
  //     this.productsServices.getProducts().subscribe({
  //     next:(res)=>{
  //       console.log(res.data);
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   });
  
  // }

  callProduct(): void {
  this.productsServices.getProducts().subscribe({
    next: (res) => {
      this.myProducts = res.data;
      console.log(this.myProducts);
    },
    error: (err) => {
      console.log(err);
    }
  });

  
}

callCatigories(): void {
  this.categoriesServices.getCategories().subscribe({
  next:(res)=>{
    this.myCategories = res.data;
      console.log(this.myCategories);
  },
  error:(err)=>{
    console.log(err);
  }
});
}

  ngOnInit(): void {
    
    this.callProduct()
    this.callCatigories()
}





}