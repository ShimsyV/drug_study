CREATE TABLE drug_data(
	id SERIAL PRIMARY KEY,
	State VARCHAR,
	Year INT,
	Month VARCHAR,
	Drug_Name VARCHAR,
	Death_Count DEC
);

SELECT * FROM drug_data;