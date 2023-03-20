import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {GlobalConstants} from '../global-constants';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  name : String = "";
  recipiedata: any
  img:any
  recipesteps:any
  appliedsubstitutions:String[] = []
  substitutions : any
  stepscounter:number = 1
  switchValue = false;
  desc:any
  base_url: string = GlobalConstants.backend_url;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.name = params['name']);
    console.log(this.name)
  
    // fetch recipie information
  console.log("this param is")
  console.log(this.name)
  const param = this.name
  let url = this.base_url +'api/get_recipie?param=' + param;
  fetch(url)
  //fetch(`http://localhost:5001/api/get_recipie?param=${param}`)
  .then(response => response.json())
  .then(data => 
   { this.recipiedata = data['data'];
  //  this.img = data['image']
    console.log("recipie componenets")
    console.log(data)})
  
  
    let url2 = this.base_url +'api/get_image?param=' + param;
    fetch(url2)
    // fetch image information
    //fetch(`http://localhost:5001/api/get_image?param=${param}`)
    .then(response => response.json())
    .then(data => 
     { 
      this.img = data['data']
      console.log("recipie image")
      console.log(data)})

       // fetch steps information
    let url3 = this.base_url +'api/get_steps?param=' + param;
    fetch(url3)
    //fetch(`http://localhost:5001/api/get_steps?param=${param}`)
    .then(response => response.json())
    .then(data => 
     { 
      this.recipesteps = data['data']
      console.log("recipie steps")
      console.log(data['data'])})
      

      //fetch substitutions information
    let url4 = this.base_url +'api/get_substitutions?param=' + param;
    fetch(url4)
    //fetch(`http://localhost:5001/api/get_substitutions?param=${param}`)
    .then(response => response.json())
    .then(data => 
     { 
      this.substitutions = data['data']
      console.log("recipie substitutions")
      console.log(data['data'])})

    // description
     // get description
     let url5 = this.base_url +'api/get_description?param=' + param;
    fetch(url5)
     //fetch(`http://localhost:5001/api/get_description?param=${param}`)
     .then(response => response.json())
     .then(data2 => 
      {
       console.log(data2)
       this.desc = data2['data']
      
       })
     .catch(error => console.error(error));
      

  
}

apply() {
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')) as HTMLInputElement[];
checkboxes.forEach((checkbox: HTMLInputElement) => {
  if (checkbox.checked) {
    this.appliedsubstitutions.push(checkbox.id)
    console.log(`${checkbox.id} is checked`);
  }
});
console.log(this.appliedsubstitutions)
  //fetch recipies after substitutions information
  fetch(`http://localhost:5001/api/apply_substitutions?param=${this.name}&substitutions=${this.appliedsubstitutions}`)
  .then(response => response.json())
  .then(data => 
   { 
    this.recipiedata = data['data']
    console.log("recipie ingrediants")
    console.log(data['data'])})
}
}



