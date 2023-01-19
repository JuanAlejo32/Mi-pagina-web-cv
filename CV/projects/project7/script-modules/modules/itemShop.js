const items ={
    "itemShop":[

        {
            "id":1,
            "itemdes":"SS/22",
            "name":"CACTUS",
            "price":"$300 USD",
            "description":"Lace-up ankle boot with reflective details on the upper, logoed technical fabric tongue in tumbled leather, split leather, side technical fabric, semi-transparent PVC. Technical fabric lining.",
            "imgone":"../public/img/slide-1.jpeg",
            "imgtwo":"../public/img/slide-1-1.jpeg",
            "imgthree":"../public/img/slide-1-2.jpeg",
            "bg1":"#e7d6c4",
            "bg2":"#e7d6c4",
            "scale":"scale(0.9)"
        },
        {
            "id":2,
            "itemdes":"SS/22",
            "name":"THE CODE",
            "price":"$240 USD",
            "description":"Shoe with tear-off closure characterized by the presence of semi-transparent PVC. Details printed and embroidered in orange or yellow depending on the version in split leather, tumbled leather, semi-transparent PVC and technical fabric lining.",
            "imgone":"../public/img/slide-2.jpeg",
            "imgtwo":"../public/img/slide-2-1.jpeg",
            "imgthree":"../public/img/slide-2-2.jpeg",
            "bg1":"#e7d6c4",
            "bg2":"#e7d6c4",
            "scale":"scale(0.9)"
        },
        {
            "id":4,
            "itemdes":"SS/22",
            "name":"PANTAFACA",
            "price":"$240 USD",
            "description":"Pantafaca sneaker in soft fabric and waterproof technical materials. The fabric and the lateral elastic laces guarantee adherence and adaptability to the fit. Adjustable thanks to the drawstring on the back. Gritty rubber sole.",
            "imgone":"../public/img/slide-4.jpg",
            "imgtwo":"../public/img/slide-4-1.jpeg",
            "imgthree":"../public/img/slide-4-2.jpeg",
            "bg1":"#e7d6c4",
            "bg2":"white",
            "scale":"scale(0.9)"
        },
        {
            "id":6,
            "itemdes":"SS/22",
            "name":"THE EYE",
            "price":"$240 USD",
            "description":"Classic laced, rigid TPU side lacing to match the upper. Different colour embroidery depending on the colour version chosen. Embroidered logo tongue in tumbled leather at the toe, split leather, technical side fabric, neoprene for the tongue and semi-transparent PVC. Lining in technical fabric.",
            "imgone":"../public/img/slide-6.jpg",
            "imgtwo":"../public/img/slide-6-1.jpeg",
            "imgthree":"../public/img/slide-6-2.jpeg",
            "bg1":"#e7d6c4",
            "bg2":"#e7d6c4",
            "scale":"scale(0.9)"
        },
        {   
            "id":8,
            "itemdes":"FW/19",
            "name":"RIVOLTA",
            "price":"$405 USD",
            "description":"Anti-prilet leather jacket model lined with technical fabric. technical fabric details with velcro closures and reflective cloth, military metal logoed hook. back pocket in technical fabric.",
            "imgone":"../public/img/slide-8.jpeg",
            "imgtwo":"../public/img/slide-8-1.jpeg",
            "imgthree":"../public/img/slide-8-2.jpeg",
            "bg1":"#e7d6c4",
            "bg2":"#e7d6c4",
            "scale":"scale(1.2)"
        },
        {   
            "id":9,
            "itemdes":"FW/20",
            "name":"TRESCIA",
            "price":"$240 USD",
            "description":"Trescia sneaker in soft fabric and technical materials. The neoprene sock guarantees adherence and adaptability to the fit. Windproof rear zip opening. Gritty rubber sole.",
            "imgone":"../public/img/slide-9.jpg",
            "imgtwo":"../public/img/slide-9-1.jpeg",
            "imgthree":"../public/img/slide-9-2.jpeg",
            "bg1":"white",
            "bg2":"white",
            "scale":"scale(0.9)"
        }
    ]
}

const d = document;

export const localItemstorage = async(e)=>{
    const index = parseInt(e.target.getAttribute("data-id"))

    const findIndex = items.itemShop.find(element => element.id == index)
    

    if (findIndex == undefined) {
        
        return  window.location.href = "../views/404.html";
    }
    
    localStorage.setItem("itemshop", JSON.stringify(findIndex)) 

    
    
}


export const pagItemshop = async ()=>{
    const item  = JSON.parse(localStorage.getItem("itemshop"))

    // console.log(item);

    d.querySelector(".title-item-h3").innerText =  item.itemdes
    d.querySelector(".title-item-h2").innerText = item.name
    d.querySelector(".title-item-h4").innerText = item.price
    d.querySelector(".description-item").innerText = item.description
    d.querySelector(".itemshop-1").src = item.imgone
    d.querySelector(".itemshop-2").src = item.imgtwo
    d.querySelector(".itemshop-2").style.transform = `${item.scale}`;
    d.querySelector(".itemshop-3").src = item.imgthree
    d.querySelector(".w-item-2").style.backgroundColor = item.bg1;
    d.querySelector(".w-item-3").style.backgroundColor = item.bg2;
    d.title = `Project 7 ${item.name}`

}
