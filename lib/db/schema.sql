CREATE DATABASE IF NOT EXISTS diverr;
USE diverr;

CREATE TABLE IF NOT EXISTS users (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  email varchar(40),
  name varchar(100),
  signup varchar(25),
  cumulative_time int
);

CREATE TABLE IF NOT EXISTS tags (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name varchar(50)
);

CREATE TABLE IF NOT EXISTS logs (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  public boolean,
  id_user int,
  id_tags int,
  date varchar(25),
  dive_site varchar(100),
  city varchar(50),
  country varchar(50),
  visibility varchar(20),
  air_temp varchar(20),
  water_temp varchar(20),
  weight varchar(20),
  hood boolean,
  gloves boolean,
  wet_suit boolean,
  waves boolean,
  current boolean,
  controlled_env boolean,
  salt_water boolean,
  boat boolean,
  max_depth varchar(20),
  time_in varchar(25),
  time_out varchar(25),
  rnt int,
  abt int,
  tbt int,
  start_pressure varchar(20),
  end_pressure varchar(20),
  notes text,
  dive_center varchar(50),
  dive_instructor varchar(50),
  instructor_cert varchar(50),
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_tags) REFERENCES tags(id)
);

CREATE TABLE IF NOT EXISTS photos (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  url varchar(100),
  id_log int,
  FOREIGN KEY (id_log) REFERENCES logs(id)
);

CREATE TABLE IF NOT EXISTS logs_tags (
  id int AUTO_INCREMENT UNIQUE PRIMARY KEY,
  id_user int,
  id_log int,
  id_tag int,
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_log) REFERENCES logs(id),
  FOREIGN KEY (id_tag) REFERENCES tags(id)
);
