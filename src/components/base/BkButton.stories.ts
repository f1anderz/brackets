import '@/components/base/BkButton.vue';
import BkButton from '@/components/base/BkButton.vue';

export default {
  title: 'components/Base/BkButton',
  component: BkButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'outline'],
      },
    },
  },
};

const Template = (args: Object) => ({
  components: BkButton,
  setup() {
    return { args };
  },
  template: '<BkButton v-bind="args">{{ args.contentKey }}</BkButton>',
});

export const Primary = {
  args: {
    contentKey: 'create',
  },
};

export const Outline = {
  args: {
    type: 'outline',
    contentKey: 'page_not_found.back_to_homepage',
  },
};
