
export const createPinata = (title, description, price, imageUrl) => {

            //Json empty
            var pinata = {}
        
            //Fill json
            pinata.name = title;
            pinata.description = description;
            pinata.price = price;
            pinata.image = imageUrl;

        
            //Petition.
            fetch('http://localhost:3000/product/pinata/create', { 
                method : 'POST',
                headers :{
                    'Content-Type' : 'application/json',
                    "Access-Control-Allow-Origin" : "*"
                },
                body : JSON.stringify(pinata),
                mode : 'cors',
            })
            .then(function (response) {
                alert('Piñata registrada con exito');
                console.log(response);
            })
            .then(function (result) {
                alert(result);
            })
            .catch (function (error) {
                console.log('Request failed', error);
            });
}



