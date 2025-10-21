package com.privates.magu1436.cram_school_helper.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.privates.magu1436.cram_school_helper.entity.CalendarCell;
import com.privates.magu1436.cram_school_helper.mapper.CalendarCellMapper;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequiredArgsConstructor
@RequestMapping("/calendar")
public class CalendarCellController {

    private final CalendarCellMapper mapper;

    @GetMapping("/getAll")
    public ResponseEntity<List<CalendarCell>> getAllCalendar(){
        List<CalendarCell> cells = mapper.getAllCalendarCells();
        return new ResponseEntity<>(cells, HttpStatus.OK);
    }

    @PostMapping("/get")
    public ResponseEntity<CalendarCell> postMethodName(@RequestBody int id) {
        
        CalendarCell cc = mapper.getCalendarCellById(id);
        return new ResponseEntity<>(cc, HttpStatus.OK);
    }
    
    
}
