let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('id');

$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    method: 'GET',
    success: function(data) {
        const pokemonDetailsContainer = $('#pokemonDetails');
        pokemonDetailsContainer.html(`
        <div class="container mt-5">
        <h1>Pokemon Details</h1>
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${data.sprites.front_default}" alt="${data.name}" class="card-img" style="max-width: 100%;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">Name: ${data.name}</h2>
                        <p class="card-text">Type: ${data.types.map(function(type) {
                            return type.type.name;
                        }).join(', ')}</p>
                        <p class="card-text">Height: ${data.height}</p>
                        <p class="card-text">Weight: ${data.weight}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `);
    },
    error: function(error) {
        console.error('Error loading Pokemon details:', error);
    }
});