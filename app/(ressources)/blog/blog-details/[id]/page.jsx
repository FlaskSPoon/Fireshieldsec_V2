import Image from "next/image";
import CommentForm from "@/components/pages/blog/CommentForm";
import Comments from "@/components/pages/blog/Comments";
import Sidebar from "@/components/pages/blog/Sidebar";
import { about } from "@/data/servicesG";
import { FaCircleUser, FaComments, FaTag } from "react-icons/fa6";
import Link from "next/link";
import Cta from "@/components/footers/Cta";
import { decodeId, encodeId } from "@/app/hashids/hashids";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://back-end-b30o.onrender.com';

export async function generateStaticParams() {
    const res = await fetch(`${baseURL}/article`);
    if (!res.ok) {
        throw new Error(`Failed to fetch articles: ${res.status}`);
    }
    const articles = await res.json();
    return articles.data.map(article => ({
         id: encodeId(article.id) }));
}

export default async function BlogDetailsPage(props) {
    const { id: hashedId } = await props.params;
    const realId=decodeId(hashedId);

    if (!realId) {
        throw new Error ("ID invalide");
    }

    const res = await fetch(`${baseURL}/article/${realId}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`Failed to fetch article ${realId}: ${res.status}`);
    }

    const articleResponse = await res.json();
    const article = articleResponse.data || articleResponse;
    const getImageByServiceId = (articleId) => {
        const aboutItem = about.find(item => item.id === articleId);
        return aboutItem ? aboutItem.bgImage : null;
    };

    const localImage = getImageByServiceId(article.id);
    
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
                                {article.titre}
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
                                                localImage
                                                    ? localImage
                                                    : article.image
                                                        ? `${baseURL}/uploads/articles/${article.image}`
                                                        : '/assets/img/blog/blogCardThumb1_4.png'
                                            }
                                            width={922}
                                            height={816}
                                            alt="article"
                                        />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center animate-fade-in">
                                                <li><FaCircleUser size={22} color="#e02234" /> {article.auteur || 'Admin'}</li>
                                                <li><FaComments size={22} color="#e02234" /> 0 Commentaires</li>
                                                <li><FaTag size={22} color="#e02234" /> {article.categorie || 'Général'}</li>
                                            </ul>

                                            <h3 className="animate-fade-in">{article.titre}</h3>

                                            {article.description && (
                                                <p className="mb-3 animate-fade-in">{article.description}</p>
                                            )}

                                            {article.contenu ? (
                                                <div
                                                    className="animate-fade-in"
                                                    dangerouslySetInnerHTML={{ __html: article.contenu }}
                                                />
                                            ):(<p className="animate-fade-in">
                                                        Contenu à venir...
                                                    </p>)}

                                            <div className="row tag-share-wrap mt-4 mb-30 animate-fade-in">
                                                <div className="col-lg-8 col-12">
                                                    <div className="tagcloud">
                                                        <h6 className="d-inline me-2">Tags :</h6>
                                                        {article.tags?.map((tag, index) => (
                                                            <a key={index} href={`#`}>{tag}</a>
                                                        )) || (
                                                            <>
                                                                <a href="#">Securité</a>
                                                                <a href="#">Entreprise</a>
                                                                <a href="#">Marketing</a>
                                                            </>
                                                        )}
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
                                                <h3>Laisser un commentaire</h3>
                                                <CommentForm />
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
}