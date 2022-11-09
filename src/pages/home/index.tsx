import {Suspense,lazy, useState} from 'react'
import Modal from '../../components/modal'
import Search from '../../components/search'
import { IDetail, IPokemon } from '../../types/pokemon'
import './index.css'
const PokemonList = lazy(() => import('../../components/pokemonList'))

const HomePage = () => {
    const [currentPokemons,setCurrentPokemons] = useState<IPokemon[]>([])
    const [currentPokemon,setCurrentPokemon] = useState<IDetail>({} as IDetail)
   

    const [IsModalOpen,setIsModalOpen] = useState<boolean>(false)
    const handlerCloseModal = () => {
        setIsModalOpen(prevState => prevState = false)
    }


    const handlerSelectedItem = (item: IDetail) => {
        setCurrentPokemon(item)
        setIsModalOpen(true)
    }


    return (
        <>
       <Modal open={IsModalOpen} handlerCloseModal={handlerCloseModal} pokemon={currentPokemon} />
       <Search currentPokemons={currentPokemons} setCurrentPokemons={setCurrentPokemons} />
        <Suspense fallback={<h1>LOADDING LIST...</h1>} ><PokemonList currentPokemons={currentPokemons} setCurrentPokemons={setCurrentPokemons} handlerSelectedItem={handlerSelectedItem} /></Suspense> 
        </>

    )
}

export default HomePage