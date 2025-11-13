package com.privates.magu1436.cram_school_helper.mapper;

import java.time.LocalDate;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.privates.magu1436.cram_school_helper.entity.CalendarCell;

@Mapper
public interface CalendarCellMapper {
    List<CalendarCell> getAllCalendarCells();
    CalendarCell getCalendarCellById(int id);
    CalendarCell getCalendarCellAt(LocalDate classAt);
    int insertCalendarCell(CalendarCell calendarCell);
    void updateCalendarCell(CalendarCell calendarCell);
    void deleteCalendarCellByIs(int id);
}
