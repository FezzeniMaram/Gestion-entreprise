import { Component } from '@angular/core';
import { Employer, userConverter } from '../../models/employer';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData, doc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-modifier-employer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modifier-employer.component.html',
  styleUrl: './modifier-employer.component.css'
})
export class ModifierEmployerComponent {

  cin: string;
  id:String = '';
  admin$!: Observable<Admin[]>;
  employer: Employer= new Employer("","","","","","","","","","","",);
   constructor(private router: Router, private firestore: Firestore) {
  this.cin = DataServiceService.getValue();
  console.log("Cin: "+this.cin); 
  } 
  
    ngOnInit(): void {
      this.getData();
    }
    async getData() {
      const testCollection = collection(this.firestore, 'Employer').withConverter(userConverter);
      const q = query(testCollection, where('cin_emp', '==', this.cin));
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        console.log(doc.id);
        this.id = doc.id;
          const data = doc.data();
          this.employer = new Employer(
        data.cin_emp,
        data.nom_emp,
        data.prenom_emp, 
        data.date_naiss_emp,
        data.email_emp, 
        data.adresse_emp, 
        data.tel_emp, 
        data.tel_urg_emp,
        data.departement_emp, 
        data.salaire_emp, 
        data.heur_trava_emp
      )})
    
     console.log(this.employer)
      };
  
      async modifier(modifierForm: NgForm) {
        
        const employerRef = doc(this.firestore, 'Employer', this.id.toString());
        console.log(employerRef)
        console.log("le cin est",this.employer.cin_emp)
        await updateDoc(employerRef, {
          nom_emp: this.employer.nom_emp,
          prenom_emp: this.employer.prenom_emp,
          adresse_emp: this.employer.adresse_emp,
          date_naiss_emp: this.employer.date_naiss_emp,
          email_emp: this.employer.email_emp,
          tel_emp: this.employer.tel_emp,
          tel_urg_emp: this.employer.tel_urg_emp,
          departement_emp: this.employer.departement_emp,
          salaire_emp: this.employer.salaire_emp,
          heur_trava_emp: this.employer.heur_trava_emp
          
        });
        console.log("Les données de l'employé ont été mises à jour avec succès.");
        alert("Les données de l'employé ont été mises à jour avec succès.");
        this.router.navigate(["/employer"]);
    }
    retour(){
      this.router.navigate(["/employer"]);

    }
    


  
    

  

}