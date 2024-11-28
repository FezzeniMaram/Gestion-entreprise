import { Component } from '@angular/core';
import { Client, userConverter } from '../../models/client';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { Firestore, collection, collectionData, getDocs, query, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-client.component.html',
  styleUrl: './view-client.component.css'
})
export class ViewClientComponent {
  cin: string;
  admin$!: Observable<Admin[]>;
  client$! : Observable<Client[]> ;
  constructor(private firestore: Firestore , private router : Router){
     this.cin = DataServiceService.getValue();
     console.log("Cin: "+this.cin); 
  
  }
    ngOnInit(): void {
      this.getData();
    }
  async getData() {
    const testCollection = collection(this.firestore, 'Client').withConverter(userConverter);
    const q = query(testCollection, where('cin_client', '==', this.cin));
    console.log(q); 
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const admin = doc.data();
      console.log(admin);
      this.client$=collectionData(q);
  
    });
  }
  retour(){
    this.router.navigate(['/client']);
  }
  modifier(){
    this.router.navigate(['/modifier_client']);
  }
  }
  