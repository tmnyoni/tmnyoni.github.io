
const easing = [.6, -0.5, .01, .99]

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 1,
        opacity: 1,
        transition: {
            duration: .6,
            ease: easing
        }
    }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}