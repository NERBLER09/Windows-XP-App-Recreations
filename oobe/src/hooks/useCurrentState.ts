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
                    location: "/connectToInternet",
                    buttonType: "skip",
                },
                {
                    type: "next",
                    text: "Next",
                    location: "/connectToInternet",
                    buttonType: "forward",
                }
            ]

            break
        case "/connectToInternet":
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
                    location: "/userAccounts",
                    buttonType: "skip",
                },
                {
                    type: "next",
                    text: "Next",
                    location: "/userAccounts",
                    buttonType: "forward",
                }
            ]
            break

        case "/userAccounts":
            button = [
                {
                    type: "back",
                    text: "Back",
                    backLocation: "/connectToInternet",
                    buttonType: "back",
                },
                {
                    type: "next",
                    text: "Next",
                    location: "/finish",
                    buttonType: "forward",
                }
            ]

            break
        case "/finish":
            button = [
                {
                    type: "next",
                    text: "Finish",
                    location: "/finish",
                    buttonType: "forward",
                }
            ]

            break
    }
    return {button}
}