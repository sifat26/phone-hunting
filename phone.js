const loadPhone = async (searchValue) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
  );
  const data = await res.json();
  phones = data.data;
  displayPhone(phones);
};
const displayPhone = (phones) => {
  const phoneList = document.getElementById('phone-container');
  phoneList.textContent='';
  let showBtn=document.getElementById('show-all-btn');
  if(phones.length > 12) {
    showBtn.classList.remove('hidden');
  }
  else {
    showBtn.classList.add('hidden');

  }


  phones=phones.slice(0,12);


  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");

    phoneCard.classList=`card container bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
            <figure class="px-8 pt-8">
              <img
                src="${phone.image}"
                alt=""
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button class="btn btn-primary rounded-md text-white">Buy Now</button>
              </div>
            </div>`;
            phoneList.appendChild(phoneCard);
  });
};


const handleSearch=() => {
  const searchItem = document.getElementById('searchText');
  const searchValue = searchItem.value;
  loadPhone(searchValue);




}



