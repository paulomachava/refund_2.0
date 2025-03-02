export function NotFound(){
    return(
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
            Op's! Essa pagina nao existe. 🥲</h1>
        <a href="/" className="fontg-semibold text-center text-green-100 hover:text-green-200 transtion ease-linear"
        >Voltar Para o inicio</a>
        </div>
    </div>
    )
}