package com.privates.magu1436.cram_school_helper.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.privates.magu1436.cram_school_helper.entity.ClassDetail;
import com.privates.magu1436.cram_school_helper.form.CreateClassDetailForm;

@Mapper
public interface ClassDetailMapper {
    ClassDetail getClassDetailById(int id);
    int insertClassDetail(CreateClassDetailForm classDetailForm);
    void updateClassDetail(ClassDetail classDetail);
    void deleteClassDetail(int id);
}
