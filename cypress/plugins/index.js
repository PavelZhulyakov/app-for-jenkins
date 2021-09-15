const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    allureWriter(on, config);
    require('cypress-grep/src/plugin')(config);
    return config;
};
