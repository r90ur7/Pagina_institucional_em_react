import { createContext ,useState} from 'react';

interface pathtype {
    currentRoute:string
    navigate: (route: string) => void
}

export const RouterContext = createContext({} as pathtype);



export const RouterProvider :React.FC<{ children: React.ReactNode }>= ({ children }) => {
    const [currentRoute, setCurrentRoute] = useState('/');

    const navigate = (route: string) => {
        console.log(route)
        setCurrentRoute(route);
    }

    return (
    <RouterContext.Provider value={{ currentRoute:currentRoute, navigate:navigate }}>
        {children}
    </RouterContext.Provider>
    )
}


