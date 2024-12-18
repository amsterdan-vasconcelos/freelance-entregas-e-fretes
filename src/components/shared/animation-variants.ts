"use client";

import { Easing, Variants } from "motion/react";

export const accordionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: (custom + 1) / 5,
      duration: 0.5,
    },
  }),
};

export const titleVariants: Variants = {
  hidden: {
    transform: "translateY(100%)",
    opacity: 0,
  },
  visible: {
    transform: "translateY(0)",
    opacity: 1,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

export const imageCardVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateX(100%)",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0)",
    transition: { duration: 1, delay: 0.5 },
  },
};

export const homeImageVariants: Variants = {
  hidden: {
    transform: "translateX(-100vw)",
  },
  visible: {
    transform: "translateX(0)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const homeMessageVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(100%)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: { duration: 0.4, delay: 0.8, ease: "easeIn" },
  },
};

export type FadeInVariantsType = {
  duration?: number;
  delay?: number;
  ease?: Easing;
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(100%)",
  },
  visible: ({ duration, delay, ease }: FadeInVariantsType) => ({
    opacity: 1,
    transform: "translateY(0)",
    transition: { duration, delay, ease },
  }),
};

export type DoorVariantsType = {
  duration?: number;
  delay?: number;
  ease?: Easing;
  transformOrigin: number | string;
};

export const doorVariants: Variants = {
  hidden: ({ transformOrigin }: DoorVariantsType) => ({
    transform: "scaleX(1)",
    transformOrigin,
  }),
  visible: ({ duration, delay, ease }: DoorVariantsType) => ({
    transform: "scaleX(0)",
    transition: { duration, delay, ease },
  }),
};
