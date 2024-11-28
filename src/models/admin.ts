import { Client } from "./client";
import { Employer } from "./employer";
import { Stagiaire } from "./stagiaire";

export class   Admin {
    public nom!: string;
    public telephone! : string
    public email! : string;
    public motdePasse! :string;
    employer! : Employer[];
    stagiaire!: Stagiaire[];
    client!: Client[];

}



   