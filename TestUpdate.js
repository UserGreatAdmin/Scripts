// ==UserScript==
// @name         TestUpdate
// @version      2.0
// @description  This piece of sht finally works
// @author       SN
// @match        http://be.prod.paybis.com/en/user/admin/view/id/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==

var newText = document.createElement ('div');
var result = [];
newText.innerHTML =
                  '<textarea id="infoarea" rows="10"> </textarea>';
document.body.appendChild (newText);

(function() {
    'use strict';
    var table = document.getElementById("yw1");
    var element = table.querySelector("td");
        for (const a of table.querySelectorAll("td")) {
            if (a.textContent.includes("**")) {
                result.push(a.innerHTML + "\n");
               window.jQuery("#infoarea").val(result)
}}})();
GM_addStyle ( `
    #infoarea {
        position:               fixed;
        top:                    0;
        left:                   0;
        font-size:              15px;
        background:             #FFFFFF;
        margin-left:            1070px;
        opacity:                0.85;
        resize:                 none;
    }
` );
