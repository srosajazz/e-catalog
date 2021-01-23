package com.sergiorosa.ecatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sergiorosa.ecatalog.entities.Category;


@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
