import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  // Url du service web de gestion de produits
  // commune pour toutes les méthodes
  urlHote = "http://localhost:3333/produits/";
  urlHote1 = "http://localhost:3333/categoris/";

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.urlHote);
  }

  deleteProduit(idP: number | undefined): Observable<void> {
    return this.http.delete<void>(this.urlHote + idP);
  }

  addProduit(nouveau: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.urlHote, nouveau);
  }

  updateProduit(idP: number | undefined, nouveau: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.urlHote + idP, nouveau);
  }
  getCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.urlHote1);
  }
  getProduitsParCategorieId(id:number): Observable<Produit[]> {
    const urlAvecParametre = `${this.urlHote1}?id=${id}`;
    return this.http.get<Produit[]>(this.urlHote1+"getprod/"+id);
  }

}
