import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',// html  way 
  // selector: '.app-root2', // we will define class by giving . symbol//
  // selector: '[app-root2]',// this is an attribute format//
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kartheek';
  fname:string = "Kartheek";
  lname:string = "A N";
  getFullName():string{
    return this.fname+ " "+this.lname;
  }    
  }
