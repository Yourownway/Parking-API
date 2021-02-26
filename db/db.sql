CREATE DATABASE IF NOT EXISTS `ParkingAPI`;

USE `ParkingAPI`;

CREATE TABLE IF NOT EXISTS `Users` 
(
    `id` VARCHAR(36) PRIMARY KEY,
    `userEmail` VARCHAR(100),
    `userPassword` VARCHAR(255),
    `isAdmin` BOOLEAN DEFAULT false,
     `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `Places` 
(
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `isAvailable` BOOLEAN,
    `floor` INT,
    `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS `Bookings` 
(
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `userId` VARCHAR(36),
    `placeId` INT,
     FOREIGN KEY (userId) REFERENCES Users(id),
     FOREIGN KEY (placeId) REFERENCES Places(id),
    `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP
);

SET @ID_SEEDERS = UUID();

INSERT INTO `Users` (`id`, `userEmail`, `userPassword`,`isAdmin`) VALUES 
('a3de25ae-7867-11eb-b065-185e0f16b26e
','Jimmy@beevora.fr','azerty',true),(@ID_SEEDERS,'Lorris@beevora.fr','azerty',false) ;

INSERT INTO `Places` (`id`, `isAvailable`, `floor`) VALUES (1,true,1),(2,true,1),(3,false,1),(4,true,1),(5,true,1),(6,true,1),(7,true,1),(8,true,1),(9,true,1),(10,true,1), (11,true,2),(12,true,2),(13,true,2),(14,true,2),(15,true,2),(16,true,2),(17,true,2),(18,true,2),(19,true,2),(20,true,2),(21,true,3),(22,true,3),(23,true,3),(24,true,3),(25,true,3),(26,true,3),(27,true,3),(28,true,3),(29,true,3),(30,true,3);

INSERT INTO `Bookings` (`id`, `userId`, `placeId`) VALUES (1,@ID_SEEDERS,3)