create database student;

create table student(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
email VARCHAR(255),
age INT,
birthday DATE);

INSERT INTO  student (name,email,age,birthday) 
values 
	   ('walid','walidxx@gmail.com',20,'2002-10-10'),
	   ('David','Davidyy@gmail.com',22,'2000-11-16');