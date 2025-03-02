

export type RefunditemProps ={
    id:string 
    name:string 
    category:string 
    amount: string
    categoryImg:string
}
type Props = React.ComponentProps<"a"> & {
    data:RefunditemProps
}

export function RefundItem({data,...rest}:Props){
    return(
        <a className="flex items-center gap-3 hover:bg-green-100/5 px-3"
         {...rest}>
           <img className="w-8 h-8"
           src={data.categoryImg} alt="" />
           <div className="flex
            flex-col flex-1">
            <strong className="flex-1 text-sm text-gray-100"
            >{data.name}</strong>
            <span className="flex-1 text-xs">{data.category}</span>
           </div>
           <span className="text-sm text-gray-100 font-semibold flex  items-center gap-1">            
            {data.amount}
            <small className="font-normal text-gray-200">MTn</small>
           </span>
        </a>
    )
}