import { ICardItem } from "components/cardItem/interface"
import http from "services/http"

export const getListProduct = async (params?:object) =>{
    try {
        const res = await http.get<unknown, ICardItem[]>("/fashions", {params})
        return res
    } catch (error) {
        console.log(error)
    }
}