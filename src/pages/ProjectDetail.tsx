import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
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
          <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] md:h-[400px] object-contain bg-secondary/20 p-4"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {project.year}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {project.title}
                  </h1>
                </div>
              </div>

              <div className="w-full h-px bg-border mb-6" />

              <div className="prose prose-lg max-w-none">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">About This Project</h2>
                <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                    Live
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-border/50 rounded-md">
                    Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;