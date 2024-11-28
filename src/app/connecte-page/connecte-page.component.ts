import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { FormsModule, NgForm } from '@angular/forms';
import { Admin } from '../../models/admin';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-connecte-page',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './connecte-page.component.html',
  styleUrls: ['./connecte-page.component.css']
})
export class ConnectePageComponent implements OnInit {
  constructor(private firestore: Firestore, private router: Router) {}

  ngOnInit(): void {}

  public admin: Admin = new Admin();

  public async connecter(connecterForm: NgForm) {
    const q = query(collection(this.firestore, "Admin"), where("email", "==", this.admin.email));
  console.log(q);
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("L'email n'existe pas dans la base de données.");
        alert("Email non valid");
      } else {
        console.log("L'email existe dans la base de données.");
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data['motdepasse'] === this.admin.motdePasse) {
            console.log("Mot de passe correct. Connecté avec succès!");
            this.router.navigate(['/home'])
          } else {
            console.log("Mot de passe incorrect.");
            alert("Mot de passe incorrecte! ")
          }
        
          // console.log("email:", data['email']);
          // console.log(doc.id, " => ", doc.data());
        });
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des documents : ", error);
    }
  }
  
}

