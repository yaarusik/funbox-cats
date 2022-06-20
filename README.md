<h3> 1. Различия между хорошей вёрсткой и плохой с точки зрения: </h3> 
а) пользователя — непонятный и неудобный интерфейс‚ долгая загрузка сайта.  

б) менеджера проекта — не проработанная архитектура, отсутствует идея приложения,
верстка должна соответствовать ТЗ.

в) дизайнера — непродуманные размеры и расположения объектов на странице, слишком
много разных шрифтов, неуместная анимация, цветовая гамма режет глаза. |

г) верстальщика — верстка по методологии БЭМ, кроссбраузерность, адаптивность

д) клиентского программиста — чем проще код, тем лучше; сайт оптимизирован,
отсутствуют костыли, используются паттерны проектирования, используется фреймворк
для более высокой производительности работы.

е) серверного программиста — обеспечение корректной работы всех функций сайта,
удобный АРТ, разработка понятной логики приложения, поддерживается сетевая
безопасность, логи ошибок в доступном для пользователя формате.

    
<h3> 2. Основные особенности верстки крупных многостраничных сайтов, дизайн
которых может меняться в процессе реализации и поддержки. </h3>
  
  Использовать семантическую вёрстку. Придерживаться БЭМ. Давать осмысленные
названия переменным. Разбивать код на модули. Следить за архитектурой проекта. Избегать
повторения кода. Использовать компонентный подход. Использовать переменные для
свойств стилей. Использовать сборщики проектов (Wеbраck).

Для того, чтобы поддерживать единый стиль написания кода использовать: ESlint и prettier.

В своих проектах использовал следующие методологии: DRY, KISS, YAGNI. Следовал
принципам ООП(наследование, инкапсуляция и полиморфизм).
Использовал препроцессор Sass для стилизации проекта. А также вышеперечисленные
методы и технологии.

В качестве примера предоставляю проект, в котором разрабатывал игру в команде, где
использовался следующий стек технологий: TypeScript, Node.js, Express, Canvas, SASS, MongoDB, HTML, Webpack.

Клон игры Веселая ферма 2 - https://farm-frenzy.herokuapp.com/

<h3> 3. Основные особенности адаптивной или резиновой вёрстки приложений. </h3>
 Использование: 
  <li> относительных единиц измерений em, rem, %;</li>
  <li> медиазапросов; </li>
  <li> calc в css; </li>
  <li> display: flex или grid; </li>
  <li> атрибута srcset в теге img или контейнера для картинок (тег picture) Для работы с отзывчивыми картинками для разных разрешений экрана; </li>
  <li> autoprefixer для вставки браузерных префиксов; </li>
  <li> использование @supports для определения, поддерживаются ли стили в определенном браузере; </li>
  <li> использование подхода Progressive enhancement. </li>  


В качестве примера предоставляю проект Museum, где я верстал и разрабатывал одностраничный сайт, применяя вышеописанные технологии.
Используемый стек технологий: JavaScript, Sass, HTML, Slick Slider, Swiper Slider

Museum - https://yaarusik.github.io/museum/

<h3> 4. Инструменты помогающие мне экономить время в процессе
написания, проверки и отладки кода.</h3>  
 <li> vs code;</li>
 <li> сборщик проектов webpack;</li>
 <li> доска trello или github projects для отслеживания прогресса написания кода и работы в команде;</li>
 <li> eslint и prettier;</li>
 <li> консоль разработчика в браузере;</li>
 <li> pixel perfect для вёрстки;</li>
 <li> если используется React, то расширение для chrome React developer tools; </li>
 <li> typescript для написания более понятного и читаемого кода. А также для более выраженной архитектуры.</li> 

<h3>5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на
Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?
Сталкивались ли вы с подобными проблемами на практике? </h3>
Пару раз встречался с подобной проблемой. Открывал консоль разработчика и смотрел присутствуют ли вендорные префиксы для браузера в котором я сейчас нахожусь.

Ещё можно использовать BrowserStack - онлайн-утилита, которая предлагает пользователям проверять свой веб-сайт в различных браузерах.

<h3> 6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
интерактивные элементы при наведении мыши. Ваши действия? </h3>

Свяжусь с дизайнером и уточню, почему нет стилей для интерактивных элементов и попрошу доделать макет.
А также посмотрю, указаны ли эти требования в ТЗ.
Если же заказчик не указывал это в требованиях. То добавлю от себя базовый интерактив, опираясь на дизайн и цветовую гамму макета.

<h3> 7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите
несколько конкретных примеров (сайты, блоги и так далее). </h3>
    Смотрю обучающие видео на ютуб каналах: Владилен Минин, ULBI TV, IT-Kamasutra, Михаил Непомнящий. <br>
    Читаю статьи на хабре.<br>
    Смотрю различные способы решений той или иной проблемы на Stack Jverflow.<br>
    Решаю задачи на codewars.<br>
    Cайт learnjavascript.<br> 
    
<em>Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или что-то ещё? </em>  
Мне ближе направление JS. Нравится оживлять интерфейсы и придавать им логику.  

<em> Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам
интересны? </em>  

Сейчас изучаю английский, повышаю свой уровень с Pre-Intermediate до Intermediate.  
Помимо web-разработки увлекаюсь спортом(хожу в тренажерный зал) и музыкой(играю на гитаре).  
    
<h3> 8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы,
выполненные вами. </h3>

Меня зовут Руслан и я Junior Frontend разработчик.  

Мне было бы очень интересно поработать с вами в команде. Я как раз пишу на React и неплохо разбираюсь в вопросе.
В будущем хотел бы сделать серьезный вклад в разработку сложных web-решений.

Пару слов о себе. Пишу на JS/TS, React 1 год. Люблю командную работу, писать unit-тесты и разбираться в чужом коде.

Прошёл курсы от EPAM по JavaScript и React, где получил опыт работы в команде.

Мои последние pet проекты: 

1.Task Manager(Kanban board) - https://team-task-manager-app.netlify.app/
Над проектом работали три человека. Был руководителем команды.
Используемый стек технологий: React, TypeScript, Node.js, Redux(RTK), Material UI, styled-components, i18next, react-dnd, react-cookies.  

2. Клон игры Веселая ферма 2 - https://farm-frenzy.herokuapp.com/
Над проектом работали три человека. Был руководителем команды. Отвечал за архитектуру проекта и составление задач.
Используемый стек технологий: TypeScript, Node.js, Express, Canvas, SASS, MongoDB, HTML, Webpack
Статья о нашем проекте: https://clck.ru/hcuPn  

3. Momentum - https://yaarusik.github.io/RSShool-projects/momentum/
Приложение показывает время и имя пользователя. Фоновое изображение и приветствие меняются в зависимости от времени суток.
В приложении есть часы, слайдер изображений, виджеты погоды, аудиоплеер, блок цитата дня, настройки.
Используемый стек технологий: JavaScript, Sass, HTML, Webpack.  

4. Art Quiz - https://yaarusik.github.io/RSShool-projects/art-quiz/
Приложение - викторина на знание шедевров живописи и их авторов.
Используемый стек технологий: JavaScript, Sass, HTML, Webpack.  

Буду рад пообщаться. Telegram: @yaarusik.

