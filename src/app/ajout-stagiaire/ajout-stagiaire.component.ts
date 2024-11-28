import { Component, OnInit } from '@angular/core';
import { Stagiaire, stagConverter,  } from '../../models/stagiaire';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajout-stagiaire',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ajout-stagiaire.component.html',
  styleUrl: './ajout-stagiaire.component.css'
})
export class AjoutStagiaireComponent implements OnInit {
  constructor(private router: Router, private firestore: Firestore) { }
stagiaire: Stagiaire= new Stagiaire("","","","","","","","","","","","","","","");

  ngOnInit(): void { }
  
enregistrement (enregitreForm : NgForm){
  const TestCollection= collection (this.firestore,"Stagiaire").withConverter(stagConverter);

    addDoc(TestCollection, stagConverter.toFirestore(this.stagiaire)).then(r => console.log("User added"))
 

    console.log("ajouter avec succée")
    alert("Stagiare ajouter avec succées");
    this.router.navigate(["/stagiaire"]);
}
retour(){
  this.router.navigate(["/stagiaire"]);
}
}

