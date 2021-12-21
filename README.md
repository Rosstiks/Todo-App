# Testing Todo App from React

<h2><a href='https://rosstiks.github.io/Todo-App/'>Ссылка</a> на Pages(текущее состояние)</h2>
<h2><a href='https://todo-rosstiks.vercel.app/'>Ссылка</a> на Vercel(текущее состояние)</h2>

<h2>v2.2.9.1H</h2>
<h3>Changes:</h3>
<ul>
    <li>Fix: Основано на v2.2.9.1 - классовые компоненты переписаны на функциональные с Hooks</li>
</ul>
<h2>v2.2.9.1</h2>
<h3>Changes:</h3>
<ul>
    <li>Fix: Секундомер исправлен на таймер</li>
    <li>Fix: Данные переехали в приложение из localStorage обратно</li>
    <li>Fix: Рефакторинг приложения - отмена ежесекундного обновления всего приложения</li>
    <li>Fix: Добавлена смена цвета значения таймера по его истечению</li>
    <li>Fix: Папка .idea убрана из продакшн сборки</li>
    <li>Add: Добавлена простейшая валидация полей создания новой todo: имя - обязательное поле, время - числовое поле (0-59)</li>
</ul>
<h2>v2.2.9</h2>
<h3>Changes:</h3>
<ul>
    <li>Add: Добавлен таймер задач</li>
    <li>Fix: Данные сохранются в storage - корректная работа с несколькими вкладками браузера с синхронными изменениями</li>
    <li>Fix: Рефакторинг компонентов</li>
</ul>
<h2>v1.4.15.1</h2>
<h3>Changes:</h3>
<ul>
    <li>Fix: Исправлен баг с неккоректным редактированием завершённых задач</li>
    <li>Fix: Проброс классов реализован через библиотеку classNames</li>
</ul>
<h2>v1.4.15</h2>
<h3>Changes:</h3>
<ul>
    <li>Добавлены плагины для форматирования кода по конфигу airbnb</li>
    <li>Добавлены скрипты lint, lint:fix, format</li>
    <li>Настроены husky и lint-staged</li>
    <li>Добавлен хостинг на Vercel</li>
</ul>
<h2>v1.3.19</h2>
<h3>Changes:</h3>
<ul>
    <li><b>Fix:</b>дата в todo с секундами</li>
    <li>Ко всем компонентам добавлены defaultProps и propTypes</li>
</ul>
<h2>v1.3.14</h2>
<h3>Changes:</h3>
<ul>
    <li>Реализовано добавление новых todo</li>
    <li>Реализована фильтрация todo</li>
    <li>Реализован функционал кнопки 'Clear competed'</li>
    <li>Реализован счётчик незавершённых todo</li>
</ul>
<h2>v1.3.9</h2>
<h3>Changes:</h3>
<ul>
    <li>Data перенесена в state корневого компонента приложения</li>
    <li>Реализован функционал кнопок удаления и редактирования todo</li>
    <li>Реализована смена статуса todo (done, editing), без возможности обратной смены</li>
</ul>
<h2>v1.2.13</h2>
<h3>Changes:</h3>
<ul>
    <li>Создан скелет приложения, интерактива нет</li>
    <li>Для наглядности подцепил исходные стили - в дальнейшем раскидаю по блокам</li>
    <li>Список todo статичен</li>
    <li>Не до конца понятны остались моменты с раскидыванием некоторым классов - 
    возможно в дальнейшем, когда будет прописана логика станет яснее</li>
    <li>Не до конца понятен остался момент в задании по поводу даты todo - сделал
    временно через свойство в тестовом массиве. В дальнейшем буду цеплять из события</li>
</ul>
