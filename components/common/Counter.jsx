"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function NosPartenaires() {
    const partenaires = [
        {
            id: 1,
            nom: 'Microsoft',
            logo: '/assets/img/partenaire/Microsoft18.png',
            description: 'Collaborate for free with online versions of Microsoft Word, PowerPoint, Excel, and OneNote. Save documents, spreadsheets, and presentations online, in OneDrive.',
        },
        {
            id: 2,
            nom: 'Comptia',
            logo: '/assets/img/partenaire/comptia.jpg',
            description: ' Association professionnelle américaine qui délivre des certifications professionnelles temporaires indépendantes des fournisseurs pour l’industrie des technologies de l’information (IT).',
        },
        {
            id: 3,
            nom: 'DELL',
            logo: '/assets/img/partenaire/Dell.png',
            description: 'Dell Technologies, Inc est une entreprise américaine de constructeur de produits informatiques, fournisseur de services informatiques et distributeu au monde '
        },
        // Ajoutez d'autres partenaires ici...
    ];

    return (
        <div>
            <Head>
                <title>Partenaires</title>
            </Head>
            <h3 className="p-4">Nos partenaires</h3>
            <h1>Partenaires</h1>
            <ul>
                {partenaires.map((partenaire) => (
                    <li key={partenaire.id}>
                        <Link href={`/partenaires/${partenaire.id}`}>
                        <Image src={partenaire.logo} alt={partenaire.nom}  width={150}  height={100} />                            <h2>{partenaire.nom}</h2>
                            <p>{partenaire.description}</p>
                            
                        </Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}
