package com.ansi.service;

import java.util.List;

import com.ansi.dto.AppointmentDTO;
import com.ansi.exception.AnsiEcommerceException;

public interface AppointmentService {

	public Long addAppointmentDetails(AppointmentDTO patientDTO) throws AnsiEcommerceException;

	public AppointmentDTO getAppointment(Long patientId) throws AnsiEcommerceException;

	public List<AppointmentDTO> getAllAppointmentDetails() throws AnsiEcommerceException;
	
	public List<AppointmentDTO> getAppointmentByEmailId(String emailId) throws AnsiEcommerceException;

	public void updateAppointmentDetails(Long Id, String name) throws AnsiEcommerceException;

	public void deleteAppointment(Long patientId) throws AnsiEcommerceException;

}
