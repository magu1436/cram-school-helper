package com.privates.magu1436.cram_school_helper.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.privates.magu1436.cram_school_helper.entity.Class_;

@Mapper
public interface ClassMapper {
    Class_ getClassById(int id);
    int insertClass(Class_ class_);
    void updateClass(Class_ class_);
    void deleteClass(int id);
}
