import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  headingContainer: {
    display: "flex",
  },
  heading: {
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.75rem",
    },
  },
  image: {
    marginLeft: "15px",
    marginTop: "15px",
    marginBottom: "15px",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: "10px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  signout: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "10px",
    },
  },
}));
