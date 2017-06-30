# Sitegeist Phoenix Project

A distribution that contains a local fork of Neos.Demo named Sitegeist.Phoenix as site package to demonstrate
the use of Atomic.Fusion, Atomic.Fusion.AFX and Sitegeist.Monocle.

The content and features are the same as Neos.Demo but the Package demonstrates our way of using Neos and Fusion.

## Versioning

*nothing this is a demo and not a real project*
    
## Deployment

*nothing this is a demo and not a real project*

##  Dependencies

installation `composer install`
update `composer update`

### Frontend

```
cd Packages/Sites/Sitegeist.Phoenix/
npm install yarn
yarn
yarn run build 
yarn run watch
```

## Installation

The following commands should get you a running local setup for develop. 

```
composer install
./flow doctrine:migrate
./flow site:import --package-key Sitegeist.Phoenix
./flow user:create --roles Administrator admin password Admin User
./flow server:run
```

## Standards

The standards can be validated with the following cli command.

`composer run lint` - Validates PSR2, Sitegeist.NeosGuidelines

- PSR2 `composer run lint:psr2`
- Sitegeist-NeosGuidelines 1.x https://git.sitegeist.de/sitegeist/Sitegeist.NeosGuidelines
  - `composer run lint:distribution` 
  - `composer run lint:packages` 

## Tests 

*nothing this is a demo and not a real project*
