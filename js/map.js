ymaps.ready(init);
        function init() {
            // Первая карта (Москва, ул. Бутлерова, дом 17)
            var myMap1 = new ymaps.Map("map", {
                center: [55.634, 37.482], 
                zoom: 16,
                controls: ['zoomControl', 'typeSelector']
            });
            var myPlacemark1 = new ymaps.Placemark([55.634, 37.482], {
                hintContent: 'Здесь мы находимся!',
                balloonContent: 'Здесь находится офис: 117342, г. Москва, ул. Бутлерова, дом 17, БЦ Neo Geo, 5 этаж, офис 5082'
            }, {
                preset: 'islands#redIcon'
            });
            myMap1.geoObjects.add(myPlacemark1);
            
            // Третья карта (Казань, ул. Адмиралтейская, дом 3)
            var myMap3 = new ymaps.Map("map3", {
                center: [55.795, 49.106], 
                zoom: 16,
                controls: ['zoomControl', 'typeSelector']
            });
            var myPlacemark3 = new ymaps.Placemark([55.795, 49.106], {
                hintContent: 'Здесь мы находимся!',
                balloonContent: 'Здесь находится офис: 420030, г. Казань, ул. Адмиралтейская, дом 3, корпус 4, офис 12'
            }, {
                preset: 'islands#redIcon'
            });
            myMap3.geoObjects.add(myPlacemark3);
        }