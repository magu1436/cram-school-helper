package com.privates.magu1436.cram_school_helper.entity;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class CalendarCell {
    private int id;
    private Date classAt;

    private List<Class_> classes;

    public String toString(){
        Map<String, String> map = new HashMap<>(){
            {
                put("id", String.valueOf(id));
                put("class", classAt.toString());
                put("has_classes", String.valueOf(classes.size()));
            }
        };
        return map.toString();
    }
}
