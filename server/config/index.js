const prepareConfiguation = () => {
    const configFilePath = './environment/' + (process.env.NODE_ENV || 'local')
    const { environmentConfig } = require(configFilePath);

    return {
        environmentName: environmentConfig.environmentName,
        mongoConfig: {
            server: environmentConfig.mongoConfig.server
        },
        jwt: {
            auidence: environmentConfig.jwt.auidence,
            issuers: {
                client: {
                    publicKey: environmentConfig.jwt.issuers.client.publicKey
                },
                server: {
                    publicKey: environmentConfig.jwt.issuers.server.publicKey
                }
            }
        }
    }
}

export default prepareConfiguation();