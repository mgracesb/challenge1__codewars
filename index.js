"use strict";

const song = "AWUBBWUBC";
// const song = "AWUBWUBWUBBWUBWUBWUBC";
// const song = "WUBAWUBBWUBCWUB";

function songDecoder(song) {
  const i = song.replace(/WUB/g, "").split("").join(" ");
  console.log(i);
}

songDecoder(song);
