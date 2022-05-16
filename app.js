const orders = [

    {
        id: 1,
        pizza: "Hawai",
        extra: "Kukorica",
        ital: "Pepsi Zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/11485254/pexels-photo-11485254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        id: 2,
        pizza: "Mexikoi",
        extra: "Bab",
        ital: "Fanta",
        ar: 1400,
        kep: "https://images.pexels.com/photos/6068716/pexels-photo-6068716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        id: 3,
        pizza: "Szalámis",
        extra: "Nincs",
        ital: "Nagy Sprite",
        ar: 1600,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        id: 4,
        pizza: "Sonkás",
        extra: "Ananász",
        ital: "Gyömbér",
        ar: 1200,
        kep: "https://images.pexels.com/photos/12032532/pexels-photo-12032532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },

    {
        id: 5,
        pizza: "Articsókás",
        extra: "Sonka",
        ital: "Pálinka",
        ar: 2000,
        kep: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        id: 6,
        pizza: "Négy sajtos",
        extra: "Füstölt sajt",
        ital: "Zero Tea",
        ar: 2400,
        kep: "https://images.pexels.com/photos/11485254/pexels-photo-11485254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
]

const result = document.querySelector(".result");

let output = "";

orders.map((order)=>{


    output +=`
    
        <div class="order">

            <div>
                <img src='${order.kep}' alt='pizza'/>
            </div>

            <h3>${order.pizza}</h3>
            <hr>
            <h4>Ár: ${order.ar}</h4>
            <p>Extra: ${order.extra}</p>
            <p>Ital: ${order.ital}</p>

        </div>

    `;
})

result.innerHTML = output;