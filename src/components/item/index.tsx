import { FC, useEffect, useState } from "react"
import { IDetail } from "../../types/pokemon"
import './index.css'
import pokeballImg from '../../assets/pokeball.png'

const Item : FC<{name: string, url: string, handlerClick: () => void}> = ({name, url, handlerClick }) => {

    const [currentPokemon,setCurrentPokemon] = useState<IDetail>({} as IDetail)
    const [isLoading,setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(response => response.json())
        .then((data: IDetail) => {
            setCurrentPokemon(data)
        })
        .catch(err => console.log(err))
        .finally(() => {
            setIsLoading(false)
        })
    },[])

    return (
        <div className="itemContainer" onClick={handlerClick} >
            {!isLoading 
              ? (<div className="itemBox">
                  <img src={currentPokemon.sprites.front_default} />
                   <label>{name}</label> 
                </div>) 
              : <img className="pokeball" src={pokeballImg} />}  
        </div>
    )
}

export default Item