package com.privates.magu1436.cram_school_helper.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.privates.magu1436.cram_school_helper.entity.Class_;
import com.privates.magu1436.cram_school_helper.form.CreateClassForm;
import com.privates.magu1436.cram_school_helper.mapper.ClassMapper;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;



@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping("/class")
public class ClassController {
    
    private final ClassMapper classMapper;

    @GetMapping("/getClassesByDate/{date}")
    public ResponseEntity<List<Class_>> getClassesByDate(@PathVariable String date){
        List<Class_> classes = classMapper.getClassesByDate(date);
        return new ResponseEntity<>(classes, HttpStatus.OK);
    }

    @PostMapping("/createAt")
    public ResponseEntity<Integer> createClass(@RequestBody CreateClassForm form){
        classMapper.insertClassAt(form);
        return new ResponseEntity<>(form.getClass_().getId(), HttpStatus.CREATED);
    }
}
