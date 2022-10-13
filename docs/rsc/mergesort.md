layout: page
title: "Sortowanie przez scalanie"
permalink: /mergesort

## Sortowanie przez scalanie

1. Opracowany przez Johna von Neumana

## Algorytm
* Podstawowym procesem tego algorytmu jest scalanie dwóch połówek tablicy w jedną posortowaną tablicę. Jednak obie połówki muszą już być posortowane, co można zapewnić przez scalanie dwóch posortowanych połówek tych połówek. Ten proces dzielenia tablicy na połówki jest przerywany w momencie, gdy tablica zawiera mniej niż dwa elementy.

## Zalety:
1. prosty
2. stabilny


## Wady:
1. Wymaga alokacji pamięci, co przy dużych tablicach może być bardzo dużą wadą.