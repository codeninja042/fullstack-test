import React from "react";
import type {ComponentMeta} from "@storybook/react";
import {Spinner as SpinnerComponent} from "./Spinner";

const SpinnerComponentMeta: ComponentMeta<typeof SpinnerComponent> = {
  title: "Spinner",
  component: SpinnerComponent,
  argTypes: {},
};

export default SpinnerComponentMeta;

export const spinner = () => <SpinnerComponent />;
