DROP DATABASE IF EXISTS employee_trackerDB;

create database employee_trackerDB;

use employee_trackerDB;

CREATE TABLE department (
  department_id int NOT NULL auto_increment,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE roles (
  department_id int NOT NULL auto_increment,
  title varchar(30) NOT NULL,
  salary DECIMAL(7,2),
  PRIMARY KEY(department_id)
);