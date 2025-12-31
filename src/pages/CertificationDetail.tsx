import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, Building } from "lucide-react";
import { certifications } from "@/data/certifications";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CertificationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const certification = certifications.find((cert) => cert.id === id);

  if (!certification) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            Certification Not Found
          </h1>
          <Link
            to="/#certifications"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Certifications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <Link
            to="/#certifications"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Certifications
          </Link>

          {/* Certificate Card */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
            {/* Image Section */}
            <div className="relative">
              <img
                src={certification.image}
                alt={certification.title}
                className="w-full h-[300px] md:h-[400px] object-contain bg-secondary/20 p-4"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {certification.year}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {certification.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Building className="w-4 h-4" />
                      {certification.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {certification.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  About This Achievement
                </h2>
                <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {certification.fullDescription}
                </div>
              </div>

              {/* Summary Badge */}
              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-sm text-primary font-medium">
                  {certification.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificationDetail;
