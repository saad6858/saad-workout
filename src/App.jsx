import React, { useState, useEffect } from "react";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;800;900&family=Rajdhani:wght@600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{background:#07070e;font-family:'Exo 2',sans-serif;color:#fff;overflow-x:hidden}
@keyframes pu{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes qu{0%,100%{transform:translateY(0)}40%,60%{transform:translateY(-12px)}}
@keyframes sq{0%,100%{transform:scaleY(1) translateY(0)}50%{transform:scaleY(0.7) translateY(5px)}}
@keyframes pl{0%,100%{opacity:1}50%{opacity:0.55}}
@keyframes ro{0%,100%{transform:translateX(0)}50%{transform:translateX(-8px)}}
@keyframes br{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-20deg)}}
@keyframes cr{0%,100%{transform:rotate(0deg)}50%{transform:rotate(24deg)}}
@keyframes tw{0%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}100%{transform:rotate(-18deg)}}
@keyframes ha{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(6px) rotate(5deg)}}
@keyframes su{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes st{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-30deg)}}
@keyframes di{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
@keyframes lu{0%,100%{transform:rotate(0deg)}50%{transform:rotate(14deg)}}
@keyframes fi{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes expandIn{from{opacity:0;max-height:0}to{opacity:1;max-height:200px}}
@keyframes hbounce{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
.ex-card{border-radius:14px;margin-bottom:10px;overflow:hidden;transition:all 0.25s;border:1px solid rgba(255,255,255,0.07)}
.ex-main{display:flex;align-items:center;padding:12px 14px;cursor:pointer;gap:10px}
.ex-expanded{animation:expandIn 0.3s ease forwards;padding:0 14px 14px;border-top:1px solid rgba(255,255,255,0.06)}
.yt-btn{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:10px;text-decoration:none;font-size:13px;font-weight:700;margin-top:10px;transition:all 0.2s;font-family:'Exo 2',sans-serif}
.yt-btn:hover{transform:translateY(-1px)}
.cb{width:24px;height:24px;border-radius:7px;border:2px solid;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;flex-shrink:0;font-size:12px;font-weight:900}
.tab-btn{flex:1;padding:9px 4px;border:none;border-radius:10px;font-family:'Exo 2',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all 0.2s;letter-spacing:0.3px}
.wk-btn{flex:0 0 auto;padding:8px 14px;border:none;border-radius:10px;font-family:'Exo 2',sans-serif;font-size:12px;font-weight:800;cursor:pointer;transition:all 0.2s}
.dy-btn{flex:0 0 auto;padding:9px 14px;border:none;border-radius:12px;font-family:'Exo 2',sans-serif;font-size:11px;font-weight:800;cursor:pointer;transition:all 0.2s;letter-spacing:0.5px}
.sec-tab{flex:1;padding:10px 6px;border:none;border-radius:12px;font-family:'Exo 2',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all 0.2s}
.prog-bar{height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;margin:0 16px}
.prog-fill{height:100%;border-radius:2px;transition:width 0.5s ease}
`;

function Anim({ type = "stretch", color = "#FF6B35" }) {
  const c = color;
  const figs = {
    pushup: (
      <svg width="58" height="44" viewBox="0 0 58 44" fill="none">
        <g style={{ animation: "pu 1.4s ease-in-out infinite", transformOrigin: "29px 22px" }}>
          <circle cx="6" cy="14" r="5" fill={c} />
          <line x1="6" y1="19" x2="48" y2="25" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="21" x2="18" y2="34" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="36" y1="24" x2="36" y2="36" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="6" y1="14" x2="2" y2="27" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="25" x2="54" y2="36" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    pullup: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <rect x="6" y="2" width="46" height="4" rx="2" fill={c} opacity="0.4" />
        <g style={{ animation: "pu 1.8s ease-in-out infinite", transformOrigin: "29px 24px" }}>
          <line x1="20" y1="6" x2="29" y2="18" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="6" x2="29" y2="18" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="29" cy="22" r="5" fill={c} />
          <line x1="29" y1="27" x2="29" y2="40" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="19" y1="30" x2="29" y2="34" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="39" y1="30" x2="29" y2="34" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="40" x2="22" y2="50" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="40" x2="36" y2="50" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    squat: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <g style={{ animation: "sq 1.6s ease-in-out infinite", transformOrigin: "29px 28px" }}>
          <circle cx="29" cy="6" r="5" fill={c} />
          <line x1="29" y1="11" x2="29" y2="27" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="17" x2="29" y2="22" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="40" y1="17" x2="29" y2="22" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="27" x2="19" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="27" x2="39" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="19" y1="44" x2="14" y2="50" stroke={c} strokeWidth="2" strokeLinecap="round" />
          <line x1="39" y1="44" x2="44" y2="50" stroke={c} strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    ),
    plank: (
      <svg width="58" height="38" viewBox="0 0 58 38" fill="none">
        <g style={{ animation: "pl 2s ease-in-out infinite" }}>
          <circle cx="5" cy="16" r="5" fill={c} />
          <line x1="5" y1="21" x2="54" y2="21" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="21" x2="14" y2="33" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="44" y1="21" x2="44" y2="33" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="5" y1="16" x2="2" y2="28" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    lunge: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <g style={{ animation: "lu 1.8s ease-in-out infinite", transformOrigin: "26px 26px" }}>
          <circle cx="26" cy="6" r="5" fill={c} />
          <line x1="26" y1="11" x2="26" y2="27" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="17" x2="26" y2="23" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="37" y1="17" x2="26" y2="23" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="26" y1="27" x2="12" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="44" x2="8" y2="50" stroke={c} strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="27" x2="46" y2="38" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="46" y1="38" x2="53" y2="50" stroke={c} strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    ),
    jump: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <g style={{ animation: "qu 0.85s ease-in-out infinite", transformOrigin: "29px 26px" }}>
          <circle cx="29" cy="6" r="5" fill={c} />
          <line x1="29" y1="11" x2="29" y2="28" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="17" y1="18" x2="29" y2="22" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="41" y1="18" x2="29" y2="22" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="28" x2="22" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="28" x2="36" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <path d="M11 44 Q29 52 47 44" stroke={c} strokeWidth="1.5" fill="none" opacity="0.35" />
      </svg>
    ),
    row: (
      <svg width="58" height="44" viewBox="0 0 58 44" fill="none">
        <g style={{ animation: "ro 1.5s ease-in-out infinite", transformOrigin: "29px 22px" }}>
          <circle cx="9" cy="17" r="5" fill={c} />
          <line x1="9" y1="22" x2="50" y2="28" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="24" x2="24" y2="36" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="41" y1="27" x2="41" y2="38" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="9" y1="17" x2="4" y2="30" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="4" y1="30" x2="33" y2="29" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.45" />
        </g>
      </svg>
    ),
    bridge: (
      <svg width="58" height="48" viewBox="0 0 58 48" fill="none">
        <g style={{ animation: "br 1.8s ease-in-out infinite", transformOrigin: "29px 36px" }}>
          <circle cx="7" cy="24" r="5" fill={c} />
          <path d="M7 29 Q29 6 51 29" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
          <line x1="17" y1="35" x2="13" y2="46" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="41" y1="35" x2="45" y2="46" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    crunch: (
      <svg width="58" height="48" viewBox="0 0 58 48" fill="none">
        <g style={{ animation: "cr 1.5s ease-in-out infinite", transformOrigin: "17px 24px" }}>
          <circle cx="9" cy="16" r="5" fill={c} />
          <line x1="9" y1="21" x2="29" y2="26" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="17" y1="18" x2="13" y2="32" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <line x1="29" y1="26" x2="54" y2="26" stroke={c} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <line x1="39" y1="26" x2="35" y2="42" stroke={c} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        <line x1="52" y1="26" x2="56" y2="42" stroke={c} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    twist: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <g style={{ animation: "tw 1.5s ease-in-out infinite", transformOrigin: "29px 26px" }}>
          <circle cx="29" cy="9" r="5" fill={c} />
          <line x1="29" y1="14" x2="29" y2="30" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="29" y1="30" x2="21" y2="45" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="30" x2="37" y2="45" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="11" y1="19" x2="29" y2="23" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="47" y1="19" x2="29" y2="23" stroke={c} strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        </g>
      </svg>
    ),
    dip: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <line x1="10" y1="7" x2="10" y2="40" stroke={c} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
        <line x1="48" y1="7" x2="48" y2="40" stroke={c} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
        <g style={{ animation: "di 1.5s ease-in-out infinite", transformOrigin: "29px 24px" }}>
          <circle cx="29" cy="11" r="5" fill={c} />
          <line x1="29" y1="16" x2="29" y2="31" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="10" y1="13" x2="29" y2="22" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="13" x2="29" y2="22" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="31" x2="23" y2="46" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="31" x2="35" y2="46" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    hang: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <rect x="7" y="2" width="44" height="4" rx="2" fill={c} opacity="0.4" />
        <g style={{ animation: "ha 2s ease-in-out infinite", transformOrigin: "29px 16px" }}>
          <line x1="21" y1="6" x2="29" y2="16" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="37" y1="6" x2="29" y2="16" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="29" cy="20" r="5" fill={c} />
          <line x1="29" y1="25" x2="29" y2="38" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="21" y1="29" x2="29" y2="33" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="37" y1="29" x2="29" y2="33" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="38" x2="23" y2="50" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="38" x2="35" y2="50" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    superman: (
      <svg width="58" height="38" viewBox="0 0 58 38" fill="none">
        <g style={{ animation: "su 2s ease-in-out infinite", transformOrigin: "29px 19px" }}>
          <circle cx="7" cy="19" r="5" fill={c} />
          <line x1="7" y1="19" x2="52" y2="19" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="7" y1="19" x2="1" y2="13" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="7" y1="19" x2="1" y2="25" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="52" y1="19" x2="57" y2="13" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="52" y1="19" x2="57" y2="25" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
    stretch: (
      <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
        <g style={{ animation: "st 2s ease-in-out infinite", transformOrigin: "29px 26px" }}>
          <circle cx="29" cy="6" r="5" fill={c} />
          <line x1="29" y1="11" x2="29" y2="27" stroke={c} strokeWidth="3" strokeLinecap="round" />
          <line x1="7" y1="17" x2="51" y2="17" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="27" x2="21" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="29" y1="27" x2="37" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="21" y1="44" x2="17" y2="50" stroke={c} strokeWidth="2" strokeLinecap="round" />
          <line x1="37" y1="44" x2="41" y2="50" stroke={c} strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    ),
  };
  return figs[type] || figs.stretch;
}

const e = (n, s, r, a, m) => ({ n, s, r, a, m });

const WU = {
  push: [
    e("Jumping Jacks", 1, "1 min", "jump", "Full Body Activation · Heart Rate Up · Calves · Arms"),
    e("Neck Rolls", 1, "30 sec each way", "stretch", "Neck · Traps · Facial Muscles · Cervical Spine"),
    e("Arm Circles", 1, "30 sec fwd + 30 bwd", "stretch", "Shoulders · Rotator Cuff · Upper Back"),
    e("Wrist Rotations", 1, "20 sec each", "twist", "Wrists · Forearms · Finger Tendons"),
    e("Chest Opener Stretch", 1, "30 sec hold", "stretch", "Chest · Front Delts · Biceps · Thoracic Spine"),
    e("Cat-Cow (on all fours)", 1, "30 sec slow", "bridge", "Spine · Core Activation · Lower Back · Hips"),
  ],
  pull: [
    e("Jump Rope / Jumping Jacks", 1, "1 min", "jump", "Full Body · Heart Rate Up · Calves · Coordination"),
    e("Neck Rolls", 1, "30 sec each way", "stretch", "Neck · Traps · Face Muscles · Cervical Spine"),
    e("Shoulder Circles", 1, "30 sec fwd + bwd", "stretch", "Shoulders · Rotator Cuff · Upper Back"),
    e("Doorway Chest Stretch", 1, "30 sec each side", "stretch", "Chest · Biceps · Front Delts · Pecs"),
    e("Easy Dead Hang", 1, "20 sec", "hang", "Lats · Grip · Spine Decompression · Forearms"),
    e("Scapular Shrugs (hanging)", 1, "8 reps slow", "hang", "Upper Back · Traps · Serratus Anterior"),
  ],
  legs: [
    e("Jump Rope", 1, "1 min", "jump", "Calves · Ankles · Heart Rate · Coordination"),
    e("Hip Circles", 1, "30 sec each direction", "twist", "Hips · Lower Back · Glutes · Hip Flexors"),
    e("Leg Swings Front-Back", 1, "15 each leg", "lunge", "Hamstrings · Hip Flexors · Glutes"),
    e("Leg Swings Side-to-Side", 1, "15 each leg", "lunge", "Inner Thighs · Glutes · Hip Abductors"),
    e("Ankle Circles", 1, "20 sec each ankle", "stretch", "Ankles · Calves · Achilles Tendon"),
    e("Bodyweight Squat (slow)", 1, "10 reps controlled", "squat", "Quads · Glutes · Knees Lubrication"),
  ],
  mixed: [
    e("Jumping Jacks", 1, "1 min", "jump", "Full Body Activation · Heart Rate Up"),
    e("Neck + Shoulder Rolls", 1, "30 sec total", "stretch", "Neck · Shoulders · Traps · Facial Muscles"),
    e("Trunk Rotations (arms out)", 1, "30 sec", "twist", "Spine · Obliques · Core Activation"),
    e("Hip Circles", 1, "20 sec each side", "twist", "Hips · Lower Back · Glutes"),
    e("Arm Circles", 1, "20 sec each direction", "stretch", "Shoulders · Rotator Cuff · Arms"),
    e("Cat-Cow", 1, "30 sec slow", "bridge", "Spine · Core · Lower Back · Intervertebral Discs"),
  ],
  circuit: [
    e("Jump Rope", 1, "1.5 min", "jump", "Full Body · Calves · Heart Rate Primer"),
    e("Neck + Shoulder Rolls", 1, "20 sec each", "stretch", "Neck · Shoulders · Traps"),
    e("Arm Circles", 1, "20 sec each way", "stretch", "Shoulders · Chest · Arms"),
    e("Ankle + Hip Circles", 1, "20 sec each", "twist", "Ankles · Hips · Lower Back"),
    e("5 Slow Bodyweight Squats", 1, "5 reps very slow", "squat", "Quads · Glutes · Ankles Activation"),
    e("5 Slow Knee Push-ups", 1, "5 reps very slow", "pushup", "Chest · Shoulders · Wrists Activation"),
  ],
};

const CD = {
  push: [
    e("Child's Pose", 1, "45 sec", "bridge", "Lats · Shoulders · Thoracic Spine · Hip Flexors"),
    e("Doorway Chest Stretch", 1, "30 sec each side", "stretch", "Chest · Front Delts · Biceps · Pecs"),
    e("Tricep Overhead Stretch", 1, "30 sec each arm", "stretch", "Triceps · Lats · Shoulder Joint"),
    e("Neck Side Stretch", 1, "30 sec each side", "stretch", "Neck · Traps · Scalenes · Side of Face"),
    e("Puppy Pose (arms forward)", 1, "45 sec", "stretch", "Chest · Shoulders · Thoracic Spine · Lats"),
    e("Deep Belly Breathing", 1, "1 min — 10 slow breaths", "plank", "Nervous System Recovery · Heart Rate Down"),
  ],
  pull: [
    e("Child's Pose", 1, "45 sec", "bridge", "Lats · Thoracic Spine · Shoulders · Hips"),
    e("Cross-Body Shoulder Stretch", 1, "30 sec each arm", "stretch", "Rear Delts · Rhomboids · Traps"),
    e("Bicep Wall Stretch", 1, "30 sec each arm", "stretch", "Biceps · Forearms · Wrists · Tendons"),
    e("Cat-Cow (slow)", 1, "45 sec", "bridge", "Spine · Lower Back · Core · Neck"),
    e("Ear-to-Shoulder Neck Stretch", 1, "30 sec each side", "stretch", "Neck · Traps · Levator Scapulae"),
    e("Deep Belly Breathing", 1, "1 min — 10 slow breaths", "plank", "Nervous System Recovery · Parasympathetic"),
  ],
  legs: [
    e("Standing Quad Stretch", 1, "30 sec each leg", "lunge", "Quads · Hip Flexors · Knee Joint"),
    e("Seated Hamstring Stretch", 1, "45 sec each leg", "stretch", "Hamstrings · Lower Back · Calves"),
    e("Pigeon Pose (hip opener)", 1, "45 sec each side", "lunge", "Hip Flexors · Glutes · Piriformis · IT Band"),
    e("Standing Calf Stretch", 1, "30 sec each leg", "lunge", "Calves · Achilles Tendon · Ankles"),
    e("Seated Spinal Twist", 1, "30 sec each side", "twist", "Spine · Glutes · Obliques · Lower Back"),
    e("Figure-4 Glute Stretch (lying)", 1, "45 sec each side", "bridge", "Glutes · Piriformis · Hip External Rotators"),
  ],
  mixed: [
    e("Child's Pose", 1, "45 sec", "bridge", "Spine · Shoulders · Lats · Hip Flexors"),
    e("Cobra Stretch", 1, "30 sec hold", "superman", "Abs · Hip Flexors · Thoracic Spine Extension"),
    e("Seated Forward Fold", 1, "45 sec", "stretch", "Hamstrings · Lower Back · Calves"),
    e("Tricep Overhead Stretch", 1, "30 sec each arm", "stretch", "Triceps · Lats · Shoulder Capsule"),
    e("Lying Knee Hug", 1, "30 sec each leg", "crunch", "Lower Back · Glutes · Hip Flexors"),
    e("Deep Belly Breathing", 1, "1 min — 10 slow breaths", "plank", "Nervous System Recovery · Full Body Relax"),
  ],
  circuit: [
    e("Standing Forward Fold", 1, "45 sec", "stretch", "Hamstrings · Calves · Lower Back · Spine"),
    e("Cobra Stretch", 1, "30 sec", "superman", "Abs · Core · Thoracic Spine · Hip Flexors"),
    e("Seated Spinal Twist", 1, "30 sec each side", "twist", "Spine · Obliques · Glutes · Lower Back"),
    e("Kneeling Hip Flexor Stretch", 1, "45 sec each side", "lunge", "Hip Flexors · Quads · Adductors"),
    e("Child's Pose", 1, "45 sec", "bridge", "Full Back · Shoulders · Hips · Spine"),
    e("Deep Belly Breathing", 1, "1 min — 10 slow breaths", "plank", "Heart Rate Recovery · Nervous System Reset"),
  ],
};

const WEEKS = [
  {
    label: "Week 1", theme: "FAT BURN", tag: "HIGH REPS · SHORT REST · BUILD BASE",
    ac: "#FF3B5C", type: "fat",
    days: [
      { name: "Monday", icon: "💪", focus: "PUSH", wt: "push", note: "Rest 45s · Fat burn + chest/shoulders/triceps", exs: [
        e("Standard Push-ups", 3, "20", "pushup", "Chest · Triceps · Shoulders · Serratus"),
        e("Incline Push-ups (hands on chair)", 3, "15", "pushup", "Upper Chest · Front Delts · Triceps"),
        e("Chair Tricep Dips", 3, "15", "dip", "Triceps · Chest · Shoulders · Core Stability"),
        e("Pike Push-ups", 3, "12", "pushup", "Shoulders · Triceps · Upper Traps"),
        e("Wide Push-ups", 2, "15", "pushup", "Outer Chest · Serratus Anterior · Front Delts"),
        e("Standard Plank", 3, "30 sec", "plank", "Core · Shoulders · Forearms · Quads"),
      ]},
      { name: "Tuesday", icon: "🏋️", focus: "PULL", wt: "pull", note: "Rest 60s · Fat burn + back/biceps/forearms", exs: [
        e("Dead Hang (door)", 3, "20 sec", "hang", "Lats · Grip Strength · Spine · Forearms"),
        e("Scapular Pull-ups (door)", 3, "8", "hang", "Upper Back · Serratus · Traps · Rhomboids"),
        e("Door Pull-ups", 3, "5", "pullup", "Lats · Biceps · Upper Back · Core"),
        e("Australian Rows (under table)", 3, "12", "row", "Upper Back · Biceps · Rear Delts · Rhomboids"),
        e("Superman Hold", 3, "20 sec", "superman", "Lower Back · Glutes · Rear Delts · Hamstrings"),
        e("Bird Dog", 2, "10 each side", "superman", "Lower Back · Core · Glutes · Balance"),
      ]},
      { name: "Wednesday", icon: "🦵", focus: "LEGS + CORE", wt: "legs", note: "Rest 45s · Most fat burned here · Full lower body", exs: [
        e("Jump Rope", 3, "1 min", "jump", "Calves · Ankles · Heart · Coordination"),
        e("Bodyweight Squats", 3, "20", "squat", "Quads · Glutes · Hamstrings · Core"),
        e("Reverse Lunges", 3, "12 each leg", "lunge", "Quads · Glutes · Hip Flexors · Balance"),
        e("Glute Bridges", 3, "20", "bridge", "Glutes · Hamstrings · Lower Back · Core"),
        e("Sumo Squats", 3, "15", "squat", "Inner Thighs (Adductors) · Glutes · Quads"),
        e("Calf Raises", 3, "25", "jump", "Calves · Achilles Tendon · Ankles"),
        e("Leg Raises (floor)", 3, "12", "crunch", "Lower Abs · Hip Flexors · Tibialis"),
        e("Side Plank", 2, "20 sec each side", "plank", "Obliques · Hip Abductors · Core · Balance"),
      ]},
      { name: "Thursday", icon: "🔥", focus: "PUSH + CORE", wt: "mixed", note: "Rest 45s · Different push angles + core", exs: [
        e("Diamond Push-ups", 3, "12", "pushup", "Triceps · Inner Chest · Front Delts"),
        e("Decline Push-ups (feet on chair)", 3, "12", "pushup", "Upper Chest · Front Delts · Shoulders"),
        e("Chair Dips", 3, "15", "dip", "Triceps · Chest · Shoulders · Core"),
        e("Hollow Body Hold", 3, "20 sec", "plank", "Core · Hip Flexors · Quads · Shoulders"),
        e("Bicycle Crunches", 3, "20", "crunch", "Abs · Obliques · Hip Flexors"),
        e("Russian Twists", 3, "20", "twist", "Obliques · Core · Spine Rotation"),
        e("Mountain Climbers", 3, "20", "jump", "Core · Shoulders · Hip Flexors · Cardio"),
      ]},
      { name: "Friday", icon: "⚡", focus: "FULL BODY CIRCUIT", wt: "circuit", note: "3 ROUNDS · 60s rest between rounds · MAXIMUM EFFORT", exs: [
        e("Jump Rope", 1, "1.5 min", "jump", "Calves · Heart · Coordination · Full Body"),
        e("Push-ups", 1, "15", "pushup", "Chest · Triceps · Shoulders"),
        e("Door Pull-ups", 1, "5", "pullup", "Back · Biceps · Forearms · Core"),
        e("Squats", 1, "20", "squat", "Quads · Glutes · Hamstrings"),
        e("Plank", 1, "30 sec", "plank", "Core · Shoulders · Full Stability"),
        e("Mountain Climbers", 1, "20", "jump", "Core · Cardio · Shoulders · Hip Flexors"),
      ]},
    ]
  },
  {
    label: "Week 2", theme: "FAT BURN+", tag: "MORE VOLUME · HARDER MOVES · INCREASE REPS",
    ac: "#FF6B35", type: "fat",
    days: [
      { name: "Monday", icon: "💪", focus: "PUSH", wt: "push", note: "Rest 45s · More sets this week · Push harder", exs: [
        e("Standard Push-ups", 4, "18", "pushup", "Chest · Triceps · Shoulders · Serratus"),
        e("Decline Push-ups (feet on chair)", 3, "12", "pushup", "Upper Chest · Front Delts · Triceps"),
        e("Chair Tricep Dips", 4, "15", "dip", "Triceps · Chest · Shoulders"),
        e("Pike Push-ups", 3, "12", "pushup", "Shoulders · Triceps · Upper Traps"),
        e("Wide Push-ups", 3, "15", "pushup", "Outer Chest · Serratus Anterior"),
        e("Plank", 3, "40 sec", "plank", "Core · Shoulders · Forearms · Glutes"),
      ]},
      { name: "Tuesday", icon: "🏋️", focus: "PULL", wt: "pull", note: "Rest 60s · Chin-ups added · More volume", exs: [
        e("Door Pull-ups", 4, "5-6", "pullup", "Lats · Biceps · Upper Back · Core"),
        e("Chin-ups (underhand grip)", 3, "5-6", "pullup", "Biceps · Lats · Rear Delts · Brachialis"),
        e("Australian Rows (table)", 4, "14", "row", "Upper Back · Biceps · Rear Delts · Rhomboids"),
        e("Scapular Pull-ups", 3, "10", "hang", "Upper Back · Serratus · Traps · Rhomboids"),
        e("Superman Hold", 3, "25 sec", "superman", "Lower Back · Glutes · Rear Delts · Hamstrings"),
        e("Dead Hang", 3, "30 sec", "hang", "Lats · Grip · Spine Decompression · Forearms"),
      ]},
      { name: "Wednesday", icon: "🦵", focus: "LEGS + CORE", wt: "legs", note: "Rest 45s · Jump squats + single leg work added", exs: [
        e("Jump Rope", 3, "1.5 min", "jump", "Calves · Ankles · Heart · Coordination"),
        e("Jump Squats", 3, "15", "jump", "Quads · Glutes · Calves · Explosive Power"),
        e("Reverse Lunges", 3, "14 each leg", "lunge", "Quads · Glutes · Hip Flexors · Balance"),
        e("Single Leg Glute Bridge", 3, "12 each", "bridge", "Glutes · Hamstrings · Core · Hip Stability"),
        e("Sumo Squats", 3, "18", "squat", "Inner Thighs · Glutes · Quads"),
        e("Single Leg Calf Raises", 3, "20 each", "jump", "Calves · Achilles · Ankles · Balance"),
        e("V-Ups", 3, "10", "crunch", "Full Abs · Hip Flexors · Core Compression"),
        e("Leg Raises", 3, "14", "crunch", "Lower Abs · Hip Flexors · Tibialis"),
        e("Side Plank", 2, "25 sec each side", "plank", "Obliques · Hip Abductors · Core"),
      ]},
      { name: "Thursday", icon: "🔥", focus: "PUSH + CORE", wt: "mixed", note: "Rest 45s · Archer push-up introduced — big step!", exs: [
        e("Archer Push-ups (assisted)", 3, "6 each side", "pushup", "Chest · Triceps · Shoulders — heavy one side"),
        e("Diamond Push-ups", 3, "12", "pushup", "Triceps · Inner Chest · Front Delts"),
        e("Chair Dips", 4, "15", "dip", "Triceps · Chest · Shoulders · Core"),
        e("Hollow Body Hold", 3, "25 sec", "plank", "Core · Hip Flexors · Quads"),
        e("V-Ups", 3, "10", "crunch", "Full Abs · Hip Flexors"),
        e("Russian Twists", 3, "24", "twist", "Obliques · Core · Spine Rotation"),
        e("Mountain Climbers", 3, "25", "jump", "Core · Cardio · Shoulders"),
        e("Side Plank", 2, "25 sec each side", "plank", "Obliques · Hip Abductors"),
      ]},
      { name: "Friday", icon: "⚡", focus: "FULL BODY CIRCUIT", wt: "circuit", note: "3 ROUNDS · 60s rest · Push harder than last week!", exs: [
        e("Jump Rope", 1, "1.5 min", "jump", "Calves · Heart · Full Body"),
        e("Push-ups", 1, "18", "pushup", "Chest · Triceps · Shoulders"),
        e("Pull-ups", 1, "6", "pullup", "Back · Biceps · Forearms"),
        e("Jump Squats", 1, "15", "jump", "Quads · Glutes · Explosive Power"),
        e("Hollow Body Hold", 1, "25 sec", "plank", "Core · Hip Flexors"),
        e("Mountain Climbers", 1, "25", "jump", "Core · Cardio · Arms"),
        e("Australian Rows", 1, "10", "row", "Back · Biceps · Rear Delts"),
      ]},
    ]
  },
  {
    label: "Week 3", theme: "MUSCLE BUILD", tag: "HARDER MOVES · MORE SETS · STRENGTH FOCUS",
    ac: "#00C9A7", type: "muscle",
    days: [
      { name: "Monday", icon: "💪", focus: "PUSH", wt: "push", note: "Rest 60s · Last set to failure · Time under tension", exs: [
        e("Archer Push-ups", 3, "8 each side", "pushup", "Chest · Triceps · Shoulders — unilateral load"),
        e("Decline Push-ups (feet on chair)", 4, "12", "pushup", "Upper Chest · Front Delts · Triceps"),
        e("Chair Dips", 4, "15", "dip", "Triceps · Chest · Shoulders"),
        e("Pike Push-ups", 4, "10", "pushup", "Shoulders · Triceps · Upper Traps"),
        e("Pseudo Planche Lean Push-ups", 3, "8", "pushup", "Chest · Serratus · Shoulders · Core"),
        e("Plank", 3, "45 sec", "plank", "Core · Shoulders · Forearms · Glutes"),
      ]},
      { name: "Tuesday", icon: "🏋️", focus: "PULL", wt: "pull", note: "Rest 60-90s · More pull volume · Archer pull-ups start", exs: [
        e("Pull-ups (door)", 4, "6-8", "pullup", "Lats · Biceps · Upper Back · Core"),
        e("Chin-ups (underhand)", 4, "6-8", "pullup", "Biceps · Lats · Rear Delts · Brachialis"),
        e("Archer Pull-ups (assisted)", 3, "5 each side", "pullup", "Lats · Biceps · Core — unilateral"),
        e("Australian Rows", 4, "15", "row", "Upper Back · Biceps · Rear Delts · Rhomboids"),
        e("Dead Hang", 3, "40 sec", "hang", "Lats · Grip Endurance · Spine · Forearms"),
        e("Superman Hold", 3, "25 sec", "superman", "Lower Back · Glutes · Rear Delts · Hamstrings"),
      ]},
      { name: "Wednesday", icon: "🦵", focus: "LEGS + CORE", wt: "legs", note: "Rest 60s · Bulgarian split squats introduced — game changer!", exs: [
        e("Jump Rope", 3, "2 min", "jump", "Calves · Heart · Coordination · Fat Burn"),
        e("Bulgarian Split Squats (rear foot on chair)", 3, "10 each leg", "lunge", "Quads · Glutes · Hamstrings · Balance"),
        e("Jump Squats", 3, "18", "jump", "Quads · Glutes · Calves · Explosive Power"),
        e("Single Leg Glute Bridge", 3, "12 each", "bridge", "Glutes · Hamstrings · Core · Hip Stability"),
        e("Single Leg Calf Raises", 3, "20 each", "jump", "Calves · Achilles · Ankles · Balance"),
        e("Wall Sit", 3, "50 sec", "squat", "Quads · Glutes · Calves — isometric strength"),
        e("Hanging Leg Raises (door)", 3, "8", "hang", "Lower Abs · Hip Flexors · Grip · Lats"),
        e("L-Sit Tuck Hold (on 2 chairs)", 3, "10 sec", "dip", "Core · Triceps · Shoulders · Hip Flexors"),
      ]},
      { name: "Thursday", icon: "🔥", focus: "PUSH + CORE", wt: "mixed", note: "Rest 60s · Dragon flags introduced — advanced core!", exs: [
        e("Decline Push-ups", 4, "12", "pushup", "Upper Chest · Front Delts · Triceps"),
        e("Diamond Push-ups", 4, "12", "pushup", "Triceps · Inner Chest · Front Delts"),
        e("Chair Dips (close grip)", 4, "15", "dip", "Triceps · Chest · Core"),
        e("Dragon Flag Negatives", 3, "5", "crunch", "Full Core · Hip Flexors · Lower Back · Lats"),
        e("L-Sit Tuck Hold (chairs)", 3, "10 sec", "dip", "Core · Triceps · Shoulders · Hip Flexors"),
        e("Russian Twists", 3, "25", "twist", "Obliques · Core · Spine Rotation"),
        e("Hollow Body Rock", 3, "15", "crunch", "Full Core · Hip Flexors · Coordination"),
      ]},
      { name: "Friday", icon: "⚡", focus: "FULL BODY CIRCUIT", wt: "circuit", note: "4 ROUNDS · 60s rest · High intensity — feel the difference!", exs: [
        e("Jump Rope", 1, "2 min", "jump", "Calves · Heart · Full Body"),
        e("Archer Push-ups", 1, "8 each side", "pushup", "Chest · Triceps · Shoulders"),
        e("Pull-ups", 1, "7-8", "pullup", "Back · Biceps · Forearms · Core"),
        e("Bulgarian Split Squats", 1, "10 each leg", "lunge", "Quads · Glutes · Hamstrings"),
        e("Hollow Body Hold", 1, "30 sec", "plank", "Core · Hip Flexors"),
        e("Mountain Climbers", 1, "30", "jump", "Core · Cardio · Full Body"),
      ]},
    ]
  },
  {
    label: "Week 4", theme: "PEAK POWER", tag: "MAXIMUM EFFORT · LAST SET ALWAYS TO FAILURE",
    ac: "#845EC2", type: "muscle",
    days: [
      { name: "Monday", icon: "💪", focus: "PUSH", wt: "push", note: "Rest 60s · Peak volume · Clap push-ups = explosive power", exs: [
        e("Archer Push-ups", 4, "8 each side", "pushup", "Chest · Triceps · Shoulders — unilateral"),
        e("Decline Push-ups", 4, "15", "pushup", "Upper Chest · Front Delts · Triceps"),
        e("Chair Dips", 5, "15", "dip", "Triceps · Chest · Shoulders"),
        e("Pseudo Planche Push-ups", 4, "10", "pushup", "Chest · Serratus · Shoulders · Core"),
        e("Clap Push-ups", 3, "8", "pushup", "Chest · Fast-Twitch Power · Explosive Strength"),
        e("Pike Push-ups", 4, "12", "pushup", "Shoulders · Triceps · Upper Traps"),
        e("Plank", 3, "60 sec", "plank", "Core · Shoulders · Forearms · Glutes"),
      ]},
      { name: "Tuesday", icon: "🏋️", focus: "PULL", wt: "pull", note: "Rest 60-90s · Peak pulling strength — give everything", exs: [
        e("Pull-ups", 5, "6-8", "pullup", "Lats · Biceps · Upper Back · Core"),
        e("Close Grip Chin-ups", 4, "6-8", "pullup", "Biceps · Lats · Rear Delts · Brachialis"),
        e("Archer Pull-ups", 3, "6 each side", "pullup", "Lats · Biceps · Core — heavy unilateral"),
        e("Australian Rows", 4, "15", "row", "Upper Back · Biceps · Rear Delts · Rhomboids"),
        e("Dead Hang", 3, "50 sec", "hang", "Lats · Grip Endurance · Spine · Forearms"),
        e("Superman Hold", 3, "30 sec", "superman", "Lower Back · Glutes · Rear Delts · Hamstrings"),
      ]},
      { name: "Wednesday", icon: "🦵", focus: "LEGS + CORE", wt: "legs", note: "Rest 60s · Sissy squats + peak leg day — hardest workout of month", exs: [
        e("Jump Rope", 4, "2 min", "jump", "Calves · Heart · Coordination"),
        e("Bulgarian Split Squats", 4, "12 each leg", "lunge", "Quads · Glutes · Hamstrings · Balance"),
        e("Sissy Squats (wall-assisted)", 3, "8", "squat", "Quads · Tibialis Anterior · Knees"),
        e("Jump Squats", 4, "20", "jump", "Quads · Glutes · Calves · Explosive Power"),
        e("Single Leg Calf Raises", 4, "20 each", "jump", "Calves · Achilles · Ankles"),
        e("Wall Sit", 3, "60 sec", "squat", "Quads · Glutes · Calves — isometric max"),
        e("Hanging Leg Raises", 3, "10", "hang", "Lower Abs · Hip Flexors · Grip · Lats"),
        e("L-Sit Tuck Hold", 3, "15 sec", "dip", "Core · Triceps · Shoulders · Hip Flexors"),
      ]},
      { name: "Thursday", icon: "🔥", focus: "PUSH + CORE", wt: "mixed", note: "Rest 60s · Weighted backpack on dips — peak push+core", exs: [
        e("Pseudo Planche Push-ups", 4, "10", "pushup", "Chest · Serratus · Shoulders · Core"),
        e("Decline Diamond Push-ups", 4, "12", "pushup", "Triceps · Upper Chest · Front Delts"),
        e("Chair Dips (with heavy backpack)", 3, "12", "dip", "Triceps · Chest · Shoulders — weighted!"),
        e("L-Sit Tuck Hold", 3, "15 sec", "dip", "Core · Triceps · Shoulders · Hip Flexors"),
        e("V-Ups", 4, "12", "crunch", "Full Abs · Hip Flexors · Core"),
        e("Dragon Flag Negatives", 3, "6", "crunch", "Full Core · Lower Back · Lats · Hip Flexors"),
        e("Hollow Body Hold (backpack on chest)", 3, "30 sec", "plank", "Core · Hip Flexors — weighted challenge"),
      ]},
      { name: "Friday", icon: "⚡", focus: "FULL BODY CIRCUIT", wt: "circuit", note: "4 ROUNDS · 60s rest · END MONTH 1 STRONG — GIVE EVERYTHING 🔥", exs: [
        e("Jump Rope", 1, "2 min", "jump", "Calves · Heart · Full Body"),
        e("Archer Push-ups", 1, "8 each side", "pushup", "Chest · Triceps · Shoulders"),
        e("Pull-ups", 1, "8", "pullup", "Back · Biceps · Forearms · Core"),
        e("Bulgarian Split Squats", 1, "12 each leg", "lunge", "Quads · Glutes · Hamstrings"),
        e("L-Sit Tuck", 1, "15 sec", "dip", "Core · Triceps · Shoulders"),
        e("Mountain Climbers", 1, "40", "jump", "Core · Cardio · Full Body"),
      ]},
    ]
  },
];

const HEALTH = [
  { icon: "😴", label: "Sleep", value: "8 hours", note: "muscles grow during sleep", color: "#845EC2" },
  { icon: "💧", label: "Water", value: "2.5 Litres", note: "≈ 10 large glasses/day", color: "#00C9A7" },
  { icon: "👟", label: "Steps", value: "8,000+", note: "walk after each meal", color: "#FF6B35" },
  { icon: "🥩", label: "Protein", value: "Every meal", note: "eggs · daal · chicken", color: "#FF3B5C" },
];

const ALTS = {
  // ── PUSH ──────────────────────────────────────────────────────
  "Standard Push-ups":   { hard: e("Knee Push-ups","3","12","pushup","Chest · Triceps · Shoulders — knees on floor"), equip: null },
  "Push-ups":            { hard: e("Knee Push-ups","1","12","pushup","Chest · Triceps · Shoulders"), equip: null },
  "Incline Push-ups (hands on chair)": { hard: e("Wall Push-ups (hands on wall)","3","15","pushup","Chest · Shoulders · Triceps — easiest version"), equip: e("Wall Push-ups","3","15","pushup","Chest · Shoulders · Triceps") },
  "Wide Push-ups":       { hard: e("Standard Push-ups","3","12","pushup","Chest · Triceps · Shoulders"), equip: null },
  "Diamond Push-ups":    { hard: e("Close-Grip Push-ups (hands shoulder-width)","3","12","pushup","Triceps · Inner Chest"), equip: null },
  "Pike Push-ups":       { hard: e("Standard Push-ups","3","12","pushup","Chest · Shoulders · Triceps"), equip: null },
  "Decline Push-ups (feet on chair)": { hard: e("Standard Push-ups (feet on floor)","3","12","pushup","Chest · Shoulders · Triceps"), equip: e("Standard Push-ups","3","12","pushup","Chest · Shoulders · Triceps") },
  "Decline Push-ups":    { hard: e("Standard Push-ups","3","12","pushup","Chest · Shoulders · Triceps"), equip: e("Standard Push-ups","3","12","pushup","Chest · Shoulders") },
  "Decline Diamond Push-ups": { hard: e("Diamond Push-ups (flat, no decline)","3","10","pushup","Triceps · Inner Chest"), equip: null },
  "Archer Push-ups (assisted)": { hard: e("Wide Push-ups (same muscles, easier)","3","12","pushup","Chest · Outer Pecs · Shoulders"), equip: null },
  "Archer Push-ups":     { hard: e("Wide Push-ups","4","12","pushup","Chest · Outer Pecs · Shoulders"), equip: null },
  "Pseudo Planche Lean Push-ups": { hard: e("Standard Push-ups (3 sec down)","4","10","pushup","Chest · Triceps · Shoulders"), equip: null },
  "Pseudo Planche Push-ups": { hard: e("Standard Push-ups (3 sec down)","4","10","pushup","Chest · Triceps · Shoulders"), equip: null },
  "Clap Push-ups":       { hard: e("Fast Push-ups (as explosive as possible)","3","8","pushup","Chest · Fast-Twitch Power"), equip: null },
  // ── PLANK / CORE ───────────────────────────────────────────────
  "Standard Plank":      { hard: e("Knee Plank (knees on floor)","3","30 sec","plank","Core · Shoulders — much easier"), equip: null },
  "Plank":               { hard: e("Knee Plank","1","30 sec","plank","Core · Shoulders"), equip: null },
  "Side Plank":          { hard: e("Side Plank from Knee (bottom knee on floor)","2","20 sec each","plank","Obliques · Core"), equip: null },
  "Hollow Body Hold":    { hard: e("Dead Bug (one arm + opposite leg at a time)","3","8 each side","crunch","Core · Hip Flexors — much easier"), equip: null },
  "Hollow Body Hold (backpack on chest)": { hard: e("Hollow Body Hold (no backpack)","3","25 sec","plank","Core · Hip Flexors"), equip: null },
  "Hollow Body Rock":    { hard: e("Hollow Body Hold (just hold still)","3","20 sec","plank","Core · Hip Flexors"), equip: null },
  "Bicycle Crunches":    { hard: e("Regular Crunches (feet flat on floor)","3","15","crunch","Abs · Core — no rotation"), equip: null },
  "Russian Twists":      { hard: e("Seated Twists (feet flat on floor)","3","20","twist","Obliques · Core — feet grounded"), equip: null },
  "Mountain Climbers":   { hard: e("Slow Mountain Climbers (1 rep every 2 sec)","3","10 each","jump","Core · Shoulders — controlled pace"), equip: null },
  "V-Ups":               { hard: e("Crunches (just upper body, feet stay down)","3","15","crunch","Abs · Core"), equip: null },
  "Dragon Flag Negatives": { hard: e("Hollow Body Hold","3","20 sec","plank","Core · Hip Flexors — much easier"), equip: null },
  "L-Sit Tuck Hold (on 2 chairs)": { hard: e("Tuck Sit on Floor (hands on floor, lift knees)","3","8 sec","crunch","Core · Hip Flexors"), equip: e("Tuck Sit on Floor","3","8 sec","crunch","Core · Hip Flexors") },
  "L-Sit Tuck Hold (on chair)": { hard: e("Tuck Sit on Floor","3","8 sec","crunch","Core · Hip Flexors"), equip: e("Tuck Sit on Floor","3","8 sec","crunch","Core · Hip Flexors") },
  "L-Sit Tuck Hold":     { hard: e("Tuck Sit on Floor","3","8 sec","crunch","Core · Hip Flexors"), equip: e("Tuck Sit on Floor","3","8 sec","crunch","Core · Hip Flexors") },
  "L-Sit Tuck":          { hard: e("Tuck Sit on Floor","3","8 sec","crunch","Core · Hip Flexors"), equip: null },
  // ── DIPS ────────────────────────────────────────────────────────
  "Chair Tricep Dips":   { hard: e("Seated Dip (barely lift off seat)","3","10","dip","Triceps · Shoulders — minimal lift"), equip: null },
  "Chair Dips":          { hard: e("Assisted Dips (feet flat on floor)","3","12","dip","Triceps · Chest · Shoulders"), equip: null },
  "Chair Dips (close grip)": { hard: e("Regular Chair Dips","3","12","dip","Triceps · Chest"), equip: null },
  "Chair Dips (with heavy backpack)": { hard: e("Regular Chair Dips (no backpack)","3","15","dip","Triceps · Chest"), equip: null },
  // ── PULL ────────────────────────────────────────────────────────
  "Door Pull-ups":       { hard: e("Negative Pull-ups (jump up, lower 5 sec)","3","3","pullup","Lats · Biceps · Upper Back"), equip: e("Towel Row (towel in closed door)","3","10","row","Back · Biceps · Rear Delts") },
  "Pull-ups (door)":     { hard: e("Negative Pull-ups (jump, lower slow)","3","3","pullup","Lats · Biceps · Upper Back"), equip: e("Towel Row","3","10","row","Back · Biceps") },
  "Pull-ups":            { hard: e("Negative Pull-ups (jump, lower slow)","3","3","pullup","Lats · Biceps · Upper Back"), equip: e("Towel Row","3","10","row","Back · Biceps") },
  "Chin-ups (underhand grip)": { hard: e("Negative Chin-ups (jump up, lower slow)","3","3","pullup","Biceps · Lats"), equip: e("Underhand Towel Row","3","12","row","Biceps · Back") },
  "Chin-ups (underhand)": { hard: e("Negative Chin-ups","3","3","pullup","Biceps · Lats"), equip: e("Underhand Towel Row","3","12","row","Biceps · Back") },
  "Close Grip Chin-ups": { hard: e("Regular Chin-ups","3","5","pullup","Biceps · Lats"), equip: e("Close-Grip Towel Row","3","12","row","Biceps · Back") },
  "Archer Pull-ups (assisted)": { hard: e("Regular Pull-ups","3","5","pullup","Lats · Biceps"), equip: e("Single-Arm Towel Row","3","8 each","row","Lats · Biceps") },
  "Archer Pull-ups":     { hard: e("Regular Pull-ups","4","6","pullup","Lats · Biceps"), equip: e("Single-Arm Towel Row","3","8 each","row","Lats · Biceps") },
  "Australian Rows (under table)": { hard: e("Dead Hang on Door (just hang)","3","20 sec","hang","Lats · Grip"), equip: e("Towel Row (towel in door)","3","12","row","Back · Biceps") },
  "Australian Rows (table)": { hard: e("Dead Hang on Door","3","20 sec","hang","Lats · Grip"), equip: e("Towel Row","3","12","row","Back · Biceps") },
  "Australian Rows":     { hard: e("Dead Hang","3","20 sec","hang","Lats · Grip"), equip: e("Towel Row","3","12","row","Back · Biceps") },
  "Scapular Pull-ups (door)": { hard: e("Dead Hang (just hang still)","3","20 sec","hang","Lats · Grip · Spine"), equip: e("Towel Hang on door","3","20 sec","hang","Lats · Grip") },
  "Scapular Pull-ups":   { hard: e("Dead Hang","3","20 sec","hang","Lats · Grip"), equip: e("Towel Hang","3","20 sec","hang","Grip · Lats") },
  "Scapular Pull-ups (hanging)": { hard: e("Dead Hang","3","20 sec","hang","Lats · Grip"), equip: e("Towel Hang","3","20 sec","hang","Grip · Lats") },
  "Easy Dead Hang":      { hard: e("Chair-Assisted Hang (feet lightly on chair)","3","15 sec","hang","Lats · Grip"), equip: e("Towel Hang on door","3","15 sec","hang","Grip · Lats") },
  "Dead Hang (door)":    { hard: e("Chair-Assisted Hang (feet resting on chair)","3","20 sec","hang","Lats · Grip"), equip: e("Towel Hang","3","20 sec","hang","Grip · Lats") },
  "Dead Hang":           { hard: e("Chair-Assisted Hang","3","15 sec","hang","Lats · Grip"), equip: e("Towel Hang","3","15 sec","hang","Grip · Lats") },
  "Superman Hold":       { hard: e("Bird Dog (one arm + opposite leg)","3","10 each side","superman","Lower Back · Glutes · Core"), equip: null },
  "Bird Dog":            { hard: e("Superman Hold (both sides at once, smaller lift)","3","15 sec","superman","Lower Back · Glutes"), equip: null },
  "Hanging Leg Raises (door)": { hard: e("Floor Leg Raises (lying down)","3","10","crunch","Lower Abs · Hip Flexors"), equip: e("Floor Leg Raises","3","10","crunch","Lower Abs · Hip Flexors") },
  "Hanging Leg Raises":  { hard: e("Floor Leg Raises (lying down)","3","10","crunch","Lower Abs · Hip Flexors"), equip: e("Floor Leg Raises","3","10","crunch","Lower Abs · Hip Flexors") },
  // ── LEGS ────────────────────────────────────────────────────────
  "Jump Rope":           { hard: e("Jumping Jacks","3","1 min","jump","Calves · Heart · Coordination"), equip: e("Jumping Jacks (no rope needed)","3","1 min","jump","Calves · Heart · Coordination") },
  "Bodyweight Squats":   { hard: e("Half Squat (hold wall, go only halfway down)","3","15","squat","Quads · Glutes — shorter range"), equip: null },
  "Squats":              { hard: e("Half Squat (hold wall for balance)","1","15","squat","Quads · Glutes"), equip: null },
  "Reverse Lunges":      { hard: e("Step Tap Back (tiny step, stay upright)","3","10 each","lunge","Quads · Glutes — much easier"), equip: null },
  "Glute Bridges":       { hard: e("Small Hip Raise (lift hips slightly off floor)","3","15","bridge","Glutes · Hamstrings — half range"), equip: null },
  "Sumo Squats":         { hard: e("Regular Bodyweight Squats (narrow stance)","3","15","squat","Quads · Glutes"), equip: null },
  "Calf Raises":         { hard: e("Seated Calf Raises (sit on chair, lift heels)","3","20","jump","Calves · Achilles — no balance needed"), equip: null },
  "Leg Raises (floor)":  { hard: e("Bent Knee Raises (knees bent 90°, easier)","3","10","crunch","Lower Abs · Hip Flexors"), equip: null },
  "Jump Squats":         { hard: e("Bodyweight Squats (no jump)","3","20","squat","Quads · Glutes · Hamstrings"), equip: null },
  "Single Leg Glute Bridge": { hard: e("Two-Leg Glute Bridge (both feet on floor)","3","15","bridge","Glutes · Hamstrings · Core"), equip: null },
  "Single Leg Calf Raises": { hard: e("Two-Leg Calf Raises","3","25","jump","Calves · Achilles · Ankles"), equip: null },
  "Wall Sit":            { hard: e("Partial Wall Sit (only 30° bend, not 90°)","3","20 sec","squat","Quads — much easier angle"), equip: null },
  "Bulgarian Split Squats (rear foot on chair)": { hard: e("Reverse Lunges (both feet on floor)","3","10 each","lunge","Quads · Glutes · Hip Flexors"), equip: e("Reverse Lunges","3","10 each","lunge","Quads · Glutes · Hip Flexors") },
  "Bulgarian Split Squats": { hard: e("Reverse Lunges","3","10 each","lunge","Quads · Glutes · Hip Flexors"), equip: e("Reverse Lunges","3","10 each","lunge","Quads · Glutes") },
  "Sissy Squats (wall-assisted)": { hard: e("Bodyweight Squats (normal)","3","20","squat","Quads · Glutes"), equip: null },
  "Sissy Squats (hold wall)": { hard: e("Bodyweight Squats","3","20","squat","Quads · Glutes"), equip: null },
};

export default function App() {
  const [wk, setWk] = useState(0);
  const [dy, setDy] = useState(0);
  const [tab, setTab] = useState(1);
  const [done, setDone] = useState(() => { try { return JSON.parse(localStorage.getItem("saad_done") || "{}"); } catch { return {}; } });
  const [open, setOpen] = useState(null);

  useEffect(() => { try { localStorage.setItem("saad_done", JSON.stringify(done)); } catch {} }, [done]);
  const [showHealth, setShowHealth] = useState(false);
  const [swapped, setSwapped] = useState({});
  const [altReason, setAltReason] = useState({});

  const week = WEEKS[wk];
  const day = week.days[dy];
  const ac = week.ac;
  const list = tab === 0 ? WU[day.wt] : tab === 2 ? CD[day.wt] : day.exs;
  const mainDone = day.exs.filter((_, i) => done[`${wk}-${dy}-1-${i}`]).length;
  const mainTotal = day.exs.length;

  // Global tracker
  const totalExAll = WEEKS.reduce((s, w) => s + w.days.reduce((ss, d) => ss + d.exs.length, 0), 0);
  const totalDoneAll = Object.keys(done).filter(k => done[k] && k.split("-")[2] === "1").length;
  const globalPct = Math.min(100, Math.round((totalDoneAll / totalExAll) * 100));
  const weekStats = WEEKS.map((w, wi) => {
    const total = w.days.reduce((s, d) => s + d.exs.length, 0);
    const doneCount = w.days.reduce((s, d, di) => s + d.exs.filter((_, ei) => done[`${wi}-${di}-1-${ei}`]).length, 0);
    return { total, doneCount, pct: Math.round((doneCount / total) * 100) };
  });

  const toggle = (k) => setDone(p => ({ ...p, [k]: !p[k] }));

  return (
    <div style={{ background: "#07070e", minHeight: "100vh", maxWidth: 480, margin: "0 auto", paddingBottom: 60, fontFamily: "'Exo 2', sans-serif" }}>
      <style>{STYLES}</style>

      {/* HEADER */}
      <div style={{ background: `linear-gradient(160deg, #0d0d1e 0%, #0a0a14 100%)`, padding: "20px 16px 14px", borderBottom: `2px solid ${ac}33`, position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase" }}>1-Month Blueprint</div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: 1, lineHeight: 1.1 }}>
              SAAD'S <span style={{ color: ac }}>BLUEPRINT</span>
            </div>
          </div>
          <button onClick={() => setShowHealth(!showHealth)} style={{ background: showHealth ? ac : "rgba(255,255,255,0.07)", border: "none", borderRadius: 10, padding: "8px 12px", color: showHealth ? "#000" : "#aaa", fontSize: 11, fontWeight: 800, cursor: "pointer", letterSpacing: 1 }}>
            {showHealth ? "✕ CLOSE" : "📋 DAILY TARGETS"}
          </button>
        </div>

        {/* Health Panel */}
        {showHealth && (
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, animation: "fi 0.3s ease" }}>
            {HEALTH.map((h, i) => (
              <div key={i} style={{ background: `${h.color}14`, border: `1px solid ${h.color}30`, borderRadius: 12, padding: "10px 12px" }}>
                <div style={{ fontSize: 18 }}>{h.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: h.color, marginTop: 2 }}>{h.value}</div>
                <div style={{ fontSize: 10, color: "#666", marginTop: 1 }}>{h.label} — {h.note}</div>
              </div>
            ))}
            <div style={{ gridColumn: "1/-1", background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "8px 12px", fontSize: 11, color: "#888", borderLeft: `3px solid ${ac}` }}>
              ⚖️ At 60kg / 167cm you're normal BMI but likely "skinny fat". Weeks 1–2 focus on fat loss, Weeks 3–4 on muscle building. Both together = body recomposition.
            </div>
          </div>
        )}

        {/* Week Tabs */}
        <div style={{ display: "flex", gap: 6, marginTop: 12, overflowX: "auto", paddingBottom: 2 }}>
          {WEEKS.map((w, i) => (
            <button key={i} className="wk-btn" onClick={() => { setWk(i); setDy(0); setTab(1); setOpen(null); }} style={{ background: wk === i ? w.ac : "rgba(255,255,255,0.06)", color: wk === i ? (w.type === "fat" ? "#fff" : "#000") : "#777", borderLeft: wk !== i && i > 0 ? "none" : "none" }}>
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* GLOBAL PROGRESS TRACKER */}
      <div style={{ margin: "10px 16px 0", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Circular Ring */}
          <div style={{ position: "relative", width: 70, height: 70, flexShrink: 0 }}>
            <svg width="70" height="70" viewBox="0 0 70 70">
              <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
              <circle cx="35" cy="35" r="28" fill="none" stroke={ac} strokeWidth="7"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - globalPct / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 35 35)"
                style={{ transition: "stroke-dashoffset 0.8s ease, stroke 0.4s" }}
              />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: ac, lineHeight: 1 }}>{globalPct}%</div>
              <div style={{ fontSize: 8, color: "#555", letterSpacing: 0.5 }}>DONE</div>
            </div>
          </div>
          {/* Right side */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#aaa", marginBottom: 8, letterSpacing: 1 }}>
              MONTHLY PROGRESS — {totalDoneAll}/{totalExAll} exercises
            </div>
            {weekStats.map((ws, i) => (
              <div key={i} style={{ marginBottom: 5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <div style={{ fontSize: 10, color: i === wk ? WEEKS[i].ac : "#555", fontWeight: i === wk ? 800 : 600 }}>
                    {i === wk ? "▶ " : ""}{WEEKS[i].label}
                  </div>
                  <div style={{ fontSize: 10, color: "#555" }}>{ws.doneCount}/{ws.total}</div>
                </div>
                <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${ws.pct}%`, background: WEEKS[i].ac, borderRadius: 3, opacity: i === wk ? 1 : 0.5, transition: "width 0.6s ease" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {globalPct === 100 && (
          <div style={{ marginTop: 10, textAlign: "center", fontSize: 13, color: "#F9C80E", fontWeight: 800, animation: "hbounce 1s infinite" }}>
            🏆 MONTH 1 COMPLETE! Come back for Month 2! 🏆
          </div>
        )}
        {globalPct > 0 && globalPct < 100 && (
          <div style={{ marginTop: 8, fontSize: 10, color: "#555", textAlign: "center" }}>
            {globalPct < 25 ? "Just getting started — stay consistent! 💪" : globalPct < 50 ? "Good momentum — don't stop now! 🔥" : globalPct < 75 ? "Halfway through — you're building real habits! ⚡" : "So close to finishing Month 1 — push through! 🏆"}
          </div>
        )}
        {globalPct === 0 && (
          <div style={{ marginTop: 8, fontSize: 10, color: "#555", textAlign: "center" }}>Tap any exercise checkbox to start tracking your progress</div>
        )}
      </div>

      {/* WEEK BANNER */}
      <div style={{ margin: "10px 16px 0", background: `linear-gradient(135deg, ${ac}18, ${ac}06)`, border: `1px solid ${ac}30`, borderRadius: 12, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 16, fontWeight: 700, color: ac, letterSpacing: 2 }}>{week.theme}</div>
          <div style={{ fontSize: 10, color: "#666", letterSpacing: 1, marginTop: 1 }}>{week.tag}</div>
        </div>
        <div style={{ fontSize: 22 }}>{week.type === "fat" ? "🔥" : "💪"}</div>
      </div>

      {/* DAY TABS */}
      <div style={{ display: "flex", gap: 6, padding: "10px 16px", overflowX: "auto" }}>
        {week.days.map((d, i) => (
          <button key={i} className="dy-btn" onClick={() => { setDy(i); setTab(1); setOpen(null); }} style={{ background: dy === i ? ac : "rgba(255,255,255,0.05)", color: dy === i ? (week.type === "fat" ? "#fff" : "#000") : "#666" }}>
            {d.icon} {d.name.slice(0, 3).toUpperCase()}
          </button>
        ))}
      </div>

      {/* DAY HEADER */}
      <div style={{ margin: "0 16px 10px", background: `linear-gradient(135deg, ${ac}20, ${ac}06)`, border: `1px solid ${ac}25`, borderRadius: 14, padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: ac, letterSpacing: 3, textTransform: "uppercase" }}>{day.focus}</div>
            <div style={{ fontSize: 20, fontWeight: 900, marginTop: 2, fontFamily: "'Rajdhani', sans-serif", letterSpacing: 1 }}>{day.icon} {day.name}</div>
            <div style={{ fontSize: 11, color: "#777", marginTop: 4 }}>{day.note}</div>
          </div>
          <div style={{ textAlign: "center", background: `${ac}20`, borderRadius: 12, padding: "10px 14px", marginLeft: 10 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: ac, lineHeight: 1 }}>{mainDone}/{mainTotal}</div>
            <div style={{ fontSize: 9, color: "#666", letterSpacing: 1, marginTop: 2 }}>DONE</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 10, height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(mainDone / mainTotal) * 100}%`, background: `linear-gradient(90deg, ${ac}, ${ac}bb)`, borderRadius: 3, transition: "width 0.5s ease" }} />
        </div>
      </div>

      {/* SECTION TABS */}
      <div style={{ display: "flex", gap: 6, padding: "0 16px 10px" }}>
        {[["🔆 Warm-up", 0], ["💪 Workout", 1], ["🧘 Cool-down", 2]].map(([label, idx]) => (
          <button key={idx} className="sec-tab" onClick={() => { setTab(idx); setOpen(null); }} style={{ background: tab === idx ? ac : "rgba(255,255,255,0.05)", color: tab === idx ? (week.type === "fat" ? "#fff" : "#000") : "#666", fontWeight: tab === idx ? 800 : 600, fontSize: 11 }}>
            {label}
          </button>
        ))}
      </div>

      {/* SECTION LABEL */}
      <div style={{ padding: "0 16px 8px" }}>
        <div style={{ fontSize: 10, color: "#555", letterSpacing: 2, fontWeight: 700 }}>
          {tab === 0 ? `🔆 WARM-UP — 5 to 7 minutes · Do every movement slowly` : tab === 2 ? `🧘 COOL-DOWN — 5 to 7 minutes · Hold every stretch fully` : `💪 MAIN WORKOUT — ${day.exs.length} exercises · Tap to expand · Check when done`}
        </div>
      </div>

      {/* EXERCISE LIST */}
      <div style={{ padding: "0 16px" }}>
        {list.map((item, i) => {
          const key = `${wk}-${dy}-${tab}-${i}`;
          const isDone = !!done[key];
          const isOpen = open === key;
          const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(item.n + " how to tutorial proper form calisthenics")}`;
          const isMainTab = tab === 1;

          return (
            <div key={key} className="ex-card" style={{ background: isDone ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)", borderColor: isOpen ? `${ac}50` : isDone ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.07)" }}>
              <div className="ex-main" onClick={() => setOpen(isOpen ? null : key)}>
                {/* Animated SVG */}
                <div style={{ flexShrink: 0, width: 60, display: "flex", alignItems: "center", justifyContent: "center", opacity: isDone ? 0.3 : 1 }}>
                  <Anim type={item.a} color={ac} />
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: isDone ? "#555" : "#eee", textDecoration: isDone ? "line-through" : "none", lineHeight: 1.2, transition: "all 0.2s" }}>
                    {item.n}
                  </div>
                  <div style={{ fontSize: 10, color: "#555", marginTop: 3, lineHeight: 1.3 }}>
                    {item.m.split("·")[0].trim()}
                    {item.m.split("·").length > 1 && <span style={{ color: "#444" }}>{" · " + item.m.split("·").slice(1, 3).join("·")}</span>}
                  </div>
                </div>

                {/* Sets/Reps + Checkbox */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, marginLeft: 8 }}>
                  <div style={{ background: `${ac}18`, color: ac, borderRadius: 8, padding: "4px 8px", fontSize: 11, fontWeight: 800, letterSpacing: 0.5, whiteSpace: "nowrap" }}>
                    {item.s > 1 ? `${item.s} × ` : ""}{item.r}
                  </div>
                  {isMainTab && (
                    <div className="cb" onClick={(ev) => { ev.stopPropagation(); toggle(key); }} style={{ borderColor: isDone ? ac : "#444", background: isDone ? ac : "transparent", color: isDone ? (week.type === "fat" ? "#fff" : "#000") : "transparent" }}>
                      {isDone ? "✓" : ""}
                    </div>
                  )}
                </div>
              </div>

              {/* Expand panel */}
              {isOpen && (
                <div className="ex-expanded" style={{ animation: "fi 0.25s ease" }}>
                  <div style={{ fontSize: 11, color: "#777", lineHeight: 1.6, padding: "8px 0 4px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: ac, fontWeight: 700 }}>Muscles targeted:</span> {item.m}
                  </div>
                  <a href={ytUrl} target="_blank" rel="noopener noreferrer" className="yt-btn" style={{ background: "#FF000015", border: "1px solid #FF000060", color: "#FF5555", marginTop: 6 }}>
                    <span style={{ fontSize: 16 }}>▶</span>
                    <span>Watch "{item.n}" Tutorial on YouTube</span>
                  </a>
                  {tab === 0 && <div style={{ fontSize: 10, color: "#555", marginTop: 6, fontStyle: "italic" }}>Move slowly during warm-up. The goal is blood flow, not performance.</div>}
                  {tab === 2 && <div style={{ fontSize: 10, color: "#555", marginTop: 6, fontStyle: "italic" }}>Hold the stretch, breathe deeply, feel the muscle release. Don't rush.</div>}
                  {tab === 1 && <div style={{ fontSize: 10, color: "#555", marginTop: 6, fontStyle: "italic" }}>3-sec down, 1-sec pause, 1-sec up. If it feels too easy, go slower — not faster.</div>}

                  {/* Can't do this? */}
                  {tab === 1 && (() => {
                    const alt = ALTS[item.n];
                    if (!alt) return null;
                    const reason = altReason[key];
                    const altEx = reason === "hard" ? alt.hard : reason === "equip" ? alt.equip : null;
                    return (
                      <div style={{ marginTop: 10, background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "10px 12px", border: "1px dashed rgba(255,255,255,0.1)" }}>
                        {!reason && (
                          <>
                            <div style={{ fontSize: 11, color: "#777", marginBottom: 8, fontWeight: 700 }}>🔄 Can't do this exercise?</div>
                            <div style={{ display: "flex", gap: 8 }}>
                              {alt.hard && (
                                <button onClick={() => setAltReason(p => ({ ...p, [key]: "hard" }))} style={{ flex: 1, background: "#FF6B3520", border: "1px solid #FF6B3560", color: "#FF6B35", borderRadius: 8, padding: "8px 6px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "'Exo 2',sans-serif" }}>
                                  😓 Too Hard
                                </button>
                              )}
                              {alt.equip && (
                                <button onClick={() => setAltReason(p => ({ ...p, [key]: "equip" }))} style={{ flex: 1, background: "#00C9A720", border: "1px solid #00C9A760", color: "#00C9A7", borderRadius: 8, padding: "8px 6px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "'Exo 2',sans-serif" }}>
                                  🚫 No Equipment
                                </button>
                              )}
                            </div>
                          </>
                        )}
                        {reason && altEx && (
                          <div style={{ animation: "fi 0.3s ease" }}>
                            <div style={{ fontSize: 10, color: reason === "hard" ? "#FF6B35" : "#00C9A7", fontWeight: 800, letterSpacing: 1, marginBottom: 6 }}>
                              {reason === "hard" ? "😓 EASIER ALTERNATIVE" : "🚫 NO EQUIPMENT ALTERNATIVE"}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "10px 12px" }}>
                              <Anim type={altEx.a} color={reason === "hard" ? "#FF6B35" : "#00C9A7"} />
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 13, fontWeight: 800, color: "#eee" }}>{altEx.n}</div>
                                <div style={{ fontSize: 10, color: "#666", marginTop: 3 }}>{altEx.m}</div>
                                <div style={{ marginTop: 4, background: `${reason === "hard" ? "#FF6B35" : "#00C9A7"}20`, color: reason === "hard" ? "#FF6B35" : "#00C9A7", display: "inline-block", borderRadius: 6, padding: "3px 8px", fontSize: 11, fontWeight: 800 }}>
                                  {altEx.s > 1 ? `${altEx.s} × ` : ""}{altEx.r}
                                </div>
                              </div>
                            </div>
                            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(altEx.n + " tutorial calisthenics form")}`} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#FF000015", border: "1px solid #FF000060", color: "#FF5555", borderRadius: 8, padding: "8px", fontSize: 11, fontWeight: 700, textDecoration: "none", fontFamily: "'Exo 2',sans-serif" }}>
                                ▶ Watch Tutorial
                              </a>
                              <button onClick={() => setAltReason(p => ({ ...p, [key]: null }))} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#888", borderRadius: 8, padding: "8px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "'Exo 2',sans-serif" }}>
                                ← Back
                              </button>
                            </div>
                          </div>
                        )}
                        {reason && !altEx && (
                          <div style={{ fontSize: 11, color: "#888", padding: "6px 0" }}>
                            ✅ This exercise needs no special equipment — just your bodyweight. You can do it!
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* GOLDEN RULES + REST */}
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "14px 16px", marginBottom: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#F9C80E", letterSpacing: 2, marginBottom: 8 }}>⚡ NON-NEGOTIABLE RULES</div>
          {[
            ["😴", "Sleep 8 hours minimum — muscles only grow during sleep, not during workout"],
            ["💧", "Drink 2.5L water every day — more on workout days"],
            ["👟", "Walk 8,000 steps — walk after meals to burn more fat"],
            ["🥩", "Eat protein at every meal — eggs, daal, chicken, milk"],
            ["📅", "If you miss 1 day, don't skip 2 — just continue from where you stopped"],
            ["⚖️", "3 sec down, 1 sec hold, 1 sec up — slow reps build more muscle than fast ones"],
          ].map(([ic, t], i) => (
            <div key={i} style={{ display: "flex", gap: 8, padding: "4px 0", fontSize: 12, color: "#888" }}>
              <span style={{ flexShrink: 0 }}>{ic}</span> <span>{t}</span>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "12px 16px", display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 28 }}>😴</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, color: "#bbb" }}>Saturday & Sunday — FULL REST</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>Light walk only. Sleep 8-9 hours. Eat well. This is when you actually grow.</div>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "8px 0", fontSize: 11, color: "#333", letterSpacing: 1, fontStyle: "italic" }}>
          Complete Month 1 → Come back for Month 2 Advanced Plan 🔥
        </div>
      </div>
    </div>
  );
}
