import { Component } from '@angular/core';
import { Stagiaire, stagConverter } from '../../models/stagiaire';
import { Firestore, collection, collectionData, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-stagiaire',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modifier-stagiaire.component.html',
  styleUrl: './modifier-stagiaire.component.css'
})
export class ModifierStagiaireComponent {
  cin: String;
  id: String='';
  admin$!: Observable<Admin[]>;
  stagiaire: Stagiaire = new Stagiaire("","","","","","","","","","","","","","","");
  constructor(private firestore: Firestore , private router : Router){
    this.cin = DataServiceService.getValue();
    console.log("Cin: "+this.cin);
   }

    ngOnInit(): void {
      this.getData();
    }
 
    async getData(){
      const testCollection = collection(this.firestore, 'Stagiaire').withConverter(stagConverter);
      const q = query(testCollection, where('cin_stag', '==', this.cin));
      console.log(q);
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        console.log(doc.id);
        this.id = doc.id;
          const data = doc.data();
          this.stagiaire= new Stagiaire(
          data.cin_stag,
          data.nom_stag,
          data.prenom_stag,
          data.date_naiss_stag,
          data.email_stag, 
          data.adresse_stag, 
          data.tel_stag, 
          data.tel_urg_stag,
          data.departement_stag,
          data.date_debut,
          data.date_fin,
          data.heur_trava_stag,
          data.niveau_scolaire,
          data.nom_univer,
          data.salaire_stag
          )})
           console.log(this.stagiaire);

      };

      async modifier(modifierForm: NgForm) {
        
        const stagiaireRef = doc(this.firestore, 'Stagiaire', this.id.toString());
        console.log(stagiaireRef)
        console.log("le cin est",this.stagiaire.cin_stag)
        await updateDoc(stagiaireRef, {
          cin_stag:this.stagiaire.cin_stag,
          nom_stag: this.stagiaire.nom_stag,
          prenom_stag: this.stagiaire.prenom_stag,
          date_naiss_stag: this.stagiaire.date_naiss_stag,
          email_stag: this.stagiaire.email_stag,
          adresse_stag: this.stagiaire.adresse_stag,
          tel_stag: this.stagiaire.tel_stag,
          tel_urg_stag: this.stagiaire.tel_urg_stag,
          departement_stag: this.stagiaire.departement_stag,
          date_debut: this.stagiaire.date_debut,
          date_fin: this.stagiaire.date_fin,
          heur_trava_stag: this.stagiaire.heur_trava_stag,
          niveau_scolaire: this.stagiaire.niveau_scolaire,
          nom_univer: this.stagiaire.nom_univer,
          salaire_stag: this.stagiaire.salaire_stag,
          
          
        });
        console.log("Les données de stagiaire ont été mises à jour avec succès.");
        alert("Les données de stagiaire ont été mises à jour avec succès.");
        this.router.navigate(["/stagiaire"])
    }

      retour(){
        this.router.navigate(["/stagiaire"])

      }
    }



