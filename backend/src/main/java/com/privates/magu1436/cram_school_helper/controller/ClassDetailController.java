package com.privates.magu1436.cram_school_helper.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.privates.magu1436.cram_school_helper.form.CreateClassDetailForm;
import com.privates.magu1436.cram_school_helper.form.UpdateClassDetailForm;
import com.privates.magu1436.cram_school_helper.mapper.ClassDetailMapper;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PutMapping;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping("/classDetail")
public class ClassDetailController {

    private final ClassDetailMapper mapper;

    @PostMapping("/create")
    public ResponseEntity<Integer> createClassDetail(@RequestBody CreateClassDetailForm form){
        mapper.insertClassDetail(form);
        return new ResponseEntity<>(form.getClassDetail().getId(), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteClassDetail(@PathVariable int id){
        mapper.deleteClassDetail(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("update")
    public ResponseEntity<Void> updateClassDetail(@RequestBody UpdateClassDetailForm form){
        mapper.updateClassDetail(form);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
