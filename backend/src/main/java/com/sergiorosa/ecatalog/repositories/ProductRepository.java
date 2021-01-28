package com.sergiorosa.ecatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sergiorosa.ecatalog.entities.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
