
-- ダミーデータの挿入

INSERT INTO calendar_cells (class_at) values ('2025-09-30');
INSERT INTO calendar_cells (class_at) values ('2025-08-22');
INSERT INTO calendar_cells (class_at) values ('2025-09-28');
INSERT INTO calendar_cells (class_at) values ('2025-09-23');

INSERT INTO classes (calendar_cell_id, class_name) values (1, 'C');
INSERT INTO classes (calendar_cell_id, class_name) values (2, 'C');
INSERT INTO classes (calendar_cell_id, class_name) values (2, 'D');
INSERT INTO classes (calendar_cell_id, class_name) values (3, 'A');
INSERT INTO classes (calendar_cell_id, class_name) values (3, 'B');
INSERT INTO classes (calendar_cell_id, class_name) values (3, 'C');
INSERT INTO classes (calendar_cell_id, class_name) values (3, 'D');

INSERT INTO class_details (class_id, student, class_subject, memo, teaching_unit, learned, good_point, issue, comment) values (1, '阪本穂高', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg');
INSERT INTO class_details (class_id, student) values (2, '工藤史弥');