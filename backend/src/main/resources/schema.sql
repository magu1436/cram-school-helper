
-- カレンダーセル
CREATE TABLE calendar_cells (
    calendar_cell_id INT PRIMARY KEY AUTO_INCREMENT,
    class_at DATE NOT NULL
);

-- コマ
CREATE TABLE classes (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    calendar_cell_id INT NOT NULL ,
    class_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (calendar_cell_id) REFERENCES calendar_cells(calendar_cell_id)
);

-- 授業詳細テーブル
CREATE TABLE class_details (
    class_detail_id INT PRIMARY KEY AUTO_INCREMENT,
    class_id INT NOT NULL,
    student VARCHAR(255) NOT NULL,
    class_subject VARCHAR(255),
    memo TEXT,
    teaching_unit TEXT,
    learned TEXT,
    good_point TEXT,
    issue TEXT,
    comment TEXT,
    FOREIGN KEY (class_id) REFERENCES classes(class_id)
);