package com.privates.magu1436.cram_school_helper.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.privates.magu1436.cram_school_helper.form.CreateClassDetailForm;
import com.privates.magu1436.cram_school_helper.mapper.ClassDetailMapper;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping("/classDetail")
public class ClassDetailController {

    private final ClassDetailMapper mapper;

    @PostMapping("/create")
    public ResponseEntity<Integer> createClassDetail(CreateClassDetailForm form){
        Integer id = mapper.insertClassDetail(form);
        return new ResponseEntity<>(id, HttpStatus.CREATED);
    }
}
