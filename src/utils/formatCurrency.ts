export function formatCurrency(value:number){
    const currency = Intl.NumberFormat("pt-MZ",{
        style:"currency",
        currency:"MZN"
    })
    return currency.format(value).replace("MTn","")

}