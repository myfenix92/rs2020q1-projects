﻿const svgImg = {
  clear: `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
      <stop offset="0%" style="stop-color:yellow; stop-opacity:1" />
      <stop offset="100%" style="stop-color:orange ;stop-opacity:1" />
    </radialGradient>
  </defs>
  <symbol id="sun">
    <circle cx="50" cy="50" r="20" fill="url(#gradYellow)" />
    <line x1="50" y1="27" x2="50" y2="2" class="longRay" />
    <line x1="50" y1="73" x2="50" y2="98" class="longRay" />
    <line x1="27" y1="50" x2="2" y2="50" class="longRay" />
    <line x1="73" y1="50" x2="98" y2="50" class="longRay" />
    <line x1="34" y1="34" x2="16" y2="16" class="longRay" />
    <line x1="66" y1="66" x2="84" y2="84" class="longRay" />
    <line x1="34" y1="66" x2="16" y2="84" class="longRay" />
    <line x1="66" y1="34" x2="84" y2="16" class="longRay" />
    <line x1="59" y1="29" x2="66" y2="13" class="shortRay" />
    <line x1="71" y1="42" x2="87" y2="35" class="shortRay" />
    <line x1="71" y1="58.5" x2="87" y2="65" class="shortRay" />
    <line x1="59" y1="71" x2="66" y2="87" class="shortRay" />
    <line x1="41" y1="71" x2="34" y2="87" class="shortRay" />
    <line x1="29.5" y1="58.5" x2="13" y2="66" class="shortRay" />
    <line x1="29" y1="42" x2="13" y2="35" class="shortRay" />
    <line x1="41" y1="29" x2="35" y2="13" class="shortRay" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#sun" />
</svg>`,
  cloudy: `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  drizzle: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="rainDrizzle">
    <line x1="20" y1="2" x2="10" y2="40" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#rainDrizzle" x="15" y="65" />
  <use xlink:href="#rainDrizzle" x="25" y="65" />
  <use xlink:href="#rainDrizzle" x="35" y="65" />
  <use xlink:href="#rainDrizzle" x="45" y="65" />
  <use xlink:href="#whiteCloud" x="10" y="-10" />
</svg>`,
  flurries: `
<svg class="icon flurries" viewBox="0 0 100 100" id="wind">
  <path id="wind1" d="M 8,37 L 35,37" />
  <path id="wind2" d="M 2,45 L 45,45 C65,45 64,25 52,25 C47,24 42,30 44,35" />
  <path id="wind3" d="M 20,55 L 75,55 C90,53 90,35 80,32 C70,28 60,42 70,48 C80,50 80,40 78,41" />
  <path id="wind4" d="M 12,65 L 65,65 C85,68 75,87 65,83 C60,81 60,78 61,76" />
  <path id="wind5" d="M 5,75 L 48,75" />
</svg>`,
  fog_light: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" x="30" y="30" class="reverse-small-cloud" fill="url(#gradGray)" />
  <use id="mist" xlink:href="#mist" x="0" y="30" />
</svg>`,
  fog: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="mist">
    <path d="M5,34 L43,34" />
    <path d="M10,40 L40,40 Q51.5,40 50,35 T60,30 L80,30" />
    <path d="M15,45 L45,45 Q56.5,45 55,40 T65,35 L90,35" />
    <path d="M60,42 L85,42" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradDarkGray)" x="0" y="20" />
  <use xlink:href="#grayCloud" x="30" y="30" class="reverse-small-cloud" fill="url(#gradGray)" />
  <use id="mist" xlink:href="#mist" x="0" y="30" />
</svg>`,
  freezing_drizzle: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#sun" x="-12" y="-18" />
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use id="snowFlake2" xlink:href="#snowFlake" x="30" y="65" />
  <use id="snowFlake4" xlink:href="#snowFlake" x="45" y="65" />
  <use id="snowFlake5" xlink:href="#snowFlake" x="58" y="65" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  freezing_rain_heavy: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="rainDrizzle">
    <line x1="20" y1="2" x2="10" y2="40" />
  </symbol>
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use id="snowFlake1" xlink:href="#snowFlake" x="20" y="55" />
  <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65" />
  <use id="snowFlake3" xlink:href="#snowFlake" x="45" y="60" />
  <use id="snowFlake4" xlink:href="#snowFlake" x="50" y="65" />
  <use id="snowFlake5" xlink:href="#snowFlake" x="63" y="65" />
  <use xlink:href="#rainDrizzle" x="15" y="65" />
  <use xlink:href="#rainDrizzle" x="25" y="65" />
  <use xlink:href="#rainDrizzle" x="35" y="65" />
  <use xlink:href="#rainDrizzle" x="45" y="65" />
  <use xlink:href="#whiteCloud" x="5" y="-7" />
</svg>`,
  freezing_rain_light: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="rainDrizzle">
    <line x1="20" y1="2" x2="10" y2="40" />
  </symbol>
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#sun" x="-12" y="-18" />
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65" />
  <use id="snowFlake4" xlink:href="#snowFlake" x="50" y="65" />
  <use xlink:href="#rainDrizzle" x="25" y="65" />
  <use xlink:href="#rainDrizzle" x="40" y="65" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  freezing_rain: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="rainDrizzle">
    <line x1="20" y1="2" x2="10" y2="40" />
  </symbol>
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#sun" x="-12" y="-18" />
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65" />
  <use id="snowFlake4" xlink:href="#snowFlake" x="50" y="65" />
  <use xlink:href="#rainDrizzle" x="25" y="65" />
  <use xlink:href="#rainDrizzle" x="32" y="65" />
  <use xlink:href="#rainDrizzle" x="40" y="65" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  ice_pellets_heavy: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="icePellet">
    <circle cx="4" cy="4" r="4" fill="#e3fcff" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use id="ice4" xlink:href="#icePellet" x="25" y="65" />
  <use id="ice1" xlink:href="#icePellet" x="35" y="65" />
  <use id="ice2" xlink:href="#icePellet" x="47" y="65" />
  <use id="ice3" xlink:href="#icePellet" x="60" y="65" />
  <use xlink:href="#whiteCloud" x="5" y="-7" />
</svg>`,
  ice_pellets_light: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="icePellet">
    <circle cx="4" cy="4" r="4" fill="#e3fcff" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use id="ice4" xlink:href="#icePellet" x="25" y="65" />
  <use id="ice2" xlink:href="#icePellet" x="47" y="65" />
  <use id="ice3" xlink:href="#icePellet" x="60" y="65" />
  <use xlink:href="#whiteCloud" x="5" y="-7" />
</svg>`,
  ice_pellets: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="icePellet">
    <circle cx="4" cy="4" r="4" fill="#e3fcff" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use id="ice4" xlink:href="#icePellet" x="25" y="65" />
  <use id="ice2" xlink:href="#icePellet" x="47" y="65" />
  <use id="ice3" xlink:href="#icePellet" x="60" y="65" />
  <use xlink:href="#whiteCloud" x="5" y="-7" />
</svg>`,
  mostly_clear: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
      <stop offset="0%" style="stop-color:yellow; stop-opacity:1" />
      <stop offset="100%" style="stop-color:orange ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="sun">
    <circle cx="50" cy="50" r="20" fill="url(#gradYellow)" />
    <line x1="50" y1="27" x2="50" y2="2" class="longRay" />
    <line x1="50" y1="73" x2="50" y2="98" class="longRay" />
    <line x1="27" y1="50" x2="2" y2="50" class="longRay" />
    <line x1="73" y1="50" x2="98" y2="50" class="longRay" />
    <line x1="34" y1="34" x2="16" y2="16" class="longRay" />
    <line x1="66" y1="66" x2="84" y2="84" class="longRay" />
    <line x1="34" y1="66" x2="16" y2="84" class="longRay" />
    <line x1="66" y1="34" x2="84" y2="16" class="longRay" />
    <line x1="59" y1="29" x2="66" y2="13" class="shortRay" />
    <line x1="71" y1="42" x2="87" y2="35" class="shortRay" />
    <line x1="71" y1="58.5" x2="87" y2="65" class="shortRay" />
    <line x1="59" y1="71" x2="66" y2="87" class="shortRay" />
    <line x1="41" y1="71" x2="34" y2="87" class="shortRay" />
    <line x1="29.5" y1="58.5" x2="13" y2="66" class="shortRay" />
    <line x1="29" y1="42" x2="13" y2="35" class="shortRay" />
    <line x1="41" y1="29" x2="35" y2="13" class="shortRay" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#sun" x="-12" y="-18" />
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  mostly_cloudy: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  partly_cloudy: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
      <stop offset="0%" style="stop-color:yellow; stop-opacity:1" />
      <stop offset="100%" style="stop-color:orange ;stop-opacity:1" />
    </radialGradient>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="sun">
    <circle cx="50" cy="50" r="20" fill="url(#gradYellow)" />
    <line x1="50" y1="27" x2="50" y2="2" class="longRay" />
    <line x1="50" y1="73" x2="50" y2="98" class="longRay" />
    <line x1="27" y1="50" x2="2" y2="50" class="longRay" />
    <line x1="73" y1="50" x2="98" y2="50" class="longRay" />
    <line x1="34" y1="34" x2="16" y2="16" class="longRay" />
    <line x1="66" y1="66" x2="84" y2="84" class="longRay" />
    <line x1="34" y1="66" x2="16" y2="84" class="longRay" />
    <line x1="66" y1="34" x2="84" y2="16" class="longRay" />
    <line x1="59" y1="29" x2="66" y2="13" class="shortRay" />
    <line x1="71" y1="42" x2="87" y2="35" class="shortRay" />
    <line x1="71" y1="58.5" x2="87" y2="65" class="shortRay" />
    <line x1="59" y1="71" x2="66" y2="87" class="shortRay" />
    <line x1="41" y1="71" x2="34" y2="87" class="shortRay" />
    <line x1="29.5" y1="58.5" x2="13" y2="66" class="shortRay" />
    <line x1="29" y1="42" x2="13" y2="35" class="shortRay" />
    <line x1="41" y1="29" x2="35" y2="13" class="shortRay" />
  </symbol>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#sun" x="-12" y="-18" />
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  rain_heavy: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="rainDrop">
    <path fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use id="drop4" xlink:href="#rainDrop" x="15" y="65" />
  <use id="drop1" xlink:href="#rainDrop" x="25" y="65" />
  <use id="drop2" xlink:href="#rainDrop" x="37" y="65" />
  <use id="drop3" xlink:href="#rainDrop" x="50" y="65" />
  <use xlink:href="#whiteCloud" x="5" y="-7" />
</svg>`,
  rain_light: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="rainDrop">
    <path fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#sun" x="-12" y="-18" />
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use id="drop1" xlink:href="#rainDrop" x="25" y="65" />
  <use id="drop3" xlink:href="#rainDrop" x="45" y="65" />
  <use xlink:href="#whiteCloud" x="7" />
</svg>`,
  rain: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="rainDrop">
    <path fill="lightblue" d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use id="drop1" xlink:href="#rainDrop" x="25" y="65" />
  <use id="drop3" xlink:href="#rainDrop" x="35" y="65" />
  <use id="drop2" xlink:href="#rainDrop" x="50" y="65" />
  <use xlink:href="#whiteCloud" x="5" y="-7" />
</svg>`,
  snow_heavy: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use id="snowFlake1" xlink:href="#snowFlake" x="20" y="55" />
  <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65" />
  <use id="snowFlake3" xlink:href="#snowFlake" x="45" y="60" />
  <use id="snowFlake4" xlink:href="#snowFlake" x="50" y="65" />
  <use id="snowFlake5" xlink:href="#snowFlake" x="63" y="65" />
  <use xlink:href="#whiteCloud" x="10" y="-15" />
</svg>`,
  snow_light: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65" />
  <use id="snowFlake4" xlink:href="#snowFlake" x="55" y="65" />
  <use xlink:href="#whiteCloud" x="10" y="-15" />
</svg>`,
  snow: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use id="snowFlake1" xlink:href="#snowFlake" x="20" y="55" />
  <use id="snowFlake2" xlink:href="#snowFlake" x="35" y="65" />
  <use id="snowFlake5" xlink:href="#snowFlake" x="63" y="65" />
  <use xlink:href="#whiteCloud" x="10" y="-15" />
</svg>`,
  tstorm: `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <defs>
    <radialGradient id="gradDarkGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="70%" style="stop-color:gray; stop-opacity:1" />
      <stop offset="100%" style="stop-color:dimgray ;stop-opacity:1" />
    </radialGradient>
    <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:white; stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray ;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:darkgray;stop-opacity:1" />
    </linearGradient>
  </defs>
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
  </symbol>
  <symbol id="whiteCloud">
    <path fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
  </symbol>
  <symbol id="thunderBolt">
    <path fill="black" d="M15,0 L1,23 L8,23 L0,40 L15,19 L8,19Z" />
  </symbol>
</svg>
<svg class="icon" viewbox="0 0 100 100">
  <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)" />
  <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)" />
  <use xlink:href="#thunderBolt" x="30" y="61" class="lighting animated infinite flash" />
  <use xlink:href="#whiteCloud" x="7" />
  <use xlink:href="#thunderBolt" x="45" y="56" class="lighting animated infinite flash delay-1s" />
</svg>`,
};

export default svgImg;
