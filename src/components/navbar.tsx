import {
  RuxGlobalStatusBar,
  RuxIcon,
  RuxMenu,
  RuxMenuItem,
  RuxMenuItemDivider,
  RuxMonitoringIcon,
  RuxPopUp,
  RuxToastStack,
} from "@astrouxds/react";

import { config } from "../state";
import { useState } from "react";
import { addToast } from "../util";
import { Status } from "../types";

import './navbar.css'

type Props = {
  appName: string;
  appOrganization: string | undefined;
  appVersion: string | undefined;
  theme: "Light" | "Dark";
  status: {
    tx1: Status;
    tx2: Status;
    rx1: Status;
    rx2: Status;
    gps: Status;
  };
};

const Navbar = (props: Props) => {
  const [lightTheme, setLightTheme] = useState(props.theme === "Light");

  function menuSelect(e: CustomEvent) {
    const { detail } = e;
    if (detail.href) return;
    if (detail.value === "themeToggle") {
      setLightTheme(!lightTheme);
      document.body.classList.toggle("light-theme");
      return;
    }
    addToast("This feature has not been implemented", false, 3000);
  }

  return (
    <>
      <RuxGlobalStatusBar
        appDomain={props.appOrganization ?? config.organization}
        appName={props.appName}
        appVersion={props.appVersion ?? config.version}
      >
        <RuxPopUp
          className="app-icon-pop-up"
          placement="top-start"
          slot="left-side"
          closeOnSelect
        >
          <RuxIcon
            className="app-switcher-icon"
            slot="trigger"
            size="small"
            icon="apps"
          />
          <RuxMenu onRuxmenuselected={(e) => menuSelect(e)}>
            <RuxMenuItem href="https://ttc-command-react.netlify.app/">
              TTC Command & Investigate
            </RuxMenuItem>
            <RuxMenuItem href="#">TTC Monitor</RuxMenuItem>
            <RuxMenuItemDivider />
            <RuxMenuItem value="themeToggle">
              {lightTheme ? "Dark" : "Light"} Theme
            </RuxMenuItem>
          </RuxMenu>
        </RuxPopUp>
        {/* <RuxClock /> */}
          <div className="status-indicators" slot="right-side">
            <RuxMonitoringIcon
              status={props.status.tx1}
              icon="show-chart"
              label="TX 1"
              notifications={0}
              slot="trigger"
            ></RuxMonitoringIcon>

            <RuxMonitoringIcon
              status={props.status.tx2}
              icon="show-chart"
              label="TX 2"
              notifications={0}
              slot="trigger"
            />
            <RuxMonitoringIcon
              status={props.status.rx1}
              icon="antenna-receive"
              label="RX 1"
              notifications={0}
              slot="trigger"
            />
            <RuxMonitoringIcon
              status={props.status.rx2}
              icon="antenna-receive"
              label="RX 2"
              notifications={0}
              slot="trigger"
            />
            <RuxMonitoringIcon
              status={props.status.gps}
              icon="gps-fixed"
              label="GPS"
              notifications={0}
              slot="trigger"
            />
          </div>
      </RuxGlobalStatusBar>
      <RuxToastStack />
    </>
  );
};

export default Navbar;
