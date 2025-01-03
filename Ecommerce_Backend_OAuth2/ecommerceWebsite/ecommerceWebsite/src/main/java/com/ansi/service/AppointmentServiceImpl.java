package com.ansi.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ansi.dto.AppointmentDTO;
import com.ansi.entity.Appointment;
import com.ansi.exception.AnsiEcommerceException;
import com.ansi.repository.AppointmentRepository;

import jakarta.transaction.Transactional;

@Service(value = "appointmentService")
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	AppointmentRepository appointmentRepository;

	@Override
	public Long addAppointmentDetails(AppointmentDTO appointmentDTO) throws AnsiEcommerceException {
//		Optional<Appointment> optional = appointmentRepository.findById(appointmentDTO.getId());
//		if (optional.isPresent())
//			throw new AnsiEcommerceException("Service.APPOINTMENT_FOUND");

		Appointment appointment = new Appointment();
//		appointment.setId(appointmentDTO.getId());
		appointment.setName(appointmentDTO.getName());
		appointment.setEmailId(appointmentDTO.getEmailId());
		appointment.setAppointmentDate(appointmentDTO.getAppointmentDate());
		appointment.setAppointmentTime(appointmentDTO.getAppointmentTime());
		appointment.setDoctorName(appointmentDTO.getDoctorName());
        appointment.setPhoneNumber(appointmentDTO.getPhoneNumber());
        
        appointmentRepository.save(appointment);
		return appointment.getId();

	}

	@Override
	public AppointmentDTO getAppointment(Long appointmentId) throws AnsiEcommerceException {
		Optional<Appointment> optional = appointmentRepository.findById(appointmentId);
		Appointment appointment = optional.orElseThrow(() -> new AnsiEcommerceException("Service.APPOINTMENT_NOT_FOUND"));

		AppointmentDTO appointmentDTO = new AppointmentDTO();
		appointmentDTO.setId(appointment.getId());
		appointmentDTO.setName(appointment.getName());
		appointmentDTO.setEmailId(appointment.getEmailId());
		appointmentDTO.setAppointmentDate(appointment.getAppointmentDate());
		appointmentDTO.setAppointmentTime(appointment.getAppointmentTime());
		appointmentDTO.setDoctorName(appointment.getDoctorName());
		appointmentDTO.setPhoneNumber(appointment.getPhoneNumber());

		return appointmentDTO;
	}
	
	
	// Find appointment details using emailId
	@Override
	public List<AppointmentDTO> getAppointmentByEmailId(String emailId) throws AnsiEcommerceException {
		Iterable<Appointment> appointments = appointmentRepository.findByEmailIdOrderByAppointmentDateDesc(emailId);
		List<AppointmentDTO> appointmentDTOs = new ArrayList<AppointmentDTO>();

		appointments.forEach(appointment -> {
			AppointmentDTO appointmentDTO = new AppointmentDTO();

			appointmentDTO.setId(appointment.getId());
			appointmentDTO.setName(appointment.getName());
			appointmentDTO.setEmailId(appointment.getEmailId());
			appointmentDTO.setAppointmentDate(appointment.getAppointmentDate());
			appointmentDTO.setAppointmentTime(appointment.getAppointmentTime());
			appointmentDTO.setDoctorName(appointment.getDoctorName());
			appointmentDTO.setPhoneNumber(appointment.getPhoneNumber());

			appointmentDTOs.add(appointmentDTO);
		});

		if (appointmentDTOs.isEmpty())
			throw new AnsiEcommerceException("Service.APPOINTMENTS_NOT_FOUND");

		return appointmentDTOs;
	}
	

	@Override
	public List<AppointmentDTO> getAllAppointmentDetails() throws AnsiEcommerceException {
		Iterable<Appointment> appointments = appointmentRepository.findAll();
		List<AppointmentDTO> appointmentDTOs = new ArrayList<AppointmentDTO>();

		appointments.forEach(appointment -> {
			AppointmentDTO appointmentDTO = new AppointmentDTO();

			appointmentDTO.setId(appointment.getId());
			appointmentDTO.setName(appointment.getName());
			appointmentDTO.setEmailId(appointment.getEmailId());
			appointmentDTO.setAppointmentDate(appointment.getAppointmentDate());
			appointmentDTO.setAppointmentTime(appointment.getAppointmentTime());
			appointmentDTO.setDoctorName(appointment.getDoctorName());
			appointmentDTO.setPhoneNumber(appointment.getPhoneNumber());

			appointmentDTOs.add(appointmentDTO);
		});

		if (appointmentDTOs.isEmpty())
			throw new AnsiEcommerceException("Service.APPOINTMENTS_NOT_FOUND");

		return appointmentDTOs;
	}

	@Override
	public void updateAppointmentDetails(Long Id, String name) throws AnsiEcommerceException {
		Optional<Appointment> optional = appointmentRepository.findById(Id);
		Appointment patient = optional.orElseThrow(() -> new AnsiEcommerceException("Service.APPOINTMENT_NOT_FOUND"));
		patient.setName(name);
		appointmentRepository.save(patient);

	}

	@Override
	public void deleteAppointment(Long patientId) throws AnsiEcommerceException {
		Optional<Appointment> optional = appointmentRepository.findById(patientId);
		Appointment patient = optional.orElseThrow(() -> new AnsiEcommerceException("Service.APPOINTMENT_NOT_FOUND"));
		appointmentRepository.delete(patient);

	}

}
