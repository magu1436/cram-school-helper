package com.privates.magu1436.cram_school_helper.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.privates.magu1436.cram_school_helper.entity.ClassDetail;
import com.privates.magu1436.cram_school_helper.form.CreateClassDetailForm;
import com.privates.magu1436.cram_school_helper.form.UpdateClassDetailForm;

@Mapper
public interface ClassDetailMapper {
    ClassDetail getClassDetailById(int id);
    void insertClassDetail(CreateClassDetailForm classDetailForm);
    void updateClassDetail(UpdateClassDetailForm form);
    void deleteClassDetail(int id);
}
