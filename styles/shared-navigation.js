// Sidebar toggle functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
}

// Add keyboard support to reset cards
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Reset all flipped cards when pressing Escape
        const flippedCards = document.querySelectorAll('.flip-card.flipped');
        flippedCards.forEach(card => card.classList.remove('flipped'));
    }
});

// Hover functionality for all screen sizes
document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        let hoverTimeout;
        
        card.addEventListener('mouseenter', function() {
            hoverTimeout = setTimeout(() => {
                this.classList.add('flipped');
            }, 300); // Reduced delay for better responsiveness
        });
        
        card.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            this.classList.remove('flipped');
        });
    });
});

// Set active navigation item based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    
    // Remove active class from all items
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to current page
    const currentNavItem = document.querySelector(`[href="${currentPage}"]`) || 
                          document.querySelector(`[href="index.html"]`);
    if (currentNavItem) {
        currentNavItem.classList.add('active');
        console.log('Active navigation set for:', currentPage);
    }
}

// Run when DOM is loaded and also after a short delay to ensure everything is ready
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
    // Run again after a short delay to ensure navigation is fully loaded
    setTimeout(setActiveNavigation, 100);
}); 