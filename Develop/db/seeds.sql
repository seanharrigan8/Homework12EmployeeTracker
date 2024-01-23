INSERT INTO department (id, name)
VALUES(1, 'Sales'), (2, 'Engineering'), (3, 'Finance'), (4, 'Legal');

-- Seeds for Employee ROLEs
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Sales Team Lead', 90000, 1),
(2, 'Salesperson', 65000, 1),
(3, 'Engineer Team Lead', 140000, 2),
(4, 'Software Engineer', 110000, 2),
(5, 'Accountant Team Lead', 120000, 3),
(6, 'Accountant', 125000, 3),
(7, 'Legal Team Lead', 250000, 4),
(8, 'Lawyer', 190000, 4);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES
('Matt', 'Damon', 1, null),
('George', 'Clooney', 2, 1),
('Brad', 'Pitt', 3, null),
('Julia', 'Roberts', 4, 3),
('Bernice', 'Mac', 5, null),
('Don', 'Cheadle', 6, 5),
('Andy', 'Garcia', 7, null),
('Elliot', 'Gould', 8, 7);
```