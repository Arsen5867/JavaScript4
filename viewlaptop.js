function ViewLaptop(){

};

ViewLaptop.prototype.addLaptop = function(obj){
    let allList = document.querySelector('#list-laptops'); // контейнер в который добавим новый лаптоп
    let ulList = document.createElement('ul');

    ulList.innerHTML = '<li>' + obj.title + '</li>' +
    '<li>' + obj.ram + '</li>' +
    '<li>' + obj.year + '</li>' +
    '<li>' + obj.processors + '</li>' +
    '<li><span><img src="./SOS.png" class="musarka"></span></li>' +
    '<li><button id="generalInformation">Общая информация</button></li>'; // генерируем новые ul li
    allList.appendChild(ulList);
};


ViewLaptop.prototype.getMessage = function(message, nameCl){
    let block = document.querySelector('.container');
    let form = document.querySelector('#laptop');

    let divMessage = document.createElement('div');
    divMessage.className = nameCl;
    divMessage.innerHTML = message;

    block.insertBefore(divMessage, form);
};

ViewLaptop.prototype.clear = function(){  // очистка полей ввода после ввода информации
    document.querySelector('#title').value = '';
    document.querySelector('#ram').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#processors').value = '';
    document.querySelector('#numberOf').value = '';
    document.querySelector('#material').value = '';
    document.querySelector('#weight').value = '';
};