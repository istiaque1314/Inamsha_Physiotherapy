package com.ansi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class CorsConfig {

	@Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:5173"); // Add React frontend origin
        config.addAllowedMethod("*"); // Allow all HTTP methods (GET, POST, etc.)
        config.addAllowedHeader("*"); // Allow all headers
        //config.setAllowCredentials(true) // Allow credentials (cookies, authorization headers)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // Apply to all endpoints
        return new CorsFilter(source);
	}

	@Bean
	public SecurityFilterChain securityFilteChain(HttpSecurity security) throws Exception
	{
		
		security.cors(Customizer.withDefaults());
		security.csrf(AbstractHttpConfigurer::disable);
		
		// securing the end points
		security.authorizeHttpRequests(request-> 
		request.requestMatchers("ansicomm**").authenticated()
        .anyRequest().permitAll());
		
		security.oauth2ResourceServer(authServer-> authServer.jwt(Customizer.withDefaults()));
		
		return security.build();
	}

}
