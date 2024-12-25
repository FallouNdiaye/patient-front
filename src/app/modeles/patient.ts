export interface Patient {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    sexe: string;
    taille: number;
    poids: number;
    contacts: Contact[];
    }
    
    export interface Contact {
    email: string;
    mobile: string;
    fixe: string;
    }