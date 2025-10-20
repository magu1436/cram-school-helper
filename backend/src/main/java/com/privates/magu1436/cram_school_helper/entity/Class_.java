package com.privates.magu1436.cram_school_helper.entity;

import java.util.List;

import lombok.Data;

@Data
public class Class_ {
    private int id;
    private String name;

    private List<ClassDetail> classDetails;
}
