//Array of products


const products =  [
        {
            name : `College of Arts and Sciences Tshirt`,
            price : 250.50,
            imgSrc:  `products/castshirt.jpg`,
            hasSizes: true
        },
        {
            name : `College of Engineering and Architecture PoloShirt`,
            price : 500.25,
            id : 5,
            imgSrc: `products/ceamerch.jpg`,
            hasSizes: true
            
        },
        {
            name : `College of Engineering and Architecture Tshirt`,
            price : 350.10,
            id : 6,
            imgSrc: `products/ceamerch2.jpg`,
            hasSizes: true
        },
        {
            name : `C.E.A Geodetic Engineering PoloShirt`,
            price : 650.00,
            id : 11,
            imgSrc: `products/geodeticEndPolo.jpg`,
            hasSizes: true
        },
        {
            name : `C.E.A Geodetic Engineering Lanyard`,
            price : 100.90,
            id : 12,
            imgSrc: `products/geodeticEndLaniard.jpg`,
            hasSizes: false
        },
        {
            name : `C.E.A Mechanical Engineering PoloShirt`,
            price : 480,
            id : 17,
            imgSrc: `products/mechENGpolo.jpg`,
            hasSizes: true
        },
        {
            name : `C.E.A Mechanical Engineering TShirt`,
            price : 400,
            id : 18,
            imgSrc: `products/mechENGshirt.jpg`,
            hasSizes: true
        },
        {
            name : `Architectural Drafting Society Lanyard`,
            price : 80.80,
            id : 13,
            imgSrc: `products/ADS_Laniard.jpg`,
            hasSizes: false
        },
        {
            name : `Architectural Drafting Society PoloShirt`,
            price : 400,
            id : 14,
            imgSrc: `products/ADS_PoloShirt.jpg`,
            hasSizes: true
        },
        {
            name : `Architectural Drafting Society TShirt`,
            price : 400,
            id : 15,
            imgSrc: `products/ADS_TShirt.jpg`,
            hasSizes: true
        },
        {
            name : `C.B.A PoloShirt`,
            price : 485,
            id : 19,
            imgSrc: `products/CBA_polo.jpg`,
            hasSizes: true
        },
        {
            name : `C.B.A TShirt`,
            price : 370,
            id : 20,
            imgSrc: `products/CBA_sleeveless.jpg`,
            hasSizes: true
        },
        {
            name : `C.E.A Electrical Engineering PoloShirt`,
            price : 600.25,
            id : 9,
            imgSrc: `products/ElectricalEngPolo.jpg`,
            hasSizes: true
        },
        {
            name : `C.E.A Electrical Engineering Lanyard`,
            price : 85.05,
            id : 10,
            imgSrc: `products/ElectricalEngLaniard.jpg`,
            hasSizes: false
        },
        {
            name : `C.I.T CompTech PoloShirt`,
            price : 450.95,
            id : 2,
            imgSrc: `products/citcomptech.jpg`,
            hasSizes: true
        },
        {
            name : `C.I.T ElecTech PoloShirt`,
            price : 500.75,
            id : 3,
            imgSrc: `products/citElecTech.jpg`,
            hasSizes: true
        },
        {
            name : `C.I.T AutoMotive PoloShirt`,
            price : 400.50,
            id : 4,
            imgSrc: `products/citautomotive.jpg`,
            hasSizes: true
        },
        {
            name : `C.A.S Psychology PoloShirt`,
            price : 450.40,
            id : 7,
            imgSrc: `products/pscyhPoloShirt.jpg`,
            hasSizes: true
        },
        {
            name : `C.A.S Psychology Lanyard`,
            price : 80.80,
            id : 8,
            imgSrc: `products/psychLaniard.jpg`,
            hasSizes: false
        },
        {
            name : `C.I.T TShirt`,
            price : 400.50,
            id : 16,
            imgSrc: `products/CIT_Tshirt.jpg`,
            hasSizes: true
        },
    ]


   //showing the products
   for (let product of products){
    const addedProduct = document.createElement('div');
    addedProduct.classList.add('product');
    addedProduct.id = `product-${product.id}`;
    

    addedProduct.innerHTML = `
                              <img src="${product.imgSrc}"></img>

                              <h3 id="product${product.id}" data-value="${product.name}" >${product.name}</h3>

                              <h4 id="price${product.id}" data-value="${product.price}" >Price: ₱${(product.price).toFixed(2)}</h4>

                              <div id="sizeContainer${product.id}"></div>

                              <label for="quantityFor${product.id}">Quantity</label>
                              <select name="quantityFor${product.id}" id="quantityFor${product.id}">
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>

                             
                              <p id="size${product.id}" data-value="${product.hasSizes}"></p> 

                              <div>
                                     <div id="notif${product.id}"  class="notification" ></div>
                                     <p></p>
                                    <button id="button${product.id}" 
                                    onclick="
                                        activeNotification('notif${product.id}');
                                        addButton(
                                        'size${product.id}',
                                        'product${product.id}',
                                        'sizeFor${product.id}',
                                        'quantityFor${product.id}',
                                        'price${product.id}');
                                        ">Add to Cart</button>
                                        <p></p>

                                        <button style="background-color:rgb(75, 146, 227);"
                                        onclick="
                                        buy_Product(
                                        'size${product.id}',
                                        'product${product.id}',
                                        'sizeFor${product.id}',
                                        'quantityFor${product.id}',
                                        'price${product.id}');
                                        ">Buy Now</button>
                              </div>
                               
                              `; 
                                 
    const parentDiv = document.getElementById('productContainer');
    parentDiv.appendChild(addedProduct);

    if ( product.hasSizes === true) {
        const container = document.getElementById(`sizeContainer${product.id}`);
        container.innerHTML = `
                              <label for="sizeFor${product.id}">Sizes </label>
                                  <select name="sizeFor${product.id}" id="sizeFor${product.id}">
                                   <option selected value="Small">Small</option>
                                   <option value="Medium">Medium</option>
                                   <option value="Large">Large</option>
                              </select>
                              `;
        
    } 
    //Testers for dataset values
    // const seeName = document.getElementById(`product${product.id}`);
    // console.log(seeName.dataset.value); 
    
    // const seePrice = document.getElementById(`price${product.id}`);
    // console.log(seePrice.dataset.value); 
}



//NAVBAR script
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

// Add toggle functionality for tabs
let lastActiveTab = null;
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        if (tab.classList.contains('active')) {
            // If already active, close it
            tab.classList.remove('active');
            if (target) target.classList.remove('active');
            lastActiveTab = null;
        } else {
            // Open the clicked tab, close others
            tabs.forEach(t => t.classList.remove('active'));
            tabContent.forEach(tc => tc.classList.remove('active'));
            tab.classList.add('active');
            if (target) target.classList.add('active');
            lastActiveTab = tab;
        }
    });
});



//Added notification
const activeNotification = (notificationID) => {
    const notif = document.getElementById(notificationID);
    
    notif.innerHTML = '✅︎ Added to cart';

    setTimeout(() => {
        notif.innerHTML = '';
      }, 3000);
}



class shirt {
    constructor(id, name, size, quantity, price, totalPrice){
        this.id = id;
        this.name = name;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
        this.totalPrice = totalPrice;
    }
}

class accessory {

    constructor(id, name, quantity, price, totalPrice) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.totalPrice = totalPrice;
    }
}



//Gets the all the LocalStorage needed 
document.addEventListener("DOMContentLoaded", () => {
    let currentOrder = JSON.parse(localStorage.getItem("currentOrder"));

    if (!currentOrder) {
        currentOrder = [];
        localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
    }

    showCurrentOrder();

    let history_Of_Purchase = JSON.parse(localStorage.getItem("history_Of_Purchase"));

    if(!history_Of_Purchase) {
        history_Of_Purchase = [];
        localStorage.setItem("history_Of_Purchase", JSON.stringify(history_Of_Purchase));
    }

    Show_history_Of_Purchase();

    console.log(currentOrder);
    console.log(history_Of_Purchase);

    // Add event listener for opening transactions
    const openTransactionsBtn = document.getElementById('openTransactionsBtn');
    const transactionsDiv = document.getElementById('transactions');
    if (openTransactionsBtn && transactionsDiv) {
        openTransactionsBtn.onclick = function() {
            transactionsDiv.style.display = 'block';
        };
    }
});


//show ordered products
const showCurrentOrder = () => {

    const currentOrder = JSON.parse(localStorage.getItem("currentOrder")) || [];

    console.log(currentOrder);

    const parentDiv = document.getElementById(`orderedProducts`);
    parentDiv.innerHTML = ``;

    let totalItems = 0 ;
    let summaryPrice = 0.0;
    let tax;
    let totalPrice;
            

    if(currentOrder.length === 0) {
        parentDiv.innerHTML = `
                              <h5>Your Cart is empty</h5>
                              `;
    } else {
    
        for(let order of currentOrder){

            if(order.hasOwnProperty("size") === true) {
                const addedProduct = document.createElement('div');
                addedProduct.classList.add('orderedProduct');
                addedProduct.innerHTML = `
                                        <a id="close${order.id}" onclick="deleteOrderedProduct(${order.id})">
                                            <img src="buttons/close_6318798.png"/>
                                        </a>
                                        <h4 class="orderName">${order.name}</h4>
                                        <h5>Size: ${order.size}</h5>
                                        <h5>Quantity: ${order.quantity}</h5>
                                        <h5>Price: ${parseFloat(order.price).toFixed(2)}</h5>
                                        <p>Total Price: ${parseFloat(order.totalPrice).toFixed(2)}</p>
                                        `;
                parentDiv.appendChild(addedProduct);
            } else {
                const addedProduct = document.createElement('div');
                addedProduct.classList.add('orderedProduct')
                addedProduct.innerHTML = `
                                         <a id="button${order.id}" onclick="deleteOrderedProduct(${order.id})">
                                            <img src="buttons/close_6318798.png"/>
                                        </a>
                                        
                                        <h4 class="orderName">${order.name}</h4>
                                        <h5>Quantity: ${order.quantity}</h5>
                                        <h5>Price: ${parseFloat(order.price).toFixed(2)}</h5>
                                        <p>Total Price: ${parseFloat(order.totalPrice).toFixed(2)}</p>
                                        `;
                parentDiv.appendChild(addedProduct);
            }

            
        

        totalItems += parseInt(order.quantity);
        summaryPrice += parseFloat((order.price * order.quantity).toFixed(2));
        
        }
        
     
        

    }

    tax = parseFloat(summaryPrice * 0.02).toFixed(2);
    totalPrice = (parseFloat(summaryPrice) + parseFloat(tax)).toFixed(2);
    
    const secondparentDiv = document.getElementById(`rightContainer`);
    secondparentDiv.innerHTML = ``;
    const updateCart = document.createElement(`div`);
    updateCart.classList.add(`cartContainer`);
    updateCart.innerHTML = `

                <h3>Order Summary</h3>
        
                <p id="totalQuantity" class="item">Total items:(${totalItems})</p>
                <p id="currentPrice" class="item">₱${(summaryPrice).toFixed(2)}</p>
                <p class="item">Estimated tax(2%):</p>
                <p id="estimatedTax" class="item">₱${tax}</p>
                <p class="item">Order Total:</p>
                <p id="orderTotal" class="item">₱${totalPrice}</p>
                <button onclick="buyButton()">Buy now</button>

                 `;

    secondparentDiv.appendChild(updateCart);

   
}









//Add product
let productID = 0;

const addButton = ( haveSizesID ,productNameID, sizeID, quantityID, priceValueID) => {

    // //Tester
    // console.clear();

    const currentOrder = JSON.parse(localStorage.getItem("currentOrder"));

    const productQuantity = document.getElementById(quantityID).value;
    const productPrice = document.getElementById(priceValueID).dataset.value;
    const productName = document.getElementById(productNameID).dataset.value;

    const hasSize = document.getElementById(haveSizesID).dataset.value;
    
    if ( hasSize === "false") {

        const newOrder = new accessory( productID++ ,productName, productQuantity, productPrice, productQuantity * productPrice);
        currentOrder.push(newOrder);

        localStorage.setItem("currentOrder", JSON.stringify(currentOrder));

    } else {
        const productSize = document.getElementById(sizeID).value;

        const newOrder = new shirt( productID++ ,productName, productSize, productQuantity, productPrice, productQuantity * productPrice);
        currentOrder.push(newOrder);

        localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
    }
    showCurrentOrder()
}





//Buy the Product immediately
const buy_Product = (haveSizesID ,productNameID, sizeID, quantityID, priceValueID) => {
    let history_Of_Purchase = JSON.parse(localStorage.getItem("history_Of_Purchase"));

    const productQuantity = parseInt(document.getElementById(quantityID).value);
    const productPrice = parseFloat(document.getElementById(priceValueID).dataset.value);
    const productName = document.getElementById(productNameID).dataset.value;
    const hasSize = document.getElementById(haveSizesID).dataset.value;

    let newOrder;
    if (hasSize === "false") {
        newOrder = new accessory(productID++, productName, productQuantity, productPrice, productQuantity * productPrice);
    } else {
        const productSize = document.getElementById(sizeID).value;
        newOrder = new shirt(productID++, productName, productSize, productQuantity, productPrice, productQuantity * productPrice);
    }

    let subtotal = productQuantity * productPrice;
    const userID = prompt("Please enter your Identification Number: ");
    if (userID === null) {
        alert(`Purchase Cancelled`);
        return;
    }
    const User_name = prompt("Please enter your Name: ");
    if (User_name === null) {
        alert(`Purchase Cancelled`);
        return;
    }

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Store the order as an array: [userID, User_name, subtotal, date, time, ...order, tax]
    const receipt = [userID, User_name, subtotal, date, time, newOrder, subtotal * 0.02];
    history_Of_Purchase.push(receipt);
    localStorage.setItem("history_Of_Purchase", JSON.stringify(history_Of_Purchase));
    Show_history_Of_Purchase();
};


//delete an ordered product
const deleteOrderedProduct = (orderedProductID) => {

    const currentOrder = JSON.parse(localStorage.getItem("currentOrder")) || [];
    const index = currentOrder.findIndex(orderedProduct => orderedProduct.id === orderedProductID);

    // If the product exists, remove it from the array
    if (index !== -1) {
        currentOrder.splice(index, 1);
    }
    localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
    showCurrentOrder();
};



//Buy Button
const buyButton = () => {

    let currentOrder = JSON.parse(localStorage.getItem("currentOrder"));

    if (currentOrder.length === 0) {

        alert("Your Cart is Empty Bro");
        return;

    } else {

        let history_Of_Purchase = JSON.parse(localStorage.getItem("history_Of_Purchase"));
        let subtotal = 0;


        for( let item of currentOrder){
            subtotal += item.totalPrice;
        }

        const userID = prompt("Please enter your Identification Number: ");
        if (userID === null) {

            alert(`Purchase Cancelled`);

        } else {

            const User_name = prompt("Please enter your Name: ");

            if(User_name === null) {

                alert(`Purchase Cancelled`);

            } else {
                const now = new Date()

                const date = now.toLocaleDateString();
                const time = now.toLocaleTimeString();

                currentOrder.unshift(userID, User_name, subtotal, date, time);
            

                history_Of_Purchase.unshift(currentOrder);
        
                currentOrder = [];
        
                localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
                localStorage.setItem("history_Of_Purchase", JSON.stringify(history_Of_Purchase));
        
                
            
                showCurrentOrder();
                Show_history_Of_Purchase();
            
            
                console.log(history_Of_Purchase);   
            }
    }
    
}
}




//show history of purchase

const Show_history_Of_Purchase = () => {
    const history_Of_Purchase = JSON.parse(localStorage.getItem("history_Of_Purchase"));
    const parentDiv = document.getElementById('transactions');
    parentDiv.innerHTML = '';

    history_Of_Purchase.forEach((receipt, index) => {
        const risibo = document.createElement('div');
        risibo.classList.add('orderedProduct');
        risibo.innerHTML = `
            <div class="info">
                <div>
                <a id="close${index}" onclick="deleteHistory(${index})">
                    <img src="buttons/close_6318798.png"/>
                </a>
                </div>
                <h5>Purchased by: ${receipt[1]}</h5>
                <h5>ID: ${receipt[0]}</h5>
                <h5>Date Purchased: ${receipt[3]}</h5>
                <h5>Time Purchased: ${receipt[4]}</h5>
            </div>
            <table>
                <thead>
                    <tr>
                        <th><h5>Name</h5></th>
                        <th><h5>Size</h5></th>
                        <th><h5>Quantity</h5></th>
                        <th><h5>Price</h5></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        const tableBody = risibo.querySelector('tbody');
        // Only loop through items, not including the last element (tax)
        const items = receipt.slice(5, receipt.length - 1);
        for (let item of items) {
            const sizeCell = item.hasOwnProperty("size") ? `<td><h5>${item.size}</h5></td>` : `<td><h5>N/A</h5></td>`;
            const rowHTML = `
                <tr>
                    <td><h5>${item.name}</h5></td>
                    ${sizeCell}
                    <td class="center"><h5>${parseFloat(item.quantity).toFixed(2)}</h5></td>
                    <td class="center"><h5>${parseFloat(item.totalPrice).toFixed(2)}</h5></td>
                </tr>
            `;
            tableBody.innerHTML += rowHTML;
        }
        // Calculate and show tax (2% of subtotal)
        const subtotalValue = parseFloat(receipt[2]);
        const taxValue = (subtotalValue * 0.02).toFixed(2);
        const subtotal = `
            <tr>
                <td></td>
                <td></td>
                <td><h5>TOTAL:</h5></td>
                <td><h5>${subtotalValue.toFixed(2)}</h5></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><h5>TAX (2%):</h5></td>
                <td><h5>${taxValue}</h5></td>
            </tr>
        `;
        tableBody.innerHTML += subtotal;
        parentDiv.appendChild(risibo);
    });
};


const deleteHistory = (index) => {
    let history_Of_Purchase = JSON.parse(localStorage.getItem("history_Of_Purchase")) || [];
    if (index >= 0 && index < history_Of_Purchase.length) {
        history_Of_Purchase.splice(index, 1);
        localStorage.setItem("history_Of_Purchase", JSON.stringify(history_Of_Purchase));
        Show_history_Of_Purchase();
    } else {
        console.error("Invalid index for deletion.");
    }
    Show_history_Of_Purchase();
};

























