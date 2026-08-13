import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { globalReachStyles } from "./GlobalReach.styles";

const GlobalReach = () => {
  return (
    <Box id="globalReach" sx={globalReachStyles.container}>
      <Box sx={globalReachStyles.wrapper}>
        <Box sx={globalReachStyles.imageWrapper}>
          <Box
            component="img"
            src="/stageImg.png"
            alt="stage_image"
            sx={globalReachStyles.image}
          />

          <Box sx={globalReachStyles.overlayContent}>
            <Typography sx={globalReachStyles.overlayHeading}>
              Building the economic
              <br />
              infrastructure for AI
            </Typography>
            <Button
              endIcon={
                <Box sx={globalReachStyles.iconSwap}>
                  <ChevronRightIcon sx={globalReachStyles.chevronIcon} />
                  <ArrowForwardIcon sx={globalReachStyles.arrowIcon} />
                </Box>
              }
              sx={globalReachStyles.overlayButton}
            >
              Watch now
            </Button>
          </Box>

          <Typography sx={globalReachStyles.cornerLabel}>
            <Box component="span" sx={globalReachStyles.cornerLabelBold}>
              stripe
            </Box>{" "}
            sessions
          </Typography>
        </Box>

        <Typography sx={globalReachStyles.belowHeading}>
          The backbone
          <br />
          of global commerce
        </Typography>
      </Box>
    </Box>
  );
};

export default GlobalReach;
