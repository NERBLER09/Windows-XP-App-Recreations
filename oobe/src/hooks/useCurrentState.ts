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
                    location: "/updates",
                    buttonType: "forward",
                }
            ]
    }
    return {button}
}