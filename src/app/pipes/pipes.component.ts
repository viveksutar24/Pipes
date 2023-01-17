import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  today = new Date();

  currency = 9000;

  fruits = ["mango","kiwi","guava","pomegranate","pineapple"];

  name = {name:"Vivek", email:"viveksutar26@gmail.com"};


}
