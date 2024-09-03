import styled from "styled-components";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";

const socialLinks = [
  {
    title: "Facebook",
    url: "#",
    icon: FacebookIcon,
  },
  {
    title: "Instagram",
    url: "#",
    icon: InstagramIcon,
  },
  {
    title: "Twitter",
    url: "#",
    icon: TwitterIcon,
  },
];

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  height: 2rem;
  margin-bottom: auto;

  a {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover svg {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  svg path {
    fill: var(--white);
  }
`;

const SocialLinks = () => {
  return (
    <>
      <StyledSocialLinks>
        {socialLinks.map((link) => (
          <a href={link.url} key={link.title}>
            <link.icon />
          </a>
        ))}
      </StyledSocialLinks>
    </>
  );
};

export default SocialLinks;
