import React from 'react';

import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadir secara virtual melalui siaran langsung instagram: </p>
        <a href="https://www.instagram.com/mipan.smanega/" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Live IG" />
              <span>@mipan.smanega</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
