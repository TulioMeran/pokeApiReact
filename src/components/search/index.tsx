import {FC, useContext, useEffect, useRef, useState} from 'react'
import { DataProviderContext } from '../../contexts/dataProvider'
import { IPokemon } from '../../types/pokemon'
import './index.css'

const Search:FC<{setCurrentPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>, currentPokemons: IPokemon[]}> = ({setCurrentPokemons, currentPokemons}) => {

    const {pokemons,setIsSearching} = useContext(DataProviderContext)

    const [searchTerm, setSearchTerm] = useState('')
    const inputRef = useRef(null)

  useEffect(() => {
    setIsSearching(true)
    const delayDebounceFn = setTimeout(() => {
        setCurrentPokemons(prevState => prevState = [])
            const lista: IPokemon[] = pokemons.filter(p=> p.name.includes(searchTerm.toLowerCase()))
            setCurrentPokemons(lista)
            setIsSearching(false)
    }, 2000)

    return () => {
        clearTimeout(delayDebounceFn)
        setIsSearching(false)
    }
  }, [searchTerm])

    return (
        <div className='search' >
            <input ref={inputRef} type='text' value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}  />
        </div>
    )
}

export default Search