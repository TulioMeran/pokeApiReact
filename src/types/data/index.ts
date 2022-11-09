import { IPokemon } from "../pokemon";

export interface data {
    pokemons: IPokemon[]
    countNextFetch: number
    setCountNextFetch: React.Dispatch<React.SetStateAction<number>>
    isSearching: boolean
    setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
}