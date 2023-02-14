
## Description

Simple REST event store built with Nest framework.
  
[Event store](https://www.eventstore.com/event-sourcing)  
[Nest framework](https://github.com/nestjs/nest)

## Performance 
(via rest)  
(MacBook Pro 13-inch, M1, 2020)  
(100k events ~ 30mb in json format)
  
**Insert (no transactions or bulk operations)**  
100k events = 4.2mins ~ 2.1ms / event

**Query (page size = 500)**  
100k events = 16s = 0.16ms / event


## Installation

```bash
$ yarn install
```

## Environment Configuration
```env
EVENT_STORE_MIKRO_ORM_TYPE=mysql 
EVENT_STORE_MIKRO_HOST=localhost
EVENT_STORE_MIKRO_ORM_DB_NAME=event-store
EVENT_STORE_MIKRO_ORM_USER=root
EVENT_STORE_MIKRO_ORM_PASSWORD=
EVENT_STORE_MIKRO_ORM_DEBUG=0
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Nest CLI Commands

```bash
# generate resource 
$ nest generate resource cat

# generate resource 
$ nest generate module cat

# generate controller 
$ nest generate controller cat

# generate service 
$ nest generate service cat
```

