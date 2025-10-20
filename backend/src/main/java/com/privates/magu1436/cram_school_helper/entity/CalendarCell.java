package com.privates.magu1436.cram_school_helper.entity;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class CalendarCell {
    private int id;
    private Date classAt;

    private List<Class_> classes;
}
