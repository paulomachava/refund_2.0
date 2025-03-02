import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"


export function Header(){
    return(
        <header className="w-full flex justify-between">
        <img src={logoSvg} alt="Logo" className="my-8"/>
        <div className="flex items-center gap-3"> 
            <span className="text-sm font-semibold to-gray-200 ">
                Ola,Paulo</span>
            <img src={logoutSvg} alt="icone de sair"  className="my-8 cursor-pointer hover:opacity-75 transition ease-initial"/>
        </div>
        </header>
    )

}