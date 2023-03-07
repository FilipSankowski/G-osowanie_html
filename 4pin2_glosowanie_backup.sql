-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 07 Mar 2023, 12:42
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `4pin2_glosowanie`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `glosujacy`
--

CREATE TABLE `glosujacy` (
  `id` int(3) NOT NULL,
  `imie` varchar(20) NOT NULL,
  `nazwisko` varchar(30) NOT NULL,
  `id_kandydata` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kandydaci`
--

CREATE TABLE `kandydaci` (
  `id` int(3) NOT NULL,
  `imie` varchar(20) NOT NULL,
  `nazwisko` varchar(30) NOT NULL,
  `partia` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `kandydaci`
--

INSERT INTO `kandydaci` (`id`, `imie`, `nazwisko`, `partia`) VALUES
(1, 'Jan', 'Kowalski', 'SiP'),
(2, 'Barbara', 'Nowak', 'SiP'),
(3, 'Jerzy', 'Szczurek', 'OP'),
(4, 'Jacek', 'Jeż', 'SiP'),
(5, 'Anna', 'Bosko', 'partia Oddzielnie'),
(6, 'Jan', 'Białek', 'OP'),
(7, 'Joanna', 'Las', 'OP'),
(8, 'Grzegorz', 'Dołek', 'SiP'),
(9, 'Hanna', 'Supeł', 'partia Oddzielnie'),
(10, 'Ignacy', 'Kreska', 'partia Oddzielnie');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `glosujacy`
--
ALTER TABLE `glosujacy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kandydata` (`id_kandydata`);

--
-- Indeksy dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `glosujacy`
--
ALTER TABLE `glosujacy`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `glosujacy`
--
ALTER TABLE `glosujacy`
  ADD CONSTRAINT `glosujacy_ibfk_1` FOREIGN KEY (`id_kandydata`) REFERENCES `kandydaci` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
