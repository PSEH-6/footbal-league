module.exports = {
    generateGatewayURL: (action, paramObj) => {
        let str = "";
        let params = {
            action: action,
            ...paramObj,
            APIkey: sails.config.custom.gatewayAPIKey
        };
        for (let key in params) {
            if (str != "") {
                str += "&";
            }
            str += params[key] ? key + "=" + encodeURIComponent(params[key]) : '';
        }
        return sails.config.custom.getewayAPI + str;
    }
};