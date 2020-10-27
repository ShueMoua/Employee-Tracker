DROP DATABASE IF EXISTS employee_trackerDB;

create database employee_trackerDB;

use employee_trackerDB;

CREATE TABLE department (
  department_id int NOT NULL auto_increment,
  name varchar(30) NOT NULL,
  PRIMARY KEY(department_id)
);

CREATE TABLE roles (
  role_id int NOT NULL auto_increment,
  title varchar(30) NOT NULL,
  salary DECIMAL(7,2),
  department_id int NOT NULL,
  PRIMARY KEY(role_id),
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);