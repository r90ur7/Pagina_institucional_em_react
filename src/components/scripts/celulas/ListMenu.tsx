import React,{ useState, useEffect} from "react"

interface Classes {
    wrapperClass?: string;
    DepartamentClass?: string;
    SectionListCLass?: string;
    hidenCLass?: string;
    activeListCLass?: string;
}


export const MenuList: React.FC<Classes> = (
    {wrapperClass,DepartamentClass,SectionListCLass,hidenCLass,activeListCLass}
) => {
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const [activeSection, setActiveSection] = useState("nothing");
    const [switchSymbol, setswitchSymbol] = useState(true);
    const handleClick = (section:string) => {
        setActiveSection(section);
        setswitchSymbol(!switchSymbol)
    }
    const symbols = {
        plus:"+",
        minum:"-"
    }

    useEffect(() => {
        const ToggleResize= ()=> {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', ToggleResize);
        return () => {
            window.removeEventListener('resize', ToggleResize);
        };
    }, [screenSize]);
    let activated = {
        screen:screenSize.width,
        active:activeSection
    }
    return(
        <div className={wrapperClass}>
            <div className={DepartamentClass}>
                <div>
                    <h2>Institucional</h2>
                    {screenSize.width < 1025 ? <button onClick={() => {handleClick("Institucional")}}>{activated.active === "Institucional" && !switchSymbol? symbols.minum:symbols.plus}</button>: null}
                </div>
                <ul className={`${SectionListCLass} ${activated.screen <= 1024 && activated.active === "Institucional" && !switchSymbol ?  activeListCLass: hidenCLass }`}>
                    <li>
                        <a href="/">Quem Somos</a>
                    </li>
                    <li>
                        <a href="/">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="/">Segurança</a>
                    </li>
                    <li datatype="last_departaments">
                        <a href="/">Seja um Revendedor</a>
                    </li>
                </ul>
            </div>

            <div  className={DepartamentClass}>
                <div>
                    <h2>Dúvidas</h2>
                    {screenSize.width < 1025 ? <button onClick={() => {handleClick("Duvidas")}}>{activated.active === "Duvidas" && !switchSymbol? symbols.minum:symbols.plus}</button>: null}
                </div>
                <ul className={`${SectionListCLass} ${activated.screen <= 1024 && activated.active === "Duvidas" && !switchSymbol ? activeListCLass: hidenCLass }`}>
                    <li>
                        <a href="/">Entrega</a>
                    </li>
                    <li>
                        <a href="/">Pagamento</a>
                    </li>
                    <li>
                        <a href="/">Trocas e Devoluções</a>
                    </li>
                    <li datatype="last_departaments">
                        <a href="/">Dúvidas Frequentes</a>
                    </li>
                </ul>
            </div>

            <div  className={DepartamentClass}>
                <div>
                    <h2>FALE CONOSCO</h2>
                    {screenSize.width < 1025 ? <button onClick={() => {handleClick("FALE_CONOSCO")}}>{activated.active === "FALE_CONOSCO" && !switchSymbol? symbols.minum:symbols.plus}</button>: null}
                </div>
                <ul className={`${SectionListCLass} ${activated.screen <= 1024 && activated.active === "FALE_CONOSCO" && !switchSymbol ? activeListCLass: hidenCLass }`}>
                    <li datatype="Call_Center">
                        <p>Atendimento ao Consumidor</p>
                    </li>
                    <li>
                        <p>(11) 4159-9504</p>
                    </li>
                    <li datatype="Call_Center">
                        <p>Atendimento Online</p>
                    </li>
                    <li datatype="last_departaments">
                        <p>(11) 4159-9504</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};
