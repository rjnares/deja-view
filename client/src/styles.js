import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.25rem",
    },
  },
  image: {
    marginLeft: "15px",
    height: "20vh",
    [theme.breakpoints.down("md")]: {
      height: "8vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
