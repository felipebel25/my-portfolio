export const styles = {
    main: {
        // background: "linear-gradient(180deg, rgba(53,39,67,1) 0%, rgba(53,39,67,0.9556197478991597) 50%, rgba(53,39,67,0.8239670868347339) 100%)",
         backgroundColor: "secondary.light",
        height: { xs: "auto", md: "55vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "8% 4.5%", md: "2% 4.5%" },
        textAlign: { xs: "center", md: "left" },
        scrollMargin: '80px',


    },
    sectionText: {
        width: { xs: "100%", md: "50%" },
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    sectionConsole: {
        width: { xs: "100%", md: "50%" },
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-end" },
        margin: { xs: "2rem 0", md: "0" }
    },
    about: {


    },
    whoIam: {
        mb: "1rem",
        fontSize: "2.1rem",
        fontWeight: 700,
    }
}