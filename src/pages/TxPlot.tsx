import { RuxContainer, RuxSegmentedButton } from '@astrouxds/react';

export default function TXPlot() {
  return (
    <>
      <div style={{ height: "50vh" }}>
        <RuxContainer className="transmittable-signals">
          <div slot="header" className="header">
            PSD Plot View
            <RuxSegmentedButton
              style={{ marginLeft: "auto" }}
              data={[{ label: "Single" }, { label: "MultiView" }]}
              onRuxchange={() => console.log("hi")}
            ></RuxSegmentedButton>
          </div>
          <RuxSegmentedButton></RuxSegmentedButton>
        </RuxContainer>
      </div>
    </>
  );
}