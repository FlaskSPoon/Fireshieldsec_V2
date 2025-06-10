"use client";
import React from "react";
import Link from "next/link";

function Title({ children }) {
  return <h2 className="text-lg font-bold mb-4">{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="text-lg text-gray-800 leading-relaxed">{children}</p>;
}

function LinkComponent({ href, children }) {
  return (
    <Link href={href} prefetch={false} className="text-blue-600 hover:underline">
      {children}
    </Link>
  );
}

export default function PolitiqueConfidentialite() {
  return (
    <section className="about-area space-top pb-425">
      <div className="container">
        <div className="max-w-3xl mx-auto p-6">
          <Title>Politique de Confidentialité</Title>
          <Paragraph>
            Bienvenue sur Fireshield Security. Nous accordons une grande importance à la protection de vos données personnelles. 
            Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels sont vos droits à leur égard.
          </Paragraph>
          <Paragraph>
            Nous n’utilisons pas les informations recueillies auprès des utilisateurs lors de leur utilisation de ce site Web pour alimenter nos services d’analyse.
            Nous expliquons également certains droits dont vous disposez à l’égard de vos renseignements personnels.
            Notez que cette politique de confidentialité ne régit pas l’application mobile Fireshield ou l’extension de navigateur.
          </Paragraph>

          <Title>Collecte des Données Personnelles</Title>
          <Paragraph>
            Nous collectons différentes catégories de données personnelles lorsque vous utilisez notre site ou nos services :
          </Paragraph>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Informations d'identification :</strong> Nom, adresse e-mail, numéro de téléphone...</li>
            <li><strong>Informations techniques :</strong> Adresse IP, type de navigateur, système d’exploitation, pages visitées, etc.</li>
            <li><strong>Données de connexion :</strong> Identifiant, mot de passe (crypté), et préférences utilisateur.</li>
            <li><strong>Données financières :</strong> Informations de paiement lorsque vous effectuez des achats sur notre site.</li>
          </ul>

          <Paragraph>
            Pour lire nos conditions d’utilisation, rendez-vous sur
            <LinkComponent href="/termes-conditions"> Termes &amp; Conditions</LinkComponent>.
          </Paragraph>

          <Title>Utilisation des Données</Title>
          <Paragraph>Nous utilisons vos données pour :</Paragraph>
          <ul className="list-disc pl-5 mb-4">
            <li>Fournir, gérer et améliorer nos services.</li>
            <li>Communiquer avec vous et répondre à vos demandes.</li>
            <li>Assurer la sécurité et la protection contre les fraudes.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>

          <Paragraph>
            Comme la plupart des opérateurs de sites Web, nous pouvons aussi collecter des informations de connexion :
            Type de navigateur, langue de préférence, date et heure de chaque demande du visiteur, URL de référence, adresses IP, système d’exploitation, ID de l’appareil et ID publicitaire.
          </Paragraph>

          <Paragraph>
            Ces renseignements sont recueillis à des fins d’analyse sur une base anonymisée et ne peuvent pas être utilisés seuls pour identifier les visiteurs de notre site Web.
          </Paragraph>

          <Title>Informations de Communication</Title>
          <Paragraph>
            <strong>Informations de communication :</strong> Lorsque vous envoyez un e-mail, appelez, utilisez un formulaire ou communiquez avec notre équipe,
            nous pouvons conserver un enregistrement de ces échanges.
          </Paragraph>

          <Title>Contact</Title>
          <Paragraph>
            Pour toute question, vous pouvez nous contacter à :
            <LinkComponent href="mailto:contact@fireshieldsec.com"> contact@fireshieldsec.com</LinkComponent>.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
