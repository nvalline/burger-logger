// On submit add new burger
$('#submit-btn').on('click', event => {
    event.preventDefault();

    const newBurger = { "burger_name": $('#burger_name').val().trim() };

    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    })
        .then(() => {
            location.reload();
        })
});

// If 'Eaten' move to 'Devoured'
$('.burger-btn').on('click', event => {
    const targetBtn = event.target.dataset;

    $.ajax("/api/burger", {
        type: "PUT",
        data: targetBtn
    })
        .then(() => {
            location.reload();
        })
});