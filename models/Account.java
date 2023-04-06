package com.mindhub.homebanking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long Id;

    private String number;
    private LocalDateTime creationDate;
    private double balance;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="owner_id")
    private Client owner;


    public Account (){ }

    public Account(String number, LocalDateTime date, double balance, Client owner) {
        this.number = number;
        this.creationDate = date;
        this.balance = balance;
        this.owner = owner;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @JsonIgnore
    public Client getOwner(){
        return owner;
    }

    public void setOwner (Client owner){
        this.owner = owner;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }
}
