export const styles = {
    main: {
        width: '100%',
        height: { xs: "auto", md: "120%" },
        padding: "3rem 4.5%",
        pt: { xs: "25%", md: "8%" },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: { xs: "flex-end", md: "space-between" },
        alignItems: 'center',
    },
    sectionText: {
        // border: "1px solid red",
        width: { xs: "100%", md: "auto" },
        height: { xs: "auto", md: "100%" },
        display: "flex",
        mt: { xs: "3rem", md: "0" },
        flexDirection: "column",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" }
    },
    title: {
        fontWeight: 700,
        fontSize: "2rem",
        mb: "1rem"
    },
    description: {
        fontSize: "1.2rem",
        fontWeight: 'light',
        mb: "1rem"
    },
    sectionImage: {
        //  border: "1px solid red",
        width: { xs: "100%", md: "30%" },
        height: { xs: "auto", md: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        margin: { xs: "0.2rem 0.4rem", md: "0 1rem" }
    }
}