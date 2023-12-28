#!/bin/bash

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

start: ## Run DB
	docker-compose up -d && $(MAKE) server

stop: ## Stop DB
	docker-compose stop

restart: ## DB Restart Service
	$(MAKE) stop && $(MAKE) start

server: ## Run Server of API
	npm run start:dev

cli-res: ## Run Command for new Resource
	nest g resource

cli-mo: ## Run Command for new module
	nest g module

cli-s: ## Run Command for new service
	nest g service
