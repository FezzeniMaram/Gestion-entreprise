import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';
import { DataServiceService } from '../data-service.service';
import { Employer, userConverter } from '../../models/employer';
import { Admin } from '../../models/admin';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-viem-employer',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './view-employer.component.html',
  styleUrl: './view-employer.component.css'
})
export class ViemEmployerComponent implements OnInit {
cin: string;
admin$!: Observable<Admin[]>;
employer$! : Observable<Employer[]> ;
constructor(private firestore: Firestore , private router : Router){
   this.cin = DataServiceService.getValue();
   console.log("Cin: "+this.cin); 

}
  ngOnInit(): void {
    this.getData();
  }
async getData() {
  const testCollection = collection(this.firestore, 'Employer').withConverter(userConverter);
  const q = query(testCollection, where('cin_emp', '==', this.cin));
  console.log(q); 
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const admin = doc.data();
    console.log(admin);
    this.employer$=collectionData(q);

  });
}
retour(){
  this.router.navigate(['/employer']);
}
modifier(cin_emp:string){
  console.log(cin_emp)
  DataServiceService.setValue(cin_emp);
  this.router.navigate(['/modifier_employer']);
}
}
