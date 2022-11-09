import { FC, useCallback, useContext, useEffect, useRef, Suspense, lazy } from "react"
import { DataProviderContext } from "../../contexts/dataProvider"
import { IDetail, IPokemon } from "../../types/pokemon"
import pokeballImg from "../../assets/pokeball.png"
import "./index.css"
const Item = lazy(() => import("../item")) 

const PokemonList: FC<{currentPokemons: IPokemon[], setCurrentPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>, handlerSelectedItem: (item: IDetail) => void}> = ({currentPokemons, setCurrentPokemons,handlerSelectedItem}) => {

    const {pokemons,setCountNextFetch,countNextFetch,isSearching} = useContext(DataProviderContext)
    const observer = useRef<any>()

    const lastPokemonItemRef = useCallback((node: any) => {
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting)
            {
                setCountNextFetch(prevState => prevState + 1)
            }
        })

        if(node) observer.current.observe(node)

    },[countNextFetch])

    useEffect(() => {
        setTimeout(() => {
            setCurrentPokemons(pokemons)
        },2000)
        
    },[pokemons])

    return (
        <div className='listContainer' >
            {!isSearching && currentPokemons.length > 0 ? currentPokemons.map((item,index) =>{
                if(currentPokemons.length === index + 1){
                    return  <Suspense key={index} fallback={<h1>LOADDING POKEMON...</h1>}><div ref={lastPokemonItemRef}  > <Item handlerClick={handlerSelectedItem} name={item.name} url={item.url} index={index} /> </div></Suspense> 
                } else {
                    return  <Suspense key={index} fallback={<h1>LOADDING POKEMON...</h1>}><Item handlerClick={handlerSelectedItem}  name={item.name} url={item.url} index={index} /></Suspense> 
                }
                
            }): <div> 
                  {currentPokemons.length === 0 && <h1>No pokemon found</h1>}
                  <img className="pokeballLoading" src={pokeballImg} />
                </div>}
            
        </div>
    )
}

export default PokemonList