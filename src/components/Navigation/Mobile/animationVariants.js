export const navVariants = {
  closed: { x: 0 },
  open: { x: "-100%" }
}

export const btnVariants = {
  closed: { opacity: 0, y: "-100%" },
  open: { opacity: 1, y: 0 },
}

export const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3
    }
  },
  closed: {}
}

export const liVariants = {
  closed: { x: "100%", opacity: 0 },
  open: { x: 0, opacity: 1 }
}