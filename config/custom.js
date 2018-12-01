/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */
let APIKey = '9bb66184e0c8145384fd2cc0f7b914ada57b4e8fd2e4d6d586adcc27c257a978';
let gatewayActions = {
  getCountries: 'get_countries',
  getLeagues: 'get_leagues',
  getStandings: 'get_standings'
};
let gatewayAPIURL = 'https://apifootball.com/api/?';
module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  getewayAPI: gatewayAPIURL,
  gatewayAPIKey: APIKey,
  gatewayActions: gatewayActions
};
