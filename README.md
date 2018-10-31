# Maxmind Databases

[![CircleCI](https://img.shields.io/circleci/project/github/pi0/maxmind-databases.svg?style=flat-square)](https://circleci.com/gh/pi0/maxmind-databases)

> Maxmind / Geolite2 databases for [node-maxmind](https://github.com/runk/node-maxmind)

## Packages

✅ All packages are auto built and published every week.

Package  | Size
---------|------------------
[![npm version](https://badge.fury.io/js/maxmind-asn.svg)](https://badge.fury.io/js/maxmind-asn) | [![install size](https://packagephobia.now.sh/badge?p=maxmind-asn)](https://packagephobia.now.sh/result?p=maxmind-asn)
[![npm version](https://badge.fury.io/js/maxmind-country.svg)](https://badge.fury.io/js/maxmind-country) | [![install size](https://packagephobia.now.sh/badge?p=maxmind-country)](https://packagephobia.now.sh/result?p=maxmind-country)
[![npm version](https://badge.fury.io/js/maxmind-city.svg)](https://badge.fury.io/js/maxmind-city) | [![install size](https://packagephobia.now.sh/badge?p=maxmind-city)](https://packagephobia.now.sh/result?p=maxmind-city)


## Usage

Require maxmind:

```js
const maxmind = require('maxmind')
```

Load either `max-city`, `max-country` or `max-asn` packages:

```js
// City Lookup
const lookupCity = maxmind.openSync(require('maxmind-city'))
const city = lookupCity.get('8.8.8.8')

// Country Lookup
const lookupCountry = maxmind.openSync(require('maxmind-country'))
const country = lookupCountry.get('8.8.8.8')

// ASN Lookup
const lookupASN = maxmind.openSync(require('maxmind-asn'))
const asn = lookupASN.get('8.8.8.8')
```

## Example results

**ASN**

```json
{
  "autonomous_system_number": 15169,
  "autonomous_system_organization": "Google LLC"
}
```

**Country**

```json
{
  "continent": {
    "code": "NA",
    "geoname_id": 6255149,
    "names": {
      "de": "Nordamerika",
      "en": "North America",
      "es": "Norteamérica",
      "fr": "Amérique du Nord",
      "ja": "北アメリカ",
      "pt-BR": "América do Norte",
      "ru": "Северная Америка",
      "zh-CN": "北美洲"
    }
  },
  "country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  },
  "registered_country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  }
}
```

**City**

**NOTE:** Latitude and longitude are not precise and should not be used to identify a particular street address or household.

```json
{
  "continent": {
    "code": "NA",
    "geoname_id": 6255149,
    "names": {
      "de": "Nordamerika",
      "en": "North America",
      "es": "Norteamérica",
      "fr": "Amérique du Nord",
      "ja": "北アメリカ",
      "pt-BR": "América do Norte",
      "ru": "Северная Америка",
      "zh-CN": "北美洲"
    }
  },
  "country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  },
  "location": {
    "accuracy_radius": 1000,
    "latitude": 37.751,
    "longitude": -97.822
  },
  "registered_country": {
    "geoname_id": 6252001,
    "iso_code": "US",
    "names": {
      "de": "USA",
      "en": "United States",
      "es": "Estados Unidos",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "pt-BR": "Estados Unidos",
      "ru": "США",
      "zh-CN": "美国"
    }
  }
}
```

## Development

Run `./scripts/fetch` and `./scripts/update` to fetch latest databases.

## License

This product includes GeoLite2 data created by MaxMind, available from [http://www.maxmind.com](http://www.maxmind.com)

Packages published under MIT
