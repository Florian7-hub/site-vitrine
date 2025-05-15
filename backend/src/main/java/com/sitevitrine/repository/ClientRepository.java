package com.sitevitrine.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sitevitrine.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
}
