package com.ansi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ansi.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

	List<Appointment> findByEmailIdOrderByAppointmentDateDesc(String emailId);
}
