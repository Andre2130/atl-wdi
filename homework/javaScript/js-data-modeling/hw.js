const Ultra_email = {
    id: Number,
    user: {
        name: String,
        age: Number
    },
    emailAdress: String,
    view: {
        viewed: Boolean
    }
}
const RadioApp = {
    channle: Number,
    station: String,
    playlist:[{
        type:[{
            Hiphop,
            RnB
        }],
    popularity:[ {
            top100
        }]
    } ]
}
const RockApp = {
    tourDates: String,
    Tickets:[{
        ticketsSold: Number,
        ticketPrice: Number
    }],
    nextShow: String
}
const CoffeeApp = {
    shop: String,
    menue: [{
        coffee: String,
        tae: String
    }],
    shoppingCart:[{
        currentOrder: String,
        previousOrder: String
    }]
}
const SportsApp ={
    team: string,
    score: Number,
    player: [{
        name: String,
        points: Number,

    }]
}