import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Firestore, collection, collectionData, deleteDoc, doc, getDocs, query, where } from '@angular/fire/firestore';
import { Stagiaire, stagConverter } from '../../models/stagiaire';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { userConverter } from '../../models/client';

@Component({
  selector: 'app-stagiaire-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './stagiaire-page.component.html',
  styleUrl: './stagiaire-page.component.css'
})
export class StagiairePageComponent {


  constructor(private router: Router, private firestore : Firestore, private dataserviceservice: DataServiceService){} 
  id: String = "";
  admin$!: Observable<Admin[]>;
  stagiaire$! : Observable<Stagiaire[]> ;
ngOnInit(): void {
this.getData();
};

async getData(){
  const testCollection = collection(this.firestore, 'Stagiaire').withConverter(stagConverter);
  let data = await getDocs(testCollection)
 data.forEach((doc)=>{
   const admin = doc.data()
   console.log(admin)

 })
 this.stagiaire$ = collectionData(testCollection)

}
getValue(cin_emp: string){
  console.log(cin_emp)
  DataServiceService.setValue(cin_emp);
  this.router.navigate(['/view_stag'])
}

navto_ajout(){
  this.router.navigate(['/ajout_stag'])
}
async onDelete(cin_stag:string) {
  const testCollection = collection(this.firestore, 'Stagiaire').withConverter(userConverter);
  const q = query(testCollection, where('cin_stag', '==', cin_stag));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    console.log(doc.id);
    this.id = doc.id;})

if (this.dataserviceservice.confirm('Êtes-vous sûr de vouloir supprimer cet élément?')) {
  const docRef = doc(this.firestore, 'Stagiaire', this.id.toString());
    await deleteDoc(docRef);
    console.log(this.id)

  alert('Suppression effectuée');

} else {
  alert('Suppression annulée');
}
}
}