import leftSvg from "../assets/left.svg"
import rightSvg from "../assets/right.svg"
import { Button } from "./Button"

type Props={
    current:number
    total:number
    onNext:() => void
    onPrevious:()=>void

}

export function Pagination({current,onNext,onPrevious,total}:Props){
    return  (
    <div className="flex felx-1 justify-center items-center gap-4">
        <Button variant="iconSmall" onClick={onPrevious}  disabled={current===1}>
           <img src={leftSvg} alt="Icone de voltar"  /> 
        </Button>
        <span className="text-sm text-gray-200">
         {current}/{total}   
        </span>
        <Button variant="iconSmall" onClick={onNext} disabled={current===10}>
           <img src={rightSvg} alt="Icone de avancar" /> 
        </Button>
         </div>
         )
}