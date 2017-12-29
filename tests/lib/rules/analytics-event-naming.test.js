'use strict';

var rule = require('../../../lib/rules/analytics-event-naming.js'),
    RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('analytics-event-naming', rule, {

    valid: [
        'module.exports = { EVENT_NAME: "event spaced" }',
        'module.exports = { EVENT_NAME: "event" }',
    ],

    invalid: [
        {
            code: 'module.exports = { EVENT_NAME: "event SPACED" }',
            errors: [{
                message: 'The value of event field EVENT_NAME should use lowercase lettering',
                type: 'Property'
            }]
        }, {
            code: 'module.exports = { EVENT_NAME: "event_underscored" }',
            errors: [{
                message: 'The value of event field EVENT_NAME should use only space for separators',
                type: 'Property'
            }]
        }
    ]
});
