import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface IintersectionProvider {
  children?: ReactNode;
}

interface IintersectionContext {
  isVisible: boolean;
  sectionRef: HTMLElement | any;
}

const IntersectionContext = createContext<IintersectionContext | null>(null);

export const IntersectionProvider: React.FC<IintersectionProvider> = ({
  children,
}): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <IntersectionContext.Provider
      value={{
        isVisible,
        sectionRef,
      }}
    >
      {children}
    </IntersectionContext.Provider>
  );
};

// Hook exportation
export const useIntersection = () => {
  const context = useContext(IntersectionContext);

  if (!context) {
    throw new Error("Utilisation des hooks obligatoirement dans un Provider");
  }

  return context;
};
