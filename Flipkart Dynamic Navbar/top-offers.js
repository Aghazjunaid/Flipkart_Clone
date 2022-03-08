const navData = [
    { text: 'Electronics' },
    { text: 'Tv & Appliances' },
    { text: 'Men' },
    { text: 'Women' },
    { text: 'Baby & Kids' },
    { text: 'Home' },
    { text: 'Appliances' },
    { text: 'Travel' },
    { text: 'Beauty, Toys & More' }
];

const navList = document.getElementById("navList")

function createNavList(data){
    let createdNavElement = document.createElement("div")
    // createdNavElement.className = "div1" //used to add class to created element
    createdNavElement.innerHTML = `<a href="/top-offers.html">
        <div>${data.text}</div>
        </a>
    `;
    return createdNavElement
}

for(let i=0; i<navData.length; i++){
    let ele = createNavList(navData[i])
    navList.appendChild(ele);

}


let dealsOfTheDayData = [
    {
        url: "/assets/images/b033cc7e0bec7110.jpg",
        title: "Gas Stoves",
        price: "From ₹1499",
        description: "Pigeon, Butterfly and More"
    },
    {
        url: "/assets/images/galvanised-steel-9-layer-pink-book-furione-pink-original-imafv3v6gsuvcfyf.jpeg",
        title: "Swings, Stools & Floor Seating",
        price: "From ₹199",
        description: "Deal of the day"
    },
    {
        url: "/assets/images/atc-1001-izom-original-imafudzxxyf2gyxh.jpeg",
        title: "Power Tools",
        price: "Up to 80% Off",
        description: "Best Selling"
    },
    {
        url: "/assets/images/e3ff066cfd6881cb.jpg",
        title: "Plain Case Covers & ScreenGuards",
        price: "From ₹179",
        description: "Quick Delivery"
    },
    {
        url: "/assets/images/l-190862-anubhutee-original-imafhf5wdcty3bhp.jpeg",
        title: "Kurtas & Kurtis",
        price: "Under₹499+Extra10%Off",
        description: "Spring Collections!"
    },
    {
        url: "/assets/images/wall-stickers-wallpaper-home-decoration-walls-with-twigs-self-original-imag5rvgvs5yxaze.jpeg",
        title: "Beautiful  WallPapers",
        price: "Extra 10% Offer",
        description: "Grab Or Gone"
    },
    {
        url: "/assets/images/34844099-dressberry-original-imafkygkqsdggteq.jpeg",
        title: "Jewellery Sets, Bangles...",
        price: "40-80%+Extra10% Off",
        description: "Wedding Special Jewellery!"
    },
]

let dealsOfTheDayTag = document.getElementById("deals-of-the-day-data")

function createDealsOfTheDay(data){
    console.log(data)
    let createdElement = document.createElement("div")
    createdElement.className = "footwear-Card-design"
    createdElement.innerHTML = `<a href="/">
        <img src=${data.url} alt="image">
        <div class="title">${data.title}</div>
        <div class="price">${data.price}</div>
        <div class="category">${data.description}</div>
    </a>`
    return createdElement
}

for(let i=0; i<dealsOfTheDayData.length; i++){
    let ele = createDealsOfTheDay(dealsOfTheDayData[i])
    dealsOfTheDayTag.appendChild(ele);
}


let faishonTopDealsData = [
    {
        url: "",
        title: "",
        price: "",
        description: ""
    },
    {
        url: "",
        title: "",
        price: "",
        description: ""
    },
    {
        url: "",
        title: "",
        price: "",
        description: ""
    },
    {
        url: "",
        title: "",
        price: "",
        description: ""
    },
    {
        url: "",
        title: "",
        price: "",
        description: ""
    },
    {
        url: "",
        title: "",
        price: "",
        description: ""
    },
    {
        url: "",
        title: "",
        price: "",
        description: ""
    },
]