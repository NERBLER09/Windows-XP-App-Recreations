export const getCurrentState = (progress: string) => {
    let button: any

    switch(progress) {
        case "/":
            button = [
            {
                type: "next",
                text: "Next",
                location: "/updates",
                buttonType: "forward",
            }]

            break
        case "/updates":
            button = [
                {
                    type: "back",
                    text: "Back",
                    backLocation: "/",
                    buttonType: "back",
                },
                {
                    type: "next",
                    text: "Next",
                    location: "/connectivity",
                    buttonType: "forward",
                }
            ]
            break
        case "/connectivity":
            button = [
                {
                    type: "back",
                    text: "Back",
                    backLocation: "/updates",
                    buttonType: "back",
                },
                {
                    type: "skip",
                    text: "Skip",
                    location: "/",
                    buttonType: "skip",
                },
                {
                    type: "next",
                    text: "Next",
                    location: "/connectivity",
                    buttonType: "forward",
                }
            ]
    }
    return {button}
}