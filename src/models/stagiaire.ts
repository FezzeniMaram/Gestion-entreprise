export class Stagiaire {
    public cin_stag!: string;
    public nom_stag!: string;
    public prenom_stag!: string;
    public date_naiss_stag!: string;
    public email_stag!: string;
    public adresse_stag!: string;
    public tel_stag!: string;
    public tel_urg_stag!: string;
    public departement_stag!: string;
    public date_debut! : string;
    public date_fin! : string;
    public heur_trava_stag!: string;
    public niveau_scolaire! : string;
    public nom_univer! : string
    public salaire_stag!: string;
 

    constructor ( cin_stag: string, nom_stag: string, prenom_stag: string, date_naiss_stag: string, email_stag :string,
        adresse_stag: string, tel_stag: string, tel_urg_stag: string, departement_stag: string, date_debut: string,
        date_fin : string, heur_trava_stag: string, niveau_scolaire: string,nom_univer: string,salaire_stag: string,
        ){
            this.cin_stag=cin_stag,
            this.nom_stag=nom_stag,
            this.prenom_stag=prenom_stag,
            this.date_naiss_stag=date_naiss_stag,
            this.email_stag=email_stag,
            this.adresse_stag=adresse_stag,
            this.tel_stag=tel_stag,
            this.tel_urg_stag=tel_urg_stag,
            this.departement_stag=departement_stag,
            this.date_debut= date_debut,
            this.date_fin= date_fin,
            this.heur_trava_stag=heur_trava_stag
            this.niveau_scolaire= niveau_scolaire,
            this.nom_univer=nom_univer,
            this.salaire_stag=salaire_stag 
    }

    toString() {
        return this.cin_stag + ', ' + this.nom_stag,+ ', ' + this.prenom_stag,+ ', ' + this.date_naiss_stag,+ ', ' + this.email_stag,+ ', '
         + this.adresse_stag, + ', ' + this.tel_stag,+ ', ' + this.tel_urg_stag,+ ', ' + this.departement_stag,+ ', ' + this.date_debut,+ ', '
         + this.date_fin,+ ', ' + this.heur_trava_stag,+ ', ' + this.niveau_scolaire,+ ', ' + this.nom_univer,+ ', ' + this.salaire_stag;
          
    }

}



export const stagConverter = {
    toFirestore: (stagiaire:Stagiaire )=> {
        return {
            cin_stag: stagiaire.cin_stag,
            nom_stag: stagiaire.nom_stag,
            prenom_stag: stagiaire.prenom_stag,
            date_naiss_stag: stagiaire.date_naiss_stag,
            email_stag: stagiaire.email_stag,
            adresse_stag: stagiaire.adresse_stag,
            tel_stag: stagiaire.tel_stag,
            tel_urg_stag: stagiaire.tel_urg_stag,
            departement_stag: stagiaire.departement_stag,
            date_debut: stagiaire.date_debut,
            date_fin: stagiaire.date_fin,
            heur_trava_stag: stagiaire.heur_trava_stag,
            niveau_scolaire: stagiaire.niveau_scolaire,
            nom_univer: stagiaire.nom_univer,
            salaire_stag: stagiaire.salaire_stag,


            };},
            fromFirestore: (snapshot:any, options:any) => {
                const data = snapshot.data(options);
                return new Stagiaire (data.cin_stag,
                     data.nom_stag, data.prenom_stag, data.date_naiss_stag,
                                    data.email_stag, data.adresse_stag, data.tel_stag, data.tel_urg_stag,
                                    data.departement_stag,data.date_debut,data.date_fin,data.heur_trava_stag,
                                    data.niveau_scolaire,data.nom_univer,data.salaire_stag);
            }
   
    }