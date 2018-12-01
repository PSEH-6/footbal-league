/**
 * StandingsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let request = require('request');
module.exports = {
    getStandings: (req, res) => {
        let requestObj = {
            url: gateway.generateGatewayURL(sails.config.custom.gatewayActions.getStandings, {
                'league_id': req.param('leagueId')
            })
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

