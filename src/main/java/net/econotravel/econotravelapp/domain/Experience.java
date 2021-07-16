package net.econotravel.econotravelapp.domain;

import java.math.BigDecimal;

public class Experience {
    private String name;
    private BigDecimal pricePerPerson;

    public Experience(String name, BigDecimal pricePerPerson) {
        this.name = name;
        this.pricePerPerson = pricePerPerson;
    }
}
