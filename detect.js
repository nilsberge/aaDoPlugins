window.scode_doPlugins = window.scode_doPlugins || [];
window.scode_doPlugins.push(function (s) {
    'use strict';
    window.console.log('s', s);
    window.console.log('s.eo', s.eo);
    window.console.log('s.lnk', s.lnk);
    window.console.log('s.linkObject', s.linkObject);
    window.console.log('s.linkURL', s.linkURL);
    window.console.log('s.linkType', s.linkType);
    window.console.log('s.linkName', s.linkName);
    window.console.log('s.clickObject', s.clickObject);

    var doPluginsLink;
    var doPluginsPage;
    var doPluginsUnspecified;

    if (window.AppMeasurement) {
        doPluginsLink = s.linkType;
        doPluginsPage = !s.linkType && !s.clickObject;
        doPluginsUnspecified = (!s.linkType) && s.clickObject;
    } else {
        doPluginsUnspecified = s.eo;
        doPluginsLink = s.lnk && !doPluginsUnspecified;
        doPluginsPage = !doPluginsUnspecified && !doPluginsLink;
    }

    window.console.log('doPluginsLink', !!doPluginsLink);
    window.console.log('doPluginsPage', !!doPluginsPage);
    window.console.log('doPluginsUnspecified', !!doPluginsUnspecified);
});
