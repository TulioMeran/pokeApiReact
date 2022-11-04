import {useContext, useState, useEffect, useRef, useCallback} from 'react'
import Item from '../../components/item'
import Modal from '../../components/modal'
import { DataProviderContext } from '../../contexts/dataProvider'
import './index.css'

const HomePage = () => {

    const {pokemons,setOffset,offtset} = useContext(DataProviderContext)
    const observer = useRef<any>()

    const [IsModalOpen,setIsModalOpen] = useState<boolean>(false)
    const handlerCloseModal = () => {
        setIsModalOpen(prevState => prevState = false)
    }

    const lastPokemonItemRef = useCallback((node: any) => {
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting)
            {
                setOffset(prevState => prevState + 20)
            }
        })

        if(node) observer.current.observe(node)

    },[offtset])

    return (
        <>
       <Modal open={IsModalOpen} handlerCloseModal={handlerCloseModal} />
        <div className='listContainer' >
            {pokemons.map((item,index) =>{
                if(pokemons.length === index + 1){
                    return  <div ref={lastPokemonItemRef}  key={index}> <Item handlerClick={() => setIsModalOpen(true)} name={item.name} url={item.url} /> </div>
                } else {
                    return  <Item handlerClick={() => setIsModalOpen(true)} key={index} name={item.name} url={item.url} />
                }
                
            })}
        </div>
        </>

    )
}

export default HomePage