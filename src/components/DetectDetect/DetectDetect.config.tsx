import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdDevices } from 'react-icons/md';

import DetectDetectSettings, { BasicSettings } from './DetectDetect.settings';

export default {
  craft: {
    displayName: 'DetectDetect',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(DetectDetectSettings, BasicSettings),
    },
  },
  info: {
    settings: DetectDetectSettings,
    displayName: 'DetectDetect',
    exposed: true,
    icon: MdDevices,
    events: [],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {},
} as T4DComponentConfig<IDetectDetectProps>;

export interface IDetectDetectProps extends webforms.ComponentProps {
  mobilePage?: string;
  desktopPage?: string;
}
