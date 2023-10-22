import { Component } from '@angular/core';


@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  // String interPolution

  data = {
    title : "First project",
    tech1 : "Angular",
    tech2 : "Typescript",
    tech3 : "Ajsal"
  }

  // Property binding

  value = "NO TOUCH"

  colorfunction(){
    return "100px"
  }
  color(){
    return "black"
  }
  function(){
    return "center"
  }

//Event Handiling

str = ""

morning(){
  this.str = "Good Morning"
}
evening(){
  this.str = "Good Evening"
}
//////////////////////////

count  = 0
oddeven = ""

ingre(){
  this.count+=1
  if(this.count % 2 == 0){
    this.oddeven = "Even"
  }
  else{
    this.oddeven = "Odd"
  }
}
degre(){
  this.count+=-1
  if(this.count % 2 == 0){
    this.oddeven = "Even"
  }
  else{
    this.oddeven = "Odd"
  }
}

//Tow Way data binding

public res = 0
public string =""
public hidden = true

check(){
  this.hidden = false
  if(this.res % 2 == 0){
    this.string  = "is Even"
  }
  else {
    this.string = "is Odd"
  }
}
clear(){
  this.hidden = true
}
}

 
