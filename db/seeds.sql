-- Seed data for burgers table
INSERT INTO burgers (burger_name) VALUES ("Regular Hamburger"), ("Double Bacon Cheeseburger"), ("Jalapeno Bacon Burger"), ("Peanut Butter Burger");

UPDATE burgers SET devoured=true WHERE id=2;
UPDATE burgers SET devoured=true WHERE id=4;