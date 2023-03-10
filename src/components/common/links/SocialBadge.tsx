import {FB, Twitter, Youtube, Linkedin} from "~/assets/images/svg";
import {SocialLink, SocialWrap} from './'

export default function SocialBadge() {
  return (
    <SocialWrap>
      <SocialLink><FB/></SocialLink>
      <SocialLink><Twitter/></SocialLink>
      <SocialLink><Youtube/></SocialLink>
      <SocialLink><Linkedin/></SocialLink>
    </SocialWrap>
  )
}
