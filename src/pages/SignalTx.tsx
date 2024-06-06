import { RuxContainer, RuxSegmentedButton } from '@astrouxds/react';
import { formConstraints } from '../state';

export function SignalTx() {

  return (
    <>
      <div style={{ height: "50vh" }}>
        <RuxContainer className="transmittable-signals">
          <div slot="header" className="header">
            Transmittable Signals
            <RuxSegmentedButton
              style={{ marginLeft: "auto" }}
              data={[{ label: "TX 1" }, { label: "TX 2" }]}
              onRuxchange={() => console.log("hi")}
            ></RuxSegmentedButton>
          </div>
          <RuxSegmentedButton></RuxSegmentedButton>
        </RuxContainer>

        <form>
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              min={formConstraints.name.min}
              max={formConstraints.name.max}
              placeholder="Signal Name"
            />
          </div>
          <div>
            <label htmlFor="name">Symbol Rate</label>
            <input
              type="text"
              name="name"
              min={formConstraints.name.min}
              max={formConstraints.name.max}
              placeholder="Signal Name"
            />
          </div>
        </form>
      </div>
    </>
  );
}