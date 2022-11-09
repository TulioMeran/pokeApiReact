import { FC } from "react"
import './index.css'

const TypeCard: FC<{name: string}> = ({name}) => {

    return (
        <div className={`type ${name}`}>
            {name}
        </div>
    )
}

export default TypeCard