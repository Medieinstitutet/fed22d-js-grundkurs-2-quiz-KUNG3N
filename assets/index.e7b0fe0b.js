(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const t=[{questions:"Who was the Ancient Greek God of the Sun?",options:["Apollo","Hermis","Zoes"],correctAnswer:"Apollo"},{questions:"What artist has the most streams on Spotify?",options:["Drake","The Weekend","Ariana Grande"],correctAnswer:"Drake"},{questions:"What sports car company manufactures the 911?",options:["Porsche","Ferrari","BMW"],correctAnswer:"Porsche"},{questions:"In what country is the Chernobyl nuclear plant located?",options:["Ukraine","Russia","Serbia"],correctAnswer:"Ukraine"},{questions:"How many minutes are in a full week?",options:[10.08,17,8.96],correctAnswer:10.08},{questions:"121 Divided by"+11+"is?",options:[11,21,12],correctAnswer:11},{questions:"What is the Next Prime Number after"+7+"?",options:[11,10,14],correctAnswer:11},{questions:"who is this person?",options:["rober downey jr","iron man","your uncel steve"],correctAnswer:"rober downey jr"},{questions:"whats this rappers name?",options:["kendrick lamar","kung fu kenny","the goat"],correctAnswer:"the goat"},{questions:"what was this movies name?",options:["the titanic","titanic","jack and rose story"],correctAnswer:"titanic"}];function Q(){for(let o=0;o<t.length;o++){const e=t[o].options,i=[];for(;e.length>0;){const u=Math.floor(Math.random()*e.length);i.push(e[u]),e.splice(u,1)}t[o].options=i}}function P(o,e){return t[o].correctAnswer===e}function E(){let o=Math.floor(Math.random()*t.length);return o>=t.length||o<0?null:o}let l="";const S=t[0].questions,L=t[1].questions,v=t[2].questions,k=t[3].questions,A=t[4].questions,I=t[5].questions,T=t[6].questions,p=t[7].questions,f=t[8].questions,h=t[9].questions;document.querySelector("#start-btn").addEventListener("click",N);let g=!1;function N(){l=document.getElementById("playerName").value;let o=l.slice(0,1);o=o.toLocaleUpperCase();let e=l.slice(1,l.length);e=e.toLocaleLowerCase();let i=o+e;g||(alert("hi "+i+", Good luck with ur game"),g=!0),document.querySelector(".start").classList.add("goaway"),D()}let y=[];function U(){if(y.length===t.length){C();return}let o;do o=Math.floor(Math.random()*t.length);while(y.includes(o));const e=t[o].questions;y.push(o),document.querySelector("#question").textContent=e,document.querySelector("#ans1").textContent=t[o].options[0],document.querySelector("#ans2").textContent=t[o].options[1],document.querySelector("#ans3").textContent=t[o].options[2],e===p&&(document.querySelector(".ironman").classList.remove("goaway"),document.querySelector(".kendrick").classList.add("disappear"),document.querySelector(".titanic").classList.add("disappear")),e===f&&(document.querySelector(".kendrick").classList.remove("goaway"),document.querySelector(".ironman").classList.add("disappear"),document.querySelector(".titanic").classList.add("disappear")),e===h&&(document.querySelector(".titanic").classList.remove("goaway"),document.querySelector(".ironman").classList.add("disappear"),document.querySelector(".kendrick").classList.add("disappear")),document.querySelector("html").classList.remove("questiongroup1","questiongroup2","questiongroup3"),e===S||e===L||e===v||e===k?document.querySelector("html").classList.add("questiongroup1"):e===A||e===I||e===T?document.querySelector("html").classList.add("questiongroup2"):(e===p||e===f||e===h)&&document.querySelector("html").classList.add("questiongroup3"),a=w}const w=60;let a=w,c=E(),d=null;const W=setInterval(()=>{a--,countdownTimer2.textContent=`Time left: ${a}`,a<=0&&(clearInterval(W),countdownTimer2.textContent="Time is up!")},1e3);function D(){document.querySelector("#countdown-timer").classList.remove("goaway");const o=10,e=document.querySelector("#countdown-timer");let i=o*60;const u=setInterval(()=>{i--;const q=Math.floor(i/60),M=i%60;e.textContent=`QUIZ Time remaining: ${q}:${M}`,i<=0&&(clearInterval(u),e.textContent="Time is up!")},1e3);document.querySelector("#countdown-timer-2").classList.remove("goaway");const n=document.querySelector("#countdown-timer-2");let s=0;Q(),document.querySelector(".firststep").classList.remove("goaway"),document.querySelector("#questionNumber").textContent="Qwestion "+s;let r=t[c].questions;document.querySelector("#question").innerHTML=r,document.querySelector("#ans1").innerHTML=t[c].options[0],document.querySelector("#ans2").innerHTML=t[c].options[1],document.querySelector("#ans3").innerHTML=t[c].options[2],document.querySelector("#ans1").addEventListener("click",function(){d=t[c].options[0]}),document.querySelector("#ans2").addEventListener("click",function(){d=t[c].options[1]}),document.querySelector("#ans3").addEventListener("click",function(){d=t[c].options[2]}),r===S||r===L||r===v||r===k?document.querySelector("html").classList.add("questiongroup1"):r===A||r===I||r===T?document.querySelector("html").classList.add("questiongroup2"):(r===p||r===f||r===h)&&document.querySelector("html").classList.add("questiongroup3");const x=document.querySelector("#submit");let m;const b=()=>{a=w,clearInterval(m),m=setInterval(()=>{a--,n.textContent=`Time left: ${a}`,a<=0&&(clearInterval(m),n.textContent="Time is up!")},1e3)},O=function(){s++;const q=P(c,d);console.log(q),document.querySelector("#questionNumber").textContent="Qwestion "+s,b(),document.querySelector(".ironman").classList.add("goaway"),document.querySelector(".kendrick").classList.add("goaway"),document.querySelector(".titanic").classList.add("goaway"),c<t.length?U():(C(),clearInterval(u))};x.addEventListener("click",O)}function C(){document.querySelector(".firststep").classList.add("goaway"),document.querySelector("#countdown-timer").classList.add("goaway"),document.querySelector("#countdown-timer-2").classList.add("goaway"),document.querySelector("html").classList.remove("questiongroup1","questiongroup2","questiongroup3"),document.querySelector(".final").classList.remove("goaway")}function H(){document.querySelector(".final").classList.add("goaway"),l="",l=prompt("Please enter your name:"),alert("Hello "+l+" lets go again!"),N()}document.querySelector("#repeat").addEventListener("click",H);
