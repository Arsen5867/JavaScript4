document.querySelector('#laptop').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var ram = document.querySelector('#ram').value;
    var year = document.querySelector('#year').value;
    var processors = document.querySelector('#processors').value;
    var numberOf = document.querySelector('#numberOf').value;
    var material = document.querySelector('#material').value;
    var weight = document.querySelector('#weight').value;
    var spans = document.getElementsByTagName('span');

    var laptop = new Laptop(title, ram, year, processors, numberOf, material, weight);
    var viewLaptop = new ViewLaptop();

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
});