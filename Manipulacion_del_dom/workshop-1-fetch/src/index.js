/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app";

//Variable del nodo 
const appNode = document.querySelector("#app");

//Integrando api internacional para manejo de fechas y monedas

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)

    return newPrice;
}

//web api
//window.fetch(url) nos trae los recursos desde cualquier sitio web pasando por parametro la url
/* 
1. Conectaronos al servidor
2. Procesar la respuesta y convertirla en formato JSON
3. Una vez con la data obtenida la renderizamos para la web
*/
//1
window.fetch(`${url}/api/avo`)
    //2
    .then(respuesta => respuesta.json())
    //3
    .then(respuestaJson => {
        //Variable que contiene todos los datos de la api
        const items = [];
        //Recorremos el json con un foreach
        respuestaJson.data.forEach(item => {
            //name = item.name
            const name = document.createElement("h1");
            name.textContent = item.name;
            name.className = "text-lg ";
            //image = item.image
            const image = document.createElement("img");
            image.src = `${url}${item.image}`;
            image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            //price = item.price
            const price = document.createElement("div");
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price);

            //Contenedor precio y titulo
            const priceAndTitle = document.createElement("div");
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(name);
            priceAndTitle.appendChild(price);

            //Card
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.appendChild(image);
            card.appendChild(priceAndTitle);


            items.push(card);
        });

        appNode.append(...items);
    });



