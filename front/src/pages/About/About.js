import Biography from "@screens/about/Biography/Biography";
import Childhood from "@screens/about/Childhood/Childhood";
import From2007To2009 from "@screens/about/From2007To2009/From2007To2009";
import From2011To2013 from "@screens/about/From2011To2013/From2011To2013";
import Year2014 from "@screens/about/Year2014/Year2014";
import Year2015 from "@screens/about/Year2015/Year2015";
import From2016To2017 from "@screens/about/From2016To2017/From2016To2017";
import From2017To2018 from "@screens/about/From2017To2018/From2017To2018";
import From2018ToPresent from "@screens/about/From2018ToPresent/From2018ToPresent";
import Family from "@screens/about/Family/Family";
import SupportOfUkraine from "@screens/about/SupportOfUkraine/SupportOfUkraine";

const About = () => (
  <main className="about-page">
    <Biography />
    <Childhood />
    <From2007To2009 />
    <From2011To2013 />
    <Year2014 />
    <Year2015 />
    <From2016To2017 />
    <From2017To2018 />
    <From2018ToPresent />
    <Family />
    <SupportOfUkraine />
  </main>
);

export default About;
