import type { Meta, StoryObj } from "@storybook/react";
import MonaLisa from "./assets/mona_lisa.jpg";

import { Gallery } from "./gallery";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Gallery/ImageCard",
  component: Gallery,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    date: { control: "text" },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    date: "c. 1503 to 1506",
    medium: "Oil on poplar panel",
    dark: false,
  },
};
