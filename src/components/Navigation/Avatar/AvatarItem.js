import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // [theme.breakpoints.up("sm")]: {
    //   "& > *": {
    //     marginLeft: theme.spacing(1),
    //   },
    // },
  },
}));

const AvatarItem = ({ onSideOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
        onClick={onSideOpen}
      >
        <Avatar alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C4E03AQFVuG2nPW7Kqg/profile-displayphoto-shrink_800_800/0/1596118954091?e=1639008000&v=beta&t=X-vdeBrcj_bFr0K08vMT2dvCrEZb-ECqf0BzJ4-f9EI" />
      </StyledBadge>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSideOpen: () => dispatch(actions.openSidebar()),
  };
};

export default connect(null, mapDispatchToProps)(AvatarItem);
