function myDocuments(){return showDialog("My Documents","/MyDocuments/index.aspx?view=loadPreview&code="+PC,500,339,'plainDialog newmydocumentDialog',0.7);}
var saveAnswersHref='';function saveAnswers(){postTo("/contracts/SaveAnswers.php",{'contract':PU,'variablestring':VS,'dbcountry':dbcountry,'dbregion':dbregion});}
var saveDocument_Callback=null;function saveDocument(format,filename,callback){if(callback)
saveDocument_Callback=callback;if(format==='html')
saveAsHTML(filename);if(format==='doc')
saveAsWord(filename);if(format==='pdf')
saveAsPDF(filename);if(format==='rtf')
saveAsRTF(filename);}
var _save_filename='';var _is_download=false;var _download_save_doc=true;var sharedHashLink='';function saveAsHTML(filename,htmlCallback,isDownload,isSignInRequired){saveAs("html",filename,isDownload,isSignInRequired,htmlCallback);}
function saveAsHTMLCompleteEditor(req,ind,suc){if(suc&&typeof document.getElementById('ctl00$Content$reloadEditor')!=="undefined"){document.getElementById('ifMyDocuments').contentWindow.invalidateCache();setOldContent();parent.__doPostBack('ctl00$Content$reloadEditor',_save_filename);}
else{alert('Error saving document: '+req.responseText);}}
var newWinForDownloadIOS;function saveAsWord(filename,docID,download,isSignInRequired){saveAs("doc",filename,download,isSignInRequired,null,docID);}
function saveAsRTF(filename,docID,download,isSignInRequired){saveAs("rtf",filename,download,isSignInRequired,null,docID);}
function changeAnswers(queryString){trackEvent('Change Answers');if(typeof(queryString)==="undefined"){queryString="?";}
var firstChar=queryString.substr(0,1);if(firstChar!=="?"){queryString="?"+queryString;}
var foundWebuserDataId=null;if(queryString.indexOf("webuser_data_id")===-1){if(typeof(WebuserDataInfo)!=="undefined"&&WebuserDataInfo.id!==null){WebuserDataInfo.AddEvent("change_answers");foundWebuserDataId=WebuserDataInfo.id;}
else if(typeof(webuserDataID)==="number"){foundWebuserDataId=webuserDataID;}
else{var pageQString=getQueryStringValue("webuser_data_id");if(typeof(pageQString)!=="undefined"){foundWebuserDataId=getQueryStringValue("webuser_data_id");}}}
if(foundWebuserDataId!==null){var lastChar=queryString.substr(queryString.length-1);if(lastChar!=="?"&&lastChar!=="&"){queryString+="&";}
queryString=queryString.replace(/(&|\?)webuser_data_id=[^&]*(&|$)/ig,'$1');queryString+="webuser_data_id="+foundWebuserDataId;}
window.location.href="./"+queryString;}
function newAnswerDialog(code,type,criteria,version){if(typeof(code)==="undefined"){alert("No product defined for new document.");return;}
if(typeof(type)==="undefined")type=0;if(typeof(criteria)==="undefined")criteria="";if(typeof(version)==="undefined")version="";saveAllFrames();trackEvent('New');if(getCountry()==="DE"){showDialog("Create New Document","/newDialog.php?code="+code+"&type="+type+"&criteria="+criteria+"&version="+version,410,241,"plainDialog",0.7);}
else{showDialog("Create New Document","/newDialog.php?code="+code+"&type="+type+"&criteria="+criteria+"&version="+version,532,241,"plainDialog",0.7);}}
function saveAsPDF(filename,docID,download,isSignInRequired){saveAs('pdf',filename,null,isSignInRequired);}
function displaySuccess(req,ind,suc){hideMessage();if(!(suc&&req.responseText))
alert("Error saving document: "+req.responseText);else
alert("Document saved successfully.");if(saveDocument_Callback){saveDocument_Callback();saveDocument_Callback=null;}}
function trimString(str){return str.replace(/^\s+/g,'').replace(/\s+$/g,'');}
function toggleEdit(){return goToEditor();}
function goToEditor(){if(_restrictTrialFeatures){openRestrictedFeaturesDialog('Editor');return false;}
trackEvent('Editor');if(cssua.ua.mobile)
alert("You must be on a desktop computer to use the Editor.",{title:"Error"});else{var criteria=getCriteria();var queryStringArray={"code":PC};if(criteria)queryStringArray["ldcn"]=criteria;if(typeof(getExtraQString)==="function"){var extraQString=getExtraQString().split("&");for(var i=0;i<extraQString.length;++i){if(extraQString[i]!==""){var split=extraQString[i].split("=");if(split.length===2&&typeof(queryStringArray[split[0]])==="undefined"){queryStringArray[split[0]]=split[1];}}}}
var queryString="";for(var key in queryStringArray){if(queryString.length!==0)queryString+="&";queryString+=key+"="+queryStringArray[key];}
postTo("/LawDepotEditor/index.aspx?"+queryString,{'outputTemplate':getOutputTemplate(),'editHTML':encodeURIComponent(getObject('outputPage').innerHTML)});}
return false;}
function printDoc(){trackEvent('Print');if(getCookie("doNotShowPrint")==="true"){showDialog('Printing Help','/common/printing/index.aspx',700,450,null,null,null,true);}else{printDocument();}}
function hidePrintingPopWin(callReturnFunc){closeDialog();}
function showSaveAnswersDialog(title,href,width,height,cssClass,overlayOpacity){var vstring=VS;showDialog(title,href,width,height,cssClass,overlayOpacity);postToTarget(href,'ifMyDocuments',{'variablestring':vstring});return false;}
function goToChecklist(url){window.location.href="./"+(typeof(url)!=="undefined"?url:"");}
onJsReady(function(){$(document).ready(function(){if($("form").hasClass("Preview2018")){var hasVisibleLi=false;$(".controls .menuitem-more ul li").each(function(){hasVisibleLi=$(this).css("display")!=="none";if(hasVisibleLi)return false;});if(!hasVisibleLi){$(".controls .menuitem-more").remove();$(".controls li.endList:not(:last)").each(function(){$(this).removeClass("endList");});}else{$(".controls li.endList").each(function(){if(!$(this).hasClass("menuitem-more")){$(this).removeClass("endList");}});}}});});var upgradeInProgress=false;function postMonthlyUpgrade(featureName,url,contractId,originalProductCode){if(upgradeInProgress){return false;}
else{upgradeInProgress=true;}
submitTrackedEvent('Upgrade',featureName,featureName,'Restricted Trial');var f=document.createElement("FORM");f.method="POST";f.action=url;document.body.appendChild(f);var args={'upgradeSubscription':contractId,'products':"code="+originalProductCode+";license=subscription_year_renew,trial_subscription,subscription_monthly_upgrade;selected=subscription_monthly_upgrade:1mm:1mm:"};for(var n in args)
cfi(f,n,args[n]);f.submit();return false;}