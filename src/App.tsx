import { RouterProvider, useRouter } from "@/lib/router";
import { Header } from "@/components/Header";
import { Footer, MobileCta } from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Work from "@/pages/Work";
import Process from "@/pages/Process";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Article from "@/pages/Article";
import Contact from "@/pages/Contact";
import { Legal, NotFound, ThankYou } from "@/pages/Misc";

function Routes() {
  const { path } = useRouter();

  // Keyed on path so each navigation remounts the page with a short fade.
  let page: React.ReactNode;
  switch (path) {
    case "/":
      page = <Home />;
      break;
    case "/services":
      page = <Services />;
      break;
    case "/work":
      page = <Work />;
      break;
    case "/process":
      page = <Process />;
      break;
    case "/about":
      page = <About />;
      break;
    case "/resources":
      page = <Resources />;
      break;
    case "/contact":
      page = <Contact />;
      break;
    case "/thank-you":
      page = <ThankYou />;
      break;
    case "/privacy-policy":
      page = <Legal kind="privacy-policy" />;
      break;
    case "/terms":
      page = <Legal kind="terms" />;
      break;
    default:
      page = path.startsWith("/services/") ? (
        <ServiceDetail />
      ) : path.startsWith("/resources/") ? (
        <Article />
      ) : (
        <NotFound />
      );
  }

  return (
    <main id="main" key={path} className="page-enter">
      {page}
    </main>
  );
}



export default function App() {
  return (
    <RouterProvider>
      <div className="flex min-h-screen flex-col bg-ink">
        <Header />
        <div className="flex-1 pb-20 sm:pb-0">
          <Routes />
        </div>
        <Footer />
        <MobileCta />
      </div>
    </RouterProvider>
  );
}
