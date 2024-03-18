import { ChannelBox, ChannelLogo } from "planby";

export const ChannelItem = ({ channel }) => {
  const { position, logo } = channel;
  return (
    <ChannelBox {...position}>
      {/* Overwrite styles by add eg. style={{ maxHeight: 52, maxWidth: 52,... }} */}
      {/* Or stay with default styles */}
      <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 52, maxWidth: 52 }}
      />
    </ChannelBox>
  );
};
