-- sql
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `churchmembers` (
  `id` int(6) UNSIGNED NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `churchmembers` (`id`, `firstname`, `lastname`, `email`, `reg_date`) VALUES
(3, 'Mario', 'Luigi', 'Mario@example.com', '2024-01-16 00:41:05'),
(4, 'Gustavo', 'Dracula', 'Gustavo@apc.edu.ph', '2024-02-16 00:40:06'),
(5, 'Gustavo', 'Biden', 'Gustav@example.com', '2024-03-22 00:30:20'),
(6, 'Hokkaido', 'Manneh', 'Honkong@apc.edu.ph', '2024-04-22 00:35:01');


ALTER TABLE `churchmembers`
  ADD PRIMARY KEY (`id`);

REMENT for table `churchmembers`
--
ALTER TABLE `churchmembers`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

