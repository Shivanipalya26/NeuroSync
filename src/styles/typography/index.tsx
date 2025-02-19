import { FC, ReactNode } from "react";

export const H1: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children , className = '', ...props}) => {
    return (
        <h1
            className={`font-mont text-6xl sm:text-5xl md:text-6xl font-bold ${className}`}
            {...props}
        >
            { children }
        </h1>
    )
}

export const H2: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className = '', ...props}) => {
    return (
        <h2 
            className={`font-mont text-5xl sm:text-4xl md:text-5xl ${className}`}
            {...props}
        >
            { children }
        </h2>
    )
}

export const H3: FC<{ 
    children: ReactNode;
    className?: string;
}> = ({ children, className = '', ...props}) => {
    return (
        <h3
            className={`font-mont text-4xl sm:text-3xl md:text-4xl ${className}`}
            {...props}
        >
            { children }
        </h3>
    )
}

export const H4: FC<{ 
    children: ReactNode;
    className?: string;
}> = ({ children, className = '', ...props}) => {
    return (
        <h4
            className={`font-mont text-3xl sm:text-2xl md:text-3xl ${className}`}
            {...props}
        >
            { children }
        </h4>
    )
}

export const H5: FC<{
    children: ReactNode;
    className?: string;
  }> = ({ children, className = '', ...props }) => {
    return (
      <h5
        className={`font-mont text-1xl sm:text-1xl md:text-2xl ${className}`}
        {...props}
      >
        {children}
      </h5>
    );
  };
  
  export const H6: FC<{
    children: ReactNode;
    className?: string;
  }> = ({ children, className = '', ...props }) => {
    return (
      <h6 className={`font-mont text-1xl ${className}`} {...props}>
        {children}
      </h6>
    );
  };

export const P: FC<{
    children: ReactNode;
    className?: string;
  }> = ({ children, className = '', ...props }) => {
    return (
      <p className={`font-pop text-base leading-relaxed ${className}`} {...props}>
        {children}
      </p>
    );
  };