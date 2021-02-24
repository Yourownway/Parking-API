CREATE DATABASE IF NOT EXISTS ParkingAPI;

USE ParkingAPI;

CREATE TABLE Users
(
    id VARCHAR(36) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255),
    role VARCHAR(50)
);

CREATE TABLE Places
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    userId VARCHAR(36),
    isAvailable BOOLEAN,
    floor INT,
    usageTime TIME,
    userId VARCHAR(36),
    FOREIGN KEY (idUser) REFERENCES Users(id) 

);


