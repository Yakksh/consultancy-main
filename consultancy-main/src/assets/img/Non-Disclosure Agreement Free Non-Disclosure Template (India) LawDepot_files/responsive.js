var responsiveclasses;function isFluidLayout(){return typeof(fluidLayout)!="undefined"&&fluidLayout;}
var allScreenSizes=[{name:"sm",size:0},{name:"md",size:767},{name:"lg",size:990},{name:"xl",size:1190}];function getCurrentScreenSizePosition(){var pageWidth;if(document.querySelector("html").classList.contains("ua-mobile"))pageWidth=getWindowWidthWithoutScrollbar();else pageWidth=document.querySelector("html").offsetWidth+getWindowWdithWithScrollbar()-getWindowWidthWithoutScrollbar();for(var i=(allScreenSizes.length-1);i>=0;--i){if(pageWidth>allScreenSizes[i].size)return i;}}
function getWindowWidthWithoutScrollbar(){return document.documentElement.clientWidth||document.body.clientWidth;}
function getWindowWdithWithScrollbar(){return window.innerWidth;}
function getCurrentScreenSize(){if(isInDialog())return"";return allScreenSizes[getCurrentScreenSizePosition()].name;}
function getResponsiveSizeClasses(){var responsiveClasses="";if(isInDialog())return;else{var ss=getCurrentScreenSizePosition();responsiveClasses=allScreenSizes[ss].name;for(var i=ss==allScreenSizes.length-1?1:0;i<=ss;++i){var current=allScreenSizes[i].name;for(var j=i+1;j<allScreenSizes.length-(i==0?1:0);++j){current+="-"+allScreenSizes[j].name;if(j>=ss)responsiveClasses+=" "+current;}}}
return responsiveClasses;}
addClasses(document.querySelector("html"),getResponsiveSizeClasses());function initResponsiveSizes(){if(!isInDialog()){setScreenSize();setIsPhone();}}
window.addEventListener("postStartUp",initResponsiveSizes);var vhScreenSize="__ScreenSize";function setScreenSize(){if(typeof(vh)!="undefined")vh.S(vhScreenSize,getCurrentScreenSize());}
function getAllResponsiveClasses(){var allClasses="";for(var i=0;i<allScreenSizes.length;++i){var current="";for(var j=i;j<allScreenSizes.length-(i==0?1:0);++j){current+=(j!=i?"-":"")+allScreenSizes[j].name;allClasses+=" "+current;}}
return allClasses;}
window.addEventListener('resize',function(){if(isInDialog())return;var allClasses=getAllResponsiveClasses();var responsiveclasses=getResponsiveSizeClasses();removeClasses(document.querySelector("html"),allClasses);addClasses(document.querySelector("html"),responsiveclasses)
setScreenSize();var iframe=getDialogIframe();if(iframeHasContent(iframe)){removeClasses(iframe.contentWindow.document.querySelector("html"),allClasses)
if(typeof(iframe.setScreenSize)=="function")iframe.setScreenSize();}});function modifyClasses(element,classesString,addClass){var classArray=[];if(typeof(classesString)=="string"){classArray=classesString.split(' ');}
for(var i=0;i<classArray.length;i++){if(classArray[i]!==""){if(addClass){element.classList.add(classArray[i]);}
else{element.classList.remove(classArray[i]);}}}}
function removeClasses(element,classesString){modifyClasses(element,classesString,false);}
function addClasses(element,classesString){modifyClasses(element,classesString,true);}