import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { heroStyles } from "./Hero.styles";
import { logos, MARQUEE_LOGO_HEIGHT } from "../../constant/constantData";

const HeroSection = () => {
  const marqueeLogos = [...logos, ...logos];

  return (
    <Box id="hero" sx={heroStyles.container}>
      <Box sx={heroStyles.wrapper}>
        <Box sx={heroStyles.heroGifPlaceholder} />

        <Box sx={heroStyles.content}>
          <Typography sx={heroStyles.smallText}>
            Global GDP running on Stripe
          </Typography>
          <Typography variant="h3" sx={heroStyles.heading}>
            Financial infrastructure to grow{" "}
            <Box component="span" sx={heroStyles.heading2}>
              your revenue.
            </Box>
          </Typography>

          <Typography variant="h3" sx={heroStyles.description}>
            Accept payments, offer financial services, and implement custom
            revenue models—from your first transaction to your billionth.
          </Typography>

          <Box sx={heroStyles.buttonRow}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={heroStyles.primaryButton}
            >
              Get started
            </Button>

            <Button
              variant="outlined"
              startIcon={
                <Box
                  component="img"
                  src="/google-logo.png"
                  alt="Google"
                  sx={heroStyles.googleIcon}
                />
              }
              sx={heroStyles.secondaryButton}
            >
              Sign up with Google
            </Button>
          </Box>
        </Box>

        <Box sx={heroStyles.marqueeCard}>
          <Box sx={heroStyles.marqueeViewport}>
            <Box sx={heroStyles.marqueeTrack}>
              {marqueeLogos.map((logo, i) => (
                <Box
                  key={`${logo.name}-${i}`}
                  component="a"
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={heroStyles.marqueeItem}
                >
                  {logo.Component && (
                    <Box
                      sx={{
                        ...heroStyles.marqueeIconBox,
                        ...(logo.invert ? heroStyles.marqueeItemDark : {}),
                      }}
                    >
                      <logo.Component
                        viewBox={logo.viewBox}
                        height={MARQUEE_LOGO_HEIGHT}
                        width="auto"
                      />
                    </Box>
                  )}
                  {!logo.hideName && (
                    <Typography component="span" sx={heroStyles.marqueeText}>
                      {logo.name}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
