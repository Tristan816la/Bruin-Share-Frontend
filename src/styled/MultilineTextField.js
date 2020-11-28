import { useStyles } from "../utils/useStyles";
import { TextField } from "@material-ui/core";
const MultilineTextFields = ({ onChange, value }) => {
  const classes = useStyles();

  return (
    <form className={classes.sendPostBox} noValidate autoComplete="off">
      <div>
        <TextField
          label="Your Post"
          multiline
          variant="outlined"
          rows={5}
          onChange={(e) => onChange(e)}
          fullWidth
          value={value}
        />
      </div>
    </form>
  );
};

export default MultilineTextFields;
