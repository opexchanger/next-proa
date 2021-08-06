export const navVariants = {
  closed: { x: 0 },
  open: { x: "-100%" }
}

export const btnVariants = {
  closed: { opacity: 0, },
  open: { opacity: 1, rotate: [0, 360] },
}

export const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  },
  closed: {}
}

export const liVariants = {
  closed: { x: "100%", opacity: 0 },
  open: { x: 0, opacity: 1 },
}