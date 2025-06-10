import Image from 'next/image';
import { Card } from "react-bootstrap";
export default function Confiance() {

       const confiance = [
           {
               id: 11,
               
               logo: '/assets/img/partenaire/force.png',
           },
           {
               id: 12,
              
               logo: '/assets/img/partenaire/talent.png',
           },
           {
               id: 13,
              
               logo: '/assets/img/partenaire/boa.png',
           },
           {
               id: 14,
              
               logo: '/assets/img/partenaire/dywanes-logo.png',
           },
           {
               id: 15,
              
               logo: '/assets/img/partenaire/gimac.png',
           },
           {
               id: 16,
              
               logo: '/assets/img/partenaire/pan.png',
           
           },
           {
               id: 17,
              
               logo: '/assets/img/partenaire/ship.jpg',
           },
           {
               id: 18,
              
               logo: '/assets/img/partenaire/petrolier.png',
           },
           {
               id: 19,
              
               logo: '/assets/img/partenaire/uptima.png',
           }, {
               id: 20,
              
               logo: '/assets/img/partenaire/confi.png',
           },];
   
         
           return (
            <div className="container py-4">
                <Card className="shadow-lg p-4">
                    <Card.Body>
                        <h3 className="text-left mb-4">Ils nous font confiance</h3>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                            {confiance.map((partenaire) => (
                                <div key={partenaire.id} className="col">
                                    <div className="d-flex justify-content-center">
                                        <Card.Img 
                                            variant="top" 
                                            src={partenaire.logo} 
                                            alt={partenaire.nom} 
                                            style={{ width: "100px", height: "100px", objectFit: "contain" }} 
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }