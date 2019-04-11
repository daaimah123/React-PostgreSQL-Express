Thu Apr 11|13:26:05|Location: ~|Daaimah|$ psql postgres
psql (11.1, server 11.2)
Type "help" for help.

postgres=# CREATE DATABASE techtonica;
CREATE DATABASE
postgres=# \connect techtonica
psql (11.1, server 11.2)
You are now connected to database "techtonica" as user "codetl".
techtonica=# CREATE TABLE apprentices (id SERIAL, first_name VARCHAR, last_name VARCHAR);
CREATE TABLE
techtonica=# \dt
           List of relations
 Schema |    Name     | Type  | Owner  
--------+-------------+-------+--------
 public | apprentices | table | codetl
(1 row)
techtonica=# select * from apprentices;
 id | first_name | last_name 
----+------------+-----------
(0 rows)
techtonica=# insert into apprentices (first_name, last_name) values ('Daaimah', 'Tibrey');
INSERT 0 1
techtonica=# insert into apprentices (first_name, last_name) values ('Janelle', 'Monae');
INSERT 0 1
techtonica=# insert into apprentices (first_name, last_name) values ('Betty', 'Boop');
INSERT 0 1
techtonica=# insert into apprentices (first_name, last_name) values ('Suzie', 'Q');
INSERT 0 1
techtonica=# select * from apprentices;
 id | first_name | last_name 
----+------------+-----------
  1 | Daaimah    | Tibrey
  2 | Janelle    | Monae
  3 | Betty      | Boop
  4 | Suzie      | Q
(4 rows)

techtonica=# CREATE TABLE cohorts (apprentice_id INTEGER, year INTEGER, city VARCHAR);
CREATE TABLE
techtonica=# INSERT INTO cohorts (apprentice_id, year, city) VALUES (1, 2019, 'San Francisco');
INSERT 0 1
techtonica=# INSERT INTO cohorts (apprentice_id, year, city) VALUES (2, 2019, 'San Francisco');
INSERT 0 1
techtonica=# INSERT INTO cohorts (apprentice_id, year, city) VALUES (3, 2018, 'Oakland');
INSERT 0 1
techtonica=# INSERT INTO cohorts (apprentice_id, year, city) VALUES (4, 2018, 'Oakland');
INSERT 0 1
techtonica=# select * from cohorts;
 apprentice_id | year |     city      
---------------+------+---------------
             1 | 2019 | San Francisco
             2 | 2019 | San Francisco
             3 | 2018 | Oakland
             4 | 2018 | Oakland
(4 rows)

