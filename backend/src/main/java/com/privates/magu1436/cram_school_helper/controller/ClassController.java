package com.privates.magu1436.cram_school_helper.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.privates.magu1436.cram_school_helper.entity.Class_;
import com.privates.magu1436.cram_school_helper.mapper.ClassMapper;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping("/class")
public class ClassController {
    
    private final ClassMapper mapper;

    @GetMapping("/getClassesByDate/{date}")
    public ResponseEntity<List<Class_>> getClassesByDate(@PathVariable String date){
        List<Class_> classes = mapper.getClassesByDate(date);
        return new ResponseEntity<>(classes, HttpStatus.OK);
    }
}
