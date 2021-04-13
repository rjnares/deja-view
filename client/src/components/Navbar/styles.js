import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  headingContainer: {
    display: "flex",
  },
  heading: {
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.65rem",
    },
  },
  image: {
    marginLeft: "13px",
    marginTop: "15px",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      height: "2.65rem",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      justifyContent: "center",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: "10px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginRight: "50px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    color: theme.palette.getContrastText("#716658"),
    backgroundColor: "#716658",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  signout: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
}));
