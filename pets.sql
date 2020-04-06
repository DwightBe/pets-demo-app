DROP TABLE IF EXISTS "pets";

CREATE TABLE "pets" (
  id SERIAL PRIMARY KEY,
  name varchar(255) default NULL,
  weight varchar(100) default NULL,
  age varchar(100) default NULL
);

INSERT INTO "pets" (id,name,weight,age) VALUES (1,'Fuzzy','14.2','03.3'),(2,'Pupcake','5.4','05.5'),(3,'Brady','15.0','10.8'),(4,'Eve','17.0','05.2'),(5,'Paul','00.8','01.8'),(6,'Kirsten','08.6','08.2'),(7,'Garrison','09.5','02.2'),(8,'Zoe','06.9','07.1'),(9,'Xander','20.7','13.3'),(10,'Zorita','11.3','01.4');
INSERT INTO "pets" (id,name,weight,age) VALUES (11,'Charissa','16.6','00.7'),(12,'Cooper','01.5','05.2'),(13,'Channing','02.0','13.6'),(14,'Wang','06.9','13.1'),(15,'Yoshio','07.0','10.5'),(16,'Shannon','17.2','09.5'),(17,'Iris','13.2','01.9'),(18,'Sarah','08.9','01.0'),(19,'Rooney','15.1','02.8'),(20,'Rose','20.6','11.1');
INSERT INTO "pets" (id,name,weight,age) VALUES (21,'Aladdin','13.6','02.2'),(22,'Ivor','15.8','11.0'),(23,'Jonah','18.1','10.6'),(24,'Abbot','13.8','00.9'),(25,'Rhea','08.7','00.9'),(26,'Leonard','01.6','05.2'),(27,'Brandon','10.8','02.7'),(28,'Driscoll','00.1','03.9'),(29,'Hilda','06.2','07.8'),(30,'Leila','06.1','06.8');
INSERT INTO "pets" (id,name,weight,age) VALUES (31,'Kasper','00.3','08.1'),(32,'Camilla','18.0','02.3'),(33,'Sheila','17.1','09.9'),(34,'Rajah','08.3','14.4'),(35,'Bertha','07.8','00.0'),(36,'Seth','12.9','02.8'),(37,'Kennedy','14.3','04.3'),(38,'Jermaine','16.7','12.2'),(39,'Nola','14.4','03.6'),(40,'Zachary','04.1','12.1');
INSERT INTO "pets" (id,name,weight,age) VALUES (41,'Duncan','15.4','13.9'),(42,'Kathleen','02.7','08.5'),(43,'Andrew','04.6','13.8'),(44,'Pearl','05.4','00.5'),(45,'Jorden','21.0','00.7'),(46,'Connor','20.3','13.4'),(47,'Tatiana','18.9','12.4'),(48,'Briar','08.2','02.9'),(49,'Summer','07.7','14.4'),(50,'Chava','19.7','07.9');
INSERT INTO "pets" (id,name,weight,age) VALUES (51,'Tanisha','09.6','05.9'),(52,'Anne','04.0','13.3'),(53,'Knox','00.2','01.4'),(54,'Gay','16.0','11.6'),(55,'Zeph','12.6','12.8'),(56,'Hamish','04.6','01.5'),(57,'Shannon','00.4','07.0'),(58,'Abdul','07.8','05.5'),(59,'Keaton','19.0','06.4'),(60,'Nicholas','01.5','02.8');
INSERT INTO "pets" (id,name,weight,age) VALUES (61,'Jonah','06.8','09.4'),(62,'Logan','16.8','06.1'),(63,'Tamara','07.7','11.1'),(64,'Yasir','12.3','05.7'),(65,'Charissa','20.7','00.0'),(66,'Jada','09.9','02.2'),(67,'Jolie','12.4','01.7'),(68,'Linda','06.7','05.1'),(69,'Karina','16.2','02.3'),(70,'Kirby','02.2','12.0');
INSERT INTO "pets" (id,name,weight,age) VALUES (71,'Amena','05.1','12.6'),(72,'Phyllis','01.0','00.1'),(73,'Gil','19.9','04.2'),(74,'Ronan','09.6','07.1'),(75,'Clio','19.2','08.0'),(76,'Jemima','04.0','11.4'),(77,'Debra','12.4','00.0'),(78,'Donovan','17.8','07.0'),(79,'Fredericka','16.6','08.9'),(80,'Hayes','14.3','11.8');
INSERT INTO "pets" (id,name,weight,age) VALUES (81,'Belle','01.9','13.8'),(82,'Odysseus','05.3','06.5'),(83,'Lillith','04.5','02.1'),(84,'Regina','19.3','08.4'),(85,'Louis','07.4','02.5'),(86,'Lee','05.5','03.6'),(87,'Maxwell','01.9','00.3'),(88,'Octavius','07.9','03.2'),(89,'Erich','02.7','06.2'),(90,'Prescott','03.1','07.2');
INSERT INTO "pets" (id,name,weight,age) VALUES (91,'Lawrence','08.9','04.7'),(92,'Darius','07.6','13.0'),(93,'Rafael','18.1','05.1'),(94,'Bernard','13.7','09.0'),(95,'Caleb','20.4','00.5'),(96,'Martha','10.1','06.5'),(97,'Tanek','10.7','15.0'),(98,'Sasha','19.0','04.6'),(99,'Colorado','20.4','03.3'),(100,'Xena','10.0','04.5');

