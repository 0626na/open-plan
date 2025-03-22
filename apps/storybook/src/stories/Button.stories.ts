import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button"; // ✅ UI 패키지에서 가져옴

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Next: Story = {
  args: {
    children: "다음",
  },
};

export const Before: Story = {
  args: {
    children: "이전",
  },
};
