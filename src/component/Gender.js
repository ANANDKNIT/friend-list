import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actions/FriendListActions";

const GenderView = props => {
  const [value, setValue] = React.useState(props.item.gender);

  const handleChange = event => {
    setValue(event.target.value);
    const item = { id: props.item.id, gender: event.target.value };
    props.handleGenderChange(item);
  };

  return (
    <div className="friend-gender">
      <FormControl component="fieldset" fullWidth>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            labelPlacement="end"
            value="female"
            control={<Radio color="primary" fontSize="small" />}
            label="Female"
          />
          <FormControlLabel
            labelPlacement="end"
            value="male"
            control={<Radio color="primary" fontSize="small" />}
            label="Male"
          />
          <FormControlLabel
            labelPlacement="end"
            value="other"
            control={<Radio color="primary" fontSize="small" />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleGenderChange: item =>
      dispatch({ type: ActionTypes.CHANGE_GENDER, item: item })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GenderView);
