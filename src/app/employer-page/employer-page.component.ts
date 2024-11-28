import { Component,OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Admin} from '../../models/admin';
import { FormsModule, NgForm } from '@angular/forms';
import { AsyncPipe, CommonModule, NgForOf } from '@angular/common';
import { Firestore, collection, collectionData, deleteDoc, doc, getDocs, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employer ,userConverter} from '../../models/employer';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-employer-page',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule, AsyncPipe],
  templateUrl: './employer-page.component.html',
  styleUrl: './employer-page.component.css'
})
export class EmployerPageComponent implements OnInit{


constructor(private router: Router, private firestore : Firestore, private dataserviceservice: DataServiceService){} 
id:String = '';
  admin$!: Observable<Admin[]>;
  employer$! : Observable<Employer[]> ;
ngOnInit(): void {
this.getData();
};

async getData(){
  const testCollection = collection(this.firestore, 'Employer').withConverter(userConverter);
  let data = await getDocs(testCollection)
 data.forEach((doc)=>{
   const admin = doc.data()
   console.log(admin)

 })
 this.employer$ = collectionData(testCollection)

}
getValue(cin_emp: string){
  console.log(cin_emp)
  DataServiceService.setValue(cin_emp);
  this.router.navigate(['/viewEmployer'])
}

navto_ajout(){
  this.router.navigate(['/ajout_employer'])
}

  async onDelete(cin_emp:string) {
    const testCollection = collection(this.firestore, 'Employer').withConverter(userConverter);
    const q = query(testCollection, where('cin_emp', '==', cin_emp));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      console.log(doc.id);
      this.id = doc.id;})

  if (this.dataserviceservice.confirm('Êtes-vous sûr de vouloir supprimer cet élément?')) {
    const docRef = doc(this.firestore, 'Employer', this.id.toString());
      await deleteDoc(docRef);
      console.log(this.id)

    alert('Suppression effectuée');
  
  } else {
    alert('Suppression annulée');
  }
}


}