package cl.ufro.dci.electivehelper_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ElectivehelperApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ElectivehelperApiApplication.class, args);
	}

}
