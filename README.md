## Установка
* установите [NodeJS](https://nodejs.org/en/)
* установите ```gulp``` глобально: ```npm install --global gulp-cli```
* скачайте необходимые зависимости: ```npm install```
* чтобы начать работу, введите команду: ```gulp``` (режим разработки)
* чтобы собрать проект, введите команду ```gulp build --build``` (режим сборки)

## Файловая структура

```
тname-project
├── dist
├── gulp
├── src
│   ├── assets
│   │   ├── favicon
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   │   ├── components
│   │   │   └── index.js
│   │   ├── scss
│   │   │   ├── components
│   │   │   │   ├── form
│   │   │   │   ├── navigation
│   │   │   │   ├── shots
│   │   │   │   ├── video
│   │   │   │   └── *.scss
│   │   │   ├── core
│   │   │   ├── layout
│   │   │   │   ├── app
│   │   │   │   ├── footer
│   │   │   │   ├── header
│   │   │   │   └── sidebar
│   │   │   ├── mixins
│   │   │   ├── utilities
│   │   └── └── *.scss
│   ├── layouts
│   ├── partials
│   └── *.html
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md

```

* Корень папки:
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```gulpfile.js``` — настройки Gulp    
    
* Папка ```src``` - используется во время разработки:
    * шрифты: ```src/assets/fonts```
    * изображения: ```src/assets/img```
    * JS-файлы: ```src/assets/js```
    * SCSS-файлы: ```src/assets/scss```
    * страницы сайта: ```src/*.html```
    * HTML блоки сайта: ```src/partials```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```gulp```)
* Папка ```gulp``` - папка с Gulp-тасками

## Команды
* ```gulp``` - запуск сервера для разработки проекта
* ```gulp build --build``` - собрать проект с оптимизацией без запуска сервера