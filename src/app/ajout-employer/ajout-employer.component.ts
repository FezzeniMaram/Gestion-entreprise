import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormBuilder } from '@angular/forms'; 
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Employer, userConverter } from '../../models/employer';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ajout-employer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ajout-employer.component.html',
  styleUrls: ['./ajout-employer.component.css']
})
export class AjoutEmployerComponent implements OnInit {
  constructor(private router: Router, private firestore: Firestore) { }
employer: Employer= new Employer("","","","","","","","","","","",);

  ngOnInit(): void { }
  
enregistrement (enregitreForm : NgForm){
  const TestCollection= collection (this.firestore,"Employer").withConverter(userConverter);

    addDoc(TestCollection, userConverter.toFirestore(this.employer)).then(r => console.log("User added"))
 

    console.log("ajouter avec succée")
    alert("Employer ajouter avec succées");
    this.router.navigate(["/employer"]);
}
retour(){
  this.router.navigate(["/employer"])
}
}
