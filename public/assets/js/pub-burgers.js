// On submit add new burger
const submitBtn = document.getElementById('submit-btn');
const burgerName = document.getElementById('burger_name');
let burgerBtns = document.querySelectorAll('.burger-btn');

submitBtn.addEventListener('click', event => {
    event.preventDefault();

    const newBurger = { "burger_name": burgerName.value.trim() };

    fetch("/api/burger", { method: "POST", body: JSON.stringify(newBurger), headers: { 'Content-Type': 'application/json' } })
        .then(() => location.reload())
        .catch(console.error)
});

// If 'Eaten' move to 'Devoured'
burgerBtns.forEach((btn) => {
    btn.addEventListener('click', event => {
        const targetBtn = event.target.dataset;

        fetch("/api/burger", { method: "PUT", body: JSON.stringify(targetBtn), headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                location.reload();
            })
            .catch(console.error)
    });
});