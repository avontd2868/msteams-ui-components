class ButtonExample extends React.Component {
  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: { ...sizes.title, ...weights.semibold },
        section: { ...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4) },
        button: {marginRight: rem(0.5) }
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Buttons</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}>Primary</div>
          <PrimaryButton
            autoFocus
            style={styles.button}>Enabled</PrimaryButton>
          <PrimaryButton
            style={styles.button}
            disabled>Disabled</PrimaryButton>
          <div style={styles.section}>Secondary</div>
          <SecondaryButton
            style={styles.button}>Enabled</SecondaryButton>
          <SecondaryButton
            style={styles.button}
            disabled>Disabled</SecondaryButton>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
