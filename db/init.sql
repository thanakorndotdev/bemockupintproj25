USE itb_ecors;

CREATE TABLE study_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_code CHAR(2) NOT NULL UNIQUE,
    name_eng VARCHAR(60) NOT NULL,
    name_th VARCHAR(100) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO study_plans (plan_code, name_eng, name_th) VALUES
('FE', 'Frontend Developer', 'นักพัฒนาฟรอนต์เอนด์'),
('BE', 'Backend Developer', 'นักพัฒนาแบ็กเอนด์'),
('FS', 'Full-Stack Developer', 'นักพัฒนาเต็มสแตก'),
('AI', 'AI Developer', 'นักพัฒนาปัญญาประดิษฐ์'),
('DS', 'Data Scientist', 'นักวิทยาการข้อมูล'),
('DA', 'Data Analyst', 'นักวิเคราะห์ข้อมูล'),
('DE', 'Data Engineer', 'วิศวกรข้อมูล'),
('DB', 'Database Administrator', 'ผู้ดูแลฐานข้อมูล'),
('UX', 'UX/UI Designer', 'นักออกแบบประสบการณ์ของผู้ใช้และส่วนต่อประสาน');
