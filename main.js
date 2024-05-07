// Datos de ejemplo de los menús
const menus = {
    desayunos: [
        { name: "Desayuno Andino", description: "Quinua con leche, pan integral con palta, jugo de naranja natural.", price: "S/ 15.00", image: "img/desayuno1.jpg" },
        { name: "Desayuno Costeño", description: "Tamal, pan con chicharrón, café con leche.", price: "S/ 18.00", image: "img/desayuno2.jpg" },
        { name: "Desayuno Energético", description: "Batido de frutas con avena, tostadas con mermelada de aguaymanto, café negro.", price: "S/ 20.00", image: "img/desayuno3.jpg" },
        
    
    ],
    almuerzos: [
        { name: "Lomo Saltado", description: "Jugoso lomo de res salteado con cebolla, tomate, ají amarillo y salsa de soya, acompañado de arroz blanco y papas fritas.", price: "S/ 25.00", image: "img/almuerzo1.jpg" },
        { name: "Ceviche Mixto", description: "Fresco pescado y mariscos marinados en jugo de limón, ají limo, cebolla roja, acompañado de camote y choclo.", price: "S/ 30.00", image: "img/almuerzo2.jpg" },
        { name: "Ají de Gallina", description: "Delicioso guiso de gallina deshilachada en una salsa cremosa de ají amarillo, nueces y queso parmesano, servido con arroz blanco y papas.", price: "S/ 22.00", image: "img/almuerzo3.jpg" },
        { name: "Pisco Sour", description: "Refrescante cóctel a base de pisco, jugo de limón, ginger ale y un toque de amargo de angostura.", price: "S/ 15.00", image: "img/coctel1.jpg" },
        { name: "Chilcano", description: "Refrescante cóctel a base de pisco, jugo de limón, ginger ale y un toque de amargo de angostura.", price: "S/ 15.00", image: "img/colctel2.jpg" },
        { name: "Maracuyá Sour", description: "Delicioso cóctel a base de pisco, jugo de maracuyá, jarabe de goma, clara de huevo y un toque de amargo de angostura.", price: "S/ 15.00", image: "img/coctel3.jpg" },
    ],
    buffets: [
        { name: "Buffet Criollo", description: "Una variedad de platos tradicionales peruanos como anticuchos, causa limeña, ají de gallina, arroz con pollo, seco de cordero y postres como mazamorra morada y arroz con leche.", price: "S/ 60.00 (Por persona)", image: "img/buffet1.jpg" },
        { name: "Buffet Marino", description: "Una selección de los mejores platos de mariscos, incluyendo ceviche, tiradito, arroz con mariscos, parihuela y picante de mariscos.", price: "S/ 65.00 (Por persona)", image: "img/buffet2.jpg" },
        { name: "Buffet Andino", description: "Un surtido de platos de la sierra peruana, como cuy chactado, rocoto relleno, adobo arequipeño, quinua atamalada y postres como queso helado y chicha morada.", price: "S/ 60.00 (Por persona)", image: "img/buffet3.jpg" },
    ],
    cocteles: [
        { name: "Pisco Sour", description: "Refrescante cóctel a base de pisco, jugo de limón, ginger ale y un toque de amargo de angostura.", price: "S/ 15.00", image: "img/coctel1.jpg" },
        { name: "Chilcano", description: "Refrescante cóctel a base de pisco, jugo de limón, ginger ale y un toque de amargo de angostura.", price: "S/ 15.00", image: "img/colctel2.jpg" },
        { name: "Maracuyá Sour", description: "Delicioso cóctel a base de pisco, jugo de maracuyá, jarabe de goma, clara de huevo y un toque de amargo de angostura.", price: "S/ 15.00", image: "img/coctel3.jpg" },
    ]
};

// Función para cargar las cards de menús según la categoría seleccionada
function loadMenuCards(category) {
    const menuCards = document.querySelector(".menu-cards");
    menuCards.innerHTML = "";

    const menuItems = menus[category].slice(0, 3);

    menuItems.forEach(menu => {
        const card = document.createElement("div");
        card.classList.add("menu-card");
        card.innerHTML = `
            <img src="${menu.image}" alt="${menu.name}">
            <h3>${menu.name}</h3>
            <p>${menu.description}</p>
            <span class="price">${menu.price}</span>
        `;
        menuCards.appendChild(card);
    });
}

// Evento para cambiar la categoría de menús al hacer clic en la barra lateral
const sidebarItems = document.querySelectorAll(".menu-sidebar li");
sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
        sidebarItems.forEach(item => item.classList.remove("active"));
        item.classList.add("active");
        const category = item.dataset.category;
        loadMenuCards(category);
    });
});

// Evento para las flechas de navegación
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const menuCards = document.querySelector(".menu-cards");

prevBtn.addEventListener("click", () => {
    const activeCategory = document.querySelector(".menu-sidebar li.active").dataset.category;
    const menuItems = menus[activeCategory];
    const currentIndex = menuItems.findIndex(menu => menu.name === menuCards.firstElementChild.querySelector("h3").textContent);

    if (currentIndex > 0) {
        const prevItems = menuItems.slice(currentIndex - 3, currentIndex);
        menuCards.innerHTML = "";
        prevItems.forEach(menu => {
            const card = document.createElement("div");
            card.classList.add("menu-card");
            card.innerHTML = `
                <img src="${menu.image}" alt="${menu.name}">
                <h3>${menu.name}</h3>
                <p>${menu.description}</p>
                <span class="price">${menu.price}</span>
            `;
            menuCards.appendChild(card);
        });
    }
});

nextBtn.addEventListener("click", () => {
    const activeCategory = document.querySelector(".menu-sidebar li.active").dataset.category;
    const menuItems = menus[activeCategory];
    const currentIndex = menuItems.findIndex(menu => menu.name === menuCards.lastElementChild.querySelector("h3").textContent);

    if (currentIndex < menuItems.length - 1) {
        const nextItems = menuItems.slice(currentIndex + 1, currentIndex + 4);
        menuCards.innerHTML = "";
        nextItems.forEach(menu => {
            const card = document.createElement("div");
            card.classList.add("menu-card");
            card.innerHTML = `
                <img src="${menu.image}" alt="${menu.name}">
                <h3>${menu.name}</h3>
                <p>${menu.description}</p>
                <span class="price">${menu.price}</span>
            `;
            menuCards.appendChild(card);
        });
    }
});

// Cargar los menús de desayuno por defecto al cargar la página
loadMenuCards("desayunos");