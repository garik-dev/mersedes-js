const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')



btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btns.forEach((btnItem) => {
                btnItem.classList.remove('feature__link_active')
            }) //перебераем все кнопки и активный класс

        btnItem.classList.add('feature__link_active') //добавляем активный класс для кликнутой кнопки

        lists.forEach((listItem) => {
                listItem.classList.add('hidden')
            }) //перебераем список и присваиваем класс hidden

        lists[index].classList.remove('hidden') //элементу index удаляем класс hidden

    })
})