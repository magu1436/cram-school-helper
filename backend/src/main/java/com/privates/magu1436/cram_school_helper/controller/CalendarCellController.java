package com.privates.magu1436.cram_school_helper.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.privates.magu1436.cram_school_helper.entity.CalendarCell;
import com.privates.magu1436.cram_school_helper.mapper.CalendarCellMapper;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@CrossOrigin(origins = "http://localhost:5173")
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

    @PostMapping("/create/{date}")
    public ResponseEntity<Integer> createCalendarCell(@PathVariable String date){
        CalendarCell cc = new CalendarCell();
        cc.setClassAt(LocalDate.parse(date));
        mapper.insertCalendarCell(cc);
        return new ResponseEntity<>(cc.getId(), HttpStatus.CREATED);
    }
    
}
