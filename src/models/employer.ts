export class Employer {
    public cin_emp!: string;
    public nom_emp!: string;
    public prenom_emp!: string;
    public date_naiss_emp!: string;
    public email_emp!: string;
    public adresse_emp!: string;
    public tel_emp!: string;
    public tel_urg_emp!: string;
    public departement_emp!: string;
    public salaire_emp!: string;
    public heur_trava_emp!: string;

    constructor ( cin_emp: string, nom_emp: string, prenom_emp: string, date_naiss_emp: string, email_emp: string,
        adresse_emp: string, tel_emp: string, tel_urg_emp: string, departement_emp: string, salaire_emp: string,
        heur_trava_emp: string){
            this.cin_emp=cin_emp,
            this.nom_emp=nom_emp,
            this.prenom_emp=prenom_emp,
            this.date_naiss_emp=date_naiss_emp,
            this.email_emp=email_emp,
            this.adresse_emp=adresse_emp,
            this.tel_emp=tel_emp,
            this.tel_urg_emp=tel_urg_emp,
            this.departement_emp=departement_emp,
            this.salaire_emp=salaire_emp,
            this.heur_trava_emp=heur_trava_emp
    }

    toString() {
        return this.cin_emp + ', ' + this.nom_emp,+ ', ' + this.prenom_emp,+ ', ' + this.date_naiss_emp,+ ', ' + this.email_emp,+ ', '
         + this.adresse_emp, + ', ' + this.tel_emp,+ ', ' + this.tel_urg_emp,+ ', ' + this.departement_emp,+ ', ' + this.salaire_emp,+ ', '
          + this.heur_trava_emp;
    }

}



export const userConverter = {
    toFirestore: (employer:Employer) => {
        return {
            cin_emp: employer.cin_emp,
            nom_emp: employer.nom_emp,
            prenom_emp: employer.prenom_emp,
            date_naiss_emp: employer.date_naiss_emp,
            email_emp: employer.email_emp,
            adresse_emp: employer.adresse_emp,
            tel_emp: employer.tel_emp,
            tel_urg_emp: employer.tel_urg_emp,
            departement_emp: employer.departement_emp,
            salaire_emp: employer.salaire_emp,
            heur_trava_emp: employer.heur_trava_emp

            };},
            fromFirestore: (snapshot:any, options:any) => {
                const data = snapshot.data(options);
                return new Employer (data.cin_emp, data.nom_emp, data.prenom_emp, data.date_naiss_emp,
                                    data.email_emp, data.adresse_emp, data.tel_emp, data.tel_urg_emp,
                                    data.departement_emp, data.salaire_emp, data.heur_trava_emp);
            }
   
    }