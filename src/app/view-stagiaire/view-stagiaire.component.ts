import { Component } from '@angular/core';
import { Stagiaire, stagConverter } from '../../models/stagiaire';
import { Firestore, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-stagiaire',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-stagiaire.component.html',
  styleUrl: './view-stagiaire.component.css'
})
export class ViewStagiaireComponent {
  cin: string;
  admin$!: Observable<Admin[]>;
  stagiaire$! : Observable<Stagiaire[]> ;
  constructor(private firestore: Firestore , private router : Router){
     this.cin = DataServiceService.getValue();
     console.log("Cin: "+this.cin); 
  
  }
    ngOnInit(): void {
      this.getData();
    }
  async getData() {
    const testCollection = collection(this.firestore, 'Stagiaire').withConverter(stagConverter);
    const q = query(testCollection, where('cin_stag', '==', this.cin));
    console.log(q); 
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const admin = doc.data();
      console.log(admin);
      this.stagiaire$=collectionData(q);
  
    });
  }
  retour(){
    this.router.navigate(['/stagiaire']);
  }
  modifier(cin_stag:string){
    console.log(cin_stag)
    DataServiceService.setValue(cin_stag);
    this.router.navigate(['/modifier_stagiaire']);
  }
  }
  