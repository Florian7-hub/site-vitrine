package com.sitevitrine.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Bean;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Désactive CSRF
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // Autorise toutes les requêtes sans authentification
            )
            .httpBasic(basic -> basic.disable()) // Désactive l'authentification basique
            .formLogin(login -> login.disable()); // Désactive totalement la page de login

        return http.build();
    }
}
