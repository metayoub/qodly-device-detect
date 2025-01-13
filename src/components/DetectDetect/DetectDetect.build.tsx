import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IDetectDetectProps } from './DetectDetect.config';

const DetectDetect: FC<IDetectDetectProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return <div ref={connect} style={style} className={cn(className, classNames)}></div>;
};

export default DetectDetect;
