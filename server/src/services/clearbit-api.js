const axiosClient = require('../config/axios');

module.exports = (app) => {
    app.get('/companies/find', async(req, res) => {
        const { domain } = req.query;
        const {data:company} = await axiosClient.get(`companies/find?domain=${domain}`)
        res.send([{ name: company.name, logo: company.logo, type: company.type}]);
    });
}
