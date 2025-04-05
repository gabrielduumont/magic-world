import { Characters } from "./TabContents/Characters";
import { Staff } from "./TabContents/Staff";
import { Students } from "./TabContents/Students";

export const TABS = {
  CHARACTERS: {
    value: "characters",
    label: "All Characters",
    content: <Characters />,
  },
  STUDENTS: {
    value: "students",
    label: "All Students",
    content: <Students />,
  },
  STAFF: {
    value: "staff",
    label: "All Staff",
    content: <Staff />,
  },
} as const;
