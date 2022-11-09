import { FC, useEffect, useState } from "react"
import { IDetail } from "../../types/pokemon"
import './index.css'
import pokeballImg from '../../assets/pokeball.png'

const Item : FC<{name: string, url: string, handlerClick: (pokemon: IDetail) => void, index: number}> = ({name, url, handlerClick, index }) => {

    const [currentPokemon,setCurrentPokemon] = useState<IDetail>({} as IDetail)
    const [isLoading,setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch(url)
            .then(response => response.json())
            .then((data: IDetail) => {
                setCurrentPokemon(data)
                
                const time = 100 * data.order
                setTimeout(() => {
                    setIsLoading(false)
                },time > 5000 ? 5000 : time)
            })
            .catch(err => {
                console.log(err)
                setTimeout(() => {
                    setIsLoading(false)
                },2000)
            })
        }, 10 * index)
        
    },[url])

    return (
        <div className="itemContainer" onClick={() => handlerClick(currentPokemon)} >
            {!isLoading 
              ? (<div className="itemBox">
                   {currentPokemon.sprites.front_default && <img src={currentPokemon.sprites.front_default} /> } 
                   <label>{name}</label> 
                </div>) 
              : <img className="pokeball" src={pokeballImg} />}  
        </div>
    )
}

export default Item