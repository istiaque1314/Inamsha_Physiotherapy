package com.ansi.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentDTO {

	private Long id;
	private String name;
	private String emailId;
	private LocalDate appointmentDate;  
    private LocalTime appointmentTime;
	private String doctorName;
	private String phoneNumber;

	public AppointmentDTO() {
		
	}

	public AppointmentDTO(Long id, String name,String emailId, LocalDate appointmentDate, LocalTime appointmentTime, String doctorName,
			String phoneNumber) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.appointmentDate = appointmentDate;
		this.appointmentTime = appointmentTime;
		this.doctorName = doctorName;
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public LocalTime getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(LocalTime appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	
	
}
