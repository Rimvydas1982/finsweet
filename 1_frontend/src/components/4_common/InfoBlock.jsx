import React from 'react';
import { StyledInfoBlock, InerBlock } from '../4_common/InfoBlock.style';
import Image1 from '../../images/Image 1.png';
import Image2 from '../../images/ovGrEUgrkyE.png';
import Button from './Button';

const InfoBlock = () => {
  return (
    <StyledInfoBlock>
      <div>
        <img src={Image1} alt='100' />
      </div>
      <InerBlock>
        <p>Getting in touch with us for your service related query</p>
        <Button title='Contact Us' secondary />
      </InerBlock>
      <div>
        <img src={Image2} alt='100' />
      </div>
    </StyledInfoBlock>
  );
};

export default InfoBlock;
