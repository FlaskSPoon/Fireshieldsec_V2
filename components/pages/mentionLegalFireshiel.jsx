import React from "react";

// app/legal-mentions/page.js
import Link from "next/link";

function Title({ children }) {
  return <h2 className="text-lg font-bold mb-4">{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="text-black-700 mb-4">{children}</p>;
}

function LinkComponent({ href, children }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default function LegalMentions() {
  return (
    <>
      <section className="about-area space-top pb-425">
        <div className="container">
          <div className="max-w-3xl mx-auto p-6">
            <Title>1. Informations Légales</Title>
            <Paragraph>
            Conformément à l'article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
             il est précisé aux utilisateurs du site <span>Fireshield Security </span>l'identité 
             des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </Paragraph>
            <ul>
              <li>Propriétaire du site : [Fireshield Security/ Mr Maurice Echu]</li>
              <li>Siege social: [ 29-31 Voie de degagement N, Dakar]</li>
              <li>Numéro SIRET : [Numéro SIRET]</li>
              <li>Responsable publication : [Mme Yasmin Da silva/ yasmindasilva@gmail.com]</li>
              <li>Hebergeur: [fonstain bill/hebermentsite@gmail.com]</li>
            </ul>

            <Title>2.Propriété Intellectuelle</Title>
            <Paragraph>
            Le site Fireshield Security et l'ensemble de son contenu 
            (textes, images, logos, graphismes, icônes, sons, logiciels) sont la propriété exclusive de l'Entreprise ou font l'objet
             d'une autorisation d'utilisation. Toute reproduction, distribution, modification ou exploitation de 
             ces éléments est interdite sans autorisation préalable</Paragraph>
            <Title>3.Hébergement</Title>
            <Paragraph>
              Hébergeur : Nom de l'hébergeur <br />
              Adresse : Adresse de l'hébergeur <br />
              Contact :{" "}
              <LinkComponent href="https://hebergeur.com">
                hebergeur.com
              </LinkComponent>
            </Paragraph>
            <Title>4.Responsabilités</Title>
            <Paragraph>
            Nous nous efforçons d’assurer l’exactitude des informations présentées sur le site. Toutefois,
             nous ne saurions être tenus responsables des erreurs, 
             omissions ou de l’indisponibilité de certaines informations.

Le site F****ireshield Security peut contenir des liens vers des sites externes. 
Nous ne pouvons pas garantir le contenu de ces sites tiers 
et déclinons toute responsabilité quant à leur utilisation.
            </Paragraph>
            <Title>5.Cookies</Title>
            <Paragraph>
            Le site Fireshield Security utilise des cookies pour améliorer l'expérience utilisateur.
             Vous pouvez accepter, refuser ou paramétrer les cookies via les 
             paramètres de votre navigateur.
            </Paragraph>
            <Title>6.Protection des Données</Title>
            <Paragraph>
              Pour plus d’informations, consultez notre{" "}
              <LinkComponent href="/privacy-policy">
                Politique de Confidentialité
              </LinkComponent>
              .
            </Paragraph>
            <Title>7.Contact</Title>
            <Paragraph>
              Pour toute question ou suggestion concernant ces mentions légales, 
              vous pouvez nous contacter par:</Paragraph>
              <ul>
                <li>Email: [yasmindasilva@gmail.com]</li>
                <li>Adresse physique: [29-31 Voie de degagement N, Dakar]</li>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
}
