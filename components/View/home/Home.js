import Image from "next/image";
import React from "react";
import Button from "../../constants/buttons/Buttons";
import { COLORS } from "../../constants/colors";
import { Container } from "../../constants/content/Containers";
import { HomeStyle } from "../../styles/home";
const Home = () => {
  return (
    <>
      <HomeStyle>
        <div className="fullContainer">
          <Container>
            <nav className="topMenuContainer">
              <div className="topMenuLogo">
                <Image
                  src={"/logo.png"}
                  width={150}
                  height={30}
                  layout="fixed"
                />
              </div>
              <div className="topMenuCategory">
                <ul>
                  <li>
                    <a>Products</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Portfoilo</a>
                  </li>
                  <li>
                    <a>Blogs</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
                <Button
                  text="Let's Talk"
                  back={COLORS.BTN_BACKGROUND_SKY}
                  color={COLORS.COLOR_WHITE}
                />
              </div>
            </nav>
            <header className="header">
              <div className="textHeader">
                <h1>
                  We Are Trusted By World Building Future With Tech, Gear &
                  Software.
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the
                </p>
                <Button
                  color={COLORS.COLOR_WHITE}
                  text="Get Started"
                  back={COLORS.BTN_BACKGROUND_SKY}
                />
              </div>
              <div className="bannerHeader">
                <div className="bannerPhoto">
                  <img src="/assets/home-3.jpg" />
                </div>
              </div>
            </header>
          </Container>
        </div>
      </HomeStyle>
    </>
  );
};

export default Home;