export const initialNotation = `
  X:1
  T:Speed the Plough
  M:4/4
  C:Trad.
  K:G
  |:GABc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|
    GABc dedB|dedB dedB|c2ec B2dB|A2F2 G4:|
  |:g2gf gdBd|g2f2 e2d2|c2ec B2dB|c2A2 A2df|
    g2gf g2Bd|g2f2 e2d2|c2ec B2dB|A2F2 G4:|
`;

const ChopinWaltzABC = `
  X:1
  T: Mr. Chopin's Waltz
  N:
  C:Chopin
  S:
  A:
  O:
  R:
  M:3/4
  K:Em
  I:speed 150
  %W: A
  % voice 1 (1 lines, 32 notes)
  K:Em
  M:3/4
  L:1/16
  B,4 |E2 F2 G4 G4 |A2 B2 c8 |F2 G2 A2 e2 d2 c2 |B2 ^A2 B8 |E2 F2 G4 G4 |A2 B2 c8 |F2 G2 A2 e2 d2 F2 |G8 B,4 |
  %W:
  % voice 1 (1 lines, 30 notes)
  E2 F2 G4 G4 |A2 B2 c8 |F2 G2 A2 e2 d2 c2 |B2 ^A2 B8 |G2 A2 B4 B4 |c2 d2 e8 |d4 ^c2 d2 a2 =c2 |B8 B4 |
  %W: B
  % voice 1 (1 lines, 39 notes)
  B2 ^c2 ^d2 e2 f2 g2 |f2 e2 B2 f2 e4 |e2 ^d2 B2 c2 B4 |B2 G2 E2 F2 E4 |B,2 ^D2 F2 B2 ^d2 f2 |f2 e2 B2 f2 e4 |e2 ^d2 B2 b2 b4 |e8 B4 |
  %W:
  % voice 1 (1 lines, 38 notes)
  B2 ^c2 ^d2 e2 f2 g2 |f2 e2 B2 f2 e4 |e2 ^d2 B2 c2 B4 |B2 G2 E2 F2 E4 |B,2 ^D2 F2 B2 ^d2 f2 |f2 e2 B2 f2 e4 |e2 ^d2 B2 b2 b4 |e8 ||    
`;

const BeethovenSonataABC = `
  X:2
  T:8th Sonata for piano
  C:L. van Beethoven
  M:C
  L:1/16
  Q:1/8=66
  %%staves {1 2}
  K:Cm
  % .. even when there are a lot of notes
  V:1
  !fp![E,4G,4C4]- [E,3/G,3/C3/]!3![G,/C/]!4![G,3/=B,3/D3/]!5![G,/C/E/] ([=A,4C4E4]!4![=B,2D2])z2|\
  !fp!!3![=B,4D4F4]- [B,3/D3/F3/][B,/D/F/][B,3/D3/G3/][B,/D/A/] ([B,4D4A4]!3![C2E2G2])z2|
  V:2
  [C,,4E,,4G,,4C,4]- [C,,3/E,,3/G,,3/C,3/]!2!E,/!3!D,3/!4!C,/ (!2!^F,4G,2)z _A,,|\
  _A,4-A,3/!2!A,/!1!G,3/=F,/ E,4-E,2z3/ E,/|
`;

export const notations = [
  ChopinWaltzABC,
  BeethovenSonataABC
];
