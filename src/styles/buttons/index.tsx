import React, { FC } from "react"

type ButtonProps = {
    children?: React.ReactNode;
    htmlFor?: 'submit' | 'reset' | 'button';
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    rounded?: 'regular' | 'full';
    className?: string;
};

const variantClasses = {
    primary : 'bg-blue-700 hover:bg-blue-500 text-white transition duration-300',
    secondary : 'border border-blue-500 hover:bg-blue-700 text-blue-300 hover:text-white transition duration-300'
};

const roundedClasses = {
    regular: 'rounded-md',
    full: 'rounded-full'
}

export const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    rounded = 'regular',
    htmlFor = 'button',
    className,
    onClick,
    ...props
}) => {
    return (
        <button
            className={`py-2 px-4 ${variantClasses[variant]} ${roundedClasses[rounded]} ${className}`}
            onClick={onClick}
            type={htmlFor}
            {...props}
        >
            { children }
        </button>
    )
}