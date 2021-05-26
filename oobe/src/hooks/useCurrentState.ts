export const useCurrentState = (progress: string) => {
    let button: any

    switch(progress) {
        case "home":
            button = [
            {
                type: "next",
                text: "Next",
                location: "/",
                buttonType: "forward"
            }]
    }
    return {button}
}