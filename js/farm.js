let carts = []
const products = [
    {
        name: 'Equipment  Dealer',
        price: 2000 - 10000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi ex corporis. Id nihil error nisi aspernatur aliquam quibusdam quia incidunt repellendus, quos perferendis non ad veniam deserunt eum necessitatibus. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quas esse quis consectetur quae architecto pariatur numquam nemo corrupti possimus tempora, dolorum obcaecati quod nisi eos doloremque culpa dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos a sapiente possimus asperiores odit quasi aperiam ut, ratione ducimus, amet aut ipsum aliquid laboriosam ea? Molestias vero voluptatum assumenda!',
        image: 'CASE-tractor-3-980x980.png',
    },
    {
        name: 'Financial Institution',
        price: 5000 - 15000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi ex corporis. Id nihil error nisi aspernatur aliquam quibusdam quia incidunt repellendus, quos perferendis non ad veniam deserunt eum necessitatibus. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quas esse quis consectetur quae architecto pariatur numquam nemo corrupti possimus tempora, dolorum obcaecati quod nisi eos doloremque culpa dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos a sapiente possimus asperiores odit quasi aperiam ut, ratione ducimus, amet aut ipsum aliquid laboriosam ea? Molestias vero voluptatum assumenda!',
        image: 'HT-Saleforce-Type-Graphic-4-980x551.png',
    },
    {
        name: 'Equipment  Ownerr',
        price: 7000- 15000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi ex corporis. Id nihil error nisi aspernatur aliquam quibusdam quia incidunt repellendus, quos perferendis non ad veniam deserunt eum necessitatibus. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quas esse quis consectetur quae architecto pariatur numquam nemo corrupti possimus tempora, dolorum obcaecati quod nisi eos doloremque culpa dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos a sapiente possimus asperiores odit quasi aperiam ut, ratione ducimus, amet aut ipsum aliquid laboriosam ea? Molestias vero voluptatum assumenda!',
        image: 'john-deere-tractors-oem-e1585944028287.jpg',
    },
    {
        name: 'Farming',
        price: 800-2000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi ex corporis. Id nihil error nisi aspernatur aliquam quibusdam quia incidunt repellendus, quos perferendis non ad veniam deserunt eum necessitatibus. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut quas esse quis consectetur quae architecto pariatur numquam nemo corrupti possimus tempora, dolorum obcaecati quod nisi eos doloremque culpa dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos a sapiente possimus asperiores odit quasi aperiam ut, ratione ducimus, amet aut ipsum aliquid laboriosam ea? Molestias vero voluptatum assumenda!',
        image: 'imageedit_25_2320484250-min-e1585951094884.jpg',
    }
]





products.forEach((element,index)=>{
    const divNode = `
    <div>
        <div class="child deal">
            <img class="prod-img" src="./assets/${element.image}" alt="">
            <p>${element.details}</p>
        </div>
        <div class="head">
            <h3 id="name">${element.name}</h3>
            <p id="price">${element.price}</p>
        </div>
        <button name="btn" id=${index} class="btn-1">Add to Carts</button>
    </div>
    `
    document.querySelector('.container-3').insertAdjacentHTML('beforeend', divNode)

    console.log(products);

})

document.querySelector('.container-3').addEventListener('click', event=>{

    const tagName = event.target.name
    const tagId = event.target.id
    if (tagName!=='btn') return
    console.log(tagId);
    carts.push(products[tagId])
    console.log(products[tagId]);
    const cartsNode = `
    <div>
        <div class="child deal">
            <img class="prod-img" src="./assets/${products[tagId].image}" alt="">
        </div>
        <div class="head">
            <h3 id="name"> ${products[tagId].name} </h3>
            <p id="price"> $${products[tagId].price} </p>
        </div>
    </div>
    `
   let total = carts.reduce((a, c)=>{
    return a + c.price
   },0) 
   console.log(total);
   document.querySelector('.carts').insertAdjacentHTML('beforeend', cartsNode)
   document.querySelector('.summation').innerHTML = `$${total}`
})

