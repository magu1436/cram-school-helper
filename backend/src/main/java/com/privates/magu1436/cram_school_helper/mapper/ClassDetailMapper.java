package com.privates.magu1436.cram_school_helper.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.privates.magu1436.cram_school_helper.entity.ClassDetail;

@Mapper
public interface ClassDetailMapper {
    ClassDetail getClassDetailById(int id);
    int insertClassDetail(ClassDetail classDetail);
    void updateClassDetail(ClassDetail classDetail);
    void deleteClassDetail(int id);
}
