
# Nfactorial-2024

# Ссылки на хостинг

- Ссылка на Backend -https://nfactorial-2024-project.onrender.com
- Ссылка на Frontend - https://tengrizeinaddin.vercell.app/

# Frontend

 фронтент обычны TengriNews где есть компонент Travel для того выполнить пагинацию ,потом главное меню  где выходит все новые новости и нажав на них
 переходите на компонент News1Component url = "/DetailNews" где находиться детальные информации этой новости которую вы нажали все базовые требования выполнены  

`1 lvl:`
- Спрева что бы достать данные я парсил сайт, потом помещал в json С помощью FastApi доставал данные с Backend. 
- Пользователь может смотреть детальную новость нажав на картинку и перейти или на загаловок на url "/DetailNews" на новую страницу .

`2 lvl:`
- Реализовал пагинацию
- Реализовал фильтрацию по тегам
- нету 
- Первыми отоброжаются последние новости 

`3 lvl:`
- Написал обновляющийся парсер с помощью FastAPI, BeatifulSoup4, async functions.

# Backend

- два парсера для главной страницы и для детально стрницы  'service.py' , 'service_detail.py' при входе на дитальную страницу код панимает какой url данные ему парсит и отоброжает дитальную информацию которые мы нажали 
- `main.py` Главный файл бэкенда
- `router.py` Роутинг бэкенда
- `/allpages` это все доступные страницы с парсера
- `/{page}` итерация по страницам


# Author
`Зургамбаев Зейнаддин Асемжанович`
bax.2002@mail.ru
https://www.youtube.com/watch?v=uWPLW7lKYT0&ab_channel=%D1%85%D0%BB%D0%B0%D0%BC%D1%82%D1%8B%D1%80%D0%BD%D0%B5%D1%82%D0%B0