import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';
import { DesignerRequestVerb, FolderRootType } from '@ws-ui/shared';
import { sortBy as _sortBy } from 'lodash';
import { getFolder } from '@ws-ui/shared';

const commonSettings: TSetting[] = [
  {
    key: 'mobilePage',
    label: 'Mobile Page',
    type: ESetting.ASYNC_SELECT,
    placeholder: 'select a Page',
    loadOptions: function (name: string) {
      async function fetchValues(inputValue: string) {
        const webforms = await getFolder({
          root: FolderRootType.WEBFORMS,
          verb: DesignerRequestVerb.GET_FOLDER,
        });

        const options = webforms.children
          .map(({ name }) => ({
            label: name,
            value: name,
          }))
          .filter((s) => s.label !== name)
          .filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

        return _sortBy(options, [({ label }) => label?.toLowerCase()]);
      }

      return fetchValues;
    },
  },
  {
    key: 'desktopPage',
    label: 'Desktop Page',
    type: ESetting.ASYNC_SELECT,
    placeholder: 'select a Page',
    loadOptions: function (name: string) {
      async function fetchValues(inputValue: string) {
        const webforms = await getFolder({
          root: FolderRootType.WEBFORMS,
          verb: DesignerRequestVerb.GET_FOLDER,
        });

        const options = webforms.children
          .map(({ name }) => ({
            label: name,
            value: name,
          }))
          .filter((s) => s.label !== name)
          .filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

        return _sortBy(options, [({ label }) => label?.toLowerCase()]);
      }

      return fetchValues;
    },
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS.filter((s) => s.key !== 'style'),
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
