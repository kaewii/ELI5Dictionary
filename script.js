


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




