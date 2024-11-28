import { Component } from '@angular/core';
import { Client, userConverter } from '../../models/client';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajout-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ajout-client.component.html',
  styleUrl: './ajout-client.component.css'
})
export class AjoutClientComponent {
  constructor(private router: Router, private firestore: Firestore) { }
client: Client= new Client("","","","","","","","");

  ngOnInit(): void { }
  
enregistrement (enregitreForm : NgForm){
  const TestCollection= collection (this.firestore,"Client").withConverter(userConverter);

    addDoc(TestCollection, userConverter.toFirestore(this.client)).then(r => console.log("User added"))
 

    console.log("ajouter avec succée")
    alert("Client ajouter avec succées");
    this.router.navigate(["/client"]);
}
retour(){
  this.router.navigate(["/client"]);
}
}
