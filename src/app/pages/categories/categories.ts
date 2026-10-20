import { Component ,inject,OnInit } from '@angular/core';
import { ICategort } from '../../shared/interfaces/icategort';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  private readonly categoriesServices=inject(CategoriesService)
  myCategories:ICategort[]=[]


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
    
    this.callCatigories()
}
}
