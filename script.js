let draggedId = null;
document.querySelectorAll('.item').forEach(item => {
    item.ondragstart = () => draggedId = item.id;
});
document.querySelectorAll('.basket').forEach(basket => {
    basket.ondragover = e => e.preventDefault();
    basket.ondrop = () => {
        const item = document.getElementById(draggedId);
        if (item.dataset.color === basket.dataset.color) {
            basket.querySelector('.basket-content').append(item);
            item.draggable = false;
            if (document.getElementById('items-container').children.length === 0) {
                const heading = document.getElementById('status-heading');
                heading.textContent = 'Усі елементи відсортовано';
                heading.classList.add('success');
            }
        } else {
            alert('Цей елемент не підходить до цього кошика');
        }
    };
});