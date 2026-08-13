import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { infrastuctureStyles } from "./Infrastructure.styles";
import { useApp } from "../../hooks/useApp";
import {
  caseStudies,
  expertFeatures,
  promoCards,
  startupShowcase,
  testimonials,
  platformFeatures,
  platformDashboardImage,
} from "../../constant/constantData";

const InfrastructureSection = () => {
  const {
    scrollCarousel,
    activeId,
    activeTestimonial,
    setActiveTestimonial,
    handleToggle,
    carouselRef,
  } = useApp();

  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box id="infrastructure" sx={infrastuctureStyles.container}>
      <Box sx={infrastuctureStyles.heading}>
        <Typography variant="h5">
          Transform your enterprise with agile financial infrastructure
        </Typography>
      </Box>

      <Box sx={infrastuctureStyles.des}>
        <Typography>
          50% of Fortune 100 companies have used Stripe to grow their
          businesses—from expanding internationally to reimagining the customer
          experience.
        </Typography>
      </Box>

      <Box sx={infrastuctureStyles.headingButtonWrap}>
        <Button
          component="a"
          href="https://stripe.com/enterprise"
          endIcon={
            <Box sx={infrastuctureStyles.iconSwap}>
              <ChevronRightIcon sx={infrastuctureStyles.chevronIcon} />
              <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
            </Box>
          }
          sx={infrastuctureStyles.overlayButton}
        >
          Stripe for enterprises
        </Button>
      </Box>

      <Box sx={infrastuctureStyles.caseStudyList}>
        {caseStudies.map((study) => {
          const isActive = isCompact ? true : study.id === activeId;

          return (
            <Box key={study.id} sx={infrastuctureStyles.caseStudyItem}>
              <Box
                sx={infrastuctureStyles.caseStudyRow}
                onClick={() => handleToggle(study.id)}
              >
                <Box sx={infrastuctureStyles.caseStudyLeft}>
                  <Box
                    component="img"
                    src={study.logo}
                    alt={study.logoAlt}
                    sx={infrastuctureStyles.caseStudyLogo}
                  />
                  <Typography sx={infrastuctureStyles.caseStudyTitle}>
                    {study.title}
                  </Typography>
                </Box>

                {!isActive && (
                  <Button
                    aria-label={`Expand ${study.name} case study`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(study.id);
                    }}
                    sx={infrastuctureStyles.toggleButton}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                )}
              </Box>

              {isActive && (
                <Box sx={infrastuctureStyles.caseStudyContent}>
                  <Box
                    component="img"
                    src={study.image}
                    alt={study.imageAlt}
                    sx={infrastuctureStyles.caseImage}
                  />

                  <Box sx={infrastuctureStyles.statsRow}>
                    {study.stats.map((stat) => (
                      <Box key={stat.label} sx={infrastuctureStyles.statItem}>
                        <Typography
                          component="span"
                          sx={infrastuctureStyles.statValue}
                        >
                          {stat.value}
                        </Typography>{" "}
                        <Typography
                          component="span"
                          sx={infrastuctureStyles.statLabel}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                    <Box sx={infrastuctureStyles.statItem}>
                      <Typography
                        component="span"
                        sx={infrastuctureStyles.statValue}
                      >
                        Products used
                      </Typography>{" "}
                      <Typography
                        component="span"
                        sx={infrastuctureStyles.statLabel}
                      >
                        {study.products}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    component="a"
                    href={study.href}
                    onClick={(e) => e.stopPropagation()}
                    endIcon={
                      <Box sx={infrastuctureStyles.iconSwap}>
                        <ChevronRightIcon
                          sx={infrastuctureStyles.chevronIcon}
                        />
                        <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
                      </Box>
                    }
                    sx={infrastuctureStyles.caseStudyStoryButton}
                  >
                    Read the story
                  </Button>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      <Box sx={infrastuctureStyles.expertsSection}>
        <Typography variant="h5" sx={infrastuctureStyles.expertsHeading}>
          Realize value faster with dedicated experts
        </Typography>

        <Box sx={infrastuctureStyles.expertsGrid}>
          {expertFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Box key={feature.id} sx={infrastuctureStyles.expertColumn}>
                <Box sx={infrastuctureStyles.expertIconBox}>
                  <Icon sx={infrastuctureStyles.expertIcon} />
                </Box>

                <Typography sx={infrastuctureStyles.expertText}>
                  <Box component="span" sx={infrastuctureStyles.expertTitle}>
                    {feature.title}
                  </Box>{" "}
                  {feature.description}
                </Typography>

                <Button
                  component="a"
                  href={feature.href}
                  endIcon={
                    <Box sx={infrastuctureStyles.iconSwap}>
                      <ChevronRightIcon sx={infrastuctureStyles.chevronIcon} />
                      <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
                    </Box>
                  }
                  sx={infrastuctureStyles.expertLink}
                >
                  {feature.linkText}
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box sx={infrastuctureStyles.startupSection}>
        <Box sx={infrastuctureStyles.heading}>
          <Typography variant="h5">
            Build a foundation for your startup that enables faster growth
          </Typography>
        </Box>

        <Box sx={infrastuctureStyles.des}>
          <Typography>
            From stablecoin pioneers to 86% of the Forbes AI 50, Stripe helps
            startups build what's next on easy-to-integrate financial
            infrastructure.
          </Typography>
        </Box>

        <Box sx={infrastuctureStyles.headingButtonWrap}>
          <Button
            component="a"
            href="https://stripe.com/startups"
            endIcon={
              <Box sx={infrastuctureStyles.iconSwap}>
                <ChevronRightIcon sx={infrastuctureStyles.chevronIcon} />
                <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
              </Box>
            }
            sx={infrastuctureStyles.overlayButton}
          >
            Stripe for startups
          </Button>
        </Box>

        <Box sx={infrastuctureStyles.carouselNav}>
          <Button
            aria-label="Scroll startup showcase left"
            onClick={() => scrollCarousel("left")}
            sx={infrastuctureStyles.carouselNavButton}
          >
            <ArrowBackIcon fontSize="small" />
          </Button>
          <Button
            aria-label="Scroll startup showcase right"
            onClick={() => scrollCarousel("right")}
            sx={infrastuctureStyles.carouselNavButton}
          >
            <ArrowForwardIcon fontSize="small" />
          </Button>
        </Box>

        <Box ref={carouselRef} sx={infrastuctureStyles.carouselTrack}>
          {startupShowcase.map((card) => (
            <Box key={card.id} sx={infrastuctureStyles.carouselCardWrap}>
              <Box
                component="a"
                href={card.href}
                sx={infrastuctureStyles.carouselCard}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.imageAlt}
                  sx={infrastuctureStyles.carouselCardImage}
                />
              </Box>

              <Typography sx={infrastuctureStyles.carouselCaption}>
                {card.caption}
              </Typography>

              <Button
                component="a"
                href={card.href}
                endIcon={
                  <Box sx={infrastuctureStyles.iconSwap}>
                    <ChevronRightIcon sx={infrastuctureStyles.chevronIcon} />
                    <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
                  </Box>
                }
                sx={infrastuctureStyles.carouselLink}
              >
                {card.linkText}
              </Button>
            </Box>
          ))}
        </Box>

        <Box sx={infrastuctureStyles.promoGrid}>
          {promoCards.map((promo) => (
            <Box
              key={promo.id}
              sx={{
                ...infrastuctureStyles.promoCard,
                background: promo.gradient,
              }}
            >
              <Typography sx={infrastuctureStyles.promoText}>
                <Box component="span" sx={infrastuctureStyles.promoTitle}>
                  {promo.title}
                </Box>{" "}
                {promo.description}
              </Typography>

              <Button
                component="a"
                href={promo.href}
                endIcon={
                  <Box sx={infrastuctureStyles.iconSwap}>
                    <ChevronRightIcon sx={infrastuctureStyles.chevronIcon} />
                    <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
                  </Box>
                }
                sx={infrastuctureStyles.promoLink}
              >
                {promo.linkText}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={infrastuctureStyles.platformsSection}>
        <Box sx={infrastuctureStyles.heading}>
          <Typography variant="h5">
            Make your SaaS platform a complete financial operating system
          </Typography>
        </Box>

        <Box sx={infrastuctureStyles.des}>
          <Typography>
            From the Fortune 100 to the Forbes Cloud 100, vertical SaaS
            platforms use Stripe to expand their product offerings with embedded
            payments and financial services.
          </Typography>
        </Box>

        <Box sx={infrastuctureStyles.headingButtonWrap}>
          <Button
            component="a"
            href="https://stripe.com/use-cases/platforms"
            endIcon={
              <Box sx={infrastuctureStyles.iconSwap}>
                <ChevronRightIcon sx={infrastuctureStyles.chevronIcon} />
                <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
              </Box>
            }
            sx={infrastuctureStyles.overlayButton}
          >
            Stripe for platforms
          </Button>
        </Box>

        <Box sx={infrastuctureStyles.platformImageWrap}>
          <Box
            component="img"
            src={platformDashboardImage}
            alt="Stripe Connect dashboard showing account balance, payouts, financing offers, and a list of recent payments"
            sx={infrastuctureStyles.platformImage}
          />
        </Box>

        <Box sx={infrastuctureStyles.platformFeaturesWrap}>
          <Box sx={infrastuctureStyles.expertsGrid}>
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Box key={feature.id} sx={infrastuctureStyles.expertColumn}>
                  <Box sx={infrastuctureStyles.expertIconBox}>
                    <Icon sx={infrastuctureStyles.expertIcon} />
                  </Box>

                  <Typography sx={infrastuctureStyles.expertText}>
                    <Box component="span" sx={infrastuctureStyles.expertTitle}>
                      {feature.title}
                    </Box>{" "}
                    {feature.description}
                  </Typography>

                  <Button
                    component="a"
                    href={feature.href}
                    endIcon={
                      <Box sx={infrastuctureStyles.iconSwap}>
                        <ChevronRightIcon
                          sx={infrastuctureStyles.chevronIcon}
                        />
                        <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
                      </Box>
                    }
                    sx={infrastuctureStyles.expertLink}
                  >
                    Read the guide
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={infrastuctureStyles.testimonialWrap}>
          <Box sx={infrastuctureStyles.testimonialViewport}>
            <Box
              sx={{
                ...infrastuctureStyles.testimonialTrack,
                transform: {
                  xs: `translateX(calc(50% - ${(activeTestimonial + 0.5) * 85}%))`,
                  md: `translateX(-${activeTestimonial * 100}%)`,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Box
                  key={testimonial.id}
                  sx={{
                    ...infrastuctureStyles.testimonialSlide,
                    opacity: {
                      xs: activeTestimonial === index ? 1 : 0.8,
                      md: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={testimonial.avatar}
                    alt={testimonial.avatarAlt}
                    sx={infrastuctureStyles.testimonialAvatar}
                  />

                  <Typography sx={infrastuctureStyles.testimonialQuote}>
                    “{testimonial.quote}”
                  </Typography>

                  <Typography sx={infrastuctureStyles.testimonialByline}>
                    <Box
                      component="span"
                      sx={infrastuctureStyles.testimonialName}
                    >
                      {testimonial.name}
                    </Box>{" "}
                    {testimonial.title}
                  </Typography>

                  <Button
                    component="a"
                    href={testimonial.href}
                    endIcon={
                      <Box sx={infrastuctureStyles.iconSwap}>
                        <ChevronRightIcon
                          sx={infrastuctureStyles.chevronIcon}
                        />
                        <ArrowForwardIcon sx={infrastuctureStyles.arrowIcon} />
                      </Box>
                    }
                    sx={infrastuctureStyles.testimonialLink}
                  >
                    Read the story
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={infrastuctureStyles.testimonialTabs}>
            {testimonials.map((t, index) => (
              <Button
                key={t.id}
                onClick={() => setActiveTestimonial(index)}
                sx={{
                  ...infrastuctureStyles.testimonialTab,
                  ...(activeTestimonial === index
                    ? infrastuctureStyles.testimonialTabActive
                    : {}),
                }}
              >
                {t.logoText}
              </Button>
            ))}

            <Box
              sx={{
                ...infrastuctureStyles.testimonialIndicator,
                width: `${100 / testimonials.length}%`,
                transform: `translateX(${activeTestimonial * 100}%)`,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfrastructureSection;
