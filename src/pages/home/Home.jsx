import React from 'react';
import backGround from '../../assets/images/background.png';
import cloudBack from '../../assets/images/cloud-back.png';
import cloudExtended from '../../assets/images/cloud-extended.png';
import cloudF1 from '../../assets/images/cloud-f1.png';
import cloudF2 from '../../assets/images/cloud-f2.png';
import cloudHead from '../../assets/images/cloud-head.png';
import cloudShoulder from '../../assets/images/cloud-shoulder.png';
import footer from '../../assets/images/footer.png';
import heartCaster from '../../assets/images/heart-caster.png';
// import heartFront from '../../assets/images/heart-front.png';
import heartFront from '../../assets/images/heart-front2.png';
import heartHead from '../../assets/images/heart-head.png';
import heartZack from '../../assets/images/heart-zack.png';
import kite from '../../assets/images/kite.png';
import plane from '../../assets/images/plane.png';
import puzzle from '../../assets/images/puzzle.png';
import start1 from '../../assets/images/star-1.png';
import start2 from '../../assets/images/star-2.png';
import textHello from '../../assets/images/hello.png';
import textZack from '../../assets/images/zack.png';
import textCaster from '../../assets/images/caster.png';
import textParagraph from '../../assets/images/paragraph.png';
import zackPic from '../../assets/images/zack-pic.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// import '../../sass/index.scss';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      {/* <Parallax pages={2} className='container'> */}
      <Parallax pages={2} className='container'>

        <ParallaxLayer
          speed={0.01}
          style={{
            backgroundImage: `url(${backGround})`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer speed={0.18}>
          <img src={cloudShoulder} className='cloud-shoulder' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.03}>
          <img src={cloudHead} className='cloud-head' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.15}>
          <img src={cloudBack} alt="" className='cloud-back' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.2}>
          <img src={kite} className='kite' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.1}>
          <img src={start1} className='star-1' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.3}>
          <img src={start2} className='star-2' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.3}>
          <img src={puzzle} className='puzzle' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.28}>
          <img src={plane} className='plane' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.3}>
          <img src={textHello} className='hello' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.1}>
          <img src={zackPic} className='zack-pic' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.4}>
          <img src={textCaster} className='text-caster' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.35}>
          <img src={textZack} className='text-zack' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.42}>
          <img src={textParagraph} className='text-paragraph' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.5}>
          <img src={heartZack} className='heart-zack' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.8}>
          <img src={heartCaster} className='heart-caster' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.7}>
          <img src={cloudF2} className='cloud-f2' />
        </ParallaxLayer>

        {/* <ParallaxLayer speed={1}>
          <img src={cloudF1} alt="" className='cloud-f1' />
        </ParallaxLayer> */}

        <ParallaxLayer speed={1}>
          <img src={cloudExtended} alt="" className='cloud-f1' />
        </ParallaxLayer>

        <ParallaxLayer speed={0.2}>
          <img src={heartHead} className='heart-head' />
        </ParallaxLayer>

        {/* <ParallaxLayer speed={1}>
          <div className='cloud-extension'></div>
        </ParallaxLayer> */}

        <ParallaxLayer speed={1.6}>
          <img src={heartFront} className='heart-front' />
        </ParallaxLayer>

        {/* <ParallaxLayer speed={1.6} offset={1}>
          <h1 className='try'>SEE YOU</h1>
        </ParallaxLayer> */}

      </Parallax>




    </div>
  )
}

export default Home