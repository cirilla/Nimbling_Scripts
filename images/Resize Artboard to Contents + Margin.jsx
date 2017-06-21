#target Illustrator//  script.name = ResizeArtboardsToContents.jsx;//  script.description = resizes All artboards to the art present on themselves.//  script.author= Herman van Boeijen, www.nimbling.com // 24/10/2013;if ( app.documents.length > 0 ) {    doc = app.activeDocument;    if(!doc.saved){        // Window.alert("This script needs to modify your document. Please save it before running this script.");    }}else{    Window.alert("You must open at least one document.");}// #target "illustrator-19";// if ( app.documents.length > 0) {//     doc = app.activeDocument;//     var activeAB = doc.artboards[doc.artboards.getActiveArtboardIndex()];//     var voorzet = activeAB.name;//     var Newname = prompt("Rename Artboard", voorzet);//     if (Newname){//       activeAB.name = Newname;//     }// }// alert(activeAB);function ResizeArtboardsToContents(doc){    //Get total amount of groups//iterate all Artboards        i = doc.artboards.getActiveArtboardIndex();        var CurrentArtboard = doc.artboards[i];        doc.artboards.setActiveArtboardIndex(i);        // var activeAB = doc.artboards[doc.artboards.getActiveArtboardIndex()];        // alert(activeAB);        //Select everything on artboard        doc.selectObjectsOnActiveArtboard(i);        //Resize artboard to selection        doc.fitArtboardToSelectedArt(i);        var margin = 10;        var ab = 0;        var artPoints = doc.artboards[i].artboardRect;        var left = Math.round(artPoints[0]);        var top = Math.round(artPoints[1]);        var right = Math.round(artPoints[2]);        var bottom = Math.round(artPoints[3]);        var newleft = left - margin;        var newtop = top + margin;        var newright = right + margin;        var newbottom = bottom - margin;        //alert("newleft: " + newleft + " newright: " + newright + " newtop " + newtop + " newbottom " + newbottom);        doc.artboards[i].artboardRect = [newleft,newtop,newright,newbottom];}ResizeArtboardsToContents(doc);