import React from 'react'
import Image from 'next/image'

interface Icontype {
  className?: string
}

export const ChevronRight: React.FC<Icontype> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
  )
}

export const ChevronLeft: React.FC<Icontype> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const DotCircleIcon: React.FC<Icontype> = () => {
  return (
    <div className="relative w-24 h-24">
      <Image
        layout="fill"
        src="/svgs/circles.svg"
        className="w-full h-full"
        alt="dot-circle"
      />
    </div>
  )
}

export const MenuIcon: React.FC<Icontype> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M4 8h16M4 16h16"
      ></path>
    </svg>
  )
}

export const CloseIcon: React.FC<Icontype> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  )
}

export const LogoLarge: React.FC<Icontype> = () => {
  return (
    <svg width="170" height="31">
      <path
        d="M30 7l-3 1c-1-5-5-8-9-8C13 0 8 5 8 10H7c-4 0-7 3-7 8 0 3 2 6 5 7h2a347 347 0 0025 0c4-1 6-5 6-9 0-5-4-9-8-9zm1 16H9l-3-1-3-1v-5c0-2 2-3 4-4l2 1a2 2 0 001-1h1v-2l1-4 4-3a7 7 0 016 1c3 2 3 5 3 6a1 1 0 001 1 1 1 0 001-1h3a7 7 0 014 2l2 4-2 4c1 0 0 0 0 0l-3 3z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M23 18l-6-8a1 1 0 00-2 1l3 4-3 3a1 1 0 102 1l2-2 2 2a1 1 0 002-1z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M54 23c5 0 9-3 9-8s-4-9-9-9c-4 0-8 4-8 9s4 8 8 8zm0-3c-2 0-4-2-4-5s2-5 4-5c3 0 5 2 5 5s-2 5-5 5zm15-5l1-1 1 1 3-2-4-2c-3 0-5 1-5 4 0 4 6 3 6 4l-2 1-2-1-3 1c1 2 3 3 5 3 3 0 5-1 5-4 0-4-5-3-5-4zm13 8c3 0 6-2 6-6s-3-6-6-6c-4 0-6 2-6 6s2 6 6 6zm0-3c-2 0-3-1-3-3s1-3 3-3c1 0 3 1 3 3s-2 3-3 3zm22-9l-4 1-3-1-3 1v-1h-4v12h4v-7l2-2 1 2v7h4v-7l2-2 2 2v7h3v-7c0-3-2-5-4-5zm20 0l-2 6-2-6h-3l-2 6-2-6h-4l4 12h3l2-6 2 6h4l4-12h-4zm13 0v1l-3-1c-4 0-6 2-6 6s2 6 6 6l3-1v1h4V11h-4zm-3 9c-1 0-3-1-3-3s2-3 3-3c2 0 3 1 3 3s-1 3-3 3zm13-7v-2h-4v12h4v-5c0-3 2-3 4-3v-4l-4 2zm8 5h9v-1c0-4-3-6-6-6-4 0-7 2-7 6s3 6 7 6l5-2-3-2-2 1c-1 0-2 0-3-2zm0-2c0-1 1-2 3-2 1 0 2 0 2 2h-5z"
        fill="#1E2D56"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="42.2"
          y1=".5"
          x2="-1.6"
          y2="29.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F9BE8" />
          <stop offset="1" stopColor="#6924FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="457.5"
          y1="703.1"
          x2="608.5"
          y2="711.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0B78FF" />
          <stop offset="1" stopColor="#5000FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const LogoSmall: React.FC<Icontype> = ({ className }) => {
  return (
    <Image
      className={className}
      src="/svgs/logo.svg"
      width="75"
      height="50"
      layout="fixed"
      alt="small-logo"
    />
  )
}

export const FacebookLogo: React.FC<Icontype> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M9.95235 3.29509H11.954V0.139742C11.6087 0.0967442 10.421 0 9.03787 0C6.1519 0 4.17494 1.643 4.17494 4.66274V7.44186H0.990234V10.9693H4.17494V19.845H8.07953V10.9701H11.1354L11.6205 7.44269H8.07862V5.01251C8.07953 3.99297 8.38284 3.29509 9.95235 3.29509Z" />
    </svg>
  )
}

export const TwitterLogo: React.FC<Icontype> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M24.4985 2.11613C23.5946 2.475 22.6314 2.71288 21.6273 2.82838C22.6603 2.27013 23.4488 1.39287 23.8195 0.3355C22.8563 0.85525 21.7928 1.22238 20.6595 1.42725C19.745 0.545875 18.4415 0 17.0195 0C14.2607 0 12.0396 2.02675 12.0396 4.51137C12.0396 4.86888 12.073 5.21263 12.1551 5.53988C8.01223 5.357 4.34641 3.55988 1.88379 0.82225C1.45386 1.49738 1.20167 2.27012 1.20167 3.102C1.20167 4.664 2.0904 6.04862 3.41514 6.85025C2.61452 6.8365 1.8291 6.62613 1.16369 6.29475C1.16369 6.3085 1.16369 6.32638 1.16369 6.34425C1.16369 8.536 2.89102 10.3565 5.15614 10.7759C4.75051 10.8763 4.30843 10.9244 3.84963 10.9244C3.5306 10.9244 3.20853 10.9079 2.90621 10.8474C3.55187 12.6335 5.38402 13.9466 7.56254 13.9893C5.86712 15.1896 3.71442 15.9129 1.38397 15.9129C0.975311 15.9129 0.583359 15.8964 0.191406 15.851C2.3988 17.1394 5.01485 17.875 7.836 17.875C17.0059 17.875 22.0192 11 22.0192 5.04075C22.0192 4.84137 22.0116 4.64887 22.001 4.45775C22.99 3.8225 23.821 3.02913 24.4985 2.11613Z" />
    </svg>
  )
}

export const InstagramLogo: React.FC<Icontype> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.28934 0H17.4045C21.599 0 25.0005 3.07862 25.0005 6.875V15.125C25.0005 18.9214 21.599 22 17.4045 22H8.28934C4.09484 22 0.693359 18.9214 0.693359 15.125V6.875C0.693359 3.07862 4.09484 0 8.28934 0ZM17.4046 19.9375C20.3367 19.9375 22.7218 17.7787 22.7218 15.125V6.875C22.7218 4.22125 20.3367 2.0625 17.4046 2.0625H8.28938C5.35732 2.0625 2.97217 4.22125 2.97217 6.875V15.125C2.97217 17.7787 5.35732 19.9375 8.28938 19.9375H17.4046Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77002 11C6.77002 7.96263 9.49087 5.5 12.8467 5.5C16.2026 5.5 18.9235 7.96263 18.9235 11C18.9235 14.0374 16.2026 16.5 12.8467 16.5C9.49087 16.5 6.77002 14.0374 6.77002 11ZM9.04871 11C9.04871 12.8948 10.7533 14.4375 12.8468 14.4375C14.9403 14.4375 16.6449 12.8948 16.6449 11C16.6449 9.10388 14.9403 7.5625 12.8468 7.5625C10.7533 7.5625 9.04871 9.10388 9.04871 11Z"
      />
      <ellipse
        cx="19.3792"
        cy="5.08737"
        rx="0.809875"
        ry="0.732875"
        fill="white"
      />
    </svg>
  )
}
