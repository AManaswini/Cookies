import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  link: string = "";
  effect = 'scrollx';
  titleImage = "assets/cupcakes.jpg";
  switchValue = false;
  categories: any[] = [
    {
      'name': 'Editor\'s Pick',
      'image': 'assets/choco.jpg',
    },
    {
      'name': 'Vegan Options',
      'image': 'assets/red.jpg',
    },
    {
      'name': 'Gluten Free',
      'image': 'assets/red.jpg',
    },
    {
      'name': 'Ingredient of the Week',
      'image': 'assets/red.jpg',
    },
    {
      'name': 'Top Recommended',
      'image': 'assets/red.jpg',
    }
  ];
  editors_picks: any[] = [
    {
      "id": 1,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 2,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 3,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 4,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 5,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 6,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 7,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 8,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 9,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 10,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 11,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    },
    {
      "id": 12,
      "name": "Red Velvet Cupcakes",
      "description": "26-30 Min",
    }
  ];

  goToRecipe(name: String) {
  this.link = "/recipe";
  this.router.navigate([this.link, name]);
    
  }
//   goToRecipe(event: MouseEvent){
//     if (event.target) {
//       const target = event.target as HTMLElement;
//       if (target.parentElement) {
//         const titleElement = target.parentElement.querySelector('nz-title') as HTMLElement;
//         if (titleElement) {
//           const title = titleElement.innerText;
//           console.log(title);
//         }
//       }
//       this.link = "/recipe/" + 1 ;
//   // this.router.navigate([this.link])
//   }
// }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
