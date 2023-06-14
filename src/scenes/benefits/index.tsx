import HText from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tincidunt elit ut imperdiet varius. Duis sit amet felis nec dolor
            tincidunt tempor. Vestibulum consectetur urna sed mi venenatis,
            tempor mattis sapien aliquam.
          </p>
        </div>

        {/* Benefits */}
      </motion.div>
    </section>
  );
};

export default Benefits;
