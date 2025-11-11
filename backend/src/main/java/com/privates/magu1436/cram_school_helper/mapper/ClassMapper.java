package com.privates.magu1436.cram_school_helper.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.privates.magu1436.cram_school_helper.entity.Class_;

@Mapper
public interface ClassMapper {
    Class_ getClassById(int id);
    List<Class_> getClassesByDate(String date);
    int insertClass(Class_ class_);
    void updateClass(Class_ class_);
    void deleteClass(int id);
}
