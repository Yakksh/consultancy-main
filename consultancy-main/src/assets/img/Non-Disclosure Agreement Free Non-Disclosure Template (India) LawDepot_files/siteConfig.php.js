var Sequiter=Sequiter||{};Sequiter.SiteConfig=Sequiter.SiteConfig||{};(function(SiteConfig){var CONFIG=JSON.parse('{"requireWebuserDataId":false,"fileStoreService":"\/FileStoreService\/FileStoreService.svc\/","site_family":"LawDepot"}');function GetConfigValue(name,defaultValue){if(typeof(CONFIG[name])==="undefined")return defaultValue;return CONFIG[name];}
SiteConfig.GetConfigValue=GetConfigValue;})(Sequiter.SiteConfig);