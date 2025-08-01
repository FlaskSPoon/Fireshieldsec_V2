

import Image from "next/image";
import CommentForm from "@/components/pages/blog/CommentForm";
import Comments from "@/components/pages/blog/Comments";
import Sidebar from "@/components/pages/blog/Sidebar";
import { FaCircleUser, FaComments, FaTag } from "react-icons/fa6";
import Link from "next/link";
import Cta from "@/components/footers/Cta";
import { about } from "@/data/servicesG";
import { encodeId, decodeId } from '@/app/hashids/hashids';
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://back-end-b30o.onrender.com';

export async function generateStaticParams() {

try {
    const res = await fetch(`${baseURL}/services`);
    if (!res.ok) return [];

    const response = await res.json();
    const services = response.data || response;

    return services.map(service => ({
      id: encodeId(service.id) 
    }));
  } catch (error) {
    console.error("Erreur dans generateStaticParams:", error);
    return [];
  }


 
}

export default async function BlogDetailsPage(props) {
const { id: hashedId } = await props.params;
  const id = decodeId(hashedId);

    try {
        const res = await fetch(`${baseURL}/services/${id}`, {
            cache: 'no-store',
            next: { tags: [`services-${id}`] }
        });
        
        if (!id) {
            if (res.status === 404) {
                return (
                    <div className="container py-20 text-center">
                        <h2 className="text-2xl mb-4">services non trouvé</h2>
                        <Link href="/infogerance" className="btn btn-primary">
                            Voir tous les services
                        </Link>
                    </div>
                );
            }
            throw new Error(`Erreur ${res.status}: ${res.statusText}`);
        }

        const response = await res.json();
        const service = response.data || response;
        
        const getImageByServiceId = (serviceId) => {
            const aboutItem = about.find(item => item.id == serviceId);
            return aboutItem ? aboutItem.bgImage : null;
        };

        const localImage = getImageByServiceId(service.id);

    
        const safeCategory = typeof service.category === 'string' 
            ? service.category 
            : service.category?.name || 'Général';

        const safeAuteur = typeof service.auteur === 'string' 
            ? service.auteur 
            : service.auteur?.username || 'Admin';

        const safeTags = Array.isArray(service.tags) 
            ? service.tags 
            : [];

        return (
            <>
            
                        <div className="breadcrumb-wrapper">
                            <div
                                className="breadcumb"
                                style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
                            >
                                <div className="container">
                                    <div className="page-heading">
                                        <h1 className="animate-fade-in">
                                            {service.name}
                                        </h1>
                                        <ul className="breadcrumb-items animate-fade-in">
                                            <li>
                                                <Link scroll={false} href={`/`}>
                                                    Accueil
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-chevrons-right" />
                                            </li>
                                            <li>Détails</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                <section className="news-standard fix space-top pb-425">
                    <div className="container">
                        <div className="news-details-area">
                            <div className="row g-5">
                                <div className="col-12 col-lg-8">
                                    <div className="blog-post-details">
                                        <div className="single-blog-post">
                                            <Image
                                                src={
                                                    localImage || 
                                                    (service.image 
                                                        ? `${baseURL}/uploads/service/${service.image}`
                                                        : '/assets/img/blog/fallback.jpg')
                                                }
                                                width={922}
                                                height={816}
                                                alt={service.name || "Service"}
                                                className="w-full object-cover"
                                            />
                                            <div className="post-content">
                                                <ul className="post-list d-flex align-items-center animate-fade-in">
                                                    <li>
                                                        <FaCircleUser size={22} color="#e02234" /> 
                                                        {safeAuteur}
                                                    </li>
                                                    <li>
                                                        <FaComments size={22} color="#e02234" /> 
                                                        0 Commentaires
                                                    </li>
                                                    <li>
                                                        <FaTag size={22} color="#e02234" /> 
                                                        {safeCategory}
                                                    </li>
                                                </ul>

                                                <h1 className="animate-fade-in mb-4">{service.name}</h1>

                                                {service.description && (
                                                    <p className="mb-4 text-lg animate-fade-in">
                                                        {service.description}
                                                    </p>
                                                )}

                                                {service.contenu ? (
                                                    <div
                                                        className="animate-fade-in prose max-w-none"
                                                        dangerouslySetInnerHTML={{ __html: service.contenu }}
                                                    />
                                                ) : (
                                                    <p className="animate-fade-in">
                                                        Contenu à venir...
                                                    </p>
                                                )}

                                                <div className="row tag-share-wrap mt-8 mb-30 animate-fade-in">
                                                    <div className="col-lg-8 col-12">
                                                        <div className="tagcloud">
                                                            <h6 className="d-inline me-2">Tags :</h6>
                                                            {safeTags.map((tag, index) => {
                                                                // Vérifier si le tag est un objet ou une chaîne
                                                                const tagText = typeof tag === 'string' 
                                                                    ? tag 
                                                                    : tag.name || `Tag ${index}`;
                                                                
                                                                return (
                                                                    <Link 
                                                                        key={index} 
                                                                        href={`/blog/tag/${tagText}`}
                                                                        className="inline-block bg-gray-100 px-3 py-1 rounded mr-2 mb-2"
                                                                    >
                                                                        {tagText}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end animate-fade-in">
                                                        <div className="social-share">
                                                            <span className="me-3">Partager :</span>
                                                             <a href="https://www.facebook.com/Fireshieldsec/"><i className="fab fa-facebook-f" /></a>
                                                        <a href="https://x.com/FireshieldSN/"><i className="fab fa-twitter" /></a>
                                                        <a href="https://www.linkedin.com/company/fireshieldsecurity"><i className="fab fa-linkedin-in" /></a>
                                                        <a href="#"><i className="fab fa-youtube" /></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Comments />
                                                <div className="comment-form-wrap pt-5 animate-fade-in">
                                                    <h3 className="text-2xl mb-4">Laisser un commentaire</h3>
                                                
                                                    <CommentForm serviceId={service.id} />
                                                  
                                                      
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </section>
        
                <Cta />
            </>
        );
    } catch (error) {
        return (
            <div className="container py-20 text-center">
                <h2 className="text-2xl mb-4">Erreur de chargement</h2>
                <p className="text-red-500 mb-6">{error.message}</p>
                <Link href="/event" className="btn btn-primary">
                    Retour aux services
                </Link>
            </div>
        );
    }
}