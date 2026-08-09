/* ═══════════════════════════════════════════════════════════════════
   DFS LOGO MAKER v2 — READABLE MARK SOURCE (102 marks, 17 categories)
   This file is NOT loaded by any page. It is the hand-editable source
   for the minified LM_MARKS block inlined in /logo-maker/index.html
   and the per-trade pages. To change a mark: edit here, minify with
   terser (--compress --mangle), and replace the corresponding block.
   Contract: 100×100 box · filled silhouettes · one accent layer ·
   punches via destination-out inside save/restore · ES5 only ·
   ⛔ NEVER a hexagon (brand guard). Built Session 57, Aug 9 2026.
   ═══════════════════════════════════════════════════════════════════ */
/* framing — 6 concepts */

LM_MARKS.push({
  id: 'framing-kingpost', cat: 'framing', name: 'King Post Truss',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.moveTo(10, 80); c.lineTo(50, 18); c.lineTo(90, 80); c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.moveTo(25, 71); c.lineTo(46, 71); c.lineTo(46, 39); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(75, 71); c.lineTo(54, 71); c.lineTo(54, 39); c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    c.fillRect(10, 85, 80, 7);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'framing-hammersquare', cat: 'framing', name: 'Hammer And Square',
  draw: function (c, M, A) {
    function ham(cc) {
      cc.beginPath();
      /* head with claw notch, local coords, up = -y */
      cc.moveTo(-16, -13); cc.lineTo(-16, -29); cc.lineTo(-6, -29); cc.lineTo(0, -20);
      cc.lineTo(6, -29); cc.lineTo(16, -29); cc.lineTo(16, -13); cc.closePath();
      /* handle */
      cc.moveTo(-5, -14); cc.lineTo(5, -14); cc.lineTo(6.5, 30); cc.lineTo(-6.5, 30); cc.closePath();
    }
    c.save();
    /* framing square (main) */
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(16, 16); c.lineTo(86, 16); c.lineTo(86, 30); c.lineTo(30, 30);
    c.lineTo(30, 88); c.lineTo(16, 88); c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    /* hang hole in the corner */
    c.beginPath(); c.arc(23, 23, 3.2, 0, Math.PI * 2); c.fill();
    /* punch swath for hammer */
    c.save(); c.translate(58, 57); c.rotate(Math.PI / 4);
    ham(c);
    c.fill();
    c.lineWidth = 7; c.lineJoin = 'round'; c.strokeStyle = '#000'; c.stroke();
    c.restore();
    c.globalCompositeOperation = 'source-over';
    /* hammer accent */
    c.save(); c.translate(58, 57); c.rotate(Math.PI / 4);
    c.fillStyle = A;
    ham(c); c.fill();
    c.restore();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'framing-gable', cat: 'framing', name: 'Stud Wall Gable',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.moveTo(14, 82); c.lineTo(14, 54); c.lineTo(50, 20); c.lineTo(86, 54); c.lineTo(86, 82); c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.moveTo(22, 74); c.lineTo(22, 57); c.lineTo(50, 31); c.lineTo(78, 57); c.lineTo(78, 74); c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = M;
    c.fillRect(47, 30, 6, 46);
    c.fillRect(33, 46, 6, 30);
    c.fillRect(61, 46, 6, 30);
    c.fillStyle = A;
    c.fillRect(14, 86, 72, 7);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'framing-sawblade', cat: 'framing', name: 'Circular Saw Blade',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.arc(50, 48, 34, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'destination-out';
    var i, a;
    /* 12 hooked saw teeth */
    for (i = 0; i < 12; i++) {
      c.save(); c.translate(50, 48); c.rotate(i * Math.PI / 6);
      c.beginPath(); c.moveTo(0, -44); c.lineTo(0, -26); c.lineTo(-9, -44); c.closePath(); c.fill();
      c.restore();
    }
    for (i = 0; i < 4; i++) {
      a = i * Math.PI / 2 + 0.393;
      c.beginPath(); c.arc(50 + 17 * Math.cos(a), 48 + 17 * Math.sin(a), 3.5, 0, Math.PI * 2); c.fill();
    }
    c.beginPath(); c.arc(50, 48, 10.5, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    c.beginPath(); c.arc(50, 48, 6.5, 0, Math.PI * 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'framing-level', cat: 'framing', name: 'Level And Bubble',
  draw: function (c, M, A) {
    function rr(cc, x, y, w, h, r) {
      cc.beginPath();
      cc.moveTo(x + r, y);
      cc.arcTo(x + w, y, x + w, y + h, r);
      cc.arcTo(x + w, y + h, x, y + h, r);
      cc.arcTo(x, y + h, x, y, r);
      cc.arcTo(x, y, x + w, y, r);
      cc.closePath();
    }
    c.save();
    c.fillStyle = M;
    rr(c, 10, 36, 80, 26, 6); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(20, 36, 3.5, 26);
    c.fillRect(76.5, 36, 3.5, 26);
    rr(c, 34, 42, 32, 16, 4); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = M;
    c.fillRect(38, 42, 3, 16);
    c.fillRect(59, 42, 3, 16);
    c.fillStyle = A;
    c.beginPath(); c.arc(50, 50, 5, 0, Math.PI * 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'framing-timber', cat: 'framing', name: 'Stacked Timber',
  draw: function (c, M, A) {
    function rr(cc, x, y, w, h, r) {
      cc.beginPath();
      cc.moveTo(x + r, y);
      cc.arcTo(x + w, y, x + w, y + h, r);
      cc.arcTo(x + w, y + h, x, y + h, r);
      cc.arcTo(x, y + h, x, y, r);
      cc.arcTo(x, y, x + w, y, r);
      cc.closePath();
    }
    function grain(cc, cx, cy) {
      /* nested square ring, like a sawn beam end */
      cc.lineWidth = 3; cc.strokeStyle = '#000';
      cc.beginPath();
      cc.moveTo(cx - 3.5, cy - 7.5);
      cc.arcTo(cx + 7.5, cy - 7.5, cx + 7.5, cy + 7.5, 4);
      cc.arcTo(cx + 7.5, cy + 7.5, cx - 7.5, cy + 7.5, 4);
      cc.arcTo(cx - 7.5, cy + 7.5, cx - 7.5, cy - 7.5, 4);
      cc.arcTo(cx - 7.5, cy - 7.5, cx + 7.5, cy - 7.5, 4);
      cc.closePath();
      cc.stroke();
    }
    c.save();
    c.fillStyle = M;
    rr(c, 18, 50, 28, 28, 4); c.fill();
    rr(c, 54, 50, 28, 28, 4); c.fill();
    c.globalCompositeOperation = 'destination-out';
    grain(c, 32, 64); grain(c, 68, 64);
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    rr(c, 36, 18, 28, 28, 4); c.fill();
    c.globalCompositeOperation = 'destination-out';
    grain(c, 50, 32);
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});
/* roofing — 6 concepts */

LM_MARKS.push({
  id: 'roofing-ridgeline', cat: 'roofing', name: 'Ridge And Chimney',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* roof chevron band */
    c.beginPath();
    c.moveTo(8, 78); c.lineTo(50, 26); c.lineTo(92, 78);
    c.lineTo(76, 78); c.lineTo(50, 46); c.lineTo(24, 78);
    c.closePath(); c.fill();
    /* chimney on left slope near the ridge, merged with band */
    c.fillRect(27, 32, 13, 42);
    c.fillRect(24, 26, 19, 6);
    /* accent base bar */
    c.fillStyle = A;
    c.fillRect(24, 84, 52, 6);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'roofing-gablebadge', cat: 'roofing', name: 'House Gable Badge',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* shield */
    c.beginPath();
    c.moveTo(26, 14); c.lineTo(74, 14);
    c.arcTo(80, 14, 80, 20, 6);
    c.lineTo(80, 56); c.lineTo(50, 86); c.lineTo(20, 56);
    c.lineTo(20, 20);
    c.arcTo(20, 14, 26, 14, 6);
    c.closePath(); c.fill();
    /* punch house silhouette */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(30, 50); c.lineTo(50, 30); c.lineTo(70, 50);
    c.lineTo(63, 50); c.lineTo(63, 66); c.lineTo(37, 66); c.lineTo(37, 50);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent door */
    c.fillStyle = A;
    c.fillRect(45.5, 52, 9, 11);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'roofing-shingles', cat: 'roofing', name: 'Shingle Courses',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.fillRect(20, 30, 60, 48);
    c.globalCompositeOperation = 'destination-out';
    /* course lines */
    c.fillRect(20, 44, 60, 3);
    c.fillRect(20, 61, 60, 3);
    /* tab slots (lower half of each course only) */
    c.fillRect(39, 37, 3, 7); c.fillRect(59, 37, 3, 7);
    c.fillRect(29, 54, 3, 7); c.fillRect(49, 54, 3, 7); c.fillRect(69, 54, 3, 7);
    c.fillRect(39, 71, 3, 7); c.fillRect(59, 71, 3, 7);
    c.globalCompositeOperation = 'source-over';
    /* accent ridge cap */
    c.fillStyle = A;
    c.fillRect(20, 19, 60, 8);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'roofing-ladder', cat: 'roofing', name: 'Ladder To Eave',
  draw: function (c, M, A) {
    function ladder(cc) {
      cc.beginPath();
      cc.rect(-36, -11, 72, 6);
      cc.rect(-36, 5, 72, 6);
      var i;
      for (i = 0; i < 5; i++) { cc.rect(-27 + i * 13, -5, 5, 10); }
    }
    c.save();
    /* roof plane (main) */
    c.fillStyle = M;
    c.beginPath(); c.moveTo(8, 16); c.lineTo(78, 16); c.lineTo(8, 64); c.closePath(); c.fill();
    /* punched shingle course lines on roof plane */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(16, 30, 46, 3);
    c.fillRect(16, 44, 26, 3);
    /* punch swath for ladder */
    c.save(); c.translate(55, 53); c.rotate(-0.6);
    ladder(c); c.fill();
    c.lineWidth = 7; c.lineJoin = 'round'; c.stroke();
    c.restore();
    c.globalCompositeOperation = 'source-over';
    /* ladder accent */
    c.save(); c.translate(55, 53); c.rotate(-0.6);
    c.fillStyle = A;
    ladder(c); c.fill();
    c.restore();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'roofing-hipcircle', cat: 'roofing', name: 'Hip Roof Emblem',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.arc(50, 49, 36, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 49, 28, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* house body */
    c.fillStyle = M;
    c.fillRect(35, 57, 30, 12);
    /* accent hip roof with wide eaves */
    c.fillStyle = A;
    c.beginPath(); c.moveTo(27, 52); c.lineTo(40, 34); c.lineTo(60, 34); c.lineTo(73, 52); c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'roofing-stormbolt', cat: 'roofing', name: 'Storm Repair Bolt',
  draw: function (c, M, A) {
    function bolt(cc) {
      cc.beginPath();
      cc.moveTo(58, 6); cc.lineTo(36, 46); cc.lineTo(47, 46);
      cc.lineTo(42, 70); cc.lineTo(64, 32); cc.lineTo(52, 32);
      cc.closePath();
    }
    c.save();
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(12, 84); c.lineTo(50, 52); c.lineTo(88, 84);
    c.lineTo(74, 84); c.lineTo(50, 68); c.lineTo(26, 84);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    bolt(c); c.fill();
    c.lineWidth = 7; c.lineJoin = 'round'; c.strokeStyle = '#000'; c.stroke();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    bolt(c); c.fill();
    c.restore();
  }
});
/* concrete — 6 concepts */

LM_MARKS.push({
  id: 'concrete-mixer', cat: 'concrete', name: 'Mixer Drum',
  draw: function (c, M, A) {
    c.save();
    c.translate(48, 50); c.rotate(-0.35);
    c.fillStyle = M;
    /* pear-shaped drum, flat opening face at right */
    c.beginPath();
    c.moveTo(30, -9);
    c.lineTo(1.5, -19.2);
    c.arc(-12, 0, 23.5, -0.958, 0.958, true);
    c.lineTo(30, 9);
    c.closePath(); c.fill();
    /* punch spiral stripes */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(-14, -28); c.lineTo(-10, -28); c.lineTo(-20, 28); c.lineTo(-24, 28);
    c.closePath(); c.fill();
    c.beginPath();
    c.moveTo(4, -28); c.lineTo(8, -28); c.lineTo(-2, 28); c.lineTo(-6, 28);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent opening lip */
    c.fillStyle = A;
    c.fillRect(33.5, -13, 5.5, 26);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'concrete-trowel', cat: 'concrete', name: 'Finishing Trowel',
  draw: function (c, M, A) {
    function rr(cc, x, y, w, h, r) {
      cc.beginPath();
      cc.moveTo(x + r, y);
      cc.arcTo(x + w, y, x + w, y + h, r);
      cc.arcTo(x + w, y + h, x, y + h, r);
      cc.arcTo(x, y + h, x, y, r);
      cc.arcTo(x, y, x + w, y, r);
      cc.closePath();
    }
    c.save();
    c.fillStyle = M;
    /* blade with upturned toe */
    c.beginPath();
    c.moveTo(12, 74);
    c.lineTo(74, 74);
    c.quadraticCurveTo(85, 74, 89, 61);
    c.quadraticCurveTo(81, 65, 72, 63);
    c.lineTo(17, 63);
    c.quadraticCurveTo(12, 63, 12, 68);
    c.closePath(); c.fill();
    c.fillRect(46, 37, 8, 28);              /* post */
    rr(c, 32, 26, 36, 13, 6); c.fill();     /* grip */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(32, 39, 12, 3);
    c.fillRect(56, 39, 12, 3);
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    rr(c, 18, 79, 64, 6, 3); c.fill();      /* smoothed pass */
    c.restore();
  }
});

LM_MARKS.push({
  id: 'concrete-screed', cat: 'concrete', name: 'Screeded Slab',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.fillRect(12, 62, 76, 18);
    /* wet mound on left */
    c.beginPath();
    c.moveTo(12, 64); c.lineTo(12, 52);
    c.quadraticCurveTo(14, 44, 24, 45);
    c.quadraticCurveTo(40, 48, 46, 64);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(12, 67, 76, 3);
    c.globalCompositeOperation = 'source-over';
    /* accent screed board */
    c.save(); c.translate(62, 38); c.rotate(0.45);
    c.fillStyle = A;
    c.fillRect(-5, -20, 10, 40);
    c.restore();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'concrete-stamped', cat: 'concrete', name: 'Stamped Square',
  draw: function (c, M, A) {
    function rr(cc, x, y, w, h, r) {
      cc.beginPath();
      cc.moveTo(x + r, y);
      cc.arcTo(x + w, y, x + w, y + h, r);
      cc.arcTo(x + w, y + h, x, y + h, r);
      cc.arcTo(x, y + h, x, y, r);
      cc.arcTo(x, y, x + w, y, r);
      cc.closePath();
    }
    c.save();
    c.fillStyle = M;
    rr(c, 20, 22, 60, 60, 5); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(20, 40, 60, 3);
    c.fillRect(20, 58, 60, 3);
    c.fillRect(50, 22, 3, 18);
    c.fillRect(32, 43, 3, 15); c.fillRect(62, 43, 3, 15);
    c.fillRect(44, 61, 3, 21);
    /* punch out the middle cell entirely */
    c.fillRect(35, 43, 27, 15);
    c.globalCompositeOperation = 'source-over';
    /* accent stone */
    c.fillStyle = A;
    rr(c, 38, 46, 21, 9, 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'concrete-footing', cat: 'concrete', name: 'Footing Section',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.fillRect(41, 18, 18, 44);   /* stem */
    c.fillRect(22, 56, 56, 26);   /* footing base */
    c.fillRect(18, 26, 15, 6);    /* grade line left */
    c.fillRect(67, 26, 15, 6);    /* grade line right */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(34, 72, 6, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(50, 72, 6, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(66, 72, 6, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    c.beginPath(); c.arc(34, 72, 3, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(50, 72, 3, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(66, 72, 3, 0, Math.PI * 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'concrete-rebar', cat: 'concrete', name: 'Rebar Grid',
  draw: function (c, M, A) {
    function rr(cc, x, y, w, h, r) {
      cc.beginPath();
      cc.moveTo(x + r, y);
      cc.arcTo(x + w, y, x + w, y + h, r);
      cc.arcTo(x + w, y + h, x, y + h, r);
      cc.arcTo(x, y + h, x, y, r);
      cc.arcTo(x, y, x + w, y, r);
      cc.closePath();
    }
    c.save();
    c.fillStyle = M;
    rr(c, 26, 16, 8, 68, 4); c.fill();
    rr(c, 46, 16, 8, 68, 4); c.fill();
    rr(c, 66, 16, 8, 68, 4); c.fill();
    rr(c, 16, 26, 68, 8, 4); c.fill();
    rr(c, 16, 46, 68, 8, 4); c.fill();
    rr(c, 16, 66, 68, 8, 4); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 50, 12, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent tie-wire X */
    c.save(); c.translate(50, 50); c.rotate(Math.PI / 4);
    c.fillStyle = A;
    c.fillRect(-2.5, -8, 5, 16);
    c.fillRect(-8, -2.5, 16, 5);
    c.restore();
    c.restore();
  }
});
/* masonry — 6 concepts */

LM_MARKS.push({
  id: 'masonry-courses', cat: 'masonry', name: 'Brick Courses',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.fillRect(14, 69, 72, 10);
    c.fillRect(14, 56, 60, 10);
    c.fillRect(14, 43, 48, 10);
    c.fillRect(14, 30, 36, 10);
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(32, 69, 3, 10); c.fillRect(50, 69, 3, 10); c.fillRect(68, 69, 3, 10);
    c.fillRect(24, 56, 3, 10); c.fillRect(41, 56, 3, 10); c.fillRect(58, 56, 3, 10);
    c.fillRect(32, 43, 3, 10); c.fillRect(50, 43, 3, 10);
    c.fillRect(24, 30, 3, 10); c.fillRect(41, 30, 3, 10);
    c.globalCompositeOperation = 'source-over';
    /* accent brick being placed */
    c.fillStyle = A;
    c.fillRect(56, 25, 20, 9);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'masonry-trowelbrick', cat: 'masonry', name: 'Trowel And Brick',
  draw: function (c, M, A) {
    function trowel(cc) {
      cc.beginPath();
      cc.moveTo(0, -30);
      cc.quadraticCurveTo(15, -8, 11, 6);
      cc.lineTo(-11, 6);
      cc.quadraticCurveTo(-15, -8, 0, -30);
      cc.closePath();
      cc.moveTo(-2.5, 6); cc.lineTo(2.5, 6); cc.lineTo(2.5, 15); cc.lineTo(-2.5, 15); cc.closePath();
      cc.moveTo(-5.5, 15);
      cc.lineTo(5.5, 15);
      cc.arcTo(5.5, 35, 0, 35, 5);
      cc.arcTo(-5.5, 35, -5.5, 15, 5);
      cc.closePath();
    }
    c.save();
    /* brick (accent) behind, perpendicular to the trowel */
    c.save(); c.translate(52, 54); c.rotate(0.65);
    c.fillStyle = A;
    c.fillRect(-28, -9, 56, 18);
    c.restore();
    /* punch swath, then trowel (main) on other diagonal */
    c.save(); c.translate(50, 50); c.rotate(0.65);
    c.globalCompositeOperation = 'destination-out';
    trowel(c); c.fill();
    c.lineWidth = 7; c.lineJoin = 'round'; c.strokeStyle = '#000'; c.stroke();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = M;
    trowel(c); c.fill();
    c.restore();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'masonry-arch', cat: 'masonry', name: 'Arch And Keystone',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(16, 82); c.lineTo(16, 62);
    c.arc(50, 62, 34, Math.PI, 0, false);
    c.lineTo(84, 82); c.lineTo(70, 82); c.lineTo(70, 62);
    c.arc(50, 62, 20, 0, Math.PI, true);
    c.lineTo(30, 82);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    /* keystone slot */
    c.beginPath();
    c.moveTo(40, 20); c.lineTo(60, 20); c.lineTo(56, 46); c.lineTo(44, 46);
    c.closePath(); c.fill();
    /* radial joints */
    var angs = [-0.95, -0.5, 0.5, 0.95], i;
    for (i = 0; i < 4; i++) {
      c.save(); c.translate(50, 62); c.rotate(angs[i]);
      c.fillRect(-1.5, -38, 3, 20);
      c.restore();
    }
    /* leg joints */
    c.fillRect(16, 71, 14, 3);
    c.fillRect(70, 71, 14, 3);
    c.globalCompositeOperation = 'source-over';
    /* accent keystone */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(43.5, 23); c.lineTo(56.5, 23); c.lineTo(54, 43); c.lineTo(46, 43);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'masonry-chimney', cat: 'masonry', name: 'Chimney Stack',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.fillRect(33, 32, 34, 52);   /* stack */
    c.fillRect(24, 22, 52, 8);    /* cap slab */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(33, 45, 34, 3);
    c.fillRect(33, 58, 34, 3);
    c.fillRect(33, 71, 34, 3);
    c.fillRect(48.5, 32, 3, 13);
    c.fillRect(40, 48, 3, 10); c.fillRect(57, 48, 3, 10);
    c.fillRect(48.5, 61, 3, 10);
    c.fillRect(40, 74, 3, 10); c.fillRect(57, 74, 3, 10);
    c.globalCompositeOperation = 'source-over';
    /* accent flue pots */
    c.fillStyle = A;
    c.fillRect(32, 9, 12, 10);
    c.fillRect(56, 9, 12, 10);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'masonry-stonecircle', cat: 'masonry', name: 'Stone Circle',
  draw: function (c, M, A) {
    function rr(cc, x, y, w, h, r) {
      cc.beginPath();
      cc.moveTo(x + r, y);
      cc.arcTo(x + w, y, x + w, y + h, r);
      cc.arcTo(x + w, y + h, x, y + h, r);
      cc.arcTo(x, y + h, x, y, r);
      cc.arcTo(x, y, x + w, y, r);
      cc.closePath();
    }
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.arc(50, 48, 35, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'destination-out';
    /* stone coursing joints */
    c.fillRect(13, 36, 74, 4);
    c.fillRect(13, 56, 74, 4);
    c.fillRect(40, 11, 4, 25);
    c.fillRect(58, 60, 4, 25);
    c.fillRect(28, 36, 4, 24);
    c.fillRect(63, 36, 4, 24);
    /* punch out the center stone cell */
    c.fillRect(32, 40, 31, 16);
    c.globalCompositeOperation = 'source-over';
    /* accent center stone */
    c.fillStyle = A;
    rr(c, 35, 43, 25, 10, 3); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'masonry-blocklevel', cat: 'masonry', name: 'Block And Level',
  draw: function (c, M, A) {
    function rr(cc, x, y, w, h, r) {
      cc.beginPath();
      cc.moveTo(x + r, y);
      cc.arcTo(x + w, y, x + w, y + h, r);
      cc.arcTo(x + w, y + h, x, y + h, r);
      cc.arcTo(x, y + h, x, y, r);
      cc.arcTo(x, y, x + w, y, r);
      cc.closePath();
    }
    c.save();
    c.fillStyle = M;
    rr(c, 20, 46, 60, 36, 3); c.fill();
    c.globalCompositeOperation = 'destination-out';
    rr(c, 29, 53, 17, 22, 4); c.fill();
    rr(c, 54, 53, 17, 22, 4); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent level on top */
    c.fillStyle = A;
    rr(c, 16, 28, 68, 12, 3); c.fill();
    c.globalCompositeOperation = 'destination-out';
    rr(c, 42, 31, 16, 6, 3); c.fill();
    c.fillRect(24, 28, 3, 12);
    c.fillRect(73, 28, 3, 12);
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});
/* Fence & Deck — six concepts */

LM_MARKS.push({
  id: 'fencedeck-pickets', cat: 'fencedeck', name: 'Picket Run',
  draw: function (c, M, A) {
    var xs = [20, 35, 65, 80], tops = [24, 20, 20, 24], i, x, t;
    c.save();
    c.fillStyle = M;
    /* rails */
    c.fillRect(8, 44, 84, 10);
    c.fillRect(8, 66, 84, 10);
    /* pickets (center slot left open for accent) */
    for (i = 0; i < 4; i++) {
      x = xs[i]; t = tops[i];
      c.beginPath();
      c.moveTo(x, t);
      c.lineTo(x + 6, t + 9);
      c.lineTo(x + 6, 88);
      c.lineTo(x - 6, 88);
      c.lineTo(x - 6, t + 9);
      c.closePath();
      c.fill();
    }
    /* punch slot for the accent picket */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(41, 2, 18, 96);
    c.globalCompositeOperation = 'source-over';
    /* accent: tall center picket */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(50, 10);
    c.lineTo(56, 19);
    c.lineTo(56, 88);
    c.lineTo(44, 88);
    c.lineTo(44, 19);
    c.closePath();
    c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'fencedeck-deckrail', cat: 'fencedeck', name: 'Deck & Rail',
  draw: function (c, M, A) {
    var bx = [29, 50, 71], i, b, tx, hw;
    c.save();
    c.fillStyle = M;
    /* posts + balusters */
    c.fillRect(10, 30, 10, 29);
    c.fillRect(80, 30, 10, 29);
    c.fillRect(28, 30, 6, 29);
    c.fillRect(47, 30, 6, 29);
    c.fillRect(66, 30, 6, 29);
    /* deck in perspective */
    c.beginPath();
    c.moveTo(8, 92); c.lineTo(92, 92); c.lineTo(80, 58); c.lineTo(20, 58);
    c.closePath(); c.fill();
    /* punch: converging board gaps + fascia line */
    c.globalCompositeOperation = 'destination-out';
    for (i = 0; i < 3; i++) {
      b = bx[i];
      tx = b + (50 - b) * 0.44; /* toward vanishing point */
      c.beginPath();
      c.moveTo(b - 2.5, 92); c.lineTo(b + 2.5, 92);
      c.lineTo(tx + 1.4, 56); c.lineTo(tx - 1.4, 56);
      c.closePath(); c.fill();
    }
    c.fillRect(6, 83, 88, 3);
    c.globalCompositeOperation = 'source-over';
    /* accent: rail cap */
    c.fillStyle = A;
    c.fillRect(6, 18, 88, 9);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'fencedeck-arbor', cat: 'fencedeck', name: 'Arbor Gate',
  draw: function (c, M, A) {
    var a, i, angs = [-0.5, 0, 0.5];
    c.save();
    c.fillStyle = M;
    /* arch ring */
    c.beginPath();
    c.arc(50, 50, 38, Math.PI, 0, false);
    c.lineTo(76, 50);
    c.arc(50, 50, 26, 0, Math.PI, true);
    c.closePath(); c.fill();
    /* posts */
    c.fillRect(12, 50, 12, 42);
    c.fillRect(76, 50, 12, 42);
    /* gate slab */
    c.fillRect(30, 56, 40, 34);
    /* punches */
    c.globalCompositeOperation = 'destination-out';
    /* radial joints in the arch */
    for (i = 0; i < 3; i++) {
      a = angs[i];
      c.save();
      c.translate(50, 50); c.rotate(a);
      c.fillRect(-1.5, -40, 3, 16);
      c.restore();
    }
    /* gate board gaps */
    c.fillRect(42, 54, 4, 38);
    c.fillRect(55, 54, 4, 38);
    /* slot for accent rail */
    c.fillRect(28, 66, 44, 14);
    c.globalCompositeOperation = 'source-over';
    /* accent: gate cross rail */
    c.fillStyle = A;
    c.fillRect(30, 70, 40, 6);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'fencedeck-postcap', cat: 'fencedeck', name: 'Post Cap',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* post */
    c.fillRect(40, 36, 20, 54);
    /* cap plate */
    c.fillRect(30, 29, 40, 7);
    /* rails left + right */
    c.fillRect(4, 45, 36, 12);
    c.fillRect(4, 64, 36, 12);
    c.fillRect(60, 45, 36, 12);
    c.fillRect(60, 64, 36, 12);
    /* punch: joint lines where rails meet post */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(37, 43, 3, 35);
    c.fillRect(60, 43, 3, 35);
    c.globalCompositeOperation = 'source-over';
    /* accent: pyramid cap */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(29, 25); c.lineTo(71, 25); c.lineTo(50, 9);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'fencedeck-pergola', cat: 'fencedeck', name: 'Pergola Frame',
  draw: function (c, M, A) {
    var cx = [14, 32, 50, 68, 86], i;
    c.save();
    c.fillStyle = M;
    /* posts */
    c.fillRect(20, 50, 12, 42);
    c.fillRect(68, 50, 12, 42);
    /* beam with shaped ends */
    c.beginPath();
    c.moveTo(6, 38); c.lineTo(94, 38); c.lineTo(94, 43);
    c.quadraticCurveTo(94, 52, 86, 52);
    c.lineTo(14, 52);
    c.quadraticCurveTo(6, 52, 6, 43);
    c.closePath(); c.fill();
    /* rafter ends */
    for (i = 0; i < 5; i++) c.fillRect(cx[i] - 4.5, 22, 9, 13);
    /* accent: top slat */
    c.fillStyle = A;
    c.fillRect(10, 10, 80, 7);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'fencedeck-slats', cat: 'fencedeck', name: 'Slat Panel',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* posts */
    c.fillRect(12, 12, 11, 78);
    c.fillRect(77, 12, 11, 78);
    /* horizontal slats (middle row reserved for accent) */
    c.fillRect(18, 16, 64, 9);
    c.fillRect(18, 31, 64, 9);
    c.fillRect(18, 61, 64, 9);
    c.fillRect(18, 76, 64, 9);
    /* punch: slat shadow notches into posts */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(20, 43, 60, 15);
    c.globalCompositeOperation = 'source-over';
    /* accent: middle slat, inset */
    c.fillStyle = A;
    c.fillRect(29, 46, 42, 9);
    c.restore();
  }
});
/* Plumbing — six concepts */

LM_MARKS.push({
  id: 'plumbing-wrench', cat: 'plumbing', name: 'Pipe Wrench',
  draw: function (c, M, A) {
    c.save();
    c.translate(50, 50);
    c.rotate(Math.PI / 4);
    c.fillStyle = M;
    /* handle */
    c.fillRect(-7, -8, 14, 48);
    c.beginPath(); c.arc(0, 40, 7, 0, Math.PI, false); c.closePath(); c.fill();
    /* shank */
    c.fillRect(-9, -32, 18, 26);
    /* head block (jaw carved out below) */
    c.fillRect(-20, -48, 29, 26);
    /* punches: jaw mouth, adjuster seat, lanyard hole */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(-24, -38, 25, 7);
    c.beginPath(); c.arc(13, -14, 12, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(0, 36, 3, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: round adjuster wheel (never a hex) */
    c.fillStyle = A;
    c.beginPath(); c.arc(13, -14, 8, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(13, -14, 3, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});

LM_MARKS.push({
  id: 'plumbing-ptrap', cat: 'plumbing', name: 'P-Trap Run',
  draw: function (c, M, A) {
    c.save();
    /* heavy pipe run */
    c.strokeStyle = M;
    c.lineWidth = 15;
    c.lineCap = 'butt';
    c.lineJoin = 'round';
    c.beginPath();
    c.moveTo(30, 6);
    c.lineTo(30, 56);
    c.arc(43, 56, 13, Math.PI, 0, true);
    c.lineTo(56, 50);
    c.arc(69, 50, 13, Math.PI, Math.PI * 1.5, false);
    c.lineTo(94, 37);
    c.stroke();
    /* coupling collars */
    c.fillStyle = M;
    c.fillRect(20, 12, 20, 9);
    c.fillRect(80, 27, 9, 20);
    /* punch: collar joint lines */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(20, 21, 20, 3);
    c.fillRect(77, 28, 3, 18);
    c.globalCompositeOperation = 'source-over';
    /* accent: water drop */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(76, 55);
    c.quadraticCurveTo(83, 63, 84.4, 68);
    c.arc(76, 68, 8.4, 0, Math.PI, false);
    c.quadraticCurveTo(69, 63, 76, 55);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'plumbing-faucet', cat: 'plumbing', name: 'Faucet Drop',
  draw: function (c, M, A) {
    c.save();
    /* body arc */
    c.strokeStyle = M;
    c.lineWidth = 17;
    c.lineCap = 'butt';
    c.beginPath();
    c.moveTo(66, 78);
    c.lineTo(66, 42);
    c.arc(49, 42, 17, 0, Math.PI, true);
    c.lineTo(32, 56);
    c.stroke();
    c.fillStyle = M;
    /* base flange + plate */
    c.fillRect(54, 72, 24, 10);
    c.fillRect(48, 80, 32, 6);
    /* tee handle */
    c.fillRect(37, 6, 26, 8);
    c.fillRect(46, 12, 8, 14);
    /* punch: aerator joint on spout */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(22, 47, 20, 3);
    c.globalCompositeOperation = 'source-over';
    /* accent: falling drop */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(32, 61);
    c.quadraticCurveTo(38.5, 68, 40, 72.5);
    c.arc(32, 72.5, 8, 0, Math.PI, false);
    c.quadraticCurveTo(25.5, 68, 32, 61);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'plumbing-cross', cat: 'plumbing', name: 'Cross Fitting',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* pipe cross */
    c.fillRect(38, 10, 24, 80);
    c.fillRect(10, 38, 80, 24);
    /* collars at the four ends */
    c.fillRect(33, 10, 34, 10);
    c.fillRect(33, 80, 34, 10);
    c.fillRect(10, 33, 10, 34);
    c.fillRect(80, 33, 10, 34);
    /* punch: collar joints + center port */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(32, 22, 36, 3);
    c.fillRect(32, 75, 36, 3);
    c.fillRect(22, 32, 3, 36);
    c.fillRect(75, 32, 3, 36);
    c.beginPath(); c.arc(50, 50, 11, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: center hub */
    c.fillStyle = A;
    c.beginPath(); c.arc(50, 50, 7, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'plumbing-heater', cat: 'plumbing', name: 'Water Heater',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* tank */
    c.beginPath();
    c.moveTo(30, 24);
    c.quadraticCurveTo(30, 10, 44, 10);
    c.lineTo(56, 10);
    c.quadraticCurveTo(70, 10, 70, 24);
    c.lineTo(70, 76);
    c.quadraticCurveTo(70, 84, 62, 84);
    c.lineTo(38, 84);
    c.quadraticCurveTo(30, 84, 30, 76);
    c.closePath(); c.fill();
    /* legs + top pipes */
    c.fillRect(34, 84, 7, 8);
    c.fillRect(59, 84, 7, 8);
    c.fillRect(37, 2, 7, 12);
    c.fillRect(56, 2, 7, 12);
    /* punch: dome seam + burner window */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(28, 22, 44, 3);
    c.beginPath(); c.arc(50, 63, 16, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: burner flame */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(50, 50);
    c.quadraticCurveTo(59, 59, 57.5, 68);
    c.arc(50, 68, 7.5, 0, Math.PI, false);
    c.quadraticCurveTo(43, 57, 50, 50);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'plumbing-valve', cat: 'plumbing', name: 'Valve Wheel',
  draw: function (c, M, A) {
    var i, a;
    c.save();
    c.fillStyle = M;
    /* wheel disc */
    c.beginPath(); c.arc(50, 42, 30, 0, Math.PI * 2, false); c.fill();
    /* stem + valve body + stubs */
    c.fillRect(44, 70, 12, 8);
    c.fillRect(30, 78, 40, 12);
    c.fillRect(18, 80, 12, 8);
    c.fillRect(70, 80, 12, 8);
    /* punch: spoke openings + hub seat */
    c.globalCompositeOperation = 'destination-out';
    for (i = 0; i < 4; i++) {
      a = Math.PI / 4 + i * Math.PI / 2;
      c.beginPath();
      c.arc(50 + Math.cos(a) * 16, 42 + Math.sin(a) * 16, 8, 0, Math.PI * 2, false);
      c.fill();
    }
    c.beginPath(); c.arc(50, 42, 11, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: hub */
    c.fillStyle = A;
    c.beginPath(); c.arc(50, 42, 7, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 42, 2.5, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});
/* Electrical — six concepts */

LM_MARKS.push({
  id: 'electrical-bolt', cat: 'electrical', name: 'Bolt Badge',
  draw: function (c, M, A) {
    var px = [58, 30, 46, 42, 72, 53], py = [14, 55, 55, 84, 44, 44];
    var bolt = function (s) {
      var i;
      c.beginPath();
      for (i = 0; i < 6; i++) {
        var x = 50 + (px[i] - 50) * s, y = 48 + (py[i] - 48) * s;
        if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
      }
      c.closePath();
    };
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.arc(50, 48, 42, 0, Math.PI * 2, false); c.fill();
    /* punch: bolt-shaped window */
    c.globalCompositeOperation = 'destination-out';
    bolt(1); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: inner bolt */
    c.fillStyle = A;
    bolt(0.55); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'electrical-plug', cat: 'electrical', name: 'Plug & Cord',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* plug body */
    c.beginPath();
    c.moveTo(30, 46);
    c.quadraticCurveTo(30, 36, 40, 36);
    c.lineTo(60, 36);
    c.quadraticCurveTo(70, 36, 70, 46);
    c.lineTo(70, 60);
    c.quadraticCurveTo(70, 68, 62, 68);
    c.lineTo(38, 68);
    c.quadraticCurveTo(30, 68, 30, 60);
    c.closePath(); c.fill();
    /* neck */
    c.beginPath();
    c.moveTo(44, 66); c.lineTo(56, 66); c.lineTo(53, 78); c.lineTo(47, 78);
    c.closePath(); c.fill();
    /* cord */
    c.strokeStyle = M;
    c.lineWidth = 7;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(50, 76);
    c.bezierCurveTo(50, 92, 72, 96, 78, 82);
    c.stroke();
    /* punch: face screw */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 52, 3, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: the two prongs */
    c.fillStyle = A;
    c.fillRect(37, 12, 7, 21);
    c.fillRect(56, 12, 7, 21);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'electrical-bulb', cat: 'electrical', name: 'Bolt Bulb',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* glass */
    c.beginPath(); c.arc(50, 38, 26, 0, Math.PI * 2, false); c.fill();
    /* neck */
    c.beginPath();
    c.moveTo(41, 58); c.lineTo(59, 58); c.lineTo(56, 68); c.lineTo(44, 68);
    c.closePath(); c.fill();
    /* punch: bolt filament */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(55, 22); c.lineTo(41, 42); c.lineTo(48, 42);
    c.lineTo(45, 56); c.lineTo(60, 36); c.lineTo(52, 36);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: screw base */
    c.fillStyle = A;
    c.fillRect(42, 72, 16, 6);
    c.fillRect(43, 80, 14, 5);
    c.fillRect(46, 87, 8, 4);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'electrical-panel', cat: 'electrical', name: 'Breaker Panel',
  draw: function (c, M, A) {
    var rows = [21, 34, 47, 60], i, y;
    c.save();
    c.fillStyle = M;
    /* door */
    c.beginPath();
    c.moveTo(20, 14);
    c.quadraticCurveTo(20, 10, 24, 10);
    c.lineTo(76, 10);
    c.quadraticCurveTo(80, 10, 80, 14);
    c.lineTo(80, 86);
    c.quadraticCurveTo(80, 90, 76, 90);
    c.lineTo(24, 90);
    c.quadraticCurveTo(20, 90, 20, 86);
    c.closePath(); c.fill();
    /* punch: window + side latch slot */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(27, 16, 40, 60);
    c.fillRect(72.5, 44, 3.5, 12);
    c.globalCompositeOperation = 'source-over';
    /* breakers */
    c.fillStyle = M;
    for (i = 0; i < 4; i++) {
      y = rows[i];
      if (i === 0) { c.fillRect(31, y, 32, 8); continue; } /* main breaker */
      c.fillRect(31, y, 14, 8);
      if (i !== 2) c.fillRect(49, y, 14, 8);
    }
    /* accent: the tripped breaker */
    c.fillStyle = A;
    c.fillRect(49, 47, 14, 8);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'electrical-pole', cat: 'electrical', name: 'Utility Pole',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* pole */
    c.fillRect(44, 14, 12, 78);
    /* crossarms */
    c.fillRect(16, 22, 68, 9);
    c.fillRect(24, 38, 52, 9);
    /* insulators */
    c.fillRect(19, 15, 7, 7);
    c.fillRect(74, 15, 7, 7);
    c.fillRect(27, 31, 7, 7);
    c.fillRect(66, 31, 7, 7);
    /* punch: crossarm bolts */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(36, 26.5, 2.2, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(64, 26.5, 2.2, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: sagging lines */
    c.strokeStyle = A;
    c.lineWidth = 7;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(13, 20); c.quadraticCurveTo(8, 34, 5, 52);
    c.stroke();
    c.beginPath();
    c.moveTo(87, 20); c.quadraticCurveTo(92, 34, 95, 52);
    c.stroke();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'electrical-circuit', cat: 'electrical', name: 'Circuit Path',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* badge */
    c.beginPath();
    c.moveTo(16, 26);
    c.quadraticCurveTo(16, 14, 28, 14);
    c.lineTo(72, 14);
    c.quadraticCurveTo(84, 14, 84, 26);
    c.lineTo(84, 70);
    c.quadraticCurveTo(84, 82, 72, 82);
    c.lineTo(28, 82);
    c.quadraticCurveTo(16, 82, 16, 70);
    c.closePath(); c.fill();
    /* punch: circuit traces + pads */
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000';
    c.lineWidth = 5;
    c.lineCap = 'butt';
    c.lineJoin = 'miter';
    c.beginPath();
    c.moveTo(30, 66); c.lineTo(30, 46); c.lineTo(48, 46);
    c.lineTo(48, 30); c.lineTo(66, 30);
    c.stroke();
    c.beginPath();
    c.moveTo(70, 64); c.lineTo(54, 64); c.lineTo(54, 54); c.lineTo(66, 54);
    c.stroke();
    c.beginPath(); c.arc(30, 66, 7, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(66, 30, 7, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(70, 64, 4, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: pad dots */
    c.fillStyle = A;
    c.beginPath(); c.arc(30, 66, 3.5, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(66, 30, 3.5, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});
/* HVAC — six concepts */

LM_MARKS.push({
  id: 'hvac-fan', cat: 'hvac', name: 'Fan Circle',
  draw: function (c, M, A) {
    var i;
    c.save();
    c.fillStyle = M;
    /* outer ring */
    c.beginPath(); c.arc(50, 48, 40, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 48, 33, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* blades */
    for (i = 0; i < 4; i++) {
      c.save();
      c.translate(50, 48);
      c.rotate(i * Math.PI / 2);
      c.beginPath();
      c.moveTo(6, -5);
      c.quadraticCurveTo(26, -16, 28, 2);
      c.quadraticCurveTo(24, 12, 7, 7);
      c.closePath(); c.fill();
      c.restore();
    }
    /* punch: hub seat */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 48, 11, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent: hub */
    c.fillStyle = A;
    c.beginPath(); c.arc(50, 48, 7, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'hvac-split', cat: 'hvac', name: 'Heat & Cool Badge',
  draw: function (c, M, A) {
    var i;
    c.save();
    c.fillStyle = M;
    /* left half disc */
    c.beginPath();
    c.arc(50, 48, 40, Math.PI * 0.5, Math.PI * 1.5, false);
    c.closePath(); c.fill();
    /* punch: flame + divider */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(28, 27);
    c.quadraticCurveTo(29, 34, 34, 39);
    c.quadraticCurveTo(36, 36, 37, 32);
    c.quadraticCurveTo(42, 40, 42, 52);
    c.quadraticCurveTo(42, 64, 31, 64);
    c.quadraticCurveTo(20, 64, 20, 52);
    c.quadraticCurveTo(20, 42, 24, 36);
    c.quadraticCurveTo(27, 32, 28, 27);
    c.closePath(); c.fill();
    c.fillRect(46, 4, 8, 88);
    c.globalCompositeOperation = 'source-over';
    /* accent: right half disc */
    c.fillStyle = A;
    c.beginPath();
    c.arc(50, 48, 40, Math.PI * 1.5, Math.PI * 0.5, false);
    c.closePath(); c.fill();
    /* punch: snowflake burst (8-arm, never six-fold) */
    c.globalCompositeOperation = 'destination-out';
    for (i = 0; i < 4; i++) {
      c.save();
      c.translate(69, 48);
      c.rotate(i * Math.PI / 4);
      c.fillRect(-13, -2.2, 26, 4.4);
      c.restore();
    }
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});

LM_MARKS.push({
  id: 'hvac-duct', cat: 'hvac', name: 'Duct Elbow',
  draw: function (c, M, A) {
    c.save();
    /* elbow run */
    c.strokeStyle = M;
    c.lineWidth = 26;
    c.lineCap = 'butt';
    c.beginPath();
    c.moveTo(28, 80);
    c.lineTo(28, 52);
    c.quadraticCurveTo(28, 28, 52, 28);
    c.lineTo(82, 28);
    c.stroke();
    /* punch: section seams */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(13, 60, 30, 3.5);
    c.fillRect(58, 13, 3.5, 30);
    c.globalCompositeOperation = 'source-over';
    /* accent: end flanges */
    c.fillStyle = A;
    c.fillRect(12, 84, 32, 8);
    c.fillRect(86, 12, 8, 32);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'hvac-thermo', cat: 'hvac', name: 'Thermostat Dial',
  draw: function (c, M, A) {
    var i, ang;
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.arc(50, 48, 40, 0, Math.PI * 2, false); c.fill();
    /* punch: tick marks, dial well, display slot */
    c.globalCompositeOperation = 'destination-out';
    for (i = 0; i < 5; i++) {
      ang = (i - 2) * 35 * Math.PI / 180;
      c.save();
      c.translate(50, 48);
      c.rotate(ang);
      c.fillRect(-1.8, -36, 3.6, 9);
      c.restore();
    }
    c.beginPath(); c.arc(50, 48, 17, 0, Math.PI * 2, false); c.fill();
    c.fillRect(42, 68, 16, 5);
    c.globalCompositeOperation = 'source-over';
    /* accent: needle */
    c.fillStyle = A;
    c.save();
    c.translate(50, 48);
    c.rotate(35 * Math.PI / 180);
    c.beginPath();
    c.moveTo(-4, 4); c.lineTo(4, 4); c.lineTo(0, -14);
    c.closePath(); c.fill();
    c.restore();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'hvac-condenser', cat: 'hvac', name: 'Condenser Unit',
  draw: function (c, M, A) {
    var i;
    c.save();
    c.fillStyle = M;
    /* cabinet */
    c.beginPath();
    c.moveTo(16, 28);
    c.quadraticCurveTo(16, 20, 24, 20);
    c.lineTo(76, 20);
    c.quadraticCurveTo(84, 20, 84, 28);
    c.lineTo(84, 82);
    c.lineTo(16, 82);
    c.closePath(); c.fill();
    /* feet */
    c.fillRect(24, 82, 10, 7);
    c.fillRect(66, 82, 10, 7);
    /* punch: fan opening + louver seam */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 46, 20, 0, Math.PI * 2, false); c.fill();
    c.fillRect(22, 72, 56, 3);
    c.globalCompositeOperation = 'source-over';
    /* accent: fan blades + hub */
    c.fillStyle = A;
    for (i = 0; i < 3; i++) {
      c.save();
      c.translate(50, 46);
      c.rotate(i * Math.PI * 2 / 3);
      c.beginPath();
      c.moveTo(3, -2);
      c.quadraticCurveTo(12, -8, 14, 1);
      c.quadraticCurveTo(11, 6, 4, 3.5);
      c.closePath(); c.fill();
      c.restore();
    }
    c.beginPath(); c.arc(50, 46, 3.5, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'hvac-airflow', cat: 'hvac', name: 'Airflow Arrows',
  draw: function (c, M, A) {
    var arrow = function (x0, y, x1, hx, hh) {
      c.lineWidth = 8;
      c.lineCap = 'round';
      c.beginPath();
      c.moveTo(x0, y);
      c.bezierCurveTo(x0 + 16, y - 6, x1 - 14, y + 6, x1 + 2, y);
      c.stroke();
      c.beginPath();
      c.moveTo(hx, y - hh); c.lineTo(hx, y + hh); c.lineTo(hx + hh + 2, y);
      c.closePath(); c.fill();
    };
    c.save();
    c.fillStyle = M;
    c.strokeStyle = M;
    arrow(14, 26, 56, 58, 9);
    arrow(14, 74, 56, 58, 9);
    /* accent: center stream, longer */
    c.fillStyle = A;
    c.strokeStyle = A;
    arrow(8, 50, 60, 62, 11);
    c.restore();
  }
});
LM_MARKS.push({
  id: 'painting-swash', cat: 'painting', name: 'Brush Swash',
  draw: function (c, M, A) {
    c.save();
    // main swash ribbon (fat paint stroke, chisel end at right)
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(8, 80);
    c.bezierCurveTo(20, 42, 52, 20, 90, 22);
    c.lineTo(87, 50);
    c.bezierCurveTo(56, 46, 40, 60, 30, 90);
    c.closePath();
    c.fill();
    // punched dry-brush streak at the tail + bristle marks at the chisel end
    c.globalCompositeOperation = 'destination-out';
    c.lineCap = 'round'; c.strokeStyle = '#000';
    c.lineWidth = 3.5;
    c.beginPath(); c.moveTo(17, 80); c.quadraticCurveTo(30, 50, 52, 38); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: hanging paint drop
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(74, 58);
    c.quadraticCurveTo(67, 68, 67, 74);
    c.arc(74, 74, 7, Math.PI, 0, true);
    c.quadraticCurveTo(81, 68, 74, 58);
    c.closePath();
    c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'painting-roller', cat: 'painting', name: 'Roller Stroke',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // roller sleeve
    rr(18, 14, 46, 19, 8); c.fill();
    // frame arm + grip
    c.strokeStyle = M; c.lineWidth = 7; c.lineCap = 'round'; c.lineJoin = 'round';
    c.beginPath(); c.moveTo(62, 23); c.lineTo(76, 23); c.lineTo(76, 50); c.stroke();
    rr(69, 50, 15, 34, 6); c.fill();
    // punch nap line on sleeve
    c.globalCompositeOperation = 'destination-out';
    c.lineWidth = 3; c.strokeStyle = '#000';
    c.beginPath(); c.moveTo(26, 19); c.lineTo(26, 28); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: fresh paint band with drips
    c.fillStyle = A;
    c.beginPath(); c.rect(20, 41, 40, 32); c.fill();
    c.beginPath(); c.rect(26, 71, 8, 14); c.fill();
    c.beginPath(); c.arc(30, 85, 4, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.rect(44, 71, 8, 7); c.fill();
    c.beginPath(); c.arc(48, 78, 4, 0, Math.PI * 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'painting-can', cat: 'painting', name: 'Dripping Can',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    function cap(x, y, w, h) { // accent cap band + two drips, one path
      c.beginPath();
      c.rect(x, y, w, h);
      c.moveTo(34, y + h - 1);
      c.lineTo(42, y + h - 1);
      c.lineTo(41.5, 51);
      c.arc(38, 51, 3.5, 0, Math.PI, false);
      c.closePath();
      c.moveTo(54, y + h - 1);
      c.lineTo(62, y + h - 1);
      c.lineTo(61.5, 60);
      c.arc(58, 60, 3.5, 0, Math.PI, false);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // handle (bail)
    c.strokeStyle = M; c.lineWidth = 6; c.lineCap = 'round';
    c.beginPath(); c.arc(50, 34, 27, Math.PI * 1.08, Math.PI * 1.92, false); c.stroke();
    // lip + body
    rr(24, 30, 52, 9, 3); c.fill();
    rr(28, 36, 44, 50, 3); c.fill();
    // punch: lip shadow + bottom rim
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(30, 43); c.lineTo(70, 43); c.stroke();
    c.beginPath(); c.moveTo(31, 79); c.lineTo(69, 79); c.stroke();
    // halo punch for accent
    c.lineWidth = 7; c.lineJoin = 'round';
    cap(24, 26, 52, 10); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: paint over the rim with drips
    c.fillStyle = A;
    cap(24, 26, 52, 10); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'painting-crossed', cat: 'painting', name: 'Crossed Tools',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    var lean = 0.5;
    function rollerPath() { // leans right, sleeve at top
      c.save(); c.translate(50, 52); c.rotate(lean);
      c.beginPath();
      rr(-17, -41, 34, 19, 7);       // sleeve
      c.rect(6, -24, 7, 21);         // frame arm
      rr(-8, -6, 16, 44, 6);         // handle
      c.restore();
    }
    function brushPath() { // leans left, bristles at top
      c.save(); c.translate(50, 52); c.rotate(-lean);
      c.beginPath();
      c.moveTo(-11, -16); c.lineTo(11, -16); c.lineTo(6, -38); c.lineTo(-6, -38); c.closePath(); // bristles
      c.rect(-9, -16, 18, 16);       // ferrule
      rr(-7, 0, 14, 40, 6);          // handle
      c.restore();
    }
    function bandPath() {
      c.save(); c.translate(50, 52); c.rotate(-lean);
      c.beginPath(); c.rect(-10.5, -14, 21, 11);
      c.restore();
    }
    c.save();
    c.fillStyle = M;
    rollerPath(); c.fill();
    // brush punches a halo through the roller
    c.globalCompositeOperation = 'destination-out';
    c.lineWidth = 7; c.lineJoin = 'round'; c.strokeStyle = '#000';
    brushPath(); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = M; brushPath(); c.fill();
    // accent: ferrule band, haloed
    c.globalCompositeOperation = 'destination-out';
    bandPath(); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A; bandPath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'painting-fandeck', cat: 'painting', name: 'Fan Deck',
  draw: function (c, M, A) {
    function blade(ang) {
      c.save(); c.translate(50, 86); c.rotate(ang);
      c.beginPath();
      var x = -8.5, y = -58, w = 17, h = 54, r = 5;
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
      c.restore();
    }
    function put(ang, col) {
      c.globalCompositeOperation = 'destination-out';
      c.lineWidth = 6.5; c.lineJoin = 'round'; c.strokeStyle = '#000';
      blade(ang); c.stroke(); c.fill();
      c.globalCompositeOperation = 'source-over';
      c.fillStyle = col; blade(ang); c.fill();
    }
    c.save();
    var d = Math.PI / 180;
    put(-42 * d, M);
    put(42 * d, M);
    put(-21 * d, M);
    put(21 * d, M);
    put(0, A);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'painting-sprayer', cat: 'painting', name: 'Spray Gun',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // body
    rr(30, 26, 48, 20, 6); c.fill();
    // nozzle
    c.beginPath(); c.rect(18, 31, 13, 10); c.fill();
    // top knob
    rr(60, 17, 12, 10, 3); c.fill();
    // grip
    c.beginPath();
    c.moveTo(52, 45); c.lineTo(70, 45); c.lineTo(64, 84); c.lineTo(47, 84);
    c.closePath(); c.fill();
    // trigger (heavy stroke)
    c.strokeStyle = M; c.lineWidth = 5.5; c.lineCap = 'round';
    c.beginPath(); c.moveTo(45, 49); c.quadraticCurveTo(40, 58, 43, 68); c.stroke();
    // punch: grip separation line
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(53, 49.5); c.lineTo(68, 49.5); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: spray fan
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(13, 31.5); c.lineTo(2, 15); c.lineTo(2, 57); c.lineTo(13, 40.5);
    c.closePath(); c.fill();
    // punch mist streaks inside the fan
    c.globalCompositeOperation = 'destination-out';
    c.lineWidth = 3; c.lineCap = 'round';
    c.beginPath(); c.moveTo(11, 32); c.lineTo(4, 24); c.stroke();
    c.beginPath(); c.moveTo(11, 40); c.lineTo(4, 48); c.stroke();
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});
LM_MARKS.push({
  id: 'drywall-knife', cat: 'drywall', name: 'Taping Knife',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // handle
    rr(42, 6, 16, 32, 7); c.fill();
    // tang
    c.beginPath(); c.moveTo(45, 34); c.lineTo(55, 34); c.lineTo(59, 46); c.lineTo(41, 46); c.closePath(); c.fill();
    // blade (widening down to the working edge)
    c.beginPath(); c.moveTo(25, 44); c.lineTo(75, 44); c.lineTo(80, 80); c.lineTo(20, 80); c.closePath(); c.fill();
    // punches: hang hole + flex line
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 14, 3.2, 0, Math.PI * 2); c.fill();
    c.strokeStyle = '#000'; c.lineWidth = 3; c.lineCap = 'round';
    c.beginPath(); c.moveTo(27, 51); c.lineTo(73, 51); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: mud swipe under the edge
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(14, 89);
    c.quadraticCurveTo(50, 81, 86, 89);
    c.quadraticCurveTo(50, 97, 14, 89);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'drywall-grid', cat: 'drywall', name: 'Panel & Screws',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    rr(20, 16, 60, 64, 3); c.fill();
    // punch seams + screws
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3.5; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(50, 16); c.lineTo(50, 80); c.stroke();
    c.beginPath(); c.moveTo(20, 48); c.lineTo(80, 48); c.stroke();
    c.beginPath(); c.arc(34, 31, 3, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(34, 65, 3, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(66, 31, 3, 0, Math.PI * 2); c.fill();
    // halo punch for patch
    c.lineWidth = 7; c.lineJoin = 'round';
    rr(56, 54, 20, 22, 2); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: repair patch piece
    c.fillStyle = A;
    rr(56, 54, 20, 22, 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'drywall-pan', cat: 'drywall', name: 'Pan & Knife',
  draw: function (c, M, A) {
    function knifePath() {
      c.save(); c.translate(50, 30); c.rotate(-0.28);
      c.beginPath();
      // blade (wide, thin)
      c.rect(-42, -5.5, 46, 11);
      // handle (chunkier than blade)
      var x = 8, y = -8, w = 34, h = 16, r = 7;
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
      c.restore();
    }
    c.save();
    c.fillStyle = M;
    knifePath(); c.fill();
    // pan halo-punched over the knife
    c.globalCompositeOperation = 'destination-out';
    c.lineWidth = 7; c.lineJoin = 'round'; c.strokeStyle = '#000';
    c.beginPath(); c.moveTo(16, 58); c.lineTo(84, 58); c.lineTo(74, 84); c.lineTo(26, 84); c.closePath();
    c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = M;
    c.beginPath(); c.moveTo(16, 58); c.lineTo(84, 58); c.lineTo(74, 84); c.lineTo(26, 84); c.closePath();
    c.fill();
    // punch the open trough
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.moveTo(23, 62); c.lineTo(77, 62); c.lineTo(69, 80); c.lineTo(31, 80); c.closePath();
    c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: mud mound in the pan
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(35, 76);
    c.quadraticCurveTo(42, 65, 50, 65.5);
    c.quadraticCurveTo(58, 66, 65, 76);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'drywall-corner', cat: 'drywall', name: 'Corner Bead',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    // angle profile (7 vertices, flat apex)
    c.beginPath();
    c.moveTo(16, 82); c.lineTo(46, 26); c.lineTo(54, 26); c.lineTo(84, 82);
    c.lineTo(66, 82); c.lineTo(50, 52); c.lineTo(34, 82);
    c.closePath(); c.fill();
    // punches: perforation holes + ridge
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(33, 66, 2.8, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(41, 51, 2.8, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(67, 66, 2.8, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(59, 51, 2.8, 0, Math.PI * 2); c.fill();
    c.strokeStyle = '#000'; c.lineWidth = 3; c.lineCap = 'round';
    c.beginPath(); c.moveTo(50, 32); c.lineTo(50, 46); c.stroke();
    // halo for the bead cap (overlaps the apex so it nests into the angle)
    c.beginPath(); c.arc(50, 21, 10.5, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: bead nose
    c.fillStyle = A;
    c.beginPath(); c.arc(50, 21, 6.5, 0, Math.PI * 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'drywall-sander', cat: 'drywall', name: 'Pole Sander',
  draw: function (c, M, A) {
    function headPath() {
      c.save(); c.translate(38, 68); c.rotate(-0.22);
      c.beginPath();
      var x = -25, y = -8.5, w = 50, h = 17, r = 4;
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
      c.restore();
    }
    c.save();
    // pole
    c.strokeStyle = M; c.lineWidth = 9; c.lineCap = 'round';
    c.beginPath(); c.moveTo(40, 60); c.lineTo(78, 10); c.stroke();
    // head halo-punched over pole
    c.globalCompositeOperation = 'destination-out';
    c.lineWidth = 7; c.lineJoin = 'round'; c.strokeStyle = '#000';
    headPath(); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = M; headPath(); c.fill();
    // accent: sweep arc, haloed
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 15; c.lineCap = 'round';
    c.beginPath(); c.arc(78, 8, 82, 1.72, 2.32, false); c.stroke();
    c.globalCompositeOperation = 'source-over';
    c.strokeStyle = A; c.lineWidth = 8;
    c.beginPath(); c.arc(78, 8, 82, 1.72, 2.32, false); c.stroke();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'drywall-sheets', cat: 'drywall', name: 'Stacked Sheets',
  draw: function (c, M, A) {
    function slab(y) {
      c.beginPath();
      c.moveTo(16, y + 7); c.lineTo(84, y - 7); c.lineTo(84, y + 3); c.lineTo(16, y + 17);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    slab(41); c.fill();
    slab(58); c.fill();
    slab(75); c.fill();
    // punch: flush end seam
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 2.5; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(75, 30); c.lineTo(75, 92); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: top sheet being laid on
    c.fillStyle = A;
    slab(24); c.fill();
    c.restore();
  }
});
LM_MARKS.push({
  id: 'flooring-herringbone', cat: 'flooring', name: 'Herringbone Planks',
  draw: function (c, M, A) {
    function plank(cx, cy, ang) {
      c.save(); c.translate(cx, cy); c.rotate(ang);
      c.beginPath();
      var x = -16, y = -7.5, w = 32, h = 15, r = 3;
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
      c.restore();
    }
    function put(cx, cy, ang, col) {
      c.globalCompositeOperation = 'destination-out';
      c.lineWidth = 6.5; c.lineJoin = 'round'; c.strokeStyle = '#000';
      plank(cx, cy, ang); c.stroke(); c.fill();
      c.globalCompositeOperation = 'source-over';
      c.fillStyle = col; plank(cx, cy, ang); c.fill();
    }
    c.save();
    var a = Math.PI / 4;
    put(38, 37, -a, M);
    put(62, 23, a, M);
    put(38, 67, -a, M);
    put(62, 81, a, M);
    put(62, 52, a, A);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'flooring-chevron', cat: 'flooring', name: 'Chevron Parquet',
  draw: function (c, M, A) {
    function band(yL) {
      c.beginPath();
      c.moveTo(20, yL); c.lineTo(50, yL - 17); c.lineTo(80, yL);
      c.lineTo(80, yL + 11); c.lineTo(50, yL - 6); c.lineTo(20, yL + 11);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    band(46); c.fill();
    band(64); c.fill();
    band(82); c.fill();
    c.fillStyle = A;
    band(28); c.fill();
    // punch: parquet center seam through all bands
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(50, 6); c.lineTo(50, 96); c.stroke();
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});

LM_MARKS.push({
  id: 'flooring-rollout', cat: 'flooring', name: 'Roll-Out Wave',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    // roll
    c.beginPath(); c.arc(66, 54, 22, 0, Math.PI * 2); c.fill();
    // unrolled run with a low wave hump
    c.beginPath();
    c.moveTo(6, 76);
    c.lineTo(6, 65);
    c.quadraticCurveTo(19, 56, 30, 63);
    c.quadraticCurveTo(40, 69, 50, 68);
    c.lineTo(60, 68);
    c.lineTo(60, 76);
    c.closePath(); c.fill();
    // punch: seam between run and roll, spiral line, core ring
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3.2; c.lineCap = 'round';
    c.beginPath(); c.arc(66, 54, 24, Math.PI * 0.55, Math.PI * 1.05, false); c.stroke();
    c.lineWidth = 4;
    c.beginPath(); c.arc(66, 54, 14, Math.PI * 0.6, Math.PI * 2.15, false); c.stroke();
    c.beginPath(); c.arc(66, 54, 9, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: roll core
    c.fillStyle = A;
    c.beginPath(); c.arc(66, 54, 5.5, 0, Math.PI * 2); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'flooring-transition', cat: 'flooring', name: 'Tile Meets Plank',
  draw: function (c, M, A) {
    function molding() {
      var x = 45, y = 12, w = 10, h = 74, r = 3;
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // one floor field, split by the accent molding
    c.beginPath(); c.rect(18, 16, 64, 66); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3.2; c.lineCap = 'butt';
    // left half: tile grid
    c.beginPath(); c.moveTo(33, 16); c.lineTo(33, 82); c.stroke();
    c.beginPath(); c.moveTo(18, 38); c.lineTo(46, 38); c.stroke();
    c.beginPath(); c.moveTo(18, 60); c.lineTo(46, 60); c.stroke();
    // right half: planks with staggered joints
    c.beginPath(); c.moveTo(54, 38); c.lineTo(82, 38); c.stroke();
    c.beginPath(); c.moveTo(54, 60); c.lineTo(82, 60); c.stroke();
    c.beginPath(); c.moveTo(68, 16); c.lineTo(68, 38); c.stroke();
    c.beginPath(); c.moveTo(74, 38); c.lineTo(74, 60); c.stroke();
    c.beginPath(); c.moveTo(68, 60); c.lineTo(68, 82); c.stroke();
    // halo for the molding strip
    c.lineWidth = 7; c.lineJoin = 'round';
    molding(); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: T-molding transition strip
    c.fillStyle = A;
    molding(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'flooring-tongue', cat: 'flooring', name: 'Tongue & Groove',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // main board profile with tongue on the right
    rr(34, 26, 40, 48, 3); c.fill();
    c.beginPath(); c.rect(72, 42, 14, 16); c.fill();
    // punch groove on the left face
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.rect(30, 42, 12, 16); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: mating board sliding in from the left
    c.fillStyle = A;
    rr(8, 26, 18, 48, 3); c.fill();
    c.beginPath(); c.rect(25, 42, 6, 16); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'flooring-stairs', cat: 'flooring', name: 'Staircase Steps',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(16, 84); c.lineTo(16, 68); c.lineTo(33, 68); c.lineTo(33, 52);
    c.lineTo(50, 52); c.lineTo(50, 36); c.lineTo(67, 36); c.lineTo(67, 20);
    c.lineTo(84, 20); c.lineTo(84, 84);
    c.closePath(); c.fill();
    // punch: tread shadow lines
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 2.8; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(84, 26); c.lineTo(73, 26); c.stroke();
    c.beginPath(); c.moveTo(84, 42); c.lineTo(56, 42); c.stroke();
    c.beginPath(); c.moveTo(84, 58); c.lineTo(39, 58); c.stroke();
    c.beginPath(); c.moveTo(84, 74); c.lineTo(22, 74); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: handrail above the run
    c.strokeStyle = A; c.lineWidth = 8; c.lineCap = 'round';
    c.beginPath(); c.moveTo(12, 62); c.lineTo(60, 14); c.stroke();
    c.restore();
  }
});
LM_MARKS.push({
  id: 'siding-courses', cat: 'siding', name: 'Lap Courses',
  draw: function (c, M, A) {
    function course(i, short) {
      var y = 17 + i * 13.5;
      var x = 19, w = 62, h = 10.5, r = 2;
      if (short) { x = 26; w = 55; }
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    course(1); c.fill();
    course(2); c.fill();
    course(3); c.fill();
    course(4); c.fill();
    // punch: two long staggered butt joints (long boards, not brick)
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(62, 44.5); c.lineTo(62, 55); c.stroke();
    c.beginPath(); c.moveTo(38, 71.5); c.lineTo(38, 82); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: next course being hung, slid in from the right
    c.fillStyle = A;
    course(0, true); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'siding-gable', cat: 'siding', name: 'Sided Gable',
  draw: function (c, M, A) {
    function roof() {
      c.beginPath();
      c.moveTo(14, 54); c.lineTo(50, 20); c.lineTo(86, 54);
    }
    c.save();
    c.fillStyle = M;
    // gable-end house
    c.beginPath();
    c.moveTo(22, 84); c.lineTo(22, 50); c.lineTo(50, 24); c.lineTo(78, 50); c.lineTo(78, 84);
    c.closePath(); c.fill();
    // punch siding lines + door
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3.2; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(22, 42); c.lineTo(78, 42); c.stroke();
    c.beginPath(); c.moveTo(22, 52); c.lineTo(78, 52); c.stroke();
    c.beginPath(); c.moveTo(22, 62); c.lineTo(78, 62); c.stroke();
    c.beginPath(); c.moveTo(22, 72); c.lineTo(78, 72); c.stroke();
    c.beginPath(); c.rect(43, 66, 14, 18); c.fill();
    // halo for the roof cap
    c.lineWidth = 16; c.lineCap = 'round'; c.lineJoin = 'round';
    roof(); c.stroke();
    c.globalCompositeOperation = 'source-over';
    // accent: roof cap
    c.strokeStyle = A; c.lineWidth = 9;
    roof(); c.stroke();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'siding-gutterrun', cat: 'siding', name: 'Gutter Run',
  draw: function (c, M, A) {
    function elbow() {
      c.beginPath();
      c.rect(60, 66, 13, 10);
      c.moveTo(60, 74); c.lineTo(73, 74); c.lineTo(82, 86); c.lineTo(69, 86);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // gutter
    c.beginPath();
    c.moveTo(12, 26); c.lineTo(80, 26); c.lineTo(80, 40); c.lineTo(14, 40);
    c.closePath(); c.fill();
    // downspout
    c.beginPath(); c.rect(60, 40, 13, 24); c.fill();
    // punch: gutter lip + strap seams
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(16, 31.5); c.lineTo(76, 31.5); c.stroke();
    c.beginPath(); c.moveTo(58, 44); c.lineTo(75, 44); c.stroke();
    c.beginPath(); c.moveTo(58, 55); c.lineTo(75, 55); c.stroke();
    // halo for elbow
    c.lineWidth = 7; c.lineJoin = 'round';
    elbow(); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: elbow kick-out
    c.fillStyle = A;
    elbow(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'siding-raindrop', cat: 'siding', name: 'Drop & Gutter',
  draw: function (c, M, A) {
    function rr(x, y, w, h, r) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // gutter trough
    rr(24, 58, 52, 30, 3); c.fill();
    // punch the open top
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.rect(33, 54, 34, 24); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: big raindrop
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(50, 8);
    c.bezierCurveTo(56, 20, 64, 26, 64, 36);
    c.arc(50, 36, 14, 0, Math.PI, false);
    c.bezierCurveTo(36, 26, 44, 20, 50, 8);
    c.closePath(); c.fill();
    // punch highlight in the drop
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(44.5, 39, 3, 0, Math.PI * 2); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});

LM_MARKS.push({
  id: 'siding-cornertrim', cat: 'siding', name: 'Corner Trim',
  draw: function (c, M, A) {
    function trim() {
      var x = 44, y = 12, w = 12, h = 76, r = 3;
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    c.save();
    c.fillStyle = M;
    // two receding siding walls
    c.beginPath(); c.moveTo(16, 28); c.lineTo(50, 16); c.lineTo(50, 82); c.lineTo(16, 82); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(50, 16); c.lineTo(84, 28); c.lineTo(84, 82); c.lineTo(50, 82); c.closePath(); c.fill();
    // punch siding lines (parallel to eaves)
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3.2; c.lineCap = 'butt';
    var k;
    for (k = 15; k <= 60; k += 15) {
      c.beginPath(); c.moveTo(16, 28 + k); c.lineTo(50, 16 + k); c.stroke();
      c.beginPath(); c.moveTo(50, 16 + k); c.lineTo(84, 28 + k); c.stroke();
    }
    // halo for trim
    c.lineWidth = 7; c.lineJoin = 'round';
    trim(); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: vertical corner trim board
    c.fillStyle = A;
    trim(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'siding-soffit', cat: 'siding', name: 'Soffit & Fascia',
  draw: function (c, M, A) {
    function soffit() {
      c.beginPath(); c.rect(37, 59, 24, 12);
    }
    c.save();
    c.fillStyle = M;
    // roof slope down to the eave (thick)
    c.beginPath();
    c.moveTo(14, 20); c.lineTo(78, 36); c.lineTo(78, 50); c.lineTo(14, 34);
    c.closePath(); c.fill();
    // fascia board hanging from the eave (connected to roof)
    c.beginPath(); c.rect(64, 40, 14, 30); c.fill();
    // wall
    c.beginPath(); c.rect(18, 58, 16, 32); c.fill();
    // punch: drip-edge seam on fascia
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000'; c.lineWidth = 3; c.lineCap = 'butt';
    c.beginPath(); c.moveTo(65, 54); c.lineTo(77, 54); c.stroke();
    // halo for soffit panel
    c.lineWidth = 7; c.lineJoin = 'round';
    soffit(); c.stroke(); c.fill();
    c.globalCompositeOperation = 'source-over';
    // accent: soffit panel tucked between wall and fascia
    c.fillStyle = A;
    soffit(); c.fill();
    // punch vent slot in the soffit panel
    c.globalCompositeOperation = 'destination-out';
    c.lineWidth = 3; c.lineCap = 'round';
    c.beginPath(); c.moveTo(43, 65); c.lineTo(55, 65); c.stroke();
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});
/* TILE category marks */

LM_MARKS.push({
  id: 'tile-subway', cat: 'tile', name: 'Subway Offset',
  draw: function (c, M, A) {
    var x0 = 16, x1 = 84, y0 = 20, y1 = 80, rowH = 12, g = 4, i, y;
    c.save();
    /* main block */
    c.fillStyle = M;
    c.beginPath(); c.rect(x0, y0, x1 - x0, y1 - y0); c.fill();
    /* punch grout: horizontal lines */
    c.globalCompositeOperation = 'destination-out';
    for (i = 1; i < 4; i++) {
      y = y0 + i * (rowH + g) - g;
      c.fillRect(x0 - 2, y, x1 - x0 + 4, g);
    }
    /* vertical joints, offset per row */
    /* rows 0 & 2: joint at x=48 ; rows 1 & 3: joints at 31 and 65 */
    c.fillRect(48, y0 - 2, g, rowH + 4);            /* row 0 */
    c.fillRect(48, y0 + 2 * (rowH + g) - 2, g, rowH + 4); /* row 2 */
    c.fillRect(31, y0 + (rowH + g) - 2, g, rowH + 4);     /* row 1 */
    c.fillRect(65, y0 + (rowH + g) - 2, g, rowH + 4);
    c.fillRect(31, y0 + 3 * (rowH + g) - 2, g, rowH + 4); /* row 3 */
    c.fillRect(65, y0 + 3 * (rowH + g) - 2, g, rowH + 4);
    /* punch clearance for the accent brick (row 1 middle brick) */
    c.fillRect(35 - 3, y0 + rowH + g - 3, 30 + 6, rowH + 6);
    c.globalCompositeOperation = 'source-over';
    /* accent brick */
    c.fillStyle = A;
    c.fillRect(35, y0 + rowH + g, 30, rowH);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'tile-diamond', cat: 'tile', name: 'Diamond Emblem',
  draw: function (c, M, A) {
    c.save();
    c.translate(50, 48);
    c.rotate(Math.PI / 4);
    /* outer frame */
    c.fillStyle = M;
    c.beginPath(); c.rect(-28, -28, 56, 56); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.rect(-22, -22, 44, 44); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* inner tile */
    c.beginPath(); c.rect(-16, -16, 32, 32); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.rect(-7, -7, 14, 14); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent core */
    c.fillStyle = A;
    c.beginPath(); c.rect(-4, -4, 8, 8); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'tile-trowel', cat: 'tile', name: 'Notched Trowel',
  draw: function (c, M, A) {
    var x;
    c.save();
    c.fillStyle = M;
    /* blade */
    c.beginPath(); c.rect(14, 50, 72, 26); c.fill();
    /* post connecting handle to blade */
    c.beginPath(); c.rect(46, 37, 8, 15); c.fill();
    /* punch notch teeth along bottom edge */
    c.globalCompositeOperation = 'destination-out';
    for (x = 21; x < 82; x += 13) {
      c.fillRect(x, 67, 7, 12);
    }
    /* clearance between handle and post */
    c.fillRect(28, 34, 44, 3);
    c.globalCompositeOperation = 'source-over';
    /* accent handle: rounded bar */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(36, 22);
    c.lineTo(64, 22);
    c.arc(64, 28, 6, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(36, 34);
    c.arc(36, 28, 6, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'tile-penny', cat: 'tile', name: 'Penny Rounds',
  draw: function (c, M, A) {
    var cx = 50, cy = 48, R = 34, row, col, px, py, dx, dy;
    c.save();
    c.fillStyle = M;
    c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2, false); c.fill();
    /* punch penny holes in a packed grid, keep rim solid */
    c.globalCompositeOperation = 'destination-out';
    for (row = -2; row <= 2; row++) {
      py = cy + row * 10.5;
      for (col = -3; col <= 3; col++) {
        px = cx + col * 12 + ((row % 2) !== 0 ? 6 : 0);
        dx = px - cx; dy = py - cy;
        if (px === cx && py === cy) continue; /* center handled below */
        if (Math.sqrt(dx * dx + dy * dy) <= 25) {
          c.beginPath(); c.arc(px, py, 4.5, 0, Math.PI * 2, false); c.fill();
        }
      }
    }
    /* bigger punched socket for the accent penny at center */
    c.beginPath(); c.arc(cx, cy, 7.5, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    c.beginPath(); c.arc(cx, cy, 4.5, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'tile-format', cat: 'tile', name: 'Format Grid',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* four large-format tiles with spacer gaps */
    c.beginPath();
    c.rect(16, 14, 32, 32);
    c.rect(52, 14, 32, 32);
    c.rect(16, 50, 32, 32);
    c.rect(52, 50, 32, 32);
    c.fill();
    /* punch clearance circle at the intersection */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 48, 13, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent spacer cross */
    c.fillStyle = A;
    c.beginPath();
    c.rect(40, 45, 20, 6);
    c.rect(47, 38, 6, 20);
    c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'tile-spacer', cat: 'tile', name: 'Spacer Cross',
  draw: function (c, M, A) {
    c.save();
    c.translate(50, 48);
    c.fillStyle = M;
    /* hero cross */
    c.beginPath();
    c.rect(-34, -11, 68, 22);
    c.rect(-11, -34, 22, 68);
    c.fill();
    c.globalCompositeOperation = 'destination-out';
    /* ridge notches near each arm tip (partial, arms stay connected) */
    c.fillRect(-28, -14, 4, 8);
    c.fillRect(-28, 6, 4, 8);
    c.fillRect(24, -14, 4, 8);
    c.fillRect(24, 6, 4, 8);
    c.fillRect(-14, -28, 8, 4);
    c.fillRect(6, -28, 8, 4);
    c.fillRect(-14, 24, 8, 4);
    c.fillRect(6, 24, 8, 4);
    /* center socket */
    c.beginPath(); c.arc(0, 0, 10, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = A;
    c.beginPath(); c.arc(0, 0, 7, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});
/* WELDING category marks */

LM_MARKS.push({
  id: 'welding-torch', cat: 'welding', name: 'Torch & Spark',
  draw: function (c, M, A) {
    var i, a, ro, ri;
    c.save();
    c.translate(50, 44);
    c.rotate(Math.PI / 4);
    /* torch handle */
    c.fillStyle = M;
    c.beginPath(); c.rect(-11, -44, 22, 30); c.fill();
    /* neck taper to nozzle */
    c.beginPath();
    c.moveTo(-11, -14);
    c.lineTo(11, -14);
    c.lineTo(6, 8);
    c.lineTo(-6, 8);
    c.closePath(); c.fill();
    /* punch grip lines on handle */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(-13, -37, 26, 4);
    c.fillRect(-13, -29, 26, 4);
    c.fillRect(-13, -21, 26, 4);
    c.globalCompositeOperation = 'source-over';
    /* accent spark burst below nozzle tip (3+ gap) */
    c.fillStyle = A;
    c.beginPath();
    for (i = 0; i < 16; i++) {
      a = (Math.PI * 2 * i) / 16 - Math.PI / 2;
      ro = (i % 2 === 0) ? 15 : 6.5;
      if (i === 0) c.moveTo(Math.cos(a) * ro, 26 + Math.sin(a) * ro);
      else c.lineTo(Math.cos(a) * ro, 26 + Math.sin(a) * ro);
    }
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'welding-mask', cat: 'welding', name: 'Weld Mask',
  draw: function (c, M, A) {
    c.save();
    /* helmet silhouette */
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(24, 28);
    c.quadraticCurveTo(24, 14, 38, 14);
    c.lineTo(62, 14);
    c.quadraticCurveTo(76, 14, 76, 28);
    c.lineTo(76, 60);
    c.quadraticCurveTo(76, 84, 58, 84);
    c.lineTo(42, 84);
    c.quadraticCurveTo(24, 84, 24, 60);
    c.closePath(); c.fill();
    /* punch lens slot */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(31, 38);
    c.lineTo(69, 38);
    c.quadraticCurveTo(72, 38, 72, 41);
    c.lineTo(72, 53);
    c.quadraticCurveTo(72, 56, 69, 56);
    c.lineTo(31, 56);
    c.quadraticCurveTo(28, 56, 28, 53);
    c.lineTo(28, 41);
    c.quadraticCurveTo(28, 38, 31, 38);
    c.closePath(); c.fill();
    /* punch chin vent slots */
    c.fillRect(40, 68, 20, 3.5);
    c.fillRect(40, 75, 20, 3.5);
    c.globalCompositeOperation = 'source-over';
    /* accent lens */
    c.fillStyle = A;
    c.fillRect(31, 41, 38, 9);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'welding-bead', cat: 'welding', name: 'Bead Seam',
  draw: function (c, M, A) {
    var ys = [34, 45, 56, 67, 78], i;
    c.save();
    c.fillStyle = M;
    /* two plates, chamfered outer corners */
    c.beginPath();
    c.moveTo(12, 44); c.lineTo(46, 38); c.lineTo(46, 78); c.lineTo(12, 78);
    c.closePath(); c.fill();
    c.beginPath();
    c.moveTo(88, 44); c.lineTo(54, 38); c.lineTo(54, 78); c.lineTo(88, 78);
    c.closePath(); c.fill();
    /* punch clearance channel for the bead */
    c.globalCompositeOperation = 'destination-out';
    for (i = 0; i < ys.length; i++) {
      c.beginPath(); c.arc(50, ys[i], 9.5, 0, Math.PI * 2, false); c.fill();
    }
    c.globalCompositeOperation = 'source-over';
    /* accent weld bead: overlapping scallops down the seam */
    c.fillStyle = A;
    for (i = 0; i < ys.length; i++) {
      c.beginPath(); c.arc(50, ys[i], 6.5, 0, Math.PI * 2, false); c.fill();
    }
    c.restore();
  }
});

LM_MARKS.push({
  id: 'welding-clamp', cat: 'welding', name: 'C-Clamp',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* C-frame: top arm, right spine, bottom arm (opening faces left) */
    c.beginPath();
    c.moveTo(26, 12);
    c.lineTo(72, 12);
    c.quadraticCurveTo(80, 12, 80, 20);
    c.lineTo(80, 62);
    c.quadraticCurveTo(80, 70, 72, 70);
    c.lineTo(26, 70);
    c.lineTo(26, 56);
    c.lineTo(62, 56);
    c.lineTo(62, 26);
    c.lineTo(26, 26);
    c.closePath(); c.fill();
    /* punch a channel through the bottom arm for the screw */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(31, 52, 14, 22);
    c.globalCompositeOperation = 'source-over';
    /* screw: pad + rod (rod refills middle of the punched channel) */
    c.fillRect(30, 40, 16, 6);   /* pad */
    c.fillRect(34, 46, 8, 40);   /* rod down through bottom arm to handle */
    /* T-handle (part of main silhouette) */
    c.beginPath();
    c.moveTo(27, 84);
    c.lineTo(49, 84);
    c.arc(49, 87.5, 3.5, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(27, 91);
    c.arc(27, 87.5, 3.5, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    /* punch thread lines on rod below the frame */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(32, 73, 12, 2.5);
    c.fillRect(32, 78, 12, 2.5);
    c.globalCompositeOperation = 'source-over';
    /* accent: workpiece clamped between top arm and pad (3-unit gaps) */
    c.fillStyle = A;
    c.fillRect(18, 29, 32, 8);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'welding-ibeam', cat: 'welding', name: 'I-Beam Section',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* full I silhouette: top flange, web, bottom flange (connected) */
    c.beginPath();
    c.moveTo(22, 14); c.lineTo(78, 14); c.lineTo(78, 24); c.lineTo(74, 27);
    c.lineTo(26, 27); c.lineTo(22, 24);
    c.closePath(); c.fill();
    c.fillRect(43, 27, 14, 46);
    c.beginPath();
    c.moveTo(26, 73); c.lineTo(74, 73); c.lineTo(78, 76); c.lineTo(78, 86);
    c.lineTo(22, 86); c.lineTo(22, 76);
    c.closePath(); c.fill();
    /* accent fillet welds in the lower web/flange corners (3-unit air gap) */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(40, 53); c.lineTo(40, 70); c.lineTo(23, 70);
    c.closePath(); c.fill();
    c.beginPath();
    c.moveTo(60, 53); c.lineTo(60, 70); c.lineTo(77, 70);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'welding-sparks', cat: 'welding', name: 'Spark Shower',
  draw: function (c, M, A) {
    var angles = [-90, -73, -56, -39, -22, -5];
    var lens =   [ 46,   56,  48,  56,  48,  46];
    var i, a, r1;
    c.save();
    c.translate(26, 78);
    c.fillStyle = M;
    /* arc band around the weld point */
    c.beginPath();
    c.arc(0, 0, 25, -97 * Math.PI / 180, 2 * Math.PI / 180, false);
    c.arc(0, 0, 15, 2 * Math.PI / 180, -97 * Math.PI / 180, true);
    c.closePath(); c.fill();
    /* spark rays beyond the arc */
    for (i = 0; i < angles.length; i++) {
      a = angles[i] * Math.PI / 180;
      r1 = lens[i];
      c.save();
      c.rotate(a);
      c.beginPath();
      c.moveTo(30, -4.2);
      c.lineTo(r1, -2);
      c.arc(r1, 0, 2, -Math.PI / 2, Math.PI / 2, false);
      c.lineTo(30, 4.2);
      c.closePath(); c.fill();
      c.restore();
    }
    /* accent origin: weld point */
    c.fillStyle = A;
    c.beginPath(); c.arc(0, 0, 9.5, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});
/* EXCAVATION category marks */

LM_MARKS.push({
  id: 'excavation-excavator', cat: 'excavation', name: 'Boom & Bucket',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* track base */
    c.beginPath();
    c.moveTo(24, 68);
    c.lineTo(56, 68);
    c.arc(56, 76, 8, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(24, 84);
    c.arc(24, 76, 8, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    /* cab body */
    c.beginPath();
    c.moveTo(16, 64);
    c.lineTo(16, 48);
    c.quadraticCurveTo(16, 42, 22, 42);
    c.lineTo(40, 42);
    c.lineTo(44, 64);
    c.closePath(); c.fill();
    /* boom + arm: heavy stroked polyline */
    c.strokeStyle = M;
    c.lineWidth = 9;
    c.lineJoin = 'round';
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(40, 52);
    c.lineTo(62, 24);
    c.lineTo(80, 42);
    c.stroke();
    /* punch track rollers + cab window */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(30, 76, 3.2, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(40, 76, 3.2, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(50, 76, 3.2, 0, Math.PI * 2, false); c.fill();
    c.fillRect(21, 46, 12, 9);
    /* clearance for the bucket */
    c.beginPath();
    c.moveTo(66, 44); c.lineTo(94, 44); c.lineTo(90, 72); c.lineTo(62, 68);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent bucket with teeth */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(71, 48);
    c.lineTo(89, 48);
    c.lineTo(86, 63);
    c.lineTo(83, 66);
    c.lineTo(79, 63);
    c.lineTo(76, 66);
    c.lineTo(72, 63);
    c.lineTo(69, 66);
    c.lineTo(67, 62);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'excavation-dozer', cat: 'excavation', name: 'Dozer Push',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* cab + engine body */
    c.beginPath();
    c.moveTo(40, 58);
    c.lineTo(40, 40);
    c.quadraticCurveTo(40, 34, 46, 34);
    c.lineTo(62, 34);
    c.quadraticCurveTo(68, 34, 68, 40);
    c.lineTo(68, 46);
    c.lineTo(84, 46);
    c.lineTo(84, 58);
    c.closePath(); c.fill();
    /* track unit */
    c.beginPath();
    c.moveTo(46, 62);
    c.lineTo(78, 62);
    c.arc(78, 71, 9, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(46, 80);
    c.arc(46, 71, 9, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    /* push arm to blade */
    c.fillRect(30, 60, 14, 8);
    /* punch cab window + track wheels */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(45, 38, 12, 9);
    c.beginPath(); c.arc(50, 71, 3.4, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(62, 71, 3.4, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(74, 71, 3.4, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent blade: tall plate with curved face, 3-gap left of push arm */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(30, 38);
    c.lineTo(30, 80);
    c.lineTo(15, 80);
    c.lineTo(15, 54);
    c.quadraticCurveTo(15, 38, 26, 38);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'excavation-dump', cat: 'excavation', name: 'Dump Truck',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* tipped bed */
    c.beginPath();
    c.moveTo(10, 26);
    c.lineTo(56, 40);
    c.lineTo(56, 62);
    c.lineTo(16, 62);
    c.closePath(); c.fill();
    /* tailgate nub */
    c.beginPath();
    c.moveTo(10, 26); c.lineTo(16, 24); c.lineTo(22, 46); c.lineTo(14, 44);
    c.closePath(); c.fill();
    /* chassis */
    c.fillRect(16, 64, 70, 8);
    /* wheels */
    c.beginPath(); c.arc(30, 78, 9, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(70, 78, 9, 0, Math.PI * 2, false); c.fill();
    /* punch wheel hubs */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(30, 78, 3.4, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(70, 78, 3.4, 0, Math.PI * 2, false); c.fill();
    /* clearance around the cab */
    c.fillRect(57, 38, 33, 24);
    c.globalCompositeOperation = 'source-over';
    /* accent cab */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(60, 61);
    c.lineTo(60, 47);
    c.quadraticCurveTo(60, 41, 66, 41);
    c.lineTo(76, 41);
    c.lineTo(80, 50);
    c.lineTo(87, 52);
    c.lineTo(87, 61);
    c.closePath(); c.fill();
    /* punch cab window */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(65, 45); c.lineTo(73, 45); c.lineTo(76, 52); c.lineTo(65, 52);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});

LM_MARKS.push({
  id: 'excavation-tools', cat: 'excavation', name: 'Shovel & Pick',
  draw: function (c, M, A) {
    c.save();
    /* pick: handle from top-right down to bottom-left */
    c.strokeStyle = M;
    c.fillStyle = M;
    c.lineCap = 'round';
    c.lineWidth = 8;
    c.beginPath();
    c.moveTo(69, 26);
    c.lineTo(30, 70);
    c.stroke();
    /* pick head: crescent perpendicular to handle at the top end */
    c.save();
    c.translate(69, 25);
    c.rotate(Math.PI / 4);
    c.beginPath();
    c.arc(0, 16, 28, -125 * Math.PI / 180, -55 * Math.PI / 180, false);
    c.arc(0, 16, 18, -55 * Math.PI / 180, -125 * Math.PI / 180, true);
    c.closePath(); c.fill();
    c.restore();
    /* punch a weave gap along the shovel axis at the crossing */
    c.globalCompositeOperation = 'destination-out';
    c.save();
    c.translate(50, 47);
    c.rotate(Math.PI / 4);
    c.fillRect(-13, -7, 26, 14);
    c.restore();
    c.globalCompositeOperation = 'source-over';
    /* shovel handle + D-grip */
    c.lineWidth = 8;
    c.beginPath();
    c.moveTo(33, 28);
    c.lineTo(62, 60);
    c.stroke();
    c.lineWidth = 6;
    c.beginPath();
    c.arc(29, 24, 8, 0, Math.PI * 2, false);
    c.stroke();
    /* accent shovel spade, 3-gap beyond handle end */
    c.fillStyle = A;
    c.save();
    c.translate(65, 63);
    c.rotate(Math.PI / 4);
    c.beginPath();
    c.moveTo(-11, 2);
    c.quadraticCurveTo(-11, 14, 0, 20);
    c.quadraticCurveTo(11, 14, 11, 2);
    c.quadraticCurveTo(6, -2, 0, -2);
    c.quadraticCurveTo(-6, -2, -11, 2);
    c.closePath(); c.fill();
    c.restore();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'excavation-mound', cat: 'excavation', name: 'Graded Mound',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* mound */
    c.beginPath();
    c.moveTo(10, 76);
    c.quadraticCurveTo(28, 36, 50, 34);
    c.quadraticCurveTo(72, 36, 90, 76);
    c.closePath(); c.fill();
    /* base grade bar */
    c.fillRect(8, 80, 84, 7);
    /* punch grade contour lines */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(6, 62, 88, 3.5);
    c.fillRect(6, 71, 88, 3.5);
    /* punch stake socket at the apex */
    c.fillRect(45, 30, 10, 16);
    c.globalCompositeOperation = 'source-over';
    /* accent survey stake with flag */
    c.fillStyle = A;
    c.fillRect(48, 14, 4, 29);   /* pole ends 3 above socket floor */
    c.beginPath();
    c.moveTo(52, 14); c.lineTo(68, 19); c.lineTo(52, 24);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'excavation-tread', cat: 'excavation', name: 'Track Tread',
  draw: function (c, M, A) {
    var x;
    c.save();
    c.fillStyle = M;
    /* outer stadium */
    c.beginPath();
    c.moveTo(34, 28);
    c.lineTo(66, 28);
    c.arc(66, 48, 20, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(34, 68);
    c.arc(34, 48, 20, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    /* grouser teeth top & bottom */
    for (x = 30; x <= 66; x += 9) {
      c.fillRect(x, 23, 5, 6);
      c.fillRect(x, 67, 5, 6);
    }
    /* punch inner stadium */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(36, 39);
    c.lineTo(64, 39);
    c.arc(64, 48, 9, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(36, 57);
    c.arc(36, 48, 9, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent road wheels inside the loop */
    c.fillStyle = A;
    c.beginPath(); c.arc(38, 48, 4.5, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(50, 48, 4.5, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(62, 48, 4.5, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});
/* LANDSCAPING category marks */

LM_MARKS.push({
  id: 'landscaping-tree', cat: 'landscaping', name: 'Tree Circle',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* ring badge */
    c.beginPath(); c.arc(50, 48, 34, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 48, 28, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* tree canopy: three merged lobes */
    c.beginPath(); c.arc(50, 38, 12, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(40, 45, 9, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(60, 45, 9, 0, Math.PI * 2, false); c.fill();
    /* trunk */
    c.beginPath();
    c.moveTo(46, 50); c.lineTo(54, 50); c.lineTo(53, 66); c.lineTo(47, 66);
    c.closePath(); c.fill();
    /* accent ground bar */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(38, 70);
    c.lineTo(62, 70);
    c.arc(62, 72.5, 2.5, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(38, 75);
    c.arc(38, 72.5, 2.5, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'landscaping-mower', cat: 'landscaping', name: 'Mower Stripes',
  draw: function (c, M, A) {
    var bases = [22, 40, 58], i, bx;
    c.save();
    c.fillStyle = M;
    /* mower deck + engine */
    c.beginPath();
    c.moveTo(30, 44);
    c.lineTo(62, 44);
    c.quadraticCurveTo(68, 44, 68, 50);
    c.lineTo(68, 56);
    c.lineTo(30, 56);
    c.closePath(); c.fill();
    c.beginPath();
    c.moveTo(36, 34);
    c.quadraticCurveTo(36, 30, 40, 30);
    c.lineTo(48, 30);
    c.quadraticCurveTo(52, 30, 52, 34);
    c.lineTo(52, 42);
    c.lineTo(36, 42);
    c.closePath(); c.fill();
    /* wheels */
    c.beginPath(); c.arc(37, 61, 8, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(61, 62.5, 6, 0, Math.PI * 2, false); c.fill();
    /* handle */
    c.strokeStyle = M;
    c.lineWidth = 5;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(31, 46);
    c.lineTo(16, 24);
    c.stroke();
    c.lineWidth = 6;
    c.beginPath();
    c.moveTo(12, 18);
    c.lineTo(21, 31);
    c.stroke();
    /* punch wheel hubs + deck gap */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(37, 61, 3, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(61, 62.5, 2.2, 0, Math.PI * 2, false); c.fill();
    c.fillRect(34, 42, 20, 0);
    c.globalCompositeOperation = 'source-over';
    /* accent: striped turf band below (converging mow stripes) */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(18, 74);
    c.lineTo(82, 74);
    c.lineTo(88, 88);
    c.lineTo(12, 88);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    for (i = 0; i < bases.length; i++) {
      bx = bases[i];
      c.beginPath();
      c.moveTo(bx + 9, 72);
      c.lineTo(bx + 12.5, 72);
      c.lineTo(bx + 10.5, 90);
      c.lineTo(bx + 6, 90);
      c.closePath(); c.fill();
    }
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});

LM_MARKS.push({
  id: 'landscaping-leaf', cat: 'landscaping', name: 'Leaf & Blade',
  draw: function (c, M, A) {
    c.save();
    /* leaf silhouette */
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(44, 80);
    c.quadraticCurveTo(26, 40, 78, 20);
    c.quadraticCurveTo(74, 70, 44, 80);
    c.closePath(); c.fill();
    /* punch center vein */
    c.globalCompositeOperation = 'destination-out';
    c.strokeStyle = '#000';
    c.lineWidth = 3.5;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(46, 76);
    c.quadraticCurveTo(52, 48, 74, 26);
    c.stroke();
    /* punch two side veins */
    c.lineWidth = 3;
    c.beginPath(); c.moveTo(51, 58); c.lineTo(62, 60); c.stroke();
    c.beginPath(); c.moveTo(58, 44); c.lineTo(69, 46); c.stroke();
    c.globalCompositeOperation = 'source-over';
    /* accent grass blades at bottom-left */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(20, 82);
    c.quadraticCurveTo(16, 62, 24, 46);
    c.quadraticCurveTo(27, 64, 28, 82);
    c.closePath(); c.fill();
    c.beginPath();
    c.moveTo(32, 82);
    c.quadraticCurveTo(29, 70, 33, 58);
    c.quadraticCurveTo(38, 70, 39, 82);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'landscaping-path', cat: 'landscaping', name: 'Paver Path',
  draw: function (c, M, A) {
    var ts = [0.22, 0.44, 0.66, 0.86], i, t, px, py, tx, ty, ang;
    var p0x = 30, p0y = 92, cx = 30, cy = 42, p2x = 78, p2y = 24;
    c.save();
    /* path band: wide stroked curve */
    c.strokeStyle = M;
    c.lineWidth = 28;
    c.lineCap = 'butt';
    c.beginPath();
    c.moveTo(p0x, p0y);
    c.quadraticCurveTo(cx, cy, p2x, p2y);
    c.stroke();
    /* punch paver joints perpendicular to the curve */
    c.globalCompositeOperation = 'destination-out';
    for (i = 0; i < ts.length; i++) {
      t = ts[i];
      px = (1 - t) * (1 - t) * p0x + 2 * (1 - t) * t * cx + t * t * p2x;
      py = (1 - t) * (1 - t) * p0y + 2 * (1 - t) * t * cy + t * t * p2y;
      tx = 2 * (1 - t) * (cx - p0x) + 2 * t * (p2x - cx);
      ty = 2 * (1 - t) * (cy - p0y) + 2 * t * (p2y - cy);
      ang = Math.atan2(ty, tx);
      c.save();
      c.translate(px, py);
      c.rotate(ang);
      c.fillRect(-2, -18, 4, 36);
      c.restore();
    }
    c.globalCompositeOperation = 'source-over';
    /* accent shrubs beside the path */
    c.fillStyle = A;
    c.beginPath(); c.arc(74, 56, 9, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(86, 66, 5.5, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'landscaping-wall', cat: 'landscaping', name: 'Wall & Planting',
  draw: function (c, M, A) {
    c.save();
    /* block retaining wall, three staggered courses */
    c.fillStyle = M;
    c.beginPath(); c.rect(14, 42, 52, 44); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(10, 55, 60, 3);
    c.fillRect(10, 69, 60, 3);
    c.fillRect(40, 40, 3, 15);
    c.fillRect(28, 55, 3, 17);
    c.fillRect(52, 55, 3, 17);
    c.fillRect(40, 69, 3, 17);
    c.globalCompositeOperation = 'source-over';
    /* accent planting beside the wall */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(78, 86);
    c.quadraticCurveTo(74, 66, 79, 48);
    c.quadraticCurveTo(84, 66, 82, 86);
    c.closePath(); c.fill();
    /* left leaf */
    c.beginPath();
    c.moveTo(77, 62);
    c.quadraticCurveTo(68, 58, 66, 46);
    c.quadraticCurveTo(76, 50, 78, 58);
    c.closePath(); c.fill();
    /* right leaf */
    c.beginPath();
    c.moveTo(81, 56);
    c.quadraticCurveTo(88, 52, 92, 42);
    c.quadraticCurveTo(94, 54, 83, 60);
    c.closePath(); c.fill();
    /* small mulch dots at the base */
    c.beginPath(); c.arc(71, 84, 3, 0, Math.PI * 2, false); c.fill();
    c.beginPath(); c.arc(89, 84, 3, 0, Math.PI * 2, false); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'landscaping-sun', cat: 'landscaping', name: 'Sun & Turf',
  draw: function (c, M, A) {
    var angs = [200, 235, 270, 305, 340], i, a, x;
    c.save();
    c.fillStyle = M;
    /* sun rays */
    for (i = 0; i < angs.length; i++) {
      a = angs[i] * Math.PI / 180;
      c.save();
      c.translate(50, 56);
      c.rotate(a);
      c.beginPath();
      c.moveTo(21, -3.2);
      c.lineTo(31, -4.6);
      c.lineTo(31, 4.6);
      c.lineTo(21, 3.2);
      c.closePath(); c.fill();
      c.restore();
    }
    /* turf band with grass spikes */
    c.beginPath(); c.rect(14, 60, 72, 17); c.fill();
    c.globalCompositeOperation = 'destination-out';
    for (x = 18; x < 84; x += 9) {
      c.beginPath();
      c.moveTo(x, 59);
      c.lineTo(x + 5.5, 59);
      c.lineTo(x + 2.75, 70);
      c.closePath(); c.fill();
    }
    c.globalCompositeOperation = 'source-over';
    /* accent sun half-disc on the horizon */
    c.fillStyle = A;
    c.beginPath();
    c.arc(50, 56, 15, Math.PI, 0, false);
    c.closePath(); c.fill();
    c.restore();
  }
});
/* UNIVERSAL category marks */

LM_MARKS.push({
  id: 'universal-shield', cat: 'universal', name: 'Shield',
  draw: function (c, M, A) {
    c.save();
    /* shield frame: classic round-bottom, open center for a monogram */
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(24, 16);
    c.lineTo(76, 16);
    c.lineTo(76, 46);
    c.quadraticCurveTo(76, 68, 50, 82);
    c.quadraticCurveTo(24, 68, 24, 46);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(31, 23);
    c.lineTo(69, 23);
    c.lineTo(69, 44);
    c.quadraticCurveTo(69, 62, 50, 73.5);
    c.quadraticCurveTo(31, 62, 31, 44);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent chief band across the top of the opening */
    c.fillStyle = A;
    c.fillRect(34, 26, 32, 7);
    c.restore();
  }
});

LM_MARKS.push({
  id: 'universal-banner', cat: 'universal', name: 'Ribbon Banner',
  draw: function (c, M, A) {
    c.save();
    /* accent tails first (behind), forked ends */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(8, 46); c.lineTo(19, 46); c.lineTo(19, 70); c.lineTo(8, 70);
    c.lineTo(14, 58);
    c.closePath(); c.fill();
    c.beginPath();
    c.moveTo(92, 46); c.lineTo(81, 46); c.lineTo(81, 70); c.lineTo(92, 70);
    c.lineTo(86, 58);
    c.closePath(); c.fill();
    /* main panel frame with open center */
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(24, 36);
    c.lineTo(76, 36);
    c.quadraticCurveTo(78, 48, 76, 64);
    c.lineTo(24, 64);
    c.quadraticCurveTo(22, 48, 24, 36);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(31, 43, 38, 14.5);
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});

LM_MARKS.push({
  id: 'universal-rope', cat: 'universal', name: 'Rope Circle',
  draw: function (c, M, A) {
    var i, a;
    c.save();
    c.fillStyle = M;
    /* ring */
    c.beginPath(); c.arc(50, 50, 34, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(50, 50, 25, 0, Math.PI * 2, false); c.fill();
    /* rope strand notches: short tilted slots that do not sever the band */
    for (i = 0; i < 20; i++) {
      a = (Math.PI * 2 * i) / 20;
      c.save();
      c.translate(50 + Math.cos(a) * 29.5, 50 + Math.sin(a) * 29.5);
      c.rotate(a + Math.PI * 0.28);
      c.fillRect(-1.3, -4.5, 2.6, 9);
      c.restore();
    }
    /* clearance for the accent finial at top */
    c.beginPath(); c.arc(50, 17, 9.5, 0, Math.PI * 2, false); c.fill();
    c.globalCompositeOperation = 'source-over';
    /* accent diamond finial */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(50, 10.5); c.lineTo(56, 17); c.lineTo(50, 23.5); c.lineTo(44, 17);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'universal-tools', cat: 'universal', name: 'Hammer & Wrench',
  draw: function (c, M, A) {
    c.save();
    /* wrench: ring head with open jaw + handle, top-left to bottom-right */
    c.fillStyle = M;
    c.strokeStyle = M;
    c.lineCap = 'round';
    c.beginPath(); c.arc(36, 32, 12, 0, Math.PI * 2, false); c.fill();
    c.lineWidth = 9;
    c.beginPath();
    c.moveTo(41, 39);
    c.lineTo(68, 72);
    c.stroke();
    /* punch wrench jaw + ring hole */
    c.globalCompositeOperation = 'destination-out';
    c.beginPath(); c.arc(34, 30, 5, 0, Math.PI * 2, false); c.fill();
    c.save();
    c.translate(34, 30);
    c.rotate(-Math.PI / 4);
    c.fillRect(-4, -18, 8, 18);
    c.restore();
    /* weave gap along the hammer axis at the crossing */
    c.save();
    c.translate(51, 51);
    c.rotate(-Math.PI / 4);
    c.fillRect(-14, -7, 28, 14);
    c.restore();
    c.globalCompositeOperation = 'source-over';
    /* hammer handle over the wrench */
    c.lineWidth = 8;
    c.beginPath();
    c.moveTo(34, 70);
    c.lineTo(58, 40);
    c.stroke();
    /* accent hammer head, 3-gap beyond handle end */
    c.fillStyle = A;
    c.save();
    c.translate(62, 34);
    c.rotate(Math.PI / 4);
    c.beginPath();
    c.moveTo(-14, -5.5);
    c.lineTo(14, -5.5);
    c.lineTo(12, 5.5);
    c.lineTo(-12, 5.5);
    c.closePath(); c.fill();
    c.restore();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'universal-hardhat', cat: 'universal', name: 'Hard Hat',
  draw: function (c, M, A) {
    c.save();
    c.fillStyle = M;
    /* dome */
    c.beginPath();
    c.moveTo(25, 60);
    c.quadraticCurveTo(25, 21, 50, 21);
    c.quadraticCurveTo(75, 21, 75, 60);
    c.closePath(); c.fill();
    /* punch rib lines */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(39.5, 25, 4, 24);
    c.fillRect(56.5, 25, 4, 24);
    c.globalCompositeOperation = 'source-over';
    /* accent brim, 3-gap below dome */
    c.fillStyle = A;
    c.beginPath();
    c.moveTo(19, 63);
    c.lineTo(81, 63);
    c.arc(81, 68.5, 5.5, -Math.PI / 2, Math.PI / 2, false);
    c.lineTo(19, 74);
    c.arc(19, 68.5, 5.5, Math.PI / 2, -Math.PI / 2, false);
    c.closePath(); c.fill();
    c.restore();
  }
});

LM_MARKS.push({
  id: 'universal-monogram', cat: 'universal', name: 'Monogram Frame',
  draw: function (c, M, A) {
    c.save();
    /* bold rounded frame, open center */
    c.fillStyle = M;
    c.beginPath();
    c.moveTo(26, 14);
    c.lineTo(74, 14);
    c.quadraticCurveTo(84, 14, 84, 24);
    c.lineTo(84, 70);
    c.quadraticCurveTo(84, 80, 74, 80);
    c.lineTo(26, 80);
    c.quadraticCurveTo(16, 80, 16, 70);
    c.lineTo(16, 24);
    c.quadraticCurveTo(16, 14, 26, 14);
    c.closePath(); c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.moveTo(28, 22);
    c.lineTo(72, 22);
    c.quadraticCurveTo(76, 22, 76, 26);
    c.lineTo(76, 68);
    c.quadraticCurveTo(76, 72, 72, 72);
    c.lineTo(28, 72);
    c.quadraticCurveTo(24, 72, 24, 68);
    c.lineTo(24, 26);
    c.quadraticCurveTo(24, 22, 28, 22);
    c.closePath(); c.fill();
    /* punch clearance for the framing-square accent at bottom-left */
    c.fillRect(9, 51, 18, 41);
    c.fillRect(9, 73, 48, 19);
    c.globalCompositeOperation = 'source-over';
    /* accent framing square (L) */
    c.fillStyle = A;
    c.fillRect(12, 54, 10, 35);
    c.fillRect(12, 79, 42, 10);
    /* punch graduation ticks on the square */
    c.globalCompositeOperation = 'destination-out';
    c.fillRect(12, 62, 5, 2.5);
    c.fillRect(12, 70, 5, 2.5);
    c.fillRect(34, 79, 2.5, 5);
    c.fillRect(43, 79, 2.5, 5);
    c.globalCompositeOperation = 'source-over';
    c.restore();
  }
});
