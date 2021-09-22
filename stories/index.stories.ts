import { html, TemplateResult } from 'lit';
import '../src/my-web-component.js';

export default {
  title: 'MyWebComponent',
  component: 'my-web-component',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
    counterIncrease: { action: 'counter-increase', table: { disable: true }  },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  counter?: number;
  textColor?: string;
  counterIncrease: any;
}

const Template: Story<ArgTypes> = ({
  title = 'Hello world',
  counter = 5,
  textColor,
  counterIncrease,
}: ArgTypes) => html`
  <my-web-component
    style="--my-web-component-text-color: ${textColor || 'black'}"
    .title=${title}
    .counter=${counter}
    @counter-increase="${counterIncrease}"
  >
  </my-web-component>
`;

export const Regular = Template.bind({});
