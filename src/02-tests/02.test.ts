import {CityType} from "./02";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildAt: 2001,
                repaired: true,
                address: {
                    number: 1180,
                    street: {
                       title: "Brighton Beach"
                    }
                }
            },
            {
                buildAt: 2010,
                repaired: false,
                address: {
                    number: 1000,
                    street: {
                       title: "East 61st Street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 1000000,
                staffCount: 99,
                address: {
                    number: 34,
                    street: {
                        title: "Brooklyn"
                    }
                }
            }
        ],
        citizensNumber: 500000
    }
})

test("Verify houses data is correct", () => {
    expect(city.houses[0].buildAt).toEqual(2001)
    expect(city.houses[0].repaired).toBe(true)
    expect(city.houses[0].address.street.title).toBe("Brighton Beach")
    expect(city.houses.length).toBe(2)
})