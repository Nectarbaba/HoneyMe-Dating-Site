const names = [
    "Sarah, 28",
    "Janet, 21",
    "Emily, 25",
    "Olivia, 30",
    "Sophia, 27",
    "Jessica, 26",
    "Mia, 24",
    "Chloe, 29",
    "Ava, 23",
    "Isabella, 31",
    "Grace, 22",
    "Hannah, 27",
    "Lily, 25",
    "Ella, 28",
    "Zoe, 26",
    "Madison, 24",
    "Charlotte, 29",
    "Amelia, 30",
    "Abigail, 23",
    "Samantha, 32"
];

const bios = [
    "Adventure seeker, coffee lover, and hiking enthusiast. Looking for someone to share adventures with! 🌟",
    "Bookworm, foodie, and aspiring world traveler. Let’s explore together! 🌟",
    "Dog lover, music fan, and brunch enthusiast. Swipe right if you love pancakes! 🌟",
    "Fitness junkie, movie buff, and lover of sunsets. Let’s make memories! 🌟",
    "Tech geek, gamer, and sushi addict. Looking for my player 2! 🌟",
    "Nature lover, yoga enthusiast, and passionate about photography. Let's capture moments together! 📸",
    "Art admirer, museum goer, and lover of deep conversations. Let's get inspired! 🎨",
    "Baker, cat mom, and lover of cozy nights in. If you like cookies, we’ll get along! 🍪",
    "Cyclist, traveler, and always up for a road trip. Where to next? 🚗",
    "Plant parent, coffee shop regular, and indie music fan. Let's share playlists! 🎶",
    "Runner, foodie, and lover of spontaneous adventures. Ready for a challenge? 🏃‍♀️",
    "Wine enthusiast, board game lover, and trivia night champ. Let's play! 🍷",
    "Beach bum, volleyball player, and smoothie bowl addict. Sun, sand, and smiles! 🏖️",
    "Aspiring chef, podcast listener, and lover of rainy days. Let's cook up something special! 🍲",
    "Dancer, festival goer, and always chasing good vibes. Join the fun! 💃"
];

const locations = [
    "New York City, 2 miles away",
    "Brooklyn, 5 miles away",
    "Queens, 3 miles away",
    "Manhattan, 1 mile away",
    "Jersey City, 4 miles away",
    "Bronx, 6 miles away",
    "Staten Island, 8 miles away",
    "Hoboken, 7 miles away",
    "Harlem, 2 miles away",
    "Williamsburg, 4 miles away",
    "Long Island City, 5 miles away",
    "Astoria, 6 miles away",
    "Chelsea, 1 mile away",
    "SoHo, 2 miles away",
    "Upper East Side, 3 miles away",
    "Upper West Side, 3 miles away",
    "Downtown Brooklyn, 5 miles away",
    "Flatbush, 7 miles away",
    "Park Slope, 6 miles away",
    "Fort Greene, 5 miles away"
];

const profileData = [
    {
        img: "https://images.unsplash.com/photo-1623602033959-5cafde8b8606?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1623601944046-c8fa0fc879bc?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1623601922193-9feb7f743b88?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1613424969431-62a604d2cf67?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1628363673819-2b329000a8ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1649479792996-9c55793fa700?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1696608080235-a5b343cd1421?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1606005722089-b2468eef31bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    
    {
        img: "https://images.unsplash.com/photo-1691315861154-d050327f8a8d?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1525449779982-c1d3495bca97?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1626904617311-a09446554c2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk5fHx8ZW58MHx8fHx8",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    {
        img: "https://images.unsplash.com/photo-1623114856932-e8230bfef9e0?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    },
    
    {
        img: "https://images.unsplash.com/photo-1617655345937-95fafc9013f3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        get name() { return names[Math.floor(Math.random() * names.length)]; },
        get location() { return locations[Math.floor(Math.random() * locations.length)]; },
        get bio() { return bios[Math.floor(Math.random() * bios.length)]; }
    }
];

function generateRandomProfile() {
    const randomIndex = Math.floor(Math.random() * profileData.length);
    const profile = profileData[randomIndex];

    // Select the first .card-container in the DOM
    const cardContainer = document.querySelector('.card-container');
    if (!cardContainer) return;

    // Update image
    const img = cardContainer.querySelector('.card-image img');
    if (img) {
        img.src = profile.img;
        img.alt = profile.name;
    }

    // Update name
    const nameElem = cardContainer.querySelector('.card-info h2');
    if (nameElem) nameElem.textContent = profile.name;

    // Update location
    const locationElem = cardContainer.querySelector('.card-info .location');
    if (locationElem) locationElem.textContent = profile.location;

    // Update bio
    const bioElem = cardContainer.querySelector('.card-info .bio');
    if (bioElem) bioElem.textContent = profile.bio;
}

// Optionally, initialize with a random profile on page load
window.addEventListener('DOMContentLoaded', generateRandomProfile);