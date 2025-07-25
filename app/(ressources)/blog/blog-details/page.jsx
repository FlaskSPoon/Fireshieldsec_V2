import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import BlogDetails from "@/components/pages/blog/BlogDetails";
import Link from "next/link";
import { allBlogs } from "@/data/blogs";
import BlogDetailsPage from "./[id]/page";

export const metadata = {
  title: "Blog | Fireshield Security",
  description:
    "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
};
export default function Page({ params }) {
  const blogItem =
    allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {blogItem.title}
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Accueil{" "}
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
         <BlogDetails blogItem={blogItem} />
        <Cta />
      </main>
    </>
  );
}
