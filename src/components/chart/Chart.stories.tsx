import React from "react";
import {ComponentMeta} from "@storybook/react";
import {Chart as ChartComponent, ChartProps} from "./Chart";

export default {
  title: "Chart",
  component: ChartComponent,
  argTypes: {
    labels: {
      control: {
        type: "object",
      },
      defaultValue: ["a", "b", "c", "d", "e", "f", "g"],
    },
    data: {
      control: {
        type: "object",
      },
      defaultValue: [124, 12, 90, 85, 74, 90, 150],
    },
    title: {
      control: {
        type: "text",
      },
      defaultValue: "Title",
    },
  },
} as ComponentMeta<typeof ChartComponent>;

export const chart = (args: ChartProps) => <ChartComponent {...args} />;
