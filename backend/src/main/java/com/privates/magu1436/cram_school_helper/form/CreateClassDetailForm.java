package com.privates.magu1436.cram_school_helper.form;

import com.privates.magu1436.cram_school_helper.entity.ClassDetail;

import lombok.Data;

@Data
public class CreateClassDetailForm {
    private int classId;
    private ClassDetail classDetail;
}
