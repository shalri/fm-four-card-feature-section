import SupervisorIcon from "../images/icon-supervisor.svg";
import TeamBuilderIcon from "../images/icon-team-builder.svg";
import KarmaIcon from "../images/icon-karma.svg";
import CalculatorIcon from "../images/icon-calculator.svg";

export const features = [
  {
    name: "Supervisor",
    desc: "Monitors activity to identify project roadblocks",
    icon: SupervisorIcon,
    style: "border-ffs-cyan",
    id: "0",
  },
  {
    name: "Team Builder",
    desc: "Scans our talent network to create the optimal team for your project",
    icon: TeamBuilderIcon,
    style: "border-ffs-red",
    id: "1",
  },
  {
    name: "Karma",
    desc: "Regularly evaluates our talent to ensure quality",
    icon: KarmaIcon,
    style: "border-ffs-orange",
    id: "2",
  },
  {
    name: "Calculator",
    desc: "Uses data from past projects to provide better delivery",
    icon: CalculatorIcon,
    style: "border-ffs-blue",
    id: "3",
  },
];
