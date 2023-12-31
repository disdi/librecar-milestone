import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/disdi/librecar-milestone/#readme">
    repo readme
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div>
    <P>
      <b>Milestone 1</b> - CAN Controller Bringup with Litex SOC. Integrate an
      existing open source CAN controller IP in FPGA and make it functional with
      required device drivers.
    </P>
    <P>
      <b>Milestone 2</b> - Enable Litex SOC running on FPGA to communicate on a
      real CAN Bus with external CAN master/slave devices over specifications of
      CANopen network..
    </P>
    <P>
      <b>Milestone 3</b> - Bringup a Litex based SOC with Ethernet Core.
    </P>
    <P>
      <b>Milestone 4</b> - Bringup the middleware, which can support automotive
      protocols like Diagnostics and Measuement & Calibration, based on standard
      automotive specifications.
    </P>
    <P>
      <b>Milestone 5</b> - Integrate LibreCar with Rest of Vehicle Bus of
      Opensource projects.
    </P>
  </div>
);
