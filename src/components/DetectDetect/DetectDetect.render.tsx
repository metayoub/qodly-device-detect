import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IDetectDetectProps } from './DetectDetect.config';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    setIsMobile(mobile);
  }, []);
  return isMobile;
};

const DetectDetect: FC<IDetectDetectProps> = ({
  mobilePage,
  desktopPage,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const isMobile = useDeviceType();

  const {
    sources: { datasource: ds },
  } = useSources();

  const setDatasource = async () => {
    if (!ds) return;
    ds?.setValue(null, isMobile ? mobilePage || 'mobile' : desktopPage || 'desktop');
  };

  useEffect(() => {
    if (!ds) return;
    setDatasource();
  }, [ds, isMobile]);

  return <div ref={connect} style={style} className={cn(className, classNames)}></div>;
};

export default DetectDetect;
