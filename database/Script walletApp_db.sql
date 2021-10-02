CREATE DATABASE `walletApp_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `operations` (
  `idOperation` int NOT NULL AUTO_INCREMENT,
  `detail` varchar(255) NOT NULL,
  `ammount` float NOT NULL,
  `date` datetime NOT NULL,
  `type` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`idOperation`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
