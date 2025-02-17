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