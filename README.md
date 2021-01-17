# CodersCamp 2020 - Projekt JavaScript

## I. O Projekcie
Zrealizowany projekt to aplikacja webowa działająca w przeglądarce, bez potrzeby instalacji. Jest to quiz sprawdzający znajomość uniwersum Gwiezdnych Wojen. Projekt jest tworzony w ramach udziału w CodersCamp 2020, wykorzystujący takie technologie jak HTML, CSS oraz JavaScript. Działanie projektu zostało pokryte testami jednostkowymi.

* DEMO Projektu
* [Repozytorium zadania](https://github.com/CodersCamp2020/CodersCamp2020.Project.JavaScript.StarWarsQuiz)

Zespół, którego mentorem był Krystian wspólnie pracował pisaniem kodu, natomiast w ramach dodatkowych odpowiedzialności zajmowaliśmy się także sprawdzaniem poprawności i stylu kodu, a także wewnętrznym zarządzaniem projektem. Spis dodatkowych ról:
* Justyna (Code Review)
* Julia (Code Review)
* Robert (Development Manager)
* Filip (Product Owner)
* Ireneusz (Code Review)
* Konrad (Code Review)

## II. Repozytorium 
W skład repozytorium projektu wchodzą:
* `index.html`, `index.js` - pliki wyjściowe projektu
* folder `src` - zawiera pliki z funkcjonalnościami na stronie, podzielony na podfoldery:
  * `src/app/apiconnection` - zawiera pliki z łączeniem się z zewnętrznym API
  * `src/app/logic` - zawiera pliki z kodem logiki quizu
  * `src/app/uicomponents` - zawiera pliki komponentów (zwracają `HTMLElement`) oraz style CSS.
* folder `test` - zawiera pliki z testami jednostkowymi dla funkcjonalności na stronie
* folder `styles` - zawiera pliki z głównymi stylami strony głównej
* folder `static` - zawiera pliki graficzne wykorzystywane na stronie oraz przez StarWars API


## III. Zawartość projektu
### Tryby gry
Na stronie głównej można wybrać jeden z trzech trybów quizu: *People*, *Vehicles*, *Spaceships*. W zależności od trybu zmienia się opis, zdjęcie i same pytania wykorzystywane w quizie, zwiazane z wybranym trybem. Po rozpoczęciu gry (kliknięciu buttona *Play the Game*) rozpoczyna się odliczanie czasu. Gracz musi odpowiedzieć poprawnie w ciągu 2 minut na jak najwięcej pytań. Po zaznaczeniu odpowiedzi przez sekundę pojawia się informacja (kolor buttonu) czy odpowiedź, którą gracz wybrał była poprawna (button na zielono) czy niepoprawna (button na czerwono). Po skończonym czasie wynik uzyskany przez gracza zapisywany jest do rankingu w *LocalStorage* danej przeglądarki, do którego można dostać się ze strony głównej. 

### Generowanie pytań
Zadaniem gracza jest rozpoznanie, co lub kogo przedstawia zdjęcie i wybranie poprawnej odpowiedzi. Pytania do quizu generowane są w zależności od wybranego trybu gry. Na jego podstawie pobierany jest zasób ze StarWars API (https://swapi.co/api/), wybierane są losowo cztery odpowiedzi z czego jedna jest poprawna (dla niej wybierane jest również zdjęcie, wyświetlane po lewej stronie). 
Poprawność odpowiedzi sprawdzana jest na podstawie algorytmu opisanego [TUTAJ](https://medium.com/@sumn2u/string-similarity-comparision-in-js-with-examples-4bae35f13968).

### Odliczanie czasu
W momencie wystartowania quizu na dole strony pojawia się informacja o czasie, jaki pozostał graczowi na odpowiedzi. Czas wyświetlany jest w formie tekstowej oraz w formie graficznej - miecz świetlny, który zmniejsza się wraz z upływem czasu. 

### Inni gracze
W trakcie rozpoczęcia gry gracz konkuruje również z komputerem. Może zdecydować o trybie gry z komputerem, tj. komputer może wybierać odpowiedzi losowo lub z wykorzystaniem rozpoznawania obrazu (Google Vision API).

### Google Vision API
W celu uzyskania odpowiedzi do Google Vision API wysyłany jest obrazek w postaci stringa base64. Algorytm zwraca jedną odpowiedź najbardziej odnoszącą się do przekazanego zdjęcia (tryb `WEB_DETECTION`). Przekazana odpowiedź jest porównywana do poprawnej odpowiedzi na podstawie stworzonego algorytmu sprawdzania poprawności odpowiedzi.

### Elementy gry
Gracz przed rozpoczęciem gry w ustawieniach może wybrać jak odpowiedzi ma wybierać komputer (losowo czy przez rozpoznawanie obrazu - Google Vision API). Dodatkowo na stronie głównej jest możliwość sprawdzenia rankingu dla danego trybu gry, który jest przechowywany w *LocalStorage* przeglądarki.

### Komponenty 
W projekcie stworzono komponenty, które mogą być w łatwy sposób tworzone i dodawane do DOMu. Komponenty napisane w ten sposób są później łatwiejsze w użyciu, gdy interakcje użytkownika oraz upływający czas zmieniają to, co użytkownik widzi w przeglądarce.

### Testy jednostkowe
Każda funkcjonalność użyta w projekcie została przetestowana testami jednostkowymi. 

## IV. Wykorzystane technologie
* JavaScript
* HTML
* CSS (a także SASS)
* Star Wars API
* Google Vision API

## V. Użyte zagadnienia
W projekcie można znaleźć przykłady zastosowania wszystkich tych zagadnień: zmienne, operatory porównania, pętle, obiekty, atrybuty, warunki, funkcje, operatory logiczne, tablice, iteracja i/lub rekurencja, console, return, === vs ==, integracja z zewnętrznym REST API, interakcja z domem, odwoływanie się do elementów DOM z JavaScript, zmiana stylów z poziomu JSa, zmiana zawartości HTML z poziomu JSa, animacje, zewnętrzne biblioteki, async await i/lub Promise, funkcje callback, metody HTTP, pisanie testów jednostkowych.

## VI. Uruchomienie projektu i testów
### Uruchomienie projektu
Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:
* Zainstaluj zależności za pomocą komendy: `npm install`
* Wystartuj serwer developerski `npm run start:dev`
* Aplikacja będzie dostępna pod adresem `localhost:8765/index.html`

### Uruchomienie testów
Aby uruchomić testy aplikacji, wykonaj następujące kroki:
* Zainstaluj zależności za pomocą komendy: `npm install` (jeśli nie zrobiłeś już tego wcześniej).
* Uruchom testy, wykonując komendę: `npm run test`.