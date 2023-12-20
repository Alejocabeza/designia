#!/bin/bash

start: ## Run DB
	docker-compose up -d

stop: ## Stop DB
	docker-compose stop

restart: ## DB Restart Service
	$(MAKE) stop && $(MAKE) start

server: ## Run Server of API
	npm run start:dev

cli-res: ## Run Command for new Resource
	nest g resource
