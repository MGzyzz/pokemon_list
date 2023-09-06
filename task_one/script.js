document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-item-btn')
    const notificationContainer = document.getElementById('notification-container')

    addButton.addEventListener('click', () => {
        const notification = document.createElement('div')
        notification.className = 'notification'
        notification.innerHTML = `Уведомление с текстом. <button class="close-btn">Закрыть</button>`
        notificationContainer.appendChild(notification)
        const closeBtn = notification.querySelector('.close-btn')
        closeBtn.addEventListener('click', () => {
            notification.remove()
        })
        setTimeout(() => {
            notification.remove()
        }, 5000)
        notification.style.display = 'block';

    })
})