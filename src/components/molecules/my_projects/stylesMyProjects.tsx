export const styles = {
    main: {
        width: '100%',
        height: { xs: "auto", md: "auto" },
        padding: "3rem 4.5%",
        pt: { xs: "0", md: "3rem" },
        display: "flex",
        flexDirection: 'column',
        backgroundColor: 'info.main',
        justifyContent: { xs: "flex-end", md: "space-between" },
        // border: "1px solid red"
    },
    title: {
        textAlign: { xs: "center", md: "left" },
        mt: { xs: "2rem", md: "0" }
    },
    containerCards: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        m: "2rem 0",
        justifyContent: "space-evenly",
    }
}