import React from 'react';
import { Helmet } from 'react-helmet-async';
import OwnerBenifit from 'src/sections/owner/OwnerBenifit';
import OwnerIntro from 'src/sections/owner/OwnerIntro';
import OwnerQuestion from 'src/sections/owner/OwnerQuestion';
import OwnerRegister from 'src/sections/owner/OwnerRegister';
import OwnerSlide from 'src/sections/owner/OwnerSlide';

function OwnerPage() {
  return (
    <div>
      <Helmet>
        <title> Dành cho chủ sân | TheThaoPlus </title>
      </Helmet>

      <OwnerSlide />
      <OwnerRegister />
      <OwnerIntro />
      <OwnerBenifit />
      <OwnerQuestion />
    </div>
  );
}

export default OwnerPage;
