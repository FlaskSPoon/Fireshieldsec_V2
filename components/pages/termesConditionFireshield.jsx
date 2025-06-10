"use client";

// app/terms-and-conditions/page.js
import Link from "next/link";

function Title({ children }) {
  return <h2 className="text-2xl font-bold mb-4">{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="text-gray-700 mb-4">{children}</p>;
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

export default function TermsAndConditions() {
  return (
    <>
      <section className="about-area space-top pb-425">
        <div className="container">
          <div className="max-w-3xl mx-auto p-6">
            <Title>Termes et Conditions</Title>
            <Title>Derniere mis a jour: []</Title>
            <Paragraph>
            Bienvenue sur Fireshield Security. En accédant et en utilisant notre site, vous
             acceptez pleinement et sans réserve les présentes conditions générales d'utilisation.
            </Paragraph>
            <Title>1.Objectif</Title>
            <Paragraph>
            Les présentes conditions ont pour objet de définir les modalités et conditions
            d'utilisation du site <span>Fireshield </span>Security ainsi que les droits et obligations des 
            utilisateurs et de l’éditeur du site.
            </Paragraph>
            <Title>2.Acceptation des Conditions </Title>
            <Paragraph>
            L'utilisation du site implique l'acceptation pleine et entière des présentes conditions d'utilisation.
             Si vous ne souhaitez pas être lié par ces conditions, veuillez ne pas utiliser notre site.
            </Paragraph>
            <Title>3.Acces au Site</Title>
            <Paragraph>
            Le site est accessible gratuitement à tout utilisateur disposant d’un accès à 
            Internet. Toutefois, l’éditeur peut suspendre ou restreindre l’accès à certaines
             parties du site pour maintenance ou mise à jour.
            </Paragraph>
            <Title>4.Propriete intellectuelle</Title>
            <Paragraph>
            Tout le contenu présent sur le site (textes, images, graphismes, logos, vidéos, 
            icônes, logiciels) est protégé par des droits d’auteur et de propriété intellectuelle.
             Toute reproduction, distribution, modification ou utilisation non autorisée est 
             strictement interdite sans accord préalable.
            </Paragraph>
            <Title>5.Responsabilités</Title>
                  <ul>
                    <li>
                      <Paragraph>
                      <span>Fireshield Security</span> met tout en œuvre pour fournir des informations exactes
                       et à jour, mais ne peut garantir l’absence d’erreurs ou d’omissions.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      L’utilisateur est responsable de l’usage qu’il fait du site et de ses services.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      Le site peut contenir des liens vers des sites tiers. <span>Fireshield Security </span>
                      ne saurait être tenu responsable du contenu de ces sites externes.            
                       </Paragraph>
                    </li> 
                  </ul>
                  <Title>6.Protection des Donnees Personnelles</Title>
                  <Paragraph>
                  Les informations personnelles collectées sont traitées conformément à notre 
                  Politique de Confidentialité. Vous disposez de droits sur vos données, 
                  notamment d'accès, de rectification et de suppression. Pour toute demande, 
                  veuillez nous contacter à [contactfireshieldsec@com]. </Paragraph>  
                  <Title>7.Utilisation des Cookies</Title>
                  <Paragraph>
                  Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous avez 
                  la possibilité de les accepter, les refuser ou les paramétrer selon vos préférences  </Paragraph>
                  <Title>8.Modifications des Conditions</Title>
                <Paragraph>
                Nous nous réservons le droit de modifier ces conditions à tout moment. 
                Toute modification sera publiée sur cette page avec indication de la date de mise à jour</Paragraph>
                <Title>9.Loi Applicable et Juridiction</Title>
                <Paragraph>
                Les présentes conditions sont régies par la loi française. Tout litige relatif à leur 
                interprétation ou à leur exécution sera soumis aux tribunaux compétents.</Paragraph>
                <Title>10.Contact</Title>
            <Paragraph>
              Pour toute question ou information concernant ces termes, veuillezmous  contacter à
              <LinkComponent href="mailto:contact@fireshieldsec.com">
                {" "}
                contact@fireshieldsec.com
              </LinkComponent>
              .
            </Paragraph>
            <Paragraph> Merci d'utiliser <span>Fireshield Security</span> en toute confiance.</Paragraph>
          </div>
        </div>
      </section>
    </>
  );
}
