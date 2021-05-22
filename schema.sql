CREATE DATABASE IF NOT EXISTS diverr;

CREATE TABLE IF NOT EXISTS users (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  email varchar(40),
  first_name varchar(25),
  last_name varchar(25),
  signup timestamp,
  cumulative_time int
);

CREATE TABLE IF NOT EXISTS logs (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  public boolean,
  id_user int,
  date varchar(25),
  dive_site varchar(100),
  city varchar(50),
  country varchar(50),
  visibility int,
  air_temp int,
  water_temp int,
  weight int,
  hood boolean,
  gloves boolean,
  wet_suit boolean,
  waves boolean,
  current boolean,
  controlled_env boolean,
  salt_water boolean,
  boat boolean,
  max_depth int,
  time_in varchar(25),
  time_out varchar(25),
  rnt int,
  abt int,
  tbt int,
  start_pressure int,
  end_pressure int,
  notes text,
  dive_center varchar(50),
  dive_instructor varchar(50),
  instructor_cert int,
  FOREIGN KEY id_user REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS photos (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  url varchar(100),
  id_log int,
  id_tags int,
  FOREIGN KEY id_log REFERENCES logs(id),
  FOREIGN KEY id_tags REFERENCES tags(id)
);

CREATE TABLE IF NOT EXISTS tags (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name varchar(50)
);

