import config, { IDetectDetectProps } from './DetectDetect.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './DetectDetect.build';
import Render from './DetectDetect.render';

const DetectDetect: T4DComponent<IDetectDetectProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

DetectDetect.craft = config.craft;
DetectDetect.info = config.info;
DetectDetect.defaultProps = config.defaultProps;

export default DetectDetect;
