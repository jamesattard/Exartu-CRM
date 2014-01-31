var dbSeed = {
    /*
     * Add to system hierarchy the basic obj types
     * 	objGroupType Contactable contains:
     *    - objType Customer
     *    - objType Employee
     *    - objType Contact
     *  Job:
     *    - objType Direct Hire
     *    - objType Temporary
     */
    seedSystemLookUps: seedSystemLookUps,
    seedSystemObjTypes: seedSystemObjTypes,
    seedSystemRelations: seedSystemRelations
}

Meteor.startup(function () {
    /*
     * Seed database
     * Execute all function defined in seedSystemObjTypes
     */
    _.forEach(dbSeed, function (seedFn) {
        seedFn.call();
    });
    var accountsConfig = Accounts.loginServiceConfiguration._collection;
    var googleConfig = accountsConfig.findOne({
        "service": 'google'
    });
    if (!ExartuConfig)
    {
        console.log('can not configure google login or smtp credentials because no Exartu config info is set up');
    }
    else
    {
    if (!googleConfig) {
        //read the config
        if (!ExartuConfig.GoogleConfig_clientId) {
            console.log('can not config google login, client\'s credential not found');

        } else
        {
            accountsConfig.insert({
                service: "google",
                clientId: ExartuConfig.GoogleConfig_clientId,
                secret: ExartuConfig.GoogleConfig_clientSecret
            });
            console.log('google accounts configured successfully');
        }
    }
    }
});