const cities = ["Москва", "Будапешт", "Найроби", "Пекин", "Нью-Йорк"];
const temperatures = [];

for (i = 0; i < cities.length; i += 1) {
    let input = prompt(`Введите температуру в городе ` + cities[i]);
    let inputTemp = parseInt(input);
    temperatures.push(inputTemp);
}

const container = document.getElementById("temp-container");
const cityContainer = document.createElement('ul');
container.append(cityContainer);

for (let i = 0; i < cities.length; i += 1) {
    const cityItem = document.createElement('li');
    cityItem.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]}°C`;
    cityContainer.append(cityItem);
}


temperatures.sort(function (a, b) {
    return a - b;
})
const maxContainer = document.createElement('p');
const minContainer = document.createElement('p');
maxContainer.textContent = `Максимальная температура: ${temperatures[4]}°C`;
minContainer.textContent = `Минимальная температура: ${temperatures[0]}°C`;
container.append(maxContainer);
container.append(minContainer);

