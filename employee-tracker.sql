DROP DATABASE IF EXISTS employee_trackerDB;

create database employee_trackerDB;

use employee_trackerDB;

CREATE TABLE department (
  department_id int NOT NULL auto_increment,
  name varchar(30) NOT NULL,
  PRIMARY KEY(department_id)
);

CREATE TABLE roles (
  role_id int NOT NULL auto_increment PRIMARY KEY,
  title varchar(30) NOT NULL,
  salary DECIMAL(7,2),
  department_id int,
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
  employee_id int NOT NULL auto_increment PRIMARY KEY,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int,
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);