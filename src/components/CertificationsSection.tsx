import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { certifications } from "@/data/certifications";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-cream">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Recognition & Awards
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Link
              to={`/certification/${cert.id}`}
              key={cert.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-primary rounded-full text-primary-foreground">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-foreground/80">{cert.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Certifications List */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Additional certifications include{" "}
            <span className="text-primary font-medium">Shan-e-Ramzan Quiz Competition - BZU</span>{" "}
            and various academic excellence awards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
