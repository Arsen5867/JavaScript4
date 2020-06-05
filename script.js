document.querySelector('#laptop').addEventListener('submit', function(event){
    let title = document.querySelector('#title').value;
    let ram = document.querySelector('#ram').value;
    let year = document.querySelector('#year').value;
    let processors = document.querySelector('#processors').value;
    let numberOf = document.querySelector('#numberOf').value;
    let material = document.querySelector('#material').value;
    let weight = document.querySelector('#weight').value;
    let spans = document.getElementsByTagName('span');

    let laptop = new Laptop(title, ram, year, processors, numberOf, material, weight);
    let viewLaptop = new ViewLaptop();

    if (title === '' || ram === '' || year === '' || processors === '' || numberOf === '' || material === '' || weight === '') {
        viewLaptop.getMessage('Ошибка! Введите все данные!', 'no_succes');
    } else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Ура! Добавили новый ноут!', 'succes');
        viewLaptop.clear();
    };
    event.preventDefault();

    function bookDelete() {
        for (let span of spans) {
            span.addEventListener('click', function () {
                span.parentElement.parentElement.remove();
                event.preventDefault();
            })
        }
    };
    bookDelete();

    let generalInformation = document.getElementById('generalInformation');

    generalInformation.addEventListener('click', function () {
        alert("Количество ядер: " + numberOf + " Материал корпуса: " + material + " Вес: " + weight)
    });
});