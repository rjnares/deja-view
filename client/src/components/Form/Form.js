import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [formValidationMessage, setFormValidationMessage] = useState("");
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const AlertDialog = () => {
    return (
      <div>
        <Dialog
          open={showAlertDialog}
          onClose={() => setShowAlertDialog(false)}
          aria-labelledby="form-submission-error-title"
          aria-describedby="form-submission-error-description"
        >
          <DialogTitle
            disableTypography={true}
            id="form-submission-error-title"
          >
            <Typography align="center" variant="h5">
              Form submission error
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="form-submission-error-description"
              variant="subtitle1"
              align="center"
            >
              {formValidationMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setShowAlertDialog(false)}
              color="primary"
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postData.title) {
      setFormValidationMessage("View is missing a required title");
      setShowAlertDialog(true);
    } else if (!postData.message) {
      setFormValidationMessage("View is missing a required message");
      setShowAlertDialog(true);
    } else if (!postData.selectedFile) {
      setFormValidationMessage("View is missing a required image file");
      setShowAlertDialog(true);
    } else {
      if (currentId === 0) {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
      } else {
        dispatch(
          updatePost(currentId, { ...postData, name: user?.result?.name })
        );
        clear();
      }
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
          Please sign in to share and like views
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <AlertDialog />
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography align="center" variant="h6">
          {currentId ? `Editing "${post.title}"` : "Share your View"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
