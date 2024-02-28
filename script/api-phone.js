

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
}


const displayPhone = phones => {
    // console.log(phones);
    const displayCardContainer = document.getElementById('displayCardContainer');

    // search deyar por ager item remove korar jonno
    displayCardContainer.textContent = '';

    // show all btn hidden code
    const ShowAllBtnSection = document.getElementById('ShowAllBtnSection');

    if (phones.length > 5) {
        ShowAllBtnSection.classList.remove('hidden');
    } else {
        ShowAllBtnSection.classList.add('hidden');
    }


    // display only 5 phones
    phones = phones.slice(0, 5);

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = "card bg-base-100 shadow-xl";
        phoneCard.innerHTML =
            `
                    <figure class="px-10 pt-10">
                        <img src="${phone.image}" alt="Phone"
                            class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>There are many variations of passages of available.</p>
                        <div class="font-extrabold text-2xl">
                            <p>${phone.phone_name}</p>
                        </div>
                        <div class="card-actions">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
                `
        displayCardContainer.appendChild(phoneCard);

    }); // forEach

    // hide loading spinner 
    toggleLoadingSpinner(false);

} // displayPhone()

const handleSearch = () => {
    // add loading spiner 
    toggleLoadingSpinner(true);

    // console.log('object');
    const inputField = document.getElementById('inputField').value;
    loadPhone(inputField);
}



const toggleLoadingSpinner = (isLoading) => {
    const loaderSpinner = document.getElementById('loaderSpinner');
    if (isLoading) {
        loaderSpinner.classList.remove('hidden');
    } else {
        loaderSpinner.classList.add('hidden');
    }
}






















