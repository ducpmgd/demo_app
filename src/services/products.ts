import { ICardItem } from "components/cardItem/interface"
import http from "services/http"

interface IProductResponse {
    limit:number,
    products:ICardItem[],
    skip:number,
    total:number
}

export const getListProduct = async (params?:object) =>{
    try {
        const res = await http.get<unknown, IProductResponse>("/products", {params})
        return res
    } catch (error) {
        console.log(error)
    }
}


export const searchProduct = async (params?:object) =>{
    try {
        const res = await http.get<unknown, IProductResponse>("/products/search", {params})
        return res
    } catch (error) {
        console.log(error)
    }
}