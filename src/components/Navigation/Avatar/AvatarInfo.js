import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { IconButton, Typography, Link, Badge } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 200,
    textAlign: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

export const AvatarInfo = React.memo(function ProfileCard() {
  const styles = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const isGV = user && user.maLoaiNguoiDung === "GV";

  return (
    <Card className={cx(styles.card)}>
      {user ? (
        <CardContent>
          <Badge
            badgeContent={isGV ? user.maLoaiNguoiDung : null}
            color="error"
          >
            <Avatar
              className={styles.avatar}
              src={"https://media-exp1.licdn.com/dms/image/C4E03AQFVuG2nPW7Kqg/profile-displayphoto-shrink_800_800/0/1596118954091?e=1639008000&v=beta&t=X-vdeBrcj_bFr0K08vMT2dvCrEZb-ECqf0BzJ4-f9EI"}
            />
          </Badge>
          <h3 className={styles.heading}>{user.taiKhoan}</h3>
          <span className={styles.subheader}>
            {user.maNhom}
            <br />
            {user.email}
          </span>
        </CardContent>
      ) : null}
      <Divider light />
      <Typography className={styles.subheader}>
        Designed by Vijay Singh
      </Typography>
      <Typography className={styles.subheader} style={{ marginBottom: 0 }}>
        Contact me
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton
          size="small"
          component={Link}
          href="https://www.linkedin.com/in/vijay-singh-35447212/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          size="small"
          component={Link}
          href="https://github.com/LeadVjSingh"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon style={{ fontSize: "1.125rem" }} />
        </IconButton>
      </Box>
      <Typography className={styles.subheader}>
        © Copyright 2020 Startup India Buddy.
      </Typography>
    </Card>
  );
});

export default AvatarInfo;
