import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    className: {
      defaultValue: "primary",
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    type: {
      defaultValue: "text",
      options: [
        "text",
        "email",
        "tel",
        "number",
        "date",
        "date",
        "color",
        "file",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  type: "text",
  className: "primary",
  placeholder: "pri",
  name: "name",
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: "text",
  className: "secondary",
  placeholder: "sec",
  name: "email",
};
