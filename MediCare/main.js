let bannerList=[
    {
        imgUrl:"https://cms-contents.pharmeasy.in/banner/93051e0bc77-MEGA20_App.jpg",
    },
    {
        imgUrl:"https://cms-contents.pharmeasy.in/banner/dc5281c821e-GRAND1000_App.jpg",
    },
    {
        imgUrl:"https://cms-contents.pharmeasy.in/banner/86df3a0dc37-HP.jpg",
    },
];

let newLaunchesList=[
    {
        name:"Kotex Overnight Period Panties - Medium / Large SiZe, Pack of 2 Panties",
        imgUrl:"https://cdn01.pharmeasy.in/dam/products_otc/W66447/kotex-overnight-period-panties-medium-large-size-pack-of-2-panties-2-1652778799.jpg?dim=1024x0",
        mrp: 95,
        discount: 15,
    },
    {
        name: "Pharmeasy Posture Corrector - Corrects Bad Posture - Eases Neck, Back & Shoulder Pain - Small",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G63237/pharmeasy-posture-corrector-corrects-bad-posture-eases-neck-back-shoulder-pain-small-2-1656420762.jpg?dim=1024x0",
        mrp: 999,
        discount: 50,
    },
    {
        name: "Sugar Pop Nourishing Lip Balm - 02 Cherry",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T31617/sugar-pop-nourishing-lip-balm-02-cherry-2-1653658203.jpg?dim=320x320&dpr=1&q=100",
        mrp: 149,
        discount: 5,
    },
    {
        name: "Manforce Epic Desire Super Thin Premium Condoms, Silk Chocolate Flavor, Disposable Pouch (3 Counts)",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G89746/manforce-epic-desire-super-thin-premium-condoms-silk-chocolate-flavor-disposable-pouch-3-counts-6.1-1652957426.jpg?dim=1024x0",
        mrp: 80,
        discount: 15,
    },
    {
        name: "Kellogg'S Froot Loops Original 285g Box",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E65383/kelloggs-froot-loops-original-285g-box-2-1644845403.jpg?dim=1024x0",
        mrp: 185,
        discount: 0,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
];

let trendingProdList=[
    {
        name:"Supradyn Daily Multivitamin tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=329x320&dpr=1&q=100",
        marp: 54,
        discount: 5,
    },
    {
        name: "Everherb Karela Jamun Juice - Helps Maintain Healthy Sugar Levels -Helps In Weight Management - 1l",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=320x320&dpr=1&q=100",
        mrp: 399,
        discount: 48,
    },
    {
        name: "Dr Morepen Gluce One Bg 03 Glucometer Test Strips Box of 50",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=1024x0",
        mrp: 840,
        discount: 24,
    },
    {
        name: "Dettol Antiseptic Liquid Bottle of 550 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg?dim=1024x0",
        mrp: 194.6,
        discount: 7,
    },
    {
        name: "Liveasy Essentials Copper Bottle - Ayurvedic Health Benefits - Leak Proof Cap - 950ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W00450/liveasy-essentials-copper-bottle-ayurvedic-health-benefits-leak-proof-cap-950ml-1-1641793079.jpg?dim=1024x0",
        mrp: 1100,
        discount: 30,
    },
    {
        name:"Supradyn Daily Multivitamin tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=329x320&dpr=1&q=100",
        marp: 54,
        discount: 5,
    },
    {
        name: "Vicks Vaporub 25ml, Relief Froom Cold, Cought, Headache And  Body Pain",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1654078746.jpg?dim=1024x0",
        mrp: 85,
        discount: 11,
    },
]


let bannerContainer=document.querySelector(".banner");
createOfferList(bannerList, bannerContainer)

let newLaunchesContainer=document.querySelector(".new-launches>.product-cards");
createProductList(newLaunchesList, newLaunchesContainer)

let trendingContainer=document.querySelector(".trending > .product-cards");
createProductList(trendingProdList, trendingContainer);
function createProductList(list, container){
    list.forEach(function (el){
        let div=document.createElement("div");
        let div2=document.createElement("div");
        let img=document.createElement("img");
        let name=document.createElement("h4");
        let mrp=document.createElement("p");
        let price=document.createElement("h4");

        img.setAttribute("src", el.imgUrl);
        name.innerText = el.name;
        name.setAttribute("class", "name");
        mrp.innerHTML= "MRP <span>Rs" + el.mrp + "</span>"
        let p =(el.mrp/100) * (100-el.discount);
        p=(Math.round(p*100)/100).toFixed(2);
        price.innerHTML="Rs" + p + "<span>" + el.discount + "% OFF";
        div2.append(name, mrp, price);
        div.append(img, div2);
        container.append(div);
    })
}

function createOfferList(list, container){
    list.forEach(function (el){
        let img=document.createElement("img");
        img.setAttribute("src", el.imgUrl);
        container.append(img);
    })
}