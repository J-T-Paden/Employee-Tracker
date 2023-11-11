INSERT INTO department (department_name)
VALUES("Production"), ("Sales"), ("Engineering"), ("Customer Service"), ("Management");

INSERT INTO role (title, salary, department_id)
VALUES("Production Associate", 35000, 1), ("Production Lead", 40000, 1), ("Sales Person", 60000, 2), ("Manufacturing Engineer," 80000, 3), ("Draftsmen", 70000, 3), ("Customer Service Rep", 35000, 4), ("Production Manager");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES