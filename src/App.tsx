import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Building2,
  Target,
  Mail,
  Phone,
  MapPin,
  Send,
  Plus,
  Minus,
  Check,
  ChevronDown,
  UserIcon,
  TagIcon,
  BarChart3,
  Clock,
  Shield,
  Database,
  // Icônes du LoadingScreen et Footer
  Globe,
  ArrowRight,
  ChevronRight,
  // Icônes des réseaux sociaux
  Facebook,
  MessageCircle as Whatsapp,
  // Icône Remonter
  ChevronUp,
  // NOUVELLE ICÔNE POUR LE CAROUSEL
  ChevronLeft,
} from "lucide-react";

// --- I. Configuration Globale & Data ---

const APP_NAME = "Global Group";
const APP_SLOGAN = "Bâtir l'avenir, concevoir l'excellence.";

const NAV_ITEMS = [
  { name: "Accueil", href: "#accueil" },
  { name: "À Propos", href: "#apropos" },
  { name: "Secteurs", href: "#secteurs" },
  { name: "Projets", href: "#projets" },
  { name: "Contact", href: "#contact" },
];

const ABOUT_TEXT =
  "Global Group est une entreprise multisectoriel dans la construction et la rénovation immobilière. Ayant un siège au sein de la diaspora, nous offrons un point fiable pour tous ceux qui souhaitent bâtir ou rénover.";
const SECTORS = [
  {
    icon: Home,
    title: "Immobilier Résidentiel",
    description:
      "Conception et construction de villas, duplex et appartements modernes, offrant confort et sécurité pour la vie familiale.",
    color: "bg-blue-600",
  },
  {
    icon: Building2,
    title: "Infrastructures Publiques",
    description:
      "Réalisation de complexes scolaires, bâtiments administratifs et infrastructures clés pour le développement socio-économique.",
    color: "bg-green-600",
  },
  {
    icon: Target,
    title: "Développement Urbain",
    description:
      "Aménagement de zones, lotissements et parcs d'activités, garantissant une croissance urbaine planifiée et durable.",
    color: "bg-indigo-600",
  },
];

interface ProjectDetail {
  section: string;
  items: string[];
}
interface ProjectData {
  title: string;
  // REMPLACÉ : image: string;
  images: string[]; // NOUVEAU: Tableau d'images
  details: ProjectDetail[];
}

const PROJECTS_DATA: ProjectData[] = [
  {
    title: "Type Duplex à un seul niveau",
    images: ["public/onea.jpg ", "public/oneb.jpg ", "public/onec.jpg "],
    details: [
      {
        section: "Rez de Chaussée",
        items: [
          "2 Terrasses",
          "Salon principal",
          "Salon d'enfants",
          "Chambre visiteur",
          "Salle de bain",
          "WC visiteur",
          "Salle à manger",
          "Cuisine",
          "Buanderie",
          "Débarras",
          "Cage d'escalier",
        ],
      },
      {
        section: "Étage",
        items: [
          "Mini Salon familial",
          "2 Balcons",
          "4 chambres + placards",
          "4 salles de bain",
        ],
      },
    ],
  },
  {
    title: "Type Duplex à deux niveaux",
    images: ["public/twoa.jpg ", "public/twob.jpg ", "public/twoc.jpg "],
    details: [
      {
        section: "Rez de Chaussée",
        items: [
          "Salon",
          "Cuisine",
          "Salle à manger",
          "Toilette visiteur",
          "Terrasse",
          "Cage d'escalier",
        ],
      },
      {
        section: "Étage 1",
        items: ["3 chambres", "Toilette commune", "Balcon"],
      },
      {
        section: "Étage 2",
        items: ["Toiture Terrasse accessible", "Pergola en béton"],
      },
    ],
  },
  {
    title: "Complexe scolaire",
    images: ["public/ treea.jpg ", "public/ treeb.jpg ", "public/ treec.jpg "],
    details: [
      {
        section: "Composition",
        items: [
          "Infirmerie",
          "Bâtiment scolaire",
          "Bâtiment administratif",
          "Bibliothèque",
          "Jardin",
          "Cours de récréation",
        ],
      },
    ],
  },
  {
    title: "Type F4 moderne",
    images: ["public/foura.jpg ", "public/fourb.jpg ", "public/fourc.jpg "],
    details: [
      {
        section: "Caractéristiques",
        items: [
          "Appartement 4 pièces",
          "Surface de 112m² à vendre",
          "Grand F3/F4 112m² avec véranda",
          "Appartement 3 Chambres",
          "Coup de cœur !",
        ],
      },
    ],
  },
];

// --- II. Composant Écran de Chargement (LoadingScreen) ---

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const AfricaSilhouette = () => (
  <div className="absolute bottom-5 right-5 text-white pointer-events-none">
    <svg
      className="w-48 h-48 opacity-20 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 600"
      fill="currentColor"
    >
      <path d="M250 50 C270 50, 270 150, 200 180 C180 200, 180 300, 250 350 C300 400, 350 450, 300 500 L250 550 L200 500 C150 450, 100 400, 150 350 C180 300, 180 200, 200 180 C270 150, 270 50, 250 50 Z" />
    </svg>
  </div>
);

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(onLoadingComplete, 500);
      }
      setProgress(Math.min(100, currentProgress));
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-[9999] transition-opacity duration-1000">
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        {/* Logo/Nom de l'entreprise */}
        <div /* className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl animate-fade-in" */
        >
          <img
            src="open.png" // Utilisez la variable importée qui contient l'URL de votre image
            alt="Logo de l'application"
            // Conservez la taille et l'animation.
            // object-contain garantit que l'image est bien ajustée sans être coupée.
            // className="w-16 h-16 object-contain mb-2 animate-bounce-slow"
          />

          <p className="text-xl font-light text-blue-400 mt-2">{APP_SLOGAN}</p>
        </div>

        <AfricaSilhouette />

        {/* BARRE DE PROGRESSION */}
        <div className="absolute bottom-32 sm:bottom-40 left-1/2 transform -translate-x-1/2 text-center w-full max-w-sm sm:max-w-lg px-4">
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden mx-auto shadow-inner">
            <div
              className="h-full bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white text-base font-semibold mt-3">
            Chargement de l'expérience... ({Math.round(progress)}%)
          </p>
        </div>

        {/* Mentions Légales */}
        <p className="absolute bottom-5 text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} {APP_NAME}. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

// --- III. Composants de l'Application ---

// Composant Carrousel d'Images
interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour passer à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Si une seule image, affichez-la sans carrousel
  if (images.length === 1) {
    return (
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-auto object-cover"
          onError={(e) =>
            (e.currentTarget.src = `https://placehold.co/400x300/294E8A/fff?text=${title.replace(
              /\s/g,
              "+"
            )}`)
          }
        />
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      {/* Image */}
      <div className="relative w-full overflow-hidden aspect-video">
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          // Assurez-vous que l'image couvre l'espace et est centrée
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) =>
            (e.currentTarget.src = `https://placehold.co/400x300/294E8A/fff?text=${title.replace(
              /\s/g,
              "+"
            )}`)
          }
          key={currentIndex} // Clé pour forcer la re-rendu et la transition (visuelle)
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Image précédente"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Image suivante"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators (Dots) */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 p-1 bg-black/30 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// 1. Navigation ( inchangée )
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset pour la barre de navigation
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const logoClasses = isScrolled ? "text-gray-800" : "text-white";
  const navItemClasses = (href: string) =>
    `text-sm font-medium transition-colors duration-300 hover:text-blue-500 relative pb-1 group ${
      isScrolled ? "text-gray-700" : "text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => handleLinkClick(e, "#accueil")}
            className="flex items-center space-x-2"
          >
            <div
              className={`w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white transition-colors duration-300`}
            >
              <img
                src="logo.png" // Utilisez la variable importée qui contient l'URL de votre image
                alt="Logo de l'application"
                // Conservez la taille et l'animation.
                // object-contain garantit que l'image est bien ajustée sans être coupée.
                // className="w-16 h-16 object-contain mb-2 animate-bounce-slow"
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${logoClasses}`}
            >
              {APP_NAME}
            </span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={navItemClasses(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          aria-hidden={!isMobileMenuOpen}
        >
          <div
            className="absolute top-0 right-0 w-3/4 max-w-xs bg-white h-full shadow-lg p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-lg font-semibold text-gray-800">
                Navigation
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-red-500"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
            </div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="block text-gray-700 hover:text-blue-600 font-medium text-lg py-2 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="block mt-6 px-4 py-2 bg-blue-600 text-white text-center rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Contactez-Nous
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Section Accueil ( inchangée )
const HeroSection = () => (
  <section
    id="accueil"
    className="relative h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background Image/Overlay */}
    <img
      src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt="Projet de construction urbaine"
      className="absolute inset-0 w-full h-full object-cover"
      onError={(e) =>
        (e.currentTarget.src =
          "https://placehold.co/1600x1000/294E8A/fff?text=Global+Group+Hero")
      }
    />
    <div className="absolute inset-0 bg-gray-900/70"></div>

    {/* Content */}
    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
        <span className="text-blue-400">{APP_NAME.split(" ")[0]}</span>{" "}
        {APP_NAME.split(" ")[1]}
      </h1>
      <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
        {APP_SLOGAN}
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        <a
          href="#projets"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projets")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Voir Nos Projets
          <ArrowRight className="ml-2" size={20} />
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          Nous Contacter
        </a>
      </div>
    </div>
  </section>
);

// 3. Section À Propos ( inchangée )
const AboutSection = () => (
  <section id="apropos" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Qui Est <span className="text-blue-600">{APP_NAME}</span> ?
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-lg shadow-xl hidden md:block"></div>
          <img
            src="https://images.pexels.com/photos/1769641/pexels-photo-1769641.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Équipe de construction"
            className="w-full h-full object-cover rounded-xl relative z-10 shadow-2xl"
            style={{ maxHeight: "400px" }}
            onError={(e) =>
              (e.currentTarget.src =
                "https://placehold.co/800x400/294E8A/fff?text=Global+Group+Team")
            }
          />
        </div>
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {ABOUT_TEXT}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <Check className="w-6 h-6 text-blue-600" />
              <span className="font-semibold">Qualité Supérieure</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Check className="w-6 h-6 text-blue-600" />
              <span className="font-semibold">Innovation Technique</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Check className="w-6 h-6 text-blue-600" />
              <span className="font-semibold">Respect des Délais</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Check className="w-6 h-6 text-blue-600" />
              <span className="font-semibold">Partenariat Durable</span>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Parler à un Expert
          </a>
        </div>
      </div>
    </div>
  </section>
);

// 4. Section Secteurs ( inchangée )
const SectorsSection = () => (
  <section id="secteurs" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Nos <span className="text-green-600">Domaines</span> d'Expertise
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Nous sommes structurés pour intervenir sur divers segments du marché,
          de l'habitat individuel aux grandes infrastructures publiques.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SECTORS.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600"
            >
              <div
                className={`w-16 h-16 rounded-full ${sector.color} text-white flex items-center justify-center mb-4`}
              >
                <Icon size={30} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {sector.title}
              </h3>
              <p className="text-gray-600">{sector.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// 5. Section Projets (Articles) - Mise à jour pour le carrousel
const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nos <span className="text-indigo-600">Réalisations</span> Clés
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets phares, du résidentiel aux
            complexes publics.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleProject(index)}
                role="button"
                aria-expanded={openProject === index}
                aria-controls={`project-details-${index}`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    {index + 1}.
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
                <div className="text-indigo-600 transition-transform duration-300">
                  {openProject === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </div>
              </div>

              {/* Détails du Projet (Contenu des articles) */}
              {openProject === index && (
                <div
                  id={`project-details-${index}`}
                  className="p-6 pt-0 border-t border-gray-100 bg-gray-50"
                >
                  <div className="grid md:grid-cols-2 gap-6 items-start mt-4">
                    {/* INTÉGRATION DU CAROUSEL */}
                    <ImageCarousel
                      images={project.images}
                      title={project.title}
                    />

                    <div>
                      {project.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="mb-4">
                          <h4 className="font-bold text-lg text-gray-700 flex items-center mb-2">
                            <ChevronRight className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0" />{" "}
                            {detail.section} :
                          </h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            {detail.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Section Contact ( inchangée )
const ContactSection = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      alert("Message envoyé! Nous vous recontacterons bientôt.");
      // Ici, vous ajouteriez la logique réelle d'envoi de formulaire (fetch/axios)
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contactez <span className="text-blue-600">Notre Équipe</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Infos de Contact */}
          <div className="p-8 lg:p-12 bg-blue-600 text-white">
            <h3 className="text-2xl font-bold mb-6 border-b border-white/30 pb-3">
              Informations Clés
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Adresse</h4>
                  <p className="text-white/90">République du Congo,</p>
                  <p className="text-white/90 text-sm">
                    Ngoyo puma ex péage, Pointe-Noire
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Téléphone</h4>
                  <p className="text-white/90">+242 06 148 57 60</p>
                  <p className="text-white/90 text-sm">
                    Appelez-nous du Lun-Ven (8h-17h)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-white/90">global25.group@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envoyez-Nous un Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom Complet
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adresse Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sujet
                </label>
                <div className="relative">
                  <TagIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              {/* Case à cocher d'accord */}
              <div className="flex items-start mt-4">
                <input
                  id="privacy-agreement"
                  name="privacy-agreement"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="privacy-agreement"
                  className="ml-3 text-sm text-gray-700"
                >
                  J'ai pris connaissance de la Politique de Confidentialité et
                  j'autorise la société à m'envoyer des informations.
                </label>
              </div>

              {/* Bouton Envoyer */}
              <button
                type="submit"
                disabled={!agreed}
                className={`w-full font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center mt-6
                                    ${
                                      agreed
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
              >
                Envoyer le Message
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Pied de Page ( inchangée )
const FooterSection = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-2xl">
              <img
                src="logo.png"
                alt="Logo de la société"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">{APP_NAME}</h3>
              <p className="text-sm text-gray-400">Construction & Immobilier</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Créer des espaces durables et fonctionnels pour les communautés de
            demain.
          </p>

          {/* ICÔNES SOCIALES */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/874743025718597"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-colors"
              aria-label="Notre page Facebook"
            >
              <Facebook size={20} className="text-white" />
            </a>
            <a
              href="https://wa.me/+242061485760" // Remplacez par le numéro réel
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              aria-label="Nous contacter via WhatsApp"
            >
              {/* MessageCircle sert d'icône WhatsApp, stylisée en vert */}
              <Whatsapp size={20} className="text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-blue-400">
            Liens Rapides
          </h4>
          <ul className="space-y-2 text-gray-400">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-blue-400">Nos Secteurs</h4>
          <ul className="space-y-2 text-gray-400">
            {SECTORS.map((sector, index) => (
              <li key={index}>
                <a
                  href="#secteurs"
                  className="hover:text-blue-500 transition-colors"
                >
                  {sector.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-blue-400">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Restez informés de nos nouveaux projets.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="p-3 w-full rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
              className="px-4 py-3 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-all"
              aria-label="S'inscrire à la newsletter"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {APP_NAME}. Tous droits réservés.
        </p>
        <div className="flex space-x-4 text-gray-400">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Politique de Confidentialité
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Mentions Légales
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// 8. Composant de Remontée ( inchangé )
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour remonter en haut de page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Écouteur d'événement pour afficher/cacher le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        // Affiche le bouton après 300px de défilement
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-xl transition-opacity duration-300 z-50 hover:bg-blue-700 active:scale-95
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Remonter en haut de page"
    >
      <ChevronUp size={24} />
    </button>
  );
};

// 9. Main App Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <>
        <style>{`
                /* Ajout des styles pour les animations du LoadingScreen */
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(-5%); }
                    50% { transform: translateY(5%); }
                }
                .animate-fade-in {
                  animation: fadeIn 1s ease-out;
                }
                .animate-bounce-slow {
                    animation: bounceSlow 3s infinite ease-in-out;
                }
            `}</style>
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </>
    );
  }

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SectorsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
}
