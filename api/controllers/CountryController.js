/**
 * CountryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let request = require('request');
module.exports = {
    getCountries: (req, res) => {
        let requestObj = {
            url: gateway.generateGatewayURL(sails.config.custom.gatewayActions.getCountries)
        };
        sails.log.debug(requestObj);
        request.get(requestObj, function (error, response, body) {
            if (error) {
                sails.log.error(error);
                return res.error(error);
            }
            return res.json(JSON.parse(body));
        });
    }
};
