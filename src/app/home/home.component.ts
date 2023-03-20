import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { id_ID } from 'ng-zorro-antd/i18n';
import { range } from 'rxjs';
import { Router } from '@angular/router';
import {GlobalConstants} from '../global-constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count:number = 1
  link: string = "";
  effect = 'scrollx';
  titleImage = "assets/cupcakes.jpg";
  img:any;
  editorpicknames = []
  recommendedrecipies = []
  ingrediant = ""
  base_url: string = GlobalConstants.backend_url;
  vegan_recipies: any[] = [
    {
      "id": 1,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 2,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 3,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
      },
    {
      "id": 4,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 5,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 6,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 7,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 8,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 9,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 10,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    }
  ]
  //recommended_recipes:any[] = []
  recommended_recipes: any[] = [
    {
      "id": 1,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
      },
    {
      "id": 2,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
  ];
  ingrediant_of_the_week: any[] = [
    {
      "id": 1,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 2,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 3,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 4,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
  ];
  gluten_free_recipes: any[] = [
    {
      "id": 1,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 2,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 3,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 4,
      "name": "Choco Chip Cookies",
      "description": "Chocolate chip cookies are a classic American dessert. They are made by mixing flour, sugar, and butter with a bit of milk and baking them until they are soft and delicious.",
      "titleImage" : "assets/cupcakes.jpg",
    },
  ]
  editors_picks: any[] = [
    {
      "id": 1,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 2,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 3,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
      "titleImage" : "assets/cupcakes.jpg",
    },
    {
      "id": 4,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
      "titleImage" : "assets/cupcakes.jpg",
    },
  ];

  constructor(private route: ActivatedRoute,private router: Router) { } 
  
  goToRecipe(name:String) {
    this.link = "/recipe";
    this.router.navigate([this.link, name]);
  }

  // get description
  get_description(param:String){
    let url = this.base_url +'api/get_description?param=' + param;
    //fetch(`http://localhost:5001/api/get_description?param=${param}`)
    fetch(url)
    .then(response => response.json())
    .then(data => 
     {
      console.log(data)
      })
    .catch(error => console.error(error));
    }

  ngOnInit() { 
    this.route.queryParams.subscribe( 
      params => { 
        this.link =  params['link']; 
      } 
    ) 

  console.log("in recipie")
  // editor picks
  let url = this.base_url +'api/editorpicks';
  fetch(url)
  //fetch("http://localhost:5001/api/editorpicks")
  .then(response => response.json())
  .then(data => 
   { this.editorpicknames = data;
    for ( const key in this.editors_picks){
      this.editors_picks[key]["name"] = data["data"][key]
      // get description
    let url2 = this.base_url +'api/get_description?param=' + this.editors_picks[key]["name"];
    fetch(url2)
      //fetch(`http://localhost:5001/api/get_description?param=${this.editors_picks[key]["name"]}`)
    .then(response => response.json())
    .then(data2 => 
     {
      console.log(data2)
      this.editors_picks[key]["description"] = data2["data"]
      })
    .catch(error => console.error(error));
    // get image
    let url4 = this.base_url +'api/get_image?param=' + data["data"][key];
      fetch(url4)
    //fetch(`http://localhost:5001/api/get_image?param=${data["data"][key]}`)
    .then(response => response.json())
    .then(data => 
     { 
      this.editors_picks[key]["titleimage"] = data['data']
      console.log("recipie image")
      console.log(data)})
    }
    console.log(data)})
  .catch(error => console.error(error));
  
  // recommended recipies
  this.count = 1
  let url2 = this.base_url +'api/recommendedrecipies';
  fetch(url2)
  //fetch("http://localhost:5001/api/recommendedrecipies")
  .then(response => response.json())
  .then(data => 
   { 
    for (const key in this.recommended_recipes){
      this.recommended_recipes[key]["name"] = data["data"][key]
      // get description
      let url3 = this.base_url +'api/get_description?param=' + data["data"][key];
      fetch(url3)
      //fetch(`http://localhost:5001/api/get_description?param=${data["data"][key]}`)
    .then(response => response.json())
    .then(data2 => 
     {
      console.log(data2)
      this.recommended_recipes[key]["description"] = data2["data"]
      })
    .catch(error => console.error(error));

     // get image
     let url4 = this.base_url +'api/get_image?param=' + data["data"][key];
      fetch(url4)
     //fetch(`http://localhost:5001/api/get_image?param=${data["data"][key]}`)
     .then(response => response.json())
     .then(data => 
      { 
       this.recommended_recipes[key]["titleimage"] = data['data']
       console.log("recipie image")
       console.log(data)})
    }
    console.log(data)})
  .catch(error => console.error(error));

  // gluten free
  let url5 = this.base_url +'api/glutenfreerecipies';
  fetch(url5)
  fetch("http://localhost:5001/api/glutenfreerecipies")
  .then(response => response.json())
  .then(data => 
   { 
    for (const key in this.gluten_free_recipes){
      this.gluten_free_recipes[key]["name"] = data["data"][key]
       // get description
       let url5 = this.base_url +'api/get_description?param=' + data["data"][key];
      fetch(url5)
      // fetch(`http://localhost:5001/api/get_description?param=${data["data"][key]}`)
       .then(response => response.json())
       .then(data2 => 
        {
         console.log(data2)
         this.gluten_free_recipes[key]["description"] = data2["data"]
         })
       .catch(error => console.error(error));

        // get image
        let url4 = this.base_url +'api/get_image?param=' + data["data"][key];
        fetch(url4)
        //fetch(`http://localhost:5001/api/get_image?param=${data["data"][key]}`)
        .then(response => response.json())
        .then(data => 
         { 
          this.gluten_free_recipes[key]["titleimage"] = data['data']
          console.log("recipie image")
          console.log(data)})
    }
    console.log(data)})
  .catch(error => console.error(error));


  // ingrediant of the week
  let url4 = this.base_url +'api/popular_ingrediants';
  fetch(url4)
  //fetch("http://localhost:5001/api/popular_ingrediants")
  .then(response => response.json())
  .then(data => 
   { 
    for (const key in this.ingrediant_of_the_week){
      this.ingrediant_of_the_week[key]["name"] = data["data"][key]
       // get description
      let url5 = this.base_url +'api/get_description?param=' + data["data"][key];
      fetch(url5)
       //fetch(`http://localhost:5001/api/get_description?param=${data["data"][key]}`)
       .then(response => response.json())
       .then(data2 => 
        {
         console.log(data2)
         this.ingrediant_of_the_week[key]["description"] = data2["data"]
         })
       .catch(error => console.error(error));

        // get image
        let url4 = this.base_url +'api/get_image?param=' + data["data"][key];
        fetch(url4)
       // fetch(`http://localhost:5001/api/get_image?param=${data["data"][key]}`)
        .then(response => response.json())
        .then(data => 
         { 
          this.ingrediant_of_the_week[key]["titleimage"] = data['data']
          console.log("recipie image")
          console.log(data)})

       
    }
    console.log("ingrediant")
    this.ingrediant = data["ingrediant"]
    console.log(this.ingrediant)
    console.log(data)})
  .catch(error => console.error(error));

   // vegan recipies
   let url6 = this.base_url +'api/vegan_recipies';
   fetch(url6)
   //fetch("http://localhost:5001/api/vegan_recipies")
   .then(response => response.json())
   .then(data => 
    { 
     for (const key in this.vegan_recipies){
       this.vegan_recipies[key]["name"] = data["data"][key]
        // get description
        let url5 = this.base_url +'api/get_description?param=' +data["data"][key];
      fetch(url5)
        //fetch(`http://localhost:5001/api/get_description?param=${data["data"][key]}`)
        .then(response => response.json())
        .then(data2 => 
         {
          console.log(data2)
          this.vegan_recipies[key]["description"] = data2["data"]
          })
        .catch(error => console.error(error));


        // get image
        let url4 = this.base_url +'api/get_image?param=' + data["data"][key];
        fetch(url4)
        //fetch(`http://localhost:5001/api/get_image?param=${data["data"][key]}`)
        .then(response => response.json())
        .then(data => 
         { 
          this.vegan_recipies[key]["titleimage"] = data['data']
          console.log("recipie image")
          console.log(data)})
     }
    })
   .catch(error => console.error(error));

  } 
}