package com.mindhub.homebanking;

import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class HomeBankingApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeBankingApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(ClientRepository clientRepository, AccountRepository accountRepository) {
		return (args) -> {

			Client client1 = new Client("Malba", "Lopez", "malba@hotmail.com");
			clientRepository.save(client1);
			Client client2 = new Client("Chloe", "O'Brian" , "pepe@hotmail.com");
			clientRepository.save(client2);

			Account account1 = new Account("VIN001",LocalDateTime.now(),5000.0, client1);
			accountRepository.save(account1);
			Account account2 = new Account("VIN002",LocalDateTime.now(),7500.0, client1);
			accountRepository.save(account2);
			Account account3 = new Account("VIN003",LocalDateTime.now(),4000.0, client2);
			accountRepository.save(account3);
			Account account4 = new Account("VIN004",LocalDateTime.now(),3500.0, client2);
			accountRepository.save(account4);

//			System.out.println(account1);
		};
	}
}


