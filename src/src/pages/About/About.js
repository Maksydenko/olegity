import Biography from "@components/pages/about/Biography/Biography";
import Childhood from "@components/pages/about/Childhood/Childhood";
import From2007To2009 from "@components/pages/about/From2007To2009/From2007To2009";
import From2011To2013 from "@components/pages/about/From2011To2013/From2011To2013";
import Year2014 from "@components/pages/about/Year2014/Year2014";
import Year2015 from "@components/pages/about/Year2015/Year2015";
import From2016To2017 from "@components/pages/about/From2016To2017/From2016To2017";
import From2017To2018 from "@components/pages/about/From2017To2018/From2017To2018";
import From2018ToPresent from "@components/pages/about/From2018ToPresent/From2018ToPresent";
import Family from "@components/pages/about/Family/Family";
import SupportOfUkraine from "@components/pages/about/SupportOfUkraine/SupportOfUkraine";

function About() {
  return (
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
}

export default About;
