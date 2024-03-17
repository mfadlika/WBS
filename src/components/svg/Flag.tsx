import { ReactElement } from "react";

interface FlagType {
  [key: string]: ReactElement;
}

const width = 52;
const height = 26;

const Flag: FlagType = {
  ukFlag: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width={width}
      height={height}
    >
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#t)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  ),
  idFlag: (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path fill="#fff" d="M0 0H52V26H0z" />
      <path fill="red" d="M0 0H52V13H0z" />
    </svg>
  ),
  deFlag: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="1 0 5 3"
    >
      <rect id="black_stripe" width="7" height="3" y="0" x="0" fill="#000" />
      <rect id="red_stripe" width="7" height="2" y="1" x="0" fill="#D00" />
      <rect id="gold_stripe" width="7" height="1" y="2" x="0" fill="#FFCE00" />
    </svg>
  ),
};

export default Flag;
