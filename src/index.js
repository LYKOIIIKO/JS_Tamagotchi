// Создайте функцию-конструктор или отдельный простой объект "Тамагочи" с минимальным набором функций:
// - включение, 
// -выключение, 
// -вывод общей информации о состоянии (имя, дата рождения, здоровье по 5-бальной шкале, сытость по 5 шкале, сон в часах от 0 до 8), 
// -покормить, 
// -спать. 
// При включении "друга" запрашивается имя, автоматически добавляется дата рождения, и все показатели состояния устанавливаются в максимальные значения. Каждую минуту (или 1 час, как вы захотите), показатель сытости уменьшается на одну единицу. Каждый раз, когда сытость доходит до 1 и меньше, то уменьшается здоровье на 1 единицу. Если "друг" не спал больше 6 часов, то каждый последующий час здоровье уменьшается на 1 единицу. Чтобы восстановить здоровье, нужно быть сытым и хорошо спать: при каждом вызове метода "покормить" или "спать" соотв. параметры увеличиваются на 1 единицу. Каждый раз, когда параметры сон и сытость приходят к значению 5, то здоровье увеличивается на 1 единицу, но не может превышать максимального значения. По вашему желанию, функции тамагочи могут быть улучшены или добавлены новые. Проявите фантазию!

// Сделать:
// -графический интерфейс с кнопочками, экраном, с таймингом
// -прикольный персонаж
// -добавить иконок, картинок
// -уведомления, алерты добавить
// -спрашивать у пользователя что-то

//СРОК 31.01.2025!!!!!!!!!!!!!!!!!!!!

window.addEventListener('load', () => {
	let ui = new AppUI();
	core = new AppCore();
})