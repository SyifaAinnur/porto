export const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
    }
}

export const translate = {
    initial: {
        y: "100%",
        opacity: 0
    },
    enter: (i: any) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0]}
    }),
    exit: (i : any) => ({
        y: "100%",
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1]}
    })
}