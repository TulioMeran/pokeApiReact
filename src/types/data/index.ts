import { IDetail, IPokemon } from "../pokemon";

export interface data {
    pokemons: IPokemon[]
    currentPokemon: IDetail
    callSpecifyPokemon: (url: string) => void
    setOffset: React.Dispatch<React.SetStateAction<number>>
    offtset: number

}