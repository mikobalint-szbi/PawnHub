CREATE TABLE `users` (
  `id` integer PRIMARY KEY NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `registrationDate` timestamp NOT NULL,
  `lastLogin` timestamp NOT NULL,
  `lastTransatction` timestamp,
  `shopId` varchar(255),
  `bankCardNumber` varchar(255),
  `bankExpDate` varchar(255),
  `bankCardName` varchar(255),
  `iban` varchar(255),
  `shippingAddress` varchar(255),
  `billingAddress` varchar(255),
  `name` varchar(255),
  `mobile` varchar(255),
  `email` varchar(255),
  `isShop` bool
);

CREATE TABLE `loans` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `customerId` integer NOT NULL,
  `shopId` integer NOT NULL,
  `startDate` timestamp NOT NULL,
  `expDate` timestamp NOT NULL,
  `givenAmountForint` integer NOT NULL,
  `interest` float NOT NULL
);

CREATE TABLE `items` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `shopId` integer NOT NULL,
  `loanId` integer,
  `value` integer NOT NULL,
  `categoryId` integer
);

CREATE TABLE `categoryGroups` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `categories` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `groupId` integer,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `messages` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `sender` integer NOT NULL,
  `recipient` integer NOT NULL,
  `subject` varchar(255),
  `message` varchar(255)
);

CREATE TABLE `transactions` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `seller` integer NOT NULL,
  `buyer` integer NOT NULL,
  `item` varchar(255),
  `amount` integer NOT NULL
);

CREATE TABLE `deletedUsers` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `lastTransatction` timestamp,
  `bankCardNumber` varchar(255),
  `bankExpDate` varchar(255),
  `bankCardName` varchar(255),
  `iban` varchar(255)
);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `transactions` (`buyer`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `transactions` (`seller`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `messages` (`recipient`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `messages` (`sender`);

ALTER TABLE `categories` ADD FOREIGN KEY (`id`) REFERENCES `items` (`categoryId`);

ALTER TABLE `categories` ADD FOREIGN KEY (`groupId`) REFERENCES `categoryGroups` (`id`);

ALTER TABLE `items` ADD FOREIGN KEY (`loanId`) REFERENCES `loans` (`id`);

ALTER TABLE `items` ADD FOREIGN KEY (`shopId`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `loans` (`customerId`);

ALTER TABLE `loans` ADD FOREIGN KEY (`shopId`) REFERENCES `users` (`id`);
