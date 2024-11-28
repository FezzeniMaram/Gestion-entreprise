import { Component, OnInit } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employer, userConverter } from '../../models/employer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  constructor(private firestore : Firestore){}
  ngOnInit(): void {
    this.getData();
    this.getDataSt();
    this.getDatacl();
  }
  employer$! : Observable<Employer[]> ;
  totalSalaire: number = 0;
  totalEmployer: number =0;
  totalStagiaire : number =0;
  totalClient: number =0;

  async getData(){
    const testCollection = collection(this.firestore, 'Employer').withConverter(userConverter);
    const querySnapshot = await getDocs(testCollection);
    this.totalEmployer = querySnapshot.size;
    this.totalSalaire = 0; // Initialiser la somme à 0
    querySnapshot.forEach((doc) => {
        const admin = doc.data();
        const salaire = parseFloat(admin.salaire_emp); // Convertir la chaîne en nombre (si nécessaire)
        this.totalSalaire += salaire; // Ajouter le salaire au total
        console.log(admin.salaire_emp);
    });
    console.log("somme des employer ",this.totalEmployer)
    console.log('Somme des salaires :', this.totalSalaire);
    this.employer$ = collectionData(testCollection);
  }
  async getDataSt(){
    const testCollection = collection(this.firestore, 'Stagiaire').withConverter(userConverter);
    const querySnapshot = await getDocs(testCollection);
    this.totalStagiaire = querySnapshot.size;
    console.log("somme des stagiaires ",this.totalStagiaire)
  }
  async getDatacl(){
    const testCollection = collection(this.firestore, 'Client').withConverter(userConverter);
    const querySnapshot = await getDocs(testCollection);
    this.totalClient = querySnapshot.size;
    console.log("somme des client ",this.totalClient)
  }

  // calculateTotalSalary(): void {
  //   this.totalSalary = employer$.reduce((total, emp) => {
  //     const salary = parseInt(emp.salaire_emp);
  //     return total + salary;
  //   }, 0);
  //   console.log("Total Salary:", this.totalSalary);
  // }

}
