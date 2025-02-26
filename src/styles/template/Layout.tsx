const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="mx-auto max-w-screen-xl h-full w-full">
            { children }
        </div>
    )
}

export default Layout;