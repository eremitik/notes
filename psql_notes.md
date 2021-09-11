## Basics

```
psql --- start up db
psql -U eremitik eremitik --- same as above, just spec’ing user & database
psql postgres://username:password@host:port/dbname --- connect to port
psql postgres://localhost:5432/eremitik --- specific port to connect to
\? --- gives you a list of commands
\l --- list all db you have
\d --- list all tables
\q --- quit

~% createdb thread --- creates a db automatically for you called ‘thread’
=# \c thread --- once in psql, you can select this db ‘thread’

~% psql postgres://eremitik@localhost/thread --- connects to ‘thread’ db, when in term
~% dropdb thread --- deletes the db called ‘thread’

=# CREATE DATABSE thread; --- this creates ‘thread’ db as well
=# DROP DATABASE thread; --- deletes db called ‘thread’

=# CREATE TABLE “helloworld” (id int PRIMARY KEY, val varchar); --- creates table
=# SELECT \* FROM helloworld; --- selects id + val from the example right above
=# INSERT INTO “helloworld” VALUES (1, ‘hello’), (2, ‘world’); --- inserts data into table
=# DELETE FROM table_name WHERE condition;

~% createuser -s jon --- creates new user
~% brew services start postgres --- just in case you get error of server not up for psql
```

## SQL

```
=# select town_of_origin FROM students
=# select _ FROM students WHERE town_of_origin=’San Francisco’
=# select _ FROM students WHERE date_of_birth BETWEEN ‘1996-06-30’ AND now();
=# SELECT first_name, last_name, date_of_birth FROM students ORDER BY date-\_of_birth DESC;
=# SELECT town_of_origin, MIN(date_of_birth) FROM students GROUP BY town_of_origin
=# UPDATE students SET town_of_origin = ‘tokyo’ WHERE town_of_origin = ‘Tokyo’;
=# UPDATE students SET date_of_birth = date_of_birth + interval ‘100 years’ WHERE date_of_birth < ‘1900-01-01’;
=# UPDATE students SET date_of_birth = date_of_birth + interval '100 years' WHERE DATE_PART('year', AGE(CURRENT_DATE, date_of_birth)) > 100;
=# DELETE FROM students WHERE last_name = ‘Skywalker’ AND first_name = ‘Anakin’;
=# SELECT _ FROM checkins INNER JOIN students ON students.id = checkins.student_id;
=# SELECT _ FROM checkins INNER JOIN students ON students.id = checkins.student_id WHERE checked_in_at BETWEEN ‘2016-06-01’ AND ‘2016-06-30’;

=# SELECT first_name, last_name
FROM students, students_to_projects
WHERE students.id = students_to_projects.student_id AND students_to_projects.project_id = 5;

=# SELECT name
FROM checkins, students_to_projects, projects
WHERE students.id = students_to_projects.student_id
AND project.id = students_to_projects.project_id
AND checked_in_at BETWEEN ‘2016-06-01’ AND ‘2016-06-30’

=# SELECT name
FROM checkins
JOIN students_to_projects ON checkins.student_id=students_to_proejcts.student_id
JOIN projects ON projects.id=students_to_projects.project_id
WHERE checked_in_at BETWEEN ‘2016-06-01’ AND ‘2016-06-30’;

=# SELECT first_name, last_name
FROM students
INNER JOIN students_to_projects
ON students.id = student_id
WHERE project_id=5;

=# SELECT students.\*, checked_in_at
FROM students
INNER JOIN checkins
ON students.id = checkins.student_id
WHERE EXTRACT(month FROM checked_in_at) = 6
AND EXTRACT(year FROM checked_in_at) = 2016;

=# SELECT \* FROM students WHERE DATE_PART('year', AGE(CURRENT_DATE, date_of_birth)) > 25;

=# UPDATE students SET town_of_origin = INITCAP(town_of_origin);
```

## SQL notes

Commonly used SQL server data types: INT, VARCHAR, DATE, DATETIME, DECIMAL, FLOAT, BIT, BOOLEAN\
The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.\
A junction table contains the primary key columns of the two tables you want to relate. -cont'd on next line\
You then create a relationship from the primary key columns of each of those two tables to the matching columns in the junction table.
