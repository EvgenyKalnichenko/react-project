# Учебный проект на React
Стек используемых технологий:
* React
* TypeScript
* Webpack
* Scss

### Требования
* "npm": "8.5.0",
* "node": "17.4.0"

### Архитектура
Используется методологи [feature-sliced-design](https://feature-sliced.design/ru/) 

### Сборка проекта
[webpack](webpack.config.ts) настроен для production и development сборки.
Конфиг декомпозирован для максимально удобного расширения функционала.

* `npm run start` - запуск сервера разработки
* `npm run build:prod` - сборка в production
* `npm run build:dev` - сборка build версии в режиме разработчика

### Цветовая схема
Для настройки тем на сайте организована гибкая структура для расширения цветовых схем.
* [scss](src/app/styles/themes) - файлы для различных тем
* [useTheme](src/app/providers/ThemeProvider/lib/useTheme.ts) - хук для работы с темой сайта
