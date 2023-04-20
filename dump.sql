-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: gostem
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `gostem`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `gostem` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `gostem`;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) NOT NULL,
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `pic` varchar(15) DEFAULT NULL,
  `job` varchar(45) NOT NULL,
  `description` varchar(2500) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES ('David','Melville',1,'/David.jpg','Executive Director','\nDavid brings nearly 20 years in the education field to his role at GO STEM. He has been a classroom teacher, taught in environmental and place-based settings, and has worked on a variety of educational research and grant management efforts.</p> \n\n<p>David has a Bachelors in Elementary Education with a focus in STEM education, a Masters in Sustainable Communities with a thesis on environmental education, a Masters in Educational Leadership, and a Doctorate of Education in Curriculum and Instruction (ABD) with his dissertation focusing on the implementation of the Community School Model in Rural and Urban settings, he also holds a Montessori (6-9) certification. David brings skills in organizational development, program management, grant procurement & management, and educational theory. With a proven record in STEM settings, integrating Next Generation Science Standards, equity and inclusion, and curriculum & instruction, David is a wealth of knowledge in the education field.</p> \n\n<p>David is proud to be a member of the GO STEM team and is excited to continue moving the organization forward, strengthen partnerships across Eastern Oregon, and expand STEM education access and support for educators, students, and families in the communities of Eastern Oregon.</p>\n\n<p>When not behind a computer screen, David can be found in the garden, enjoying the natural beauty of Eastern Oregon, and tinkering on the next home improvement project with his wife and their dog and cat.\n'),('Stefanie','Holloway',2,'/Stefanie.jpg','Program Director','\nBefore joining the Greater Oregon STEM Hub, Stefanie was a classroom teacher for five years at an International Baccalaureate K-12 public school and then served as a student teacher liaison for Boise State’s College of Education, where she supervised and mentored cohorts of student teaching candidates across diverse content areas and classrooms. She also served as an educational researcher and program evaluation research coordinator for Boise State University’s Program Evaluation and Research Lab.</p>\n<p>Stefanie holds a Bachelor’s in English Teaching and Literacy, a Master’s degree in Educational Leadership, and a Doctorate of Education, with a specialization in Curriculum and Instruction. Her doctoral research focused on social emotional learning efforts, as well as ways to build positive school climate and culture to improve students’ mental health and overall well being. (You can read her dissertation here: https://scholarworks.boisestate.edu/td/1904/)</p>\n<p>She also holds an active K-12 English Teaching certificate and K-12 Literacy endorsement, as well as an active Idaho Administrator certificate. </p>\n<p>Her educational passions include teacher professional development, researching ways to integrate twenty-first century learning into classrooms, social and emotional learning efforts, transdisciplinary education, and teaching students herself. Education is her passion, and she especially loves supporting educators and helping to positively influence educational systems.</p>\n<p>Stefanie’s primary responsibilities include management and delivery of Hub programs, supervising Hub staff, and expanding partner and community engagement efforts for the GO STEM Hub.'),('Tonya','Williams',3,'/Tonya.jpg','Administrative Program Assistant','\nTonya brings over 30 years of administrative experience to GO STEM from across a variety of companies and organizations in the northwest. She has extensive experience preparing contracts for services and processing, tracking, and paying financial information. She graduated from the La Grande College of Business in 1988 with a certificate in Accounting/Secretarial.</p>\n<p>Having held positions most recently with Eastern Oregon Headstart, as their Fiscal Manager and the Colleges of Business and Education at EOU as an Office Specialist, Tonya will be able to tailor her skills to meet the needs of the GO STEM Hub here in eastern Oregon.\n'),('Michael','Jaeger',4,'/Michael.png','Communications','\nMichael Jaeger is Professor and Dean Emeritus, Eastern Oregon University.  Michael has broad experience as a scientist, public school educator and administrator, science teacher educator, administrator in higher education, and community advocate for economic development. As an entomologist he has studied aquatic insects and kept active in the discipline sharing his love for natural history with science students. As a fifteen-year veteran of public schools, Michael has taught every level and subject in science and technology, directed the curriculum efforts of a large suburban school district, and has received awards for teaching excellence. Michael has been the principle investigator of 22 science and engineering grants, has published dozens of  articles and papers of note, and has a number of published books ranging in topics from education, STEM, history to Biblical study.  He led the College of Education and Business for 11 years as dean and served as Eastern’s provost for almost three years. His current work is now focused on advancing STEM education for greater Oregon.'),('Kyle','Peterson Koyle',5,'/Kyle.jpg','Curriculum and Outreach Manager','\nKyle holds a Bachelor’s in Environmental Studies from Utah State University as well as a Master’s in Natural Resource Science and Environmental Education from Hamline University in Minnesota. For over fifteen years, she has worked as a traditional and non-traditional educator in Utah, Colorado, and now Oregon. Her primary focus has been on improving science education for students and teachers by providing interdisciplinary curriculum, professional development and teaching best practices in and outside of the classroom.</p>\n<p>Kyle’s primary responsibilities include overseeing the curriculum and professional development for GO STEM’s diverse programs, with her primary focus being on the new Mobile Maker Lab. She also manages and facilitates GO-STEM’s educational outreach programs.</p>\n<p>In her spare time, Kyle enjoys spending time with her family and friends doing just about anything. She is an avid reader, loves music, cross country skiing, and camping.');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20 10:53:23
