(() =>{
    "use strict";
    let detailsForm = document.querySelector('#destination_details_form');

    const handleFormSubmit = function(event){
        event.preventDefault();

        let destName = event.target.elements["name"].value;
        let destLocation = event.target.elements["location"].value;
        let destPhoto = event.target.elements["photo"].value;
        let destDesc = event.target.elements["description"].value;

        for(let i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        let destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        const wishListContainer = document.querySelector('#destinations_container');

        if (wishListContainer.children.length === 0) {
            document.querySelector("#title").innerHTML = "My Wish List";
        };

        wishListContainer.appendChild(destCard);

    };

    detailsForm.addEventListener('submit', handleFormSubmit);

    const removeDestination = function(event) {
        let card = event.target.parentElement.parentElement;
        card.remove();
    }

    const createDestinationCard = function(name, location, photoURL, description) {
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.setAttribute('alt', name);

        const constantPhotoUrl = "images/signpost.jpg";

        if(photoURL.length === 0) {
            img.setAttribute('src', constantPhotoUrl);
        } else {
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.className = "card-body";

        let cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);
        
        let cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);
        
        if(description.length !== 0) {
            let cardText = document.createElement('p');
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        let cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "Remove";

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }
})();
