(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();let d=0,q=1;const g=document.querySelector("#countdown-timer-2");let y;const M=()=>{l=w,clearInterval(y),y=setInterval(()=>{l--,g.textContent=`Time left: ${l}`,l<=0&&(clearInterval(y),g.textContent="Time is up!")},1e3)};let t=[{questions:"Who was the Ancient Greek God of the Sun?",options:["Apollo","Hermis","Zoes"],correctAnswer:"Apollo"},{questions:"What artist has the most streams on Spotify?",options:["Drake","The Weekend","Ariana Grande"],correctAnswer:"Drake"},{questions:"What sports car company manufactures the 911?",options:["Porsche","Ferrari","BMW"],correctAnswer:"Porsche"},{questions:"In what country is the Chernobyl nuclear plant located?",options:["Ukraine","Russia","Serbia"],correctAnswer:"Ukraine"},{questions:"How many minutes are in a full week?",options:["10.080","17.000","8.960"],correctAnswer:"10.080"},{questions:"121 Divided by"+11+"is?",options:[11,21,12],correctAnswer:11},{questions:"What is the Next Prime Number after"+7+"?",options:[11,10,14],correctAnswer:11},{questions:"who is this person?",options:["rober downey jr","iron man","your uncel steve"],correctAnswer:"rober downey jr"},{questions:"whats this rappers name?",options:["kendrick lamar","kung fu kenny","the goat"],correctAnswer:"the goat"},{questions:"what was this movies name?",options:["the titanic","titanic","jack and rose story"],correctAnswer:"titanic"}];function Q(){for(let n=0;n<t.length;n++){const e=t[n].options,s=[];for(;e.length>0;){const u=Math.floor(Math.random()*e.length);s.push(e[u]),e.splice(u,1)}t[n].options=s}}function P(n,e){console.log(t[n].correctAnswer,e);let s=!0;return t[n].correctAnswer===e?d++:(d>0&&d--,s=!1),document.getElementById("highscore").innerHTML=d,s}function x(){const n=t,e=[];for(;n.length>0;){const s=Math.floor(Math.random()*n.length);e.push(n[s]),n.splice(s,1)}t=e}let i="";const v=t[0].questions,k=t[1].questions,A=t[2].questions,I=t[3].questions,N=t[4].questions,T=t[5].questions,C=t[6].questions,p=t[7].questions,f=t[8].questions,h=t[9].questions;document.querySelector("#start-btn").addEventListener("click",E);let S=!1;function E(){if(i=document.getElementById("playerName").value,i.length===0){alert("Please provide a name, we want to track you :)");return}let n=i.slice(0,1);n=n.toLocaleUpperCase();let e=i.slice(1,i.length);e=e.toLocaleLowerCase();let s=n+e;S||(alert("hi "+s+", Good luck with ur game"),S=!0),document.querySelector(".start").classList.add("goaway"),b()}let L=[];function H(n){if(L.length===t.length)return;L.push(n);const e=t[n].questions;document.querySelector("#question").textContent=e,document.querySelector("#ans1").textContent=t[n].options[0],document.querySelector("#ans2").textContent=t[n].options[1],document.querySelector("#ans3").textContent=t[n].options[2],e===p&&(document.querySelector(".ironman").classList.remove("goaway"),document.querySelector(".kendrick").classList.add("disappear"),document.querySelector(".titanic").classList.add("disappear")),e===f&&(document.querySelector(".kendrick").classList.remove("goaway"),document.querySelector(".ironman").classList.add("disappear"),document.querySelector(".titanic").classList.add("disappear")),e===h&&(document.querySelector(".titanic").classList.remove("goaway"),document.querySelector(".ironman").classList.add("disappear"),document.querySelector(".kendrick").classList.add("disappear")),document.querySelector("html").classList.remove("questiongroup1","questiongroup2","questiongroup3"),e===v||e===k||e===A||e===I?document.querySelector("html").classList.add("questiongroup1"):e===N||e===T||e===C?document.querySelector("html").classList.add("questiongroup2"):(e===p||e===f||e===h)&&document.querySelector("html").classList.add("questiongroup3"),l=w}const w=60;let l=w,c=0,m=null;function b(){x(),c=0,q=1,document.querySelector("#countdown-timer").classList.remove("goaway");const n=10,e=document.querySelector("#countdown-timer");let s=n*60;const u=setInterval(()=>{s--;const r=Math.floor(s/60),a=s%60;e.textContent=`QUIZ Time remaining: ${r}:${a}`,s<=0&&(clearInterval(u),e.textContent="Time is up!")},1e3);document.querySelector("#countdown-timer-2").classList.remove("goaway"),Q(),document.querySelector(".firststep").classList.remove("goaway"),document.querySelector("#questionNumber").textContent="Qwestion "+q;let o=t[c].questions;document.querySelector("#question").innerHTML=o,document.querySelector("#ans1").innerHTML=t[c].options[0],document.querySelector("#ans2").innerHTML=t[c].options[1],document.querySelector("#ans3").innerHTML=t[c].options[2],document.querySelector("#ans1").addEventListener("click",function(){m=t[c].options[0]}),document.querySelector("#ans2").addEventListener("click",function(){m=t[c].options[1]}),document.querySelector("#ans3").addEventListener("click",function(){m=t[c].options[2]}),o===v||o===k||o===A||o===I?document.querySelector("html").classList.add("questiongroup1"):o===N||o===T||o===C?document.querySelector("html").classList.add("questiongroup2"):(o===p||o===f||o===h)&&document.querySelector("html").classList.add("questiongroup3")}function U(){q++,P(c,m),c++,document.querySelector("#questionNumber").textContent="Qwestion "+q,M(),document.querySelector(".ironman").classList.add("goaway"),document.querySelector(".kendrick").classList.add("goaway"),document.querySelector(".titanic").classList.add("goaway"),c<t.length?H(c):(W(),clearInterval(countdownInterval))}function W(){document.querySelector(".firststep").classList.add("goaway"),document.querySelector("#countdown-timer").classList.add("goaway"),document.querySelector("#countdown-timer-2").classList.add("goaway"),document.querySelector("html").classList.remove("questiongroup1","questiongroup2","questiongroup3"),document.querySelector(".final").classList.remove("goaway")}function O(){document.querySelector(".final").classList.add("goaway"),i=prompt("Please enter your name:"),alert("Hello "+i+" lets go again!"),(!i||i.length===0)&&O(),b()}document.querySelector("#repeat").addEventListener("click",O);document.querySelector("#submit").addEventListener("click",U);
