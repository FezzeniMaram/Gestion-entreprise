import { Component } from '@angular/core';
import { Client, userConverter } from '../../models/client';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { Firestore, collection, collectionData, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modifier-client.component.html',
  styleUrl: './modifier-client.component.css'
})
export class ModifierClientComponent {
  cin: string;
  id: String="";
  admin$!: Observable<Admin[]>;
  client: Client= new Client("","","","","","","","");

  constructor(private firestore: Firestore , private router : Router){
    this.cin = DataServiceService.getValue();
    console.log("Cin: "+this.cin); 
 
 }

ngOnInit(): void {
      this.getData();
    }

    async getData(){
      const testCollection = collection(this.firestore, 'Client').withConverter(userConverter);
    const q = query(testCollection, where('cin_client', '==', this.cin));
    console.log(q); 
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.id = doc.id;
      const data = doc.data();
      this.client= new Client(
        data.cin_client, 
        data.nom_client, 
        data.prenom_client, 
        data.email_client, 
        data.adresse_client, 
        data.tel_client,
        data.statut_projet,
        data.note
      )
  
    });
}
async modifier(modifierForm: NgForm) {
        
  const clientRef = doc(this.firestore, 'Client', this.id.toString());
  console.log(clientRef)
  console.log("le cin est",this.client.cin_client)
  await updateDoc(clientRef, {
            cin_client: this.client.cin_client,
            nom_client: this.client.nom_client,
            prenom_client: this.client.prenom_client,
            email_client:  this.client.email_client,
            adresse_client: this.client.adresse_client,
            tel_client:  this.client.tel_client,
            statut_projet: this.client.statut_projet,
            note:  this.client.note
    
    
  });
  console.log("Les données de client ont été mises à jour avec succès.");
  alert("Les données de client ont été mises à jour avec succès.");
  this.router.navigate(["/client"])
}

retour(){
  this.router.navigate(["/client"])

}
}
