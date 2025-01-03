package com.ansi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ansi.dto.AppointmentDTO;
import com.ansi.exception.AnsiEcommerceException;
import com.ansi.service.AppointmentService;

@RestController
@RequestMapping(value = "/ansicomm")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@Autowired
	private Environment environment;

//	@GetMapping(value = "/appointments")
//	public ResponseEntity<List<AppointmentDTO>> getAllAppointments() throws AnsiEcommerceException {
//
//		List<AppointmentDTO> appointmentsDTOs = appointmentService.getAllAppointmentDetails();
//		return new ResponseEntity<>(appointmentsDTOs, HttpStatus.OK);
//	}

	@GetMapping(value = "/appointments/{appointmentId}")
	public ResponseEntity<AppointmentDTO> getAppointment(@PathVariable Long appointmentId)
			throws AnsiEcommerceException {
		AppointmentDTO appointmentsDTO = appointmentService.getAppointment(appointmentId);
		return new ResponseEntity<>(appointmentsDTO, HttpStatus.OK);
	}
	
	
	//http://localhost:8080/ansicomm/appointments  
	// find appointment details using emailId,  pass the value from key and value
	@GetMapping(value = "/appointments")
	public ResponseEntity<List<AppointmentDTO>> getAppointment(@RequestParam String emailId)
			throws AnsiEcommerceException {
		List<AppointmentDTO> appointmentsDTOs = appointmentService.getAppointmentByEmailId(emailId);
		return new ResponseEntity<>(appointmentsDTOs, HttpStatus.OK);
	}
	

	//http://localhost:8080/ansicomm/appointments
	@PostMapping(value = "/appointments")
	public ResponseEntity<String> addAppointment(@RequestBody AppointmentDTO appointmentDTO)
			throws AnsiEcommerceException {
		
		Long patientId = appointmentService.addAppointmentDetails(appointmentDTO);
		String successMessage = environment.getProperty("API.INSERT_SUCCESS") + " " + patientId;
		return new ResponseEntity<String>(successMessage, HttpStatus.CREATED);
	}

	@PutMapping(value = "appointments/{appointmentId}")
	public ResponseEntity<String> updateAppointment(@PathVariable Long appointmentId,
			@RequestBody AppointmentDTO appointmentDTO) throws AnsiEcommerceException {
		appointmentService.updateAppointmentDetails(appointmentId, appointmentDTO.getName());
		String successMessage = environment.getProperty("API.UPDATE_SUCCESS");
		return new ResponseEntity<String>(successMessage, HttpStatus.OK);
	}

	@DeleteMapping(value = "appointments/{appointmentId}")
	public ResponseEntity<String> deleteAppointment(@PathVariable Long appointmentId) throws AnsiEcommerceException {
		appointmentService.deleteAppointment(appointmentId);
		String successMessage = environment.getProperty("API.DELETE_SUCCESS");
		return new ResponseEntity<String>(successMessage, HttpStatus.OK);
	}
}
