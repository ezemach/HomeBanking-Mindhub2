package com.mindhub.homebanking.controllers;

import com.mindhub.homebanking.dtos.ClientDTO;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@RestController
public class ClientController {
    @Autowired
    private ClientRepository repoClient;

    @RequestMapping("/api/clients")
    public List<ClientDTO> getClients() {

        return repoClient.findAll().stream().map(ClientDTO::new).collect(toList());
    }
    @RequestMapping("/api/clients/{id}")

    public ClientDTO getClients(@PathVariable long id){

    /*return repoClient.findById(id).map(client -> new ClientDTO(client)).orElse(null);*/
        Optional<Client> optionalClient = repoClient.findById(id);
        return optionalClient.map(client -> new ClientDTO(client)).orElse(null);
    }

}
