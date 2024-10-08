window.addEventListener('load', function() { 
    const loadingPage = document.getElementById('loading-page'); 
    
    setTimeout(function() {
        loadingPage.classList.add('fade-out'); 

        setTimeout(function() { 
            document.body.classList.add('loaded'); 
            initSlider(); 
        }, 1000); 
    }, 1000); 
}); 
