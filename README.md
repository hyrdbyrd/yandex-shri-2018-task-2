# Для запуска
```
npm install
npm start
```
Запуститься сервер на 9000 порту
## В проекте использовалось
### Webpack
Для сборки проекта
#### Список loaderов:
1. babel-loader
2. style-loader
3. css-loader
4. postcss-loader
5. file-loader
### PostCSS
Для удобства написания css
#### В PostCSS использовалось:
1. sugarss (parser)
2. postcss-import
3. autoprefixer
4. precss
5. assets
6. preset-env
### Node.js
Для сервера и сборки
#### Список используемого
1. pug
2. webpack
3. webpack-dev-server
## Компоненты, которые можно было отделить
### Roller, Filter
Все эти компоненты, написаны на js, спецификации 2016 года.
### *.sss
Постарался выделить блоки, в отдельные сущности, и вся стилизация была выделена в отельные файлы.