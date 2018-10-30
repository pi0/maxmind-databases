const maxmind = require('maxmind')

// City Lookup
const lookupCity = maxmind.openSync(require('../packages/maxmind-city'))
const city = lookupCity.get('8.8.8.8')

console.log('City:')
console.log(JSON.stringify(city, null, 2))
console.log()

// Country Lookup
const lookupCountry = maxmind.openSync(require('../packages/maxmind-country'))
const country = lookupCountry.get('8.8.8.8')

console.log('Country:')
console.log(JSON.stringify(country, null, 2))
console.log()

// ASN Lookup
const lookupASN = maxmind.openSync(require('../packages/maxmind-asn'))
const asn = lookupASN.get('8.8.8.8')

console.log('ASN:')
console.log(JSON.stringify(asn, null, 2))
console.log()
