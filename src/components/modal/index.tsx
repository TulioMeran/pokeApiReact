import {FC} from 'react'
import { IDetail } from '../../types/pokemon'
import './index.css'
import TypeCard from '../typeCard'
import StatCard from '../statCard'
import PokeChip from '../pokechip'

const Modal: FC<{open: boolean, handlerCloseModal: () => void, pokemon: IDetail}> = ({open, handlerCloseModal, pokemon}) => {

    return (
        <div className={`modal ${open === true ? 'modal-open': ''}`} onClick={(event) => {
            const {className} = event.target as any
            if(className === "modal modal-open") {
                handlerCloseModal()
            }
           
            }}>
            {pokemon.name && <div className='modal-content'>
             <div className='main-content'>
                <div className='modal-close' >
                   <h1 onClick={handlerCloseModal} >x</h1> 
                </div>
                <div className='side-left' >
                  <div className='height-weight-content' >
                    <div className='h-w-main' >
                    <div>Height:<label>{pokemon.height}''</label></div>
                    <div>Weight:<label>{pokemon.weight} kg</label></div>
                    </div>
                    
                  </div>
                  <div className='shiny-main' >
                    <PokeChip isFullSize name='Shiny version' />
                    <div className='shiny-content' >
                        <img src={pokemon.sprites.front_shiny} />
                        <img src={pokemon.sprites.back_shiny} />
                    </div>
                  </div>
                  <div className='stats-main' >
                    <PokeChip isFullSize name='Stats' />
                    <div className='stats-content' >
                        {pokemon.stats.map((item,index) => <StatCard key={index} name={item.stat.name} base_stat={item.base_stat}   />)}
                    </div>
                  </div>
                </div>
               <div className='side-right' >
                 <div className='order' >
                    <div>
                     {pokemon.order}
                    </div>
                 </div>
                <div className='img-content' >
                    <img className='imgPokemon' src={pokemon.sprites.other['official-artwork'].front_default} /> 
                </div>
                <PokeChip name={pokemon.name} />
                <div className='types-content' >
                    {pokemon.types.map((item,index) => <TypeCard key={index} name={item.type.name} /> )}
                </div>
                    </div>
                </div>
            </div>}
            
        </div>
    )
}

export default Modal