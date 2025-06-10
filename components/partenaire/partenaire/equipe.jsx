import { Card } from "react-bootstrap";
export default function Equipe() {
    const equipe = [
        {
            id: 20,
            
            logo: '/assets/img/partenaire/cissp.png',
        },
        {
            id: 21,
           
            logo: '/assets/img/partenaire/CISM.png',
        },
        {
            id: 22,
           
            logo: '/assets/img/partenaire/CEH1.jpg',
        },
        {
            id: 23,
           
            logo: '/assets/img/partenaire/ISO.png',
        }];

      
        return (
            <div className="container py-4">
                <Card className="shadow-lg p-4">
                    <Card.Body>
                        <h3 className="text-left mb-4">Notre Equipe</h3>
                        <p className="text-left">Une equipe dynamique, expérimentée et engagée pour vous servir. Nos experts sont certifiés.</p>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                            {equipe.map((partenaire) => (
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
