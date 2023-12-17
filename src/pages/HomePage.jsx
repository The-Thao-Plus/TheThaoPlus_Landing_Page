import { Helmet } from 'react-helmet-async';
import HomeBenifit from 'src/sections/home/HomeBenifit';
import HomeGalary from 'src/sections/home/HomeGalary';
import HomeIntro from 'src/sections/home/HomeIntro';
import HomeReview from 'src/sections/home/HomeReview';
import HomeUtitlities from 'src/sections/home/HomeUtitlities';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title> Trang chủ | TheThaoPlus </title>
      </Helmet>

      <HomeIntro />
      <HomeUtitlities />
      <HomeBenifit />
      <HomeGalary />
      <HomeReview />
    </div>
  );
}

export default HomePage;
