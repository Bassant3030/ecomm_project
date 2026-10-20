import { Routes } from '@angular/router';
import { Blanck } from './layout/blanck/blanck';
import { Auth } from './layout/auth/auth';
import { Home } from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products';
import { Categories } from './pages/categories/categories';
import { Contact } from './pages/contact/contact';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

    {path:'', redirectTo:'home', pathMatch:'full'},
    
    {path:'', component:Blanck , title:'blanck !', children:[
        {path:'home', loadComponent: ()=>import('./pages/home/home').then((c)=>c.Home), title:'home !'},
        {path:'cart', loadComponent: ()=>import('./pages/cart/cart').then((c)=>c.Cart), title:'cart !'},
        {path:'products', loadComponent: ()=>import('./pages/products/products').then((c)=>c.Products), title:'products !'},
        {path:'categories', loadComponent: ()=>import('./pages/categories/categories').then((c)=>c.Categories), title:'categories !'},
        {path:'contact', loadComponent: ()=>import('./pages/contact/contact').then((c)=>c.Contact), title:'contact !'},
    ]},
    {path:'', component:Auth , title:'auth !', children:[
        {path:'register', loadComponent: ()=>import('./pages/register/register').then((c)=>c.Register), title:'register !'},
        {path:'login', loadComponent: ()=>import('./pages/login/login').then((c)=>c.Login), title:'login !'},
        {path:'**', loadComponent: ()=>import('./pages/not-found/not-found').then((c)=>c.NotFound), title:'notFound !!!'}

    ]
    }
];





// قبل اللاستخدام lazy loading

// import { Routes } from '@angular/router';
// import { Blanck } from './layout/blanck/blanck';
// import { Auth } from './layout/auth/auth';
// import { Home } from './pages/home/home';
// import { Cart } from './pages/cart/cart';
// import { Products } from './pages/products/products';
// import { Categories } from './pages/categories/categories';
// import { Contact } from './pages/contact/contact';
// import { Register } from './pages/register/register';
// import { Login } from './pages/login/login';
// import { NotFound } from './pages/not-found/not-found';

// export const routes: Routes = [

//     {path:'', redirectTo:'home', pathMatch:'full'},
    
//     {path:'', component:Blanck , title:'blanck !', children:[
//         {path:'home', component:Home , title:'home !'},
//         {path:'cart', component:Cart, title:'cart !'},
//         {path:'products', component:Products , title:'products !'},
//         {path:'categories', component:Categories , title:'categories !'},
//         {path:'contact', component:Contact , title:'contact !'},
//     ]},
//     {path:'', component:Auth , title:'auth !', children:[
//         {path:'register', component:Register , title:'register !'},
//         {path:'login', component:Login , title:'login !'},
//         {path:'**', component:NotFound, title:'notFound !!!'}

//     ]
//     }
// ];
