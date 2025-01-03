package com.ansi.utility;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

	public static final Logger LOGGER = LogManager.getLogger(LoggingAspect.class);

	@AfterThrowing(pointcut = "execution(* com.ansi.service.*Impl.*(..))", throwing = "exception")
	public void logServiceException(Exception exception) {
		LOGGER.error(exception.getMessage(), exception);
	}
}