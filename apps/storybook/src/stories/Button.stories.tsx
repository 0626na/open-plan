import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button"; // ✅ UI 패키지에서 가져옴

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "다음",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "다음",
  },
};
