export class Client {
    public cin_client!: string;
    public nom_client!: string;
    public prenom_client!: string;
    public email_client!: string;
    public adresse_client!: string;
    public tel_client!: string;
    public statut_projet!: string;
    public note!: string;

    constructor (cin_client: string, nom_client: string, prenom_client: string,email_client: string,
         adresse_client:string, tel_client: string, statut_projet:string, note: string){
        this.cin_client=cin_client,
        this.nom_client=nom_client,
        this.prenom_client=prenom_client,
        this.email_client=email_client,
        this.adresse_client=adresse_client,
        this.tel_client=tel_client,
        this.statut_projet=statut_projet,
        this.note=note
    }

    toString() {
        return this.cin_client + ', ' +this.nom_client + ', ' +this.prenom_client + ', ' +this.email_client + ', ' +
        this.adresse_client + ', ' +this.tel_client + ', ' +this.statut_projet + ', ' +this.note + ', '
    }
}

export const userConverter = {
    toFirestore: (client:Client) => {
        return {
            cin_client:client.cin_client,
            nom_client:client.nom_client,
            prenom_client:client.prenom_client,
            email_client: client.email_client,
            adresse_client:client.adresse_client,
            tel_client: client.tel_client,
            statut_projet:client.statut_projet,
            note: client.note

            };},
            fromFirestore: (snapshot:any, options:any) => {
                const data = snapshot.data(options);
                return new Client (data.cin_client, data.nom_client, data.prenom_client, data.email_client, 
                        data.adresse_client, data.tel_client,data.statut_projet,data.note);
            }
    }