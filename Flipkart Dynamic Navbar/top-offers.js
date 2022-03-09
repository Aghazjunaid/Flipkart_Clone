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
        url: "/assets/images/m-usss0739-u-s-polo-association-original-imafhgsx2wjewveh.jpeg",
        title: "Flying Machine, Mufti, Puma..",
        price: "50-80%+ Extra 10% Off",
        description: "T-Shirts, Jeans, Sweatshirts..."
    },
    {
        url: "/assets/images/m-usts5923-u-s-polo-association-original-imaf9hu5xscbhrz3.jpeg",
        title: "U.S.P.A, Levi's, Puma...",
        price: "Under ₹999",
        description: "Premium Brands On Sale"
    },
    {
        url: "/assets/images/32-maw19jn132b-metronaut-original-imafhhushjecudhs.jpeg",
        title: "Wrangler, Killer, Arrow...",
        price: "Min 50%+Extra 10% off",
        description: "Jeans, Chinos, Trousers.."
    },
    {
        url: "/assets/images/m-7817-maroon-libas-original-imafjd7tvtpmgfcz.jpeg",
        title: "Kurtas & kurtis",
        price: "Min 50% off",
        description: "A-Line, Anarkali & more"
    },
    {
        url: "/assets/images/crone-backpack-08-teal-fg8-0-11-208-backpack-american-tourister-original-imafh54hjfhafh6v.jpeg",
        title: "American Tourister, Skybags...",
        price: "Min 50% Off",
        description: "Backpacks"
    },
    {
        url: "/assets/images/f52d84022612187d.jpg",
        title: "Casio, fastrack & more",
        price: "20 - 60% Off",
        description: "Men & Women Watches"
    },
    {
        url: "/assets/images/fsnk107nt-fsnnv001hn-hand-held-bag-speed-x-fashion-original-imafgpzjp9hsfeh3.jpeg",
        title: "Lavie, Caprese, Baggit...",
        price: "40-70% Off",
        description: "Handbags"
    },
]

let faishonTopDealsTag = document.getElementById("faishon-top-deals")

for(let i=0; i<faishonTopDealsData.length; i++){
    let ele = createDealsOfTheDay(faishonTopDealsData[i])
    faishonTopDealsTag.appendChild(ele);
}


let bigStealsOfTheWeekData = [
    {
        url: "/assets/images/ka-ht-214-craftsfort-original-imag5qwapevkuxuu.jpeg",
        title: "Luggage Rack, Shoe Racks ....",
        price: "Upto 65% off",
        description: "Solidwood,Metal,Plastic,Kids ..."
    },
    {
        url: "/assets/images/gc-1120111cma-45-woodland-denim-original-imafdrgtvvmmdveg.jpeg",
        title: "Woodland, Lee Cooper & more",
        price: "Up to 60% off",
        description: "Men's Casual Shoes, Sandals..."
    },
    {
        url: "/assets/images/samsung-sm-t975nzkainu-original-imafuhg9tfydgg78.jpeg",
        title: "SAMSUNG Galaxy Tab S7+ 6 GB RAM",
        price: "Extra ₹2000 Off!",
        description: "Electronics, Mobile..."
    },
    {
        url: "/assets/images/s704y-10-asics-grand-shark-white-original-imafuxxxgxgz8d4r.jpeg",
        title: "ADIDAS, ASICS, Puma...",
        price: "Upto 60%+Extra 5% Off",
        description: "Men's Footwear"
    },
    {
        url: "/assets/images/606678c64c32301a.jpg",
        title: "Gold Coins & Precious Jewellery",
        price: "Upto 20% Off",
        description: "Malabar Gold, Candere..."
    },
    {
        url: "/assets/images/-original-imagahnnunvh24f2.jpeg",
        title: "ZEBRONICS Smartwatch",
        price: "Upto 50% off",
        description: "From ₹1999"
    },
    {
        url: "/assets/images/8f8035fcd64a2c12.jpg",
        title: "Belts & Wallets",
        price: "From ₹299",
        description: "#Grab Or Gone"
    },
]

let bidStealsOfWeekTag = document.getElementById("big-steals-of-week")

for(let i=0; i<bigStealsOfTheWeekData.length; i++){
    let ele = createDealsOfTheDay(bigStealsOfTheWeekData[i])
    bidStealsOfWeekTag.appendChild(ele);
}


let topOffersData = [
    {
        url: "/assets/images/m-151tkr2811-selvia-original-imagyfmzv4yhgxxf.jpeg",
        title: "Dresses, T-Shirts, Tops...",
        price: "Upto 60% Off",
        description: "Sassafras, Nike, Vero Moda"
    },
    {
        url: "/assets/images/no-regular-arg-b39-yes-android-ios-honor-yes-original-imag3ru49v8bsqh7.jpeg",
        title: "Honor Band 6",
        price: "Flat 50% off",
        description: "Just ₹2999"
    },
    {
        url: "/assets/images/42-14381888-mast-harbour-original-imag88krppztwqhg.jpeg",
        title: "Arrow, UCB, Levi's..",
        price: "Up to 60%+Extra10%Off",
        description: "Shirts, Trousers.."
    },
    {
        url: "/assets/images/pluto-bajaj-original-imag8yqnfkzzbpkg.jpeg",
        title: "Mixers, Induction Cooktops ...",
        price: "Up to 55% Off",
        description: "Preethi, Philips & more"
    },
    {
        url: "/assets/images/400-hamilton-deodorant-body-spray-denver-men-original-imafgb9fsafampwz.jpeg",
        title: "Deodorants",
        price: "Min 30% Off",
        description: "Grab Now!"
    },
    {
        url: "/assets/images/200-gm-strawberry-powder-natural-spry-dried-1-bliss-of-earth-original-imag78yykwvyhfwh.jpeg",
        title: "Instant Drink Mix",
        price: "Min 20% Off",
        description: "Grab Now!"
    },
    {
        url: "/assets/images/med-blk-c-medellin-original-imaf22pgyd8w5krp.jpeg",
        title: "Acoustic Guitars",
        price: "Starting ₹2199",
        description: "Medellin, Juarez & More"
    },
]

let topOffersTag = document.getElementById("top-offers")

for(let i=0; i<topOffersData.length; i++){
    let ele = createDealsOfTheDay(topOffersData[i])
    topOffersTag.appendChild(ele);
}