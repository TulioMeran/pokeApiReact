 interface IAbility {
    name: string
    url: string

}

 interface IAbilities {
    ability: IAbility
    is_hidden: false
}

 interface IType {
    name: string
    url: string
}

 interface ITypes {
    type: IType
}

 interface IDreamWorld {
    front_default: string
}

 interface IHome {
    front_default: string
    front_shiny: string
}

 interface IOfficialArtWork {
    front_default: string
}

 interface IOther {
    dream_world: IDreamWorld
    home: IHome
    'official-artwork': IOfficialArtWork
}

 interface ISprites {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    other: IOther
}

 interface IStat {
    name: string
    url: string
}

 interface IStats {
    base_stat: number
    stat: IStat
}


export interface IDetail {
    abilities: IAbilities[]
    height: number
    weight: number
    name: string
    order: number
    types: ITypes[]
    sprites: ISprites
    stats: IStats[]

}