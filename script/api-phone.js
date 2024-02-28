

const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones, isShowAll);
}


const displayPhone = (phones, isShowAll) => {
    // console.log(phones);
    const displayCardContainer = document.getElementById('displayCardContainer');

    // search deyar por ager item remove korar jonno
    displayCardContainer.textContent = '';

    // show all btn hidden code
    const ShowAllBtnSection = document.getElementById('ShowAllBtnSection');


    if (phones.length > 5 && !isShowAll) {
        ShowAllBtnSection.classList.remove('hidden');
    } else {
        ShowAllBtnSection.classList.add('hidden');
    }

    // 2nd paramitar passi kina checking 
    // console.log('is show all click', isShowAll);


    if (!isShowAll) {
        phones = phones.slice(0, 5);
    }

    // display only 5 phones
    // phones = phones.slice(0, 5);

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
                            <button onclick="handleShowDetails('${phone.slug}'); my_modal_1.showModal()" class="btn btn-primary">Show Details </button>
                        </div>
                    </div>
                `
        displayCardContainer.appendChild(phoneCard);

    }); // forEach

    // hide loading spinner 
    toggleLoadingSpinner(false);

} // displayPhone()

const handleSearch = (isShowAll) => {
    // add loading spiner 
    toggleLoadingSpinner(true);

    // console.log('object');
    const inputField = document.getElementById('inputField').value;
    loadPhone(inputField, isShowAll);
}



const toggleLoadingSpinner = (isLoading) => {
    const loaderSpinner = document.getElementById('loaderSpinner');
    if (isLoading) {
        loaderSpinner.classList.remove('hidden');
    } else {
        loaderSpinner.classList.add('hidden');
    }
}


const handleShowAll = (isShowAll) => {
    const showAllBtn = document.getElementById('showAllBtn');
    handleSearch(true);

}




const handleShowDetails = async (phoneId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`);
    const data = await res.json();
    const phoneDetails = data.data;
    showPhoneDetails(phoneDetails);
}

const showPhoneDetails = (phoneDetailsDataTaken) => {
    console.log(phoneDetailsDataTaken);

    const showDetailsContainer = document.getElementById('showDetailsContainer');
    showDetailsContainer.innerHTML =

        `
                        <div class="text-center mb-7 flex justify-center">
                            <img src="${phoneDetailsDataTaken.image}" alt="img">
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">${phoneDetailsDataTaken.name}</h3>
                            <p class="py-4">It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.</p>
                            <p><span class="font-extrabold">Storage :</span> ${phoneDetailsDataTaken.mainFeatures.storage}</p>
                            <p><span class="font-extrabold">Display Size :</span> ${phoneDetailsDataTaken.mainFeatures.displaySize}</p>
                            <p><span class="font-extrabold">Chipset :</span> ${phoneDetailsDataTaken.mainFeatures.chipSet}</p>
                            <p><span class="font-extrabold">Slug :</span> ${phoneDetailsDataTaken.slug}</p>
                            <p><span class="font-extrabold">Release data :</span> ${phoneDetailsDataTaken.releaseDate}</p>
                            <p><span class="font-extrabold">Brand :</span> ${phoneDetailsDataTaken.brand}</p>
                        </div>
    
    `














    //show the modal
    my_modal_1.showModal();
}












