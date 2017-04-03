function doPluginsType(sObj) {
    'use strict';
    var doPluginsLink;
    var doPluginsPage;
    var doPluginsUnspecified;
    var doPluginsMedia;
    var sObject = sObj || window.s;

    if (window.AppMeasurement) {
        doPluginsLink = sObject.linkType;
        doPluginsMedia = (/^m.*_.*/).test(sObject.pe);
        doPluginsPage = !sObject.linkType && !sObject.clickObject && !doPluginsMedia;
        doPluginsUnspecified = (!sObject.linkType) && sObject.clickObject;
    } else {
        doPluginsUnspecified = sObject.eo;
        doPluginsLink = sObject.lnk && !doPluginsUnspecified;
        doPluginsMedia = (/^m.*_.*/).test(sObject.pe);
        doPluginsPage = !doPluginsUnspecified && !doPluginsLink && !doPluginsMedia;
    }

    return {
        link: !!doPluginsLink,
        page: !!doPluginsPage,
        media: doPluginsMedia,
        unspecified: !!doPluginsUnspecified
    };
}
