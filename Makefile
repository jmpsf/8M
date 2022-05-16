.DEFAULT_GOAL := test

.PHONY: install
install:
	npm install

.PHONY: cypress
cypress:
	npx cypress open

.PHONY: dev
dev:
	npm run dev
