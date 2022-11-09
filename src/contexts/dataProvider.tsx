import {createContext, FC, useEffect, useState, memo} from 'react'
import { data } from '../types/data'
import { IPokemon } from '../types/pokemon'


export const DataProviderContext = createContext<data>({} as data)

const DataProvider: FC<{children: any}> = ({children}) => {

    const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon"
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [nextFetch,setNextFetch] = useState<string>("")
    const [countNextFetch,setCountNextFetch] = useState<number>(0)
    const [isSearching,setIsSearching] = useState<boolean>(false)

    useEffect(() => {
        fetch(`${BASE_URL}?offset=0&limit=20`)
        .then(response => response.json())
        .then(data => {
            const lista = [...data.results]
            setPokemons(lista)
            setNextFetch(data.next)
        })
        .catch(err => console.log(err))
        .finally(() => {
            setCountNextFetch(prevState => prevState + 1)
        })

        return () => {
            setPokemons(prevState => prevState = [])
            setNextFetch("")
        }

    },[])

    useEffect(() => {
        if(countNextFetch > 0) {
            fetch(nextFetch)
            .then(response => response.json())
            .then(data => {
                const lista = [...pokemons,...data.results]
                setPokemons(lista)
                setNextFetch(data.next)
            })
            .catch(err => console.log(err))
            .finally(() => {
                if(countNextFetch !== null){
                    setCountNextFetch(prevState => prevState + 1)
                }
                
            })
        }
    },[countNextFetch])

    return (
    <DataProviderContext.Provider
            value={{pokemons, 
                    countNextFetch,
                    setCountNextFetch,
                    isSearching,
                    setIsSearching}}>
        {children}
    </DataProviderContext.Provider>)
}

export default DataProvider 