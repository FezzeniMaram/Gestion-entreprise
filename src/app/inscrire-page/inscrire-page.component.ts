import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../models/admin';
import { FormsModule, NgForm, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-inscrire-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './inscrire-page.component.html',
  styleUrl: './inscrire-page.component.css'
})
export class InscrirePageComponent implements OnInit{
  constructor(private router: Router, private firebase : Firestore){}
  ngOnInit(): void {};
  public admin : Admin = new Admin();
  
  public enregistrement(enregitreForm : NgForm){

    if (!this.validerNom(this.admin.nom)) {
      alert("Nom invalide");
      return;
  }

  if (!this.validerTelephone(this.admin.telephone)) {
      alert("Téléphone invalide");
      return;
  }

  if (!this.validerEmail(this.admin.email)) {
      alert("Email invalide");
      return;
  }

  if (!this.valideMotdepase(this.admin.motdePasse)) {
      alert("Mot de passe invalide");
      return;
  }

  alert("Enregistrement réussi !");

  //Ajouter les donneés dans firebase
  const TestCollection= collection (this.firebase,"Admin")
  addDoc(TestCollection,{
    'name':this.admin.nom,
    'telephone':this.admin.telephone,
    'email':this.admin.email, 
    'motdepasse':this.admin.motdePasse});

    //Naviger  a connectePage
  this.router.navigate(['/connecte']);
 
  }
  
  private validerNom(nom: string): boolean {
    if (!nom || nom.trim() === "") {
        return false; 
    }
    return /^[a-zA-Z]+$/.test(nom);
  }

  private validerTelephone(telephone: string): boolean {
    if (!telephone || telephone.trim() === "") {
      return false; 
  }
    return /^[0-9]+$/.test(telephone);
  }

  private validerEmail(email: string): boolean {
    if (!email || email.trim() === "") {
      return false; 
  }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private valideMotdepase(motdePasse: string): boolean{
    if (!motdePasse || motdePasse.trim()===""){
      return false;
    }
    return true;
  }

}
