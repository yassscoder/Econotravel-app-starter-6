package net.econotravel.econotravelapp.domain;

import java.math.BigDecimal;

public class Fruit {
    private String name;
    private BigDecimal price;
    private Integer quantity;

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Fruit(String name, BigDecimal price, Integer quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
