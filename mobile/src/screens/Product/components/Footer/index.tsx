import { ReactElement } from "react";

import { FooterMode } from "@screens/Product/constants";
import { EditModeFooter } from "./components/EditModeFooter";
import { PreviewModeFooter } from "./components/PreviewModeFooter";
import { RegularFooter } from "./components/RegularFooter";

type FooterProps = {
  mode: FooterMode;
  isProductActive?: boolean;
};

export const Footer = ({
  mode = FooterMode.DEFAULT,
  isProductActive = true,
}: FooterProps): ReactElement => {
  switch (mode) {
    case FooterMode.PREVIEW:
      return <PreviewModeFooter />;
    case FooterMode.EDIT:
      return <EditModeFooter isProductActive={isProductActive} />;
    default:
      return <RegularFooter />;
  }
};
