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


let dealsOfTheDayData = []