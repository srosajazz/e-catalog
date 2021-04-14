package com.sergiorosa.ecatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sergiorosa.ecatalog.entities.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
