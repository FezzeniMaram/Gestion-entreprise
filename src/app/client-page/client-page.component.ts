import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Firestore, collection, collectionData, deleteDoc, doc, getDocs, query, where } from '@angular/fire/firestore';
import { Client, userConverter } from '../../models/client';
import { Admin } from '../../models/admin';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent {


  constructor(private router: Router, private firestore : Firestore, private dataserviceservice: DataServiceService){} 

  admin$!: Observable<Admin[]>;
  client$! : Observable<Client[]> ;
  id:String="";
ngOnInit(): void {
this.getData();
};

async getData(){
  const testCollection = collection(this.firestore, 'Client').withConverter(userConverter);
  let data = await getDocs(testCollection)
 data.forEach((doc)=>{
   const admin = doc.data()
   console.log(admin)

 })
 this.client$ = collectionData(testCollection)

}
getValue(cin_client: string){
  console.log(cin_client)
  DataServiceService.setValue(cin_client);
  this.router.navigate(['/view_client'])
}

navto_ajout(){
  this.router.navigate(['/ajout_client'])
}
async onDelete(cin_client:string) {
  const testCollection = collection(this.firestore, 'Client').withConverter(userConverter);
  const q = query(testCollection, where('cin_client', '==', cin_client));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    console.log(doc.id);
    this.id = doc.id;})

if (this.dataserviceservice.confirm('Êtes-vous sûr de vouloir supprimer cet élément?')) {
  const docRef = doc(this.firestore, 'Client', this.id.toString());
    await deleteDoc(docRef);
    console.log(this.id)

  alert('Suppression effectuée');

} else {
  alert('Suppression annulée');
}
}


}