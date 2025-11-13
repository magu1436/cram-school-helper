package com.privates.magu1436.cram_school_helper.form;

import java.time.LocalDate;

import com.privates.magu1436.cram_school_helper.entity.Class_;

import lombok.Data;

@Data
public class CreateClassForm {
    private LocalDate classAt;
    private Class_ class_;
}
