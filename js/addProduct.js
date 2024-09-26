// andar's PICK
fetch('https://jungwoonan.github.io/andar/data/pick.json',{
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
.then(response => {
    return response.json()
})
.then(obj => pick(obj))

function pick(obj){
    for(let i in obj){
        let slide = $('#pick .pickSwiper .swiper-slide').eq(i);
        let price_1 = obj[i].price_1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let price_2 = obj[i].price_2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let sale_1 = '';
        let sale_2 = '';

        if(obj[i].sale_1 != ""){
            sale_1 = `<span>${obj[i].sale_1}</span> ` 
        }

        if(obj[i].sale_2 != ""){
            sale_2 = `<span>${obj[i].sale_2}</span> ` 
        }

        slide.append(`
            <div class="left">
                <a href="#"><img src="${obj[i].left_img}" alt="pick"></a>
            </div>
        `);

        slide.append(`
            <div class="right">
                <div class="product_2 phover">
                    <div class="product_thumb">
                        <img src="${obj[i].thumb_1}" alt="pick">
                    </div>
                    <div class="product_content">
                        <h5>${obj[i].name_1}</h5>
                        
                        <p class="product_price">${sale_1 + price_1}원</p>
                    </div>
                </div>
                <div class="product_2 phover">
                    <div class="product_thumb">
                        <img src="${obj[i].thumb_2}" alt="pick">
                    </div>
                    <div class="product_content">
                        <h5>${obj[i].name_2}</h5>
                        
                        <p class="product_price">${sale_2 + price_2}원</p>
                    </div>
                </div>
            </div>
        `);
    }
}

// 베스트셀러
fetch('https://jungwoonan.github.io/andar/data/best.json',{
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
.then(response => {
    return response.json()
})
.then(obj => best(obj))

function best(obj){
    for(let i in obj){
        let best = $('#best .product').eq(i);

        for(let j in obj[i]){
            let product = obj[i][j];
     
            let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let sale = '';
    
            if(product.sale != ""){
                sale = `<span>${product.sale}</span> ` 
            }
    
            best.append(`
                <div class="product_4 phover">
                    <div class="product_thumb">
                        <img src="${product.thumb}" alt="best">
                    </div>
                    <div class="product_content">
                        <h5>${product.name}</h5>
                        
                        <p class="product_price">${sale + price}원</p>
                    </div>
                </div>
            `);
        }
    }
}

// new item
fetch('https://jungwoonan.github.io/andar/data/new.json',{
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
.then(response => {
    return response.json()
})
.then(obj => newitem(obj))

function newitem(obj){
    for(let i in obj){
        let slide = $('#new .newSwiper .swiper-slide').eq(i);
        let price = obj[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       
        slide.append(`
            <div class="product_1 phover">
                <div class="product_thumb">
                    <img src="${obj[i].thumb}" alt="new">
                </div>
                <div class="product_content">
                    <h5>${obj[i].name}</h5>
                    <p class="price">${price}원</p>
                </div>
            </div>
        `);
    }
}

// 전지현set
fetch('https://jungwoonan.github.io/andar/data/set.json',{
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
.then(response => {
    return response.json()
})
.then(obj => modelset(obj))

function modelset(obj){    
    for(let i in obj){
        let slide = $('#set .swiper-slide').eq(i);

        for(let j in obj[i]){
            let product = obj[i][j];            

            let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let sale = '';
    
            if(product.sale != ""){
                sale = `<span>${product.sale}</span> ` 
            }
    
            slide.append(`
                <div class="product_4 phover">
                    <div class="product_thumb">
                        <img src="${product.thumb}" alt="set">
                    </div>
                    <div class="product_content">
                        <h5>${product.name}</h5>
                        
                        <p class="product_price">${sale + price}원</p>
                    </div>
                </div>
            `);
        }
    }
}