function isInDialog(includeFramed){if(typeof(includeFramed)=="undefined")includeFramed=true;var parentDiff=(parent!=self);var isCrossFrame=isCrossOriginFrame();if(!includeFramed){var framed=Sequiter.QueryString.GetQueryStringValue('framed')*1;}
return parentDiff&&!isCrossFrame&&(includeFramed||!framed);}
function isCrossOriginFrame(frame){try{return(!frame&&parent.location.hostname!=location.hostname)||(frame&&frame.contentWindow.location.hostname!=location.hostname);}catch(e){return true;}}
function iframeHasContent(iframe){var hasContent=false;if(iframe){try{if(iframe.contentWindow.location.href!="about:blank"){hasContent=true;}}
catch(e){hasContent=true;}}
return hasContent;}
function getDialogIframe(){var iframe=document.querySelector("#ifMyDocuments");if(!iframe){iframe=document.querySelector("#ifDialog");}
return iframe;}