import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div>
    <P>
      CAN Controller Bringup with Litex SOC The task’s aim is to bringup a Litex
      based SOC with a CAN controller. The effort involved in the scope of this
      task is to integrate an existing open source CAN controller IP in FPGA and
      make it functional with required device drivers.
    </P>
    <P>
      CAN core IP based on an MIT-licensed variant of the CTU CAN FD Controller
      developed by the Czech Technical University in Prague.
    </P>
    <P>
      RISC-V softcore based on LiteX, a Python-based System on a Chip (SoC)
      designer for open source supported Field Programmable Gate Array (FPGA).
    </P>
    <P>
      Device Driver based on SocketCAN, a standard common interface for CAN
      devices in the Linux kernel.
    </P>
  </div>
);
