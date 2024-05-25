
export type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}


export type HouseType = {
    buildAt: number
    repaired: boolean
    address: AddressType
}

export type GovBldType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType ={
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovBldType>
    citizensNumber: number
}