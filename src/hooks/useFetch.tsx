import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import { ENDPOINT_URL } from "../constants";

export const useFetch = () => {
    const [items, setItems] = useState([])
    const { form } = useContext<any>(FormContext)
    const criteria = []

    const values = Object.values(form)

    values.forEach(x => {
        const arr = Object.values(x)
        arr.forEach(x => criteria.push(x.answers))
    })



    useEffect(() => {
        (async () => {
            const data = await fetch(ENDPOINT_URL)
            const result = await data.json()

            const filtered = result.products.filter((x: { tags: string }) => {
                return criteria.some(criterion => x.tags.includes(criterion));

            });

            setItems(filtered)
        })()
    }, [])
    return { items, form }
}