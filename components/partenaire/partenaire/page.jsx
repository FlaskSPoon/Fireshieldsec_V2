import Image from 'next/image';
import { Card } from "react-bootstrap";
export default function Partenaire(){
    const partenaires = [
        {
            id: 1,
            
            logo: '/assets/img/partenaire/Microsoft18.png',
        },
        {
            id: 2,
           
            logo: '/assets/img/partenaire/comptia.jpg',
        },
        {
            id: 3,
           
            logo: '/assets/img/partenaire/Dell.png',
        },
        {
            id: 4,
           
            logo: '/assets/img/partenaire/fortinet.png',
        },
        {
            id: 5,
           
            logo: '/assets/img/partenaire/ibm.png',
        },
        {
            id: 10,
           
            logo: '/assets/img/partenaire/knowbe4.jpg',
        
        },
        {
            id: 6,
           
            logo: '/assets/img/partenaire/logoAdepme.jpg',
        },
        {
            id: 7,
           
            logo: '/assets/img/partenaire/logoKoenig.jpg',
        },
        {
            id: 8,
           
            logo: '/assets/img/partenaire/veeam.jpg',
        }, {
            id: 9,
           
            logo: '/assets/img/partenaire/logoPecb.png',
        },];

      
        return (
            <div className="container py-4">
                <Card className="shadow-lg p-4">
                    <Card.Body>
                        <h3 className="text-left mb-4">Nos partenaires</h3>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                            {partenaires.map((partenaire) => (
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