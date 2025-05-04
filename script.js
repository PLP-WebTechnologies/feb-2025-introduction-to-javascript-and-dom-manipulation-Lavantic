// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ---------- CHANGE TEXT CONTENT SECTION ----------
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const resetTextBtn = document.getElementById('reset-text-btn');
    
    // Store original text for reset
    const originalText = dynamicText.textContent;
    
    // Change text when button is clicked
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = 'The text has been changed dynamically using JavaScript!';
    });
    
    // Reset text to original
    resetTextBtn.addEventListener('click', function() {
        dynamicText.textContent = originalText;
    });
    
    // ---------- MODIFY CSS STYLES SECTION ----------
    const styleText = document.getElementById('style-text');
    const toggleStyleBtn = document.getElementById('toggle-style-btn');
    const changeBgBtn = document.getElementById('change-bg-btn');
    
    // Toggle highlighted class
    toggleStyleBtn.addEventListener('click', function() {
        styleText.classList.toggle('highlighted');
    });
    
    // Change background color
    changeBgBtn.addEventListener('click', function() {
        // Generate a random color
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });
    
    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // ---------- ADD/REMOVE ELEMENTS SECTION ----------
    const itemsContainer = document.getElementById('items-container');
    const addItemBtn = document.getElementById('add-item-btn');
    const removeItemBtn = document.getElementById('remove-item-btn');
    
    // Counter for item numbers
    let itemCount = 0;
    
    // Add a new item
    addItemBtn.addEventListener('click', function() {
        itemCount++;
        
        // Create a new element
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.textContent = `Item ${itemCount}`;
        
        // Add click event to the new item
        newItem.addEventListener('click', function() {
            this.classList.toggle('highlighted');
        });
        
        // Add the new element to the container
        itemsContainer.appendChild(newItem);
    });
    
    // Remove the last item
    removeItemBtn.addEventListener('click', function() {
        if (itemCount > 0) {
            const lastItem = itemsContainer.lastElementChild;
            itemsContainer.removeChild(lastItem);
            itemCount--;
        } else {
            alert('No items to remove!');
        }
    });
    
    // ---------- ADDITIONAL INTERACTIVITY ----------
    // Change the main title when clicked
    const mainTitle = document.getElementById('main-title');
    mainTitle.addEventListener('click', function() {
        this.textContent = 'You Clicked the Title!';
        
        // Reset after 2 seconds
        setTimeout(() => {
            this.textContent = 'JavaScript DOM Manipulation';
        }, 2000);
    });
});// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ---------- CHANGE TEXT CONTENT SECTION ----------
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const resetTextBtn = document.getElementById('reset-text-btn');
    
    // Store original text for reset
    const originalText = dynamicText.textContent;
    
    // Change text when button is clicked
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = 'The text has been changed dynamically using JavaScript!';
    });
    
    // Reset text to original
    resetTextBtn.addEventListener('click', function() {
        dynamicText.textContent = originalText;
    });
    
    // ---------- MODIFY CSS STYLES SECTION ----------
    const styleText = document.getElementById('style-text');
    const toggleStyleBtn = document.getElementById('toggle-style-btn');
    const changeBgBtn = document.getElementById('change-bg-btn');
    
    // Toggle highlighted class
    toggleStyleBtn.addEventListener('click', function() {
        styleText.classList.toggle('highlighted');
    });
    
    // Change background color
    changeBgBtn.addEventListener('click', function() {
        // Generate a random color
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });
    
    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // ---------- ADD/REMOVE ELEMENTS SECTION ----------
    const itemsContainer = document.getElementById('items-container');
    const addItemBtn = document.getElementById('add-item-btn');
    const removeItemBtn = document.getElementById('remove-item-btn');
    
    // Counter for item numbers
    let itemCount = 0;
    
    // Add a new item
    addItemBtn.addEventListener('click', function() {
        itemCount++;
        
        // Create a new element
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.textContent = `Item ${itemCount}`;
        
        // Add click event to the new item
        newItem.addEventListener('click', function() {
            this.classList.toggle('highlighted');
        });
        
        // Add the new element to the container
        itemsContainer.appendChild(newItem);
    });
    
    // Remove the last item
    removeItemBtn.addEventListener('click', function() {
        if (itemCount > 0) {
            const lastItem = itemsContainer.lastElementChild;
            itemsContainer.removeChild(lastItem);
            itemCount--;
        } else {
            alert('No items to remove!');
        }
    });
    
    // ---------- ADDITIONAL INTERACTIVITY ----------
    // Change the main title when clicked
    const mainTitle = document.getElementById('main-title');
    mainTitle.addEventListener('click', function() {
        this.textContent = 'You Clicked the Title!';
        
        // Reset after 2 seconds
        setTimeout(() => {
            this.textContent = 'JavaScript DOM Manipulation';
        }, 2000);
    });
});