import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie';
import { ProduitsService } from '../services/produits.service'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit{
 CategorieCourant:Categorie=new Categorie();
  listecategorie:Array<Categorie>=[];
  constructor(private produitservice:ProduitsService){}

ngOnInit(): void {
this.produitservice.getCategories().subscribe({
  next:categories=>{
    this.listecategorie=categories;
  },
  error:err=>{
    console.log("Erreur de chargement de cathegorie",err);
  }
})
}

}
