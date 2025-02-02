window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.nav-bar ul').style.backgroundColor = '#333'; 
  } else {
    document.querySelector('.nav-bar ul').style.backgroundColor = '#24232346'; 
  }
}

document.getElementById("my-svg").addEventListener("click", function() {
  var currentColor = this.style.fill;
  if (currentColor === "white") {
    this.style.fill = "orange";
  } else {
    this.style.fill = "white";
  }
});

function displayMenuItems() {
  let container = document.getElementById("menu-container");
  container.innerHTML = ""; // Clear previous content

  items.forEach((item) => {
      let itemHTML = `
          <div class="menu-item">
              <img src="${item.image}" alt="${item.item_name}">
              <h2>${item.item_name}</h2>
              <p>Price: ₹${item.original_price}</p>
              <p>⭐ ${item.rating.stars} (${item.rating.count} reviews)</p>
              <button class="order-btn">Order Now</button>
          </div>
      `;
      container.innerHTML += itemHTML;
  });
}
