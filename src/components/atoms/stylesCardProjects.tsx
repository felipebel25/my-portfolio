export const styles = {
    main: {
        maxWidth: 375,
        height: "100%",
        margin: "2rem 0",
        '&:hover':{
            '& header':{
                display:'flex !important',
            }
        }
    },
    chip: {
        margin: "0.35rem 0.25rem"
    },
    iconsActions: {
        position: "relative",
        top: '0.75rem',
        marginBottom: '-12.8%',
        zIndex: 20,
        width: "100%",
        height: "3rem",
        display: "none",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
    },
    iconAction: {
        backgroundColor: "secondary.light",
        color: "primary.main",
        '&:hover ': {
            backgroundColor: "secondary.light",
            opacity: 0.7
        }

    },
    chipsContainer: {
        border: "1px sold red",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",

    },
}
