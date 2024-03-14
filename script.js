$(document).ready(function(){
    $('#searchInput').on('input', function() {
        var value = $(this).val().toLowerCase();
        // Iterate through each list item
        $(".wordList li").each(function() {
            // Get the text within the <strong> tag of the current list item
            var textInBold = $(this).find("strong").text().toLowerCase();
            // Check if the text in bold exactly matches the search value
            var isVisible = textInBold.indexOf(value) === 0 && textInBold.length === value.length;
            // Toggle the visibility of the list item based on the match
            $(this).toggle(isVisible);
        });
    });
});


$(document).ready(function() {
    var headerHeight = $('.site-header').outerHeight(); // Get the header height

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= headerHeight) {
            $('#main-nav').css('top', '0'); // Navbar moves to the top
        } else {
            $('#main-nav').css('top', headerHeight - scroll); // Navbar moves back down
        }
    });
});




















$(document).ready(function(){
    $('.star').click(function() {
        var $this = $(this);
        var definition = $this.next().text() + $this.parent().text();
        if ($this.text() === '☆') {
            $this.text('★');
            addToFavorites(definition);
        } else {
            $this.text('☆');
            removeFromFavorites(definition);
        }
    });

    function addToFavorites(definition) {
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(definition);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    function removeFromFavorites(definition) {
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        var index = favorites.indexOf(definition);
        if (index > -1) {
            favorites.splice(index, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
});






















// Example function to toggle favorite status
function toggleFavorite(word, definition) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    if (favorites[word]) {
        delete favorites[word]; // Unfavorite
    } else {
        favorites[word] = definition; // Favorite
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateStarStatus(word);
}

// Example function to update the star status based on favorite state
function updateStarStatus(word) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    let starElement = document.querySelector(`[data-word="${word}"] .star`);
    if (favorites[word]) {
        starElement.textContent = '★'; // Filled star
    } else {
        starElement.textContent = '☆'; // Unfilled star
    }
}

// Call updateStarStatus for each word when the page loads to ensure correct star states
document.querySelectorAll('.definition').forEach(element => {
    let word = element.dataset.word;
    updateStarStatus(word);
});


<script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
    <script src="https://mediafiles.botpress.cloud/0eafaf5a-5cc6-4b02-8ae4-9ba356f00850/webchat/config.js" defer></script>






