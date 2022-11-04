import {createContext, FC, useEffect, useState, memo} from 'react'
import { data } from '../types/data'
import { IDetail,IPokemon } from '../types/pokemon'


export const DataProviderContext = createContext<data>({} as data)

const DataProvider: FC<{children: any}> = ({children}) => {

    const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon"
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [currentPokemon,setCurrentPokemon] = useState<IDetail>({} as IDetail)
    const [offtset,setOffset] = useState<number>(0)

    useEffect(() => {
        fetch(`${BASE_URL}?offset=${offtset}&limit=20`)
        .then(response => response.json())
        .then(data => {
            const lista = [...pokemons,...data.results]
            setPokemons(lista)
            console.log(lista)
        })
        .catch(err => console.log(err))
    },[offtset])

    const callSpecifyPokemon = (url: string) => {
        fetch(url)
        .then(response => response.json())
        .then((detail: IDetail) => {
            setCurrentPokemon(detail)
        })
        .catch(err => console.log(err))
    }

    return (
    <DataProviderContext.Provider
            value={{pokemons, 
                    currentPokemon,
                    callSpecifyPokemon,
                    setOffset,
                    offtset}}>
        {children}
    </DataProviderContext.Provider>)
}

export default DataProvider 