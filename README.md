# PAP2025L-Z11

Opiekun: J Koperwas

Zespół:
- Mateusz Gajdowicz
- Tomasz Kurzela
- Paweł Marton
- Krzysztof Wojtaszko


# Temat

Aplikacja webowa do obsługi zamówień w restauracji

## Przypadki użycia

1. Kelner odbiera zamówienia od klientów i rejestruje je w aplikacji (np. z użyciem tabletu).
2. Kucharz widzi zamówienia i oznacza, którym się aktualnie zajmuje.
3. Kucharz oznacza, które zamówienie jest gotowe do odbioru
4. Kelner zanosi zamówienie i odbiera płatność od klienta, oznacza to w aplikacji
5. Menadżer dodaje i usuwa konta kelnerów i kucharzy

## Role i kompetencje
- kelner
    - przyjmowanie zamówień od klientów
    - odznaczanie zrealizowanych zamówień
    - modyfikacja statusu zamówienia i płatności
- kucharz
    - edycja aktualnie dostępnych dań (na podstawie składników w kuchni)
    - przyjmowanie zamówień do realizacji
    - zgłaszanie gotowych zamówień
- menadżer
    - edycja menu
    - zarządzanie kontami pracowników (kelnerów i kucharzy)

## Funkcjonalność

Osobne interfejsy dla każdej roli

Konta użytkowników, zarządzanie i logowanie

Baza danych przechowująca informacje o menu, zamówieniach, pracownikach

# Technologia

Backend: Java Spring
Frontend: React JS
Baza danych: PostreSQL

# Uruchamianie
Musicie miec zainstalowanego npm jesli nie macie

1. Wejdź na: https://nodejs.org/
2. pobierz LTS 

W IDE po pullu
1. cd Restaurant-reactApp
2. npm install
3. npm run dev

