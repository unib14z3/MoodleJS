module.exports = (client) => ({
    
    async getSiteInfo() {
        return client.request("core_webservice_get_site_info");
    },

    async getUserInfo() {
        const data = await client.request("core_webservice_get_site_info");

        return {
            siteName: data.sitename,
            siteURL: data.siteurl,
            username: data.username,
            userId: data.userid,
            fullName: data.fullname
        };
    }

});