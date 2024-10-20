const accessKey = "dZsYoeoFiKVcuPrIeDtPVk1g2KyKn696jIZXBWgan4g"
const secretKey = "swBTSbzwNxBxLVvDfL-4GU1wCNtjYRc3X_lcidgjlqE"
const applicationId = "666924"

const searchField = document.querySelector('#searchField')
const searchButton = document.querySelector('#searchButton')
const searchResults = document.querySelector('.searchResults')
const showMore = document.querySelector('.showNa')
let inputData = "";
let page = 1;

if (page === 1){
    searchResults.innerHTML = ""
}

async function searchImages(){
    inputData = searchField.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url)
    const data = await response.json()
    
    const results = data.results


    results.map((result) => {
        const imageDiv = document.createElement('div')
        imageDiv.classList.add("searchResult")
        const image = document.createElement('img')
        const imgLink = document.createElement('a')
        image.src = result.urls.small
        image.alt = result.alt_description
        imgLink.href = result.links.html
        imgLink.target = "_blank"
        imgLink.textContent = result.alt_description
        imageDiv.appendChild(image)
        imageDiv.appendChild(imgLink)
        searchResults.appendChild(imageDiv)
    })
    page++;

    showMore.style.display = 'block'
}
searchButton.addEventListener('click',function(e){
    e.preventDefault();
    searchResults.innerHTML = ""
    page = 1;
    searchImages();
});

showMore.addEventListener('click',(e) => {
    e.preventDefault();
    searchImages();
})