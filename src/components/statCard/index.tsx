import {FC} from 'react'
import './index.css'
const StatCard: FC<{name: string, base_stat: number}> = ({name, base_stat}) => {

    return (
        <div className='stat-box' >
            {name}
            <div>
             {base_stat}
            </div>
        </div>
    )
}

export default StatCard