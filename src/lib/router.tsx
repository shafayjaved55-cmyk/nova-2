import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

/**
 * Router
 * -----
 * Uses the History API so production URLs stay clean (/services/mobile-apps).
 * When the site is opened from the filesystem (file://) pushState throws, so we
 * fall back to hash routing automatically. No library, no bundle cost.
 */

export const ROUTES = [
  "/",
  "/services",
  "/services/mobile-apps",
  "/services/web-development",
  "/services/ui-ux-design",
  "/services/custom-software",
  "/services/quality-assurance",
  "/services/digital-marketing",
  "/work",
  "/process",
  "/about",
  "/resources",
  "/resources/app-development-cost-in-pakistan",
  "/resources/google-ads-mistakes-small-businesses",
  "/resources/how-to-choose-a-software-house",
  "/contact",
  "/thank-you",
  "/privacy-policy",
  "/terms",
] as const;

function normalise(path: string) {
  if (!path) return "/";
  let p = path.split("?")[0];
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

function isKnown(path: string) {
  return (ROUTES as readonly string[]).includes(normalise(path));
}

function readLocation(): string {
  if (typeof window === "undefined") return "/";
  const hash = window.location.hash.replace(/^#/, "");
  if (hash) return normalise(hash);
  const path = normalise(window.location.pathname);
  if (isKnown(path)) return path;
  return "/";
}

type RouterValue = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterValue>({ path: "/", navigate: () => {} });

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>(() => readLocation());

  useEffect(() => {
    const sync = () => setPath(readLocation());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    const target = normalise(to);
    try {
      window.history.pushState({}, "", target);
      setPath(target);
    } catch {
      window.location.hash = target;
      setPath(target);
    }
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const external = /^(https?:|mailto:|tel:|mailto)/.test(to);

  if (external) {
    return (
      <a href={to} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={to}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        onClick?.(event);
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
