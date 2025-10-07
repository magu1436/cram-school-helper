
-- カレンダーセル
CREATE TABLE calendar_cells (
    id INT PRIMARY KEY AUTO_INCREMENT,
    class_at DATE NOT NULL
);

-- コマ
CREATE TABLE classes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    calendar_cell_id INT NOT NULL ,
    class_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (calendar_cell_id) REFERENCES calendar_cells(id)
);

-- 授業詳細テーブル
CREATE TABLE class_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    class_id INT NOT NULL,
    student VARCHAR(255) NOT NULL,
    class_subject VARCHAR(255),
    memo VARCHAR(255),
    teaching_unit VARCHAR(255),
    learned VARCHAR(255),
    good_point VARCHAR(255),
    issue VARCHAR(255),
    comment TEXT,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);