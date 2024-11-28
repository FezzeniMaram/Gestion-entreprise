import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { addDoc, collection } from '@firebase/firestore';
import { ConnectePageComponent } from './connecte-page/connecte-page.component';
import { InscrirePageComponent } from './inscrire-page/inscrire-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink,RouterLinkActive ,ConnectePageComponent, InscrirePageComponent]
})
export class AppComponent implements OnInit{
  title = 'entreprise';
   public ngOnInit(): void {
  //   const TestCollection= collection (this.firebase,"Users")
  //   addDoc(TestCollection,{'name':'Maram','email':'Maram.fezzenyy@gmail.com'})
}
  constructor(private firebase:Firestore){}
}
