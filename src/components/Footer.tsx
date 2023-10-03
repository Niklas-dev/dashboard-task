import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterSiteLink from "./FooterSiteLink";
import FooterLinkWrapper from "./FooterLinkWrapper";
import FooterSocialLink from "./FooterSocialLink";

export default function Footer() {
  return (
    <footer className="flex flex-col px-20 lg:px-36 pb-10 ">
      <div className="w-full h-[2px] bg-gray-300"></div>
      <div className="md:flex flex-row grid grid-cols-2 gap-6  justify-between mt-20">
        <div>
          <div className="bg-primaryRed h-12 w-12 rounded-md flex justify-center items-center text-3xl text-white font-bold">
            e.
          </div>
          <div className="flex flex-col mt-4 gap-2 text-lg font-normal ">
            <FooterSocialLink
              route="https://www.facebook.com/"
              name="Facebook"
              Icon={FaFacebook}
            />
            <FooterSocialLink
              route="https://twitter.com/"
              name="Twitter"
              Icon={FaTwitter}
            />
            <FooterSocialLink
              route="https://www.instagram.com/"
              name="Instagram"
              Icon={FaInstagram}
            />
            <FooterSocialLink
              route="https://www.youtube.com/"
              name="Youtube"
              Icon={FaYoutube}
            />
          </div>
        </div>

        <FooterLinkWrapper name="Home">
          <FooterSiteLink route="medical-assistant" name="Medical Assistant" />
        </FooterLinkWrapper>

        <FooterLinkWrapper name="Services">
          <FooterSiteLink route="photography" name="Photography" />
          <FooterSiteLink route="catering" name="Catering" />
          <FooterSiteLink route="henna" name="Henna" />
          <FooterSiteLink route="hairstyling" name="Hairstyling" />
        </FooterLinkWrapper>

        <FooterLinkWrapper name="Dashboard">
          <FooterSiteLink route="dashboard" name="Dashboard" />
          <FooterSiteLink route="dashboard/services/list" name="Service" />
          <FooterSiteLink route="dashboard/analytics" name="Analytics" />
          <FooterSiteLink route="wallet" name="Wallet" />
          <FooterSiteLink route="dashboard/profile" name="My Profile" />
          <FooterSiteLink route="dashboard/messages" name="My Messages" />
        </FooterLinkWrapper>

        <FooterLinkWrapper name="Policy">
          <FooterSiteLink route="terms" name="Terms & Conditions" />
          <FooterSiteLink route="privacy-policy" name="Privacy Policy" />
          <FooterSiteLink route="payment-policy" name="Payment Policy" />
          <FooterSiteLink route="booking-policy" name="Booking Policy" />
          <FooterSiteLink route="faq" name="FAQ" />
        </FooterLinkWrapper>
      </div>
    </footer>
  );
}
